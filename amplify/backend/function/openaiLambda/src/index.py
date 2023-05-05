import json
import os
import openai
import boto3
from botocore.exceptions import ClientError


# Use this code snippet in your app.
# If you need more information about configurations
# or implementing the sample code, visit the AWS docs:
# https://aws.amazon.com/developer/language/python/


# Your code goes here.
def get_secret():
    secret_name = os.environ.get("SECRET_NAME")  # "openai_api_key"
    region_name = os.environ.get("REGION_NAME")  # "eu-west-1"

    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(service_name="secretsmanager", region_name=region_name)
    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
        openai_api_key = json.loads(get_secret_value_response["SecretString"])
        return openai_api_key["OPENAI_API_KEY"]
    except ClientError as e:
        # For a list of exceptions thrown, see
        # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        raise e
    # Decrypts secret using the associated KMS key.
    # secret = get_secret_value_response['SecretString']


def handler(event, context):
    print(event, event["body"])
    # GPT 3
    # Load your API key from an environment variable or secret management service
    openai.api_key = get_secret()
    # response = openai.Completion.create(
    #    model=os.environ.get("MODEL"),
    #    prompt=event["description"],
    #    temperature=0,
    #    max_tokens=1024
    #    )
    # print(response)
    payload_serialize = json.loads(json.loads(event["body"]))
    print(f"User input: {payload_serialize['event']}")
    # Chat GPT API
    openai_chat_complete = openai.ChatCompletion.create(
        model=os.environ.get("MODEL"),
        messages=[{"role": "user", "content": payload_serialize["event"]}],
    )
    print(
        f"openAI response: {openai_chat_complete['choices'][0]['message']['content']}"
    )
    # response = {
    #     "statusCode": 200,
    #     "headers": {"Content-Type": "application/json"},
    #     "body": json.dumps(
    #         {"message": openai_chat_complete["choices"][0]["message"]["content"]}
    #     ),
    # }
    # return response
    return {
        "statusCode": 200,
        "body": json.dumps(openai_chat_complete["choices"][0]["message"]["content"]),
        "headers": {
            "Content-Type": "application/JSON",
            "Access-Control-Allow-Origin": "*",
        },
    }
    # Assistant reploy response[‘choices’][0][‘message’][‘content’].
