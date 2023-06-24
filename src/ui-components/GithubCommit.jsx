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
import { Image, Text, TextAreaField, View } from "@aws-amplify/ui-react";
export default function GithubCommit(props) {
  const { overrides, ...rest } = props;
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
      width="389px"
      height="165px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "GithubCommit")}
      {...rest}
    >
      <View
        width="389px"
        height="165px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
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
        width="11.05%"
        height="24.85%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="32.73%"
        bottom="42.42%"
        left="2.83%"
        right="86.12%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "comitee_icon_image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="159.38px"
        height="25.93px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="3.03%"
        bottom="81.26%"
        left="16.2%"
        right="42.83%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Comitee name"
        {...getOverrideProps(overrides, "commitee_name_text")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="130.57px"
        height="24.36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="3.03%"
        bottom="82.21%"
        left="61.18%"
        right="5.25%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="date"
        {...getOverrideProps(overrides, "date_text")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="12px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="26px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80.61%"
        bottom="3.64%"
        left="16.2%"
        right="6.68%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="sha"
        {...getOverrideProps(overrides, "sha_text")}
      ></Text>
      <TextAreaField
        width="306.16px"
        height="unset"
        position="absolute"
        top="calc(50% - 46.5px - 5.11px)"
        left="16.2%"
        right="5.09%"
        placeholder=""
        size="small"
        isDisabled={true}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "commit_message_text_field")}
      ></TextAreaField>
    </View>
  );
}
