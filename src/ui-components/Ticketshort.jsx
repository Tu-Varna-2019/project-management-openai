/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Card, Image, Text, View } from "@aws-amplify/ui-react";
export default function Ticketshort(props) {
  const { ticket, user, overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="136px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      cursor="pointer"
      {...getOverrideProps(overrides, "Ticketshort")}
      {...rest}
    >
      <View
        width="305.08px"
        height="136px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="-1.69%"
        border="1px SOLID rgba(206,217,254,1)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        cursor="pointer"
        {...getOverrideProps(overrides, "Frame 4")}
      >
        <Card
          width="305px"
          height="136px"
          position="absolute"
          top="0px"
          left="0px"
          variation="outline"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <Image
          width="45px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="80px"
          left="237px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.ImageProfile}
          {...getOverrideProps(overrides, "asignee_icon_image")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="47px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="98px"
          left="159px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"KAI-"}${ticket?.TicketID}`}
          {...getOverrideProps(overrides, "ticket_id_text")}
        ></Text>
        <Badge
          width="unset"
          height="unset"
          position="absolute"
          top="91px"
          left="97px"
          size="default"
          variation="default"
          children="1"
          {...getOverrideProps(overrides, "story_points_badge")}
        ></Badge>
        <Image
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="95px"
          left="22px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "issue_type_image")}
        ></Image>
        <Image
          width="21px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="93px"
          left="61px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "priority_image")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10px"
          left="21px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Title"
          {...getOverrideProps(overrides, "title_ticket_text")}
        ></Text>
        <Badge
          width="262px"
          height="unset"
          position="absolute"
          top="43px"
          left="calc(50% - 131px - 0.54px)"
          size="default"
          variation="default"
          children="Epic Link"
          {...getOverrideProps(overrides, "epic_link_badge")}
        ></Badge>
      </View>
    </View>
  );
}
