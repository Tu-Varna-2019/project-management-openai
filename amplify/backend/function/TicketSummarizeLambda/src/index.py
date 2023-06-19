import json
import os
import openai
import boto3
import logging
from botocore.exceptions import ClientError

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


def handler(event, context):
    print(event, event["body"])

    openai.api_key = os.environ.get("OPENAI_API_KEY")
    response: str = ""
    payload_serialize = json.loads(json.loads(event["body"]))
    ticket_fields: str = payload_serialize["event"]["TicketFields"]
    title: str = payload_serialize["event"]["Title"]
    description: str = payload_serialize["event"]["Description"]
    comment: str = payload_serialize["event"]["Comment"]
    # Explicitly ask for a JSON format to ChatGPT
    ticket_request: str = f"""
     I want you to summarize the following text . Structure the answer by JSON format - keys by fields {ticket_fields} and values by actual summarized text .
     - Title : {title}
     - Description : {description}
     - Comment : {comment}

    Example response: 
    {{
        'Title': <summarized title>
        'Description': <summarized description>
        'Comment': <summarized comment>
    }}
    """
    logger.info(f"User input: {payload_serialize['event']}")

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
