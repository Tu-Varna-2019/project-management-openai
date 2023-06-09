/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Badge, Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function ChildTicketShort(props) {
  const { ticket, overrides, ...rest } = props;
  const [rectangleOneBackgroundColor, setRectangleOneBackgroundColor] =
    useStateMutationAction("rgba(254,254,255,1)");
  const rectangleOneOnMouseLeave = () => {
    setRectangleOneBackgroundColor("rgba(255, 255, 255, 0)");
  };
  const rectangleOneOnMouseOver = () => {
    setRectangleOneBackgroundColor("rgba(104, 112, 120, 0.19)");
  };
  return (
    <View
      width="634px"
      height="54px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ChildTicketShort")}
      {...rest}
    >
      <View
        width="634px"
        height="54px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,0.74)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor={rectangleOneBackgroundColor}
        cursor="pointer"
        onMouseLeave={() => {
          rectangleOneOnMouseLeave();
        }}
        onMouseOver={() => {
          rectangleOneOnMouseOver();
        }}
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Image
        width="6.3%"
        height="71.96%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="14.81%"
        bottom="13.22%"
        left="68.77%"
        right="24.93%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "asignee_icon_image")}
      ></Image>
      <Image
        width="4.42%"
        height="42.59%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.07%"
        bottom="33.33%"
        left="2.37%"
        right="93.22%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "issue_type_image")}
      ></Image>
      <Image
        width="3.94%"
        height="53.7%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.07%"
        bottom="22.22%"
        left="62.62%"
        right="33.44%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "priority_image")}
      ></Image>
      <Badge
        width="69px"
        height="37px"
        position="absolute"
        top="14.81%"
        bottom="16.67%"
        left="77.29%"
        right="11.83%"
        size="default"
        variation="info"
        justifyContent="center"
        children={ticket?.TicketStatus}
        {...getOverrideProps(overrides, "status_badge")}
      ></Badge>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(104,112,120,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="106.27px"
        height="18.8px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29.63%"
        bottom="35.55%"
        left="9.31%"
        right="73.93%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"KAI-"}${ticket?.TicketID}`}
        {...getOverrideProps(overrides, "ticket_id_text")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="225px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.52%"
        bottom="16.67%"
        left="27.13%"
        right="37.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ticket?.Title}
        {...getOverrideProps(overrides, "title_text")}
      ></Text>
      <Button
        width="54px"
        height="47px"
        position="absolute"
        top="7.41%"
        bottom="5.56%"
        left="90.38%"
        right="1.1%"
        size="default"
        isDisabled={false}
        variation="link"
        children="X"
        {...getOverrideProps(overrides, "unlink_task_button")}
      ></Button>
    </View>
  );
}
