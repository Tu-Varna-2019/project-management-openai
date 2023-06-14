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
    logger.info(event, event["body"])

    openai.api_key = os.environ.get("OPENAI_API_KEY")
    response: str = ""
    payload_serialize = json.loads(json.loads(event["body"]))
    issue_type: str = payload_serialize["event"]["IssueType"]
    ticket_fields: str = payload_serialize["event"]["TicketFields"]
    ticket_request: str = f" Create a {issue_type} issue template in Jira ticket for the following fields : {ticket_fields}"
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
