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
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function SearchResultMatch(props) {
  const { ticket, overrides, ...rest } = props;
  const [rectangleOneBackgroundColor, setRectangleOneBackgroundColor] =
    useStateMutationAction("rgba(35,47,62,0.3)");
  const rectangleOneOnMouseLeave = () => {
    setRectangleOneBackgroundColor("rgba(255, 255, 255, 0)");
  };
  const rectangleOneOnMouseOver = () => {
    setRectangleOneBackgroundColor("rgba(104, 112, 120, 0.19)");
  };
  return (
    <View
      width="350px"
      height="36px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(48,64,80,1)"
      {...getOverrideProps(overrides, "SearchResultMatch")}
      {...rest}
    >
      <Image
        width="7.61%"
        height="56.1%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="21.95%"
        bottom="21.95%"
        left="3.26%"
        right="89.13%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "issue_type_image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="75.14px"
        height="16.68px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29.27%"
        bottom="24.39%"
        left="13.86%"
        right="64.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"KAI-"}${ticket?.TicketID}`}
        {...getOverrideProps(overrides, "ticket_id_text")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="194.02px"
        height="19.32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="21.95%"
        bottom="24.39%"
        left="38.32%"
        right="6.25%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ticket?.Title}
        {...getOverrideProps(overrides, "title_text")}
      ></Text>
      <View
        width="350px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
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
    </View>
  );
}
