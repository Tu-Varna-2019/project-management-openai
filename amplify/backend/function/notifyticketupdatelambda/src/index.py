import json
import json
import os
import boto3
from botocore.exceptions import ClientError
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


def handler(event, context):
    logger.info(event)
    payload_serialize = json.loads(json.loads(event["body"]))
    logger.info(f"User input: {payload_serialize['event']}")

    changed_props: str = payload_serialize["event"]["Changes"]
    title: str = payload_serialize["event"]["newTicket"]["Title"]
    description: str = payload_serialize["event"]["newTicket"]["Description"]
    priority: str = payload_serialize["event"]["newTicket"]["Priority"]
    ticketID: str = payload_serialize["event"]["newTicket"]["TicketID"]
    storyPoint: str = payload_serialize["event"]["newTicket"]["StoryPoint"]
    reporterName: str = payload_serialize["event"]["newTicket"]["Reporter"]
    asigneeName: str = payload_serialize["event"]["newTicket"]["Asignee"]
    epicLink: str = payload_serialize["event"]["newTicket"]["EpicLink"]
    newTicketCreatedDate: str = payload_serialize["event"]["newTicket"]["CreatedDate"]
    newTicketUpdatedDate: str = payload_serialize["event"]["newTicket"]["UpdatedDate"]
    resolved_date: str = payload_serialize["event"]["newTicket"]["ResolvedDate"]
    issueType: str = payload_serialize["event"]["newTicket"]["IssueType"]
    ticketStatus: str = payload_serialize["event"]["newTicket"]["TicketStatus"]
    comment: str = payload_serialize["event"]["newTicket"]["Comment"]
    watchUsers: str = payload_serialize["event"]["newTicket"]["Watch"]

    client_ssm_param_store = boto3.client("ssm")
    response_sender_email = client_ssm_param_store.get_parameter(
        Name=os.environ.get("PARAM_SENDER_EMAIL"), WithDecryption=False
    )

    sender_email = response_sender_email["Parameter"]["Value"]

    subject = f"{ticketID} was changed"
    message = f"""
    Changes: \n {changed_props}\n
	-------------------------------------------\n\n
    Title: {title}\n
	-------------------------------------------\n
    Description: {description}\n
	-------------------------------------------\n
    Priority: {priority}\n
	-------------------------------------------\n
    TicketID: {ticketID}\n
	-------------------------------------------\n
    Story point: {storyPoint}\n
	-------------------------------------------\n
    Reporter: {reporterName}\n
	-------------------------------------------\n
    Asignee: {asigneeName}\n
	-------------------------------------------\n
    Epic link: {epicLink}\n
	-------------------------------------------\n
    Created date: {newTicketCreatedDate}\n
	-------------------------------------------\n
    Updated date: {newTicketUpdatedDate}\n
	-------------------------------------------\n
    Resolved date: {resolved_date}\n
	-------------------------------------------\n
    Issue type: {issueType}\n
	-------------------------------------------\n
    Status: {ticketStatus}\n
	-------------------------------------------\n
    Comments: {comment}\n
	-------------------------------------------\n
        """
    response = ""

    if watchUsers.endswith(","):
        values = watchUsers[:-1]
        watch_users_list = values.split(",")

        for watch_users_iter in watch_users_list:
            client_ses = boto3.client("ses")
            response_get_verify_email = client_ses.get_identity_verification_attributes(
                Identities=[watch_users_iter]
            )
            logger.info(f"Get verified email identity: {response_get_verify_email}")

            if not response_get_verify_email["VerificationAttributes"]:
                response_verify_ses = client_ses.verify_email_address(
                    EmailAddress=watch_users_iter
                )
                logger.info(f"Email verification sent response: {response_verify_ses}")
                response += f"Email needs verification! Message sent to: {watch_users_iter} to confirm \n"
            else:
                email_status = response_get_verify_email["VerificationAttributes"][
                    watch_users_iter
                ]["VerificationStatus"]

                if email_status == "Success":
                    response_ses = client_ses.send_email(
                        Source=sender_email,
                        Destination={"ToAddresses": [watch_users_iter]},
                        Message={
                            "Subject": {
                                "Data": subject,
                            },
                            "Body": {"Text": {"Data": message}},
                        },
                        ReplyToAddresses=[sender_email],
                    )
                    logger.info(f"Status: Success , ticket sent: {response_ses}")
                    response += f"Email verified! ticket sent to {watch_users_iter} \n"
                else:
                    pending_state = (
                        f"The user {watch_users_iter} needs to confirm the message!"
                        if email_status == "Pending"
                        else "Sorry for the inconvenience!"
                    )
                    response += f"Email is in {email_status}! {pending_state} \n"
                    logger.info(f"Email is in {email_status} state!")

    return {
        "statusCode": 200,
        "body": json.dumps(response),
        "headers": {
            "Content-Type": "application/JSON",
            "Access-Control-Allow-Origin": "*",
        },
    }
