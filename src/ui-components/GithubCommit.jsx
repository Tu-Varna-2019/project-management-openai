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
      width="432px"
      height="210px"
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
        width="432px"
        height="210px"
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
        width="10.23%"
        height="21.47%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="36.19%"
        bottom="42.34%"
        left="2.78%"
        right="86.99%"
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
        width="177px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.05%"
        bottom="75.24%"
        left="16.2%"
        right="42.82%"
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
        width="145px"
        height="31px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10%"
        bottom="75.24%"
        left="61.34%"
        right="5.09%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="date"
        {...getOverrideProps(overrides, "date_text")}
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
        width="333px"
        height="41px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="73.81%"
        bottom="6.67%"
        left="16.2%"
        right="6.71%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="sha"
        {...getOverrideProps(overrides, "sha_text")}
      ></Text>
      <TextAreaField
        width="340px"
        height="unset"
        position="absolute"
        top="24.76%"
        bottom="30.95%"
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
