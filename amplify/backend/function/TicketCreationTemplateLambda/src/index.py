import json
import os
import openai
import boto3
import logging
from botocore.exceptions import ClientError

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

ALLOWED_ISSUE_TYPES = ["Task", "UserStory", "Feature", "Bug", "Subtask", "Epic"]


def handler(event, context):
    print(event, event["body"])

    client_ssm_param_store = boto3.client("ssm")
    response_openai_apikey = client_ssm_param_store.get_parameter(
        Name=os.environ.get("PARAM_OPENAI_APIKEY"), WithDecryption=False
    )

    openai_apikey = response_openai_apikey["Parameter"]["Value"]

    openai.api_key = openai_apikey
    response: str = ""
    payload_serialize = json.loads(json.loads(event["body"]))
    issue_type: str = payload_serialize["event"]["IssueType"]
    ticket_fields: str = payload_serialize["event"]["TicketFields"]
    # Explicitly ask for a JSON format to ChatGPT
    ticket_request: str = f"""
    I want you to create a {issue_type} Jira template for the following fields : {ticket_fields} . Structure the answer by JSON format - keys by fields and values by actual content of the template

    Example response: 
    {{
        'Title': <issue template title>
        'Description': <issue template description>
        'Comment': <issue template comment>
    }}
    """
    logger.info(f"User input: {payload_serialize['event']}")

    if issue_type not in ALLOWED_ISSUE_TYPES:
        response = "Error! , invalid issue type !"
    else:
        # Chat GPT API
        openai_chat_complete = openai.ChatCompletion.create(
            model=os.environ.get("MODEL"),
            messages=[{"role": "user", "content": ticket_request}],
        )
        response = json.dumps(openai_chat_complete["choices"][0]["message"]["content"])
        logger.info(f"openAI response: {response}")

    return {
        "statusCode": 200,
        "body": response,
        "headers": {
            "Content-Type": "application/JSON",
            "Access-Control-Allow-Origin": "*",
        },
    }
