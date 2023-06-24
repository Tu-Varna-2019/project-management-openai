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

    openai.api_key = os.environ.get("OPENAI_API_KEY")  # get_secret()
    payload_serialize = json.loads(json.loads(event["body"]))
    logger.info(f"User input: {payload_serialize['event']}")
    # Chat GPT API
    openai_chat_complete = openai.ChatCompletion.create(
        model=os.environ.get("MODEL"),
        messages=[{"role": "user", "content": payload_serialize["event"]}],
    )
    logger.info(
        f"openAI response: {openai_chat_complete['choices'][0]['message']['content']}"
    )

    return {
        "statusCode": 200,
        "body": json.dumps(openai_chat_complete["choices"][0]["message"]["content"]),
        "headers": {
            "Content-Type": "application/JSON",
            "Access-Control-Allow-Origin": "*",
        },
    }
    # Assistant reploy response[‘choices’][0][‘message’][‘content’].

    # GPT 3
    # response = openai.Completion.create(
    #    model=os.environ.get("MODEL"),
    #    prompt=event["description"],
    #    temperature=0,
    #    max_tokens=1024
    #    )
    # print(response)
