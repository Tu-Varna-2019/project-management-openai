import json
import os
import boto3
from botocore.exceptions import ClientError
import pytz
from datetime import datetime, timezone
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


def handler(event, context):
    logger.info(event)
    payload_serialize = json.loads(json.loads(event["body"]))
    logger.info(f"User input: {payload_serialize['event']}")

    sub = payload_serialize["event"]["sub"]
    send_note_threshold_table_name = os.environ.get("SEND_NOTE_THRESHOLD_TABLE_NAME")
    send_note_attribute_date_name = os.environ.get("SEND_NOTE_ATTRIBUTE_DATE_NAME")

    receipt_email = payload_serialize["event"]["receipt_email"]
    sender_email = os.environ.get("SENDER_EMAIL")
    subject = f"{receipt_email} shared with you a note"
    message = f"""
        Title: {payload_serialize['event']['Title']}\n
        ----------------------------------------------\n
        Description: {payload_serialize['event']['Description']}\n
        ----------------------------------------------\n
        Priority: {payload_serialize['event']['Priority']}\n
        ----------------------------------------------\n
        Reminder: {payload_serialize['event']['Reminder']}\n
        ----------------------------------------------\n
        """
    response = ""
    # set flag to programatically block
    # sending the note for less than 5 mins
    send_note_flag = True

    # Get current time for Sofia
    local_tz = pytz.timezone("Europe/Sofia")
    current_time = datetime.now(local_tz)

    client_ses = boto3.client("ses")
    response_get_verify_email = client_ses.get_identity_verification_attributes(
        Identities=[receipt_email]
    )
    logger.info(f"Get verified email identity: {response_get_verify_email}")

    if not response_get_verify_email["VerificationAttributes"]:
        response_verify_ses = client_ses.verify_email_address(
            EmailAddress=receipt_email
        )
        logger.info(f"Email verification sent response: {response_verify_ses}")
        response = (
            f"Email needs verification! Message sent to: {receipt_email} to confirm"
        )
    else:
        email_status = response_get_verify_email["VerificationAttributes"][
            receipt_email
        ]["VerificationStatus"]
        if email_status == "Success":
            client = boto3.client("dynamodb")
            try:
                # Checks for existing item
                response_query_item = client.get_item(
                    TableName=send_note_threshold_table_name,
                    Key={
                        "pkey": {
                            "S": sub,
                        },
                        "skey": {
                            "S": sub,
                        },
                    },
                    AttributesToGet=[
                        send_note_attribute_date_name,
                    ],
                )
                retrieved_time = response_query_item["Item"]["dateTimeThrottle"]["S"]
                logger.info(
                    f"Item already exist for : {sub}. Let's compare instead: {response_query_item}"
                )
                # Compare the current date and the retrieved one for 5 mins threshold
                retrieved_time = datetime.strptime(
                    retrieved_time[:-6], "%Y-%m-%d %H:%M:%S.%f"
                ).replace(tzinfo=pytz.FixedOffset(180))
                time_difference = (current_time - retrieved_time).total_seconds() // 60
                logger.info(f"Time difference: {time_difference}")
                # Check if time difference is less than 5 minutes :
                # 1. If true , don't send & inform user
                if time_difference < 6:
                    response = "You cannot send a message every 5 minutes!"
                    logger.info(response)
                    send_note_flag = False
            # 2. If false , update item & send message
            except:
                logger.info(f"Item doesn't exist for {sub} .Let's add it!")
                pass
            # Check if minute difference is NOT less than 5 mins
            if send_note_flag:
                response_put_item_db = client.put_item(
                    TableName="ShareNoteThrottle",
                    Item={
                        "pkey": {"S": sub},
                        "skey": {"S": sub},
                        "dateTimeThrottle": {"S": str(current_time)},
                    },
                )
                logger.info(
                    f"Updated/created item with date: {current_time} for {sub} \
                    \nresponse: {response_put_item_db} "
                )

                response_ses = client_ses.send_email(
                    Source=sender_email,
                    Destination={"ToAddresses": [receipt_email]},
                    Message={
                        "Subject": {
                            "Data": subject,
                        },
                        "Body": {"Text": {"Data": message}},
                    },
                    ReplyToAddresses=[sender_email],
                )
                logger.info(f"Status: Success , note sent: {response_ses}")
                response = f"Email verified! Note sent to {receipt_email}"
        else:
            logger.info(f"Email is in {email_status} state!")
            pending_state = (
                f"The user {receipt_email} needs to confirm the message!"
                if email_status == "Pending"
                else "Sorry for the inconvenience!"
            )
            response = f"Email is in {email_status}! {pending_state}"

    return {
        "statusCode": 200,
        "body": json.dumps(response),
        "headers": {
            "Content-Type": "application/JSON",
            "Access-Control-Allow-Origin": "*",
        },
    }
