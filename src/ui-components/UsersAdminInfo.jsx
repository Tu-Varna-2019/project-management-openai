/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function UsersAdminInfo(props) {
  const { user, overrides, ...rest } = props;
  return (
    <View
      width="288px"
      height="98px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "UsersAdminInfo")}
      {...rest}
    >
      <View
        width="288px"
        height="98px"
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
        backgroundColor="rgba(254,254,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Image
        width="14.93%"
        height="41.84%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="19.39%"
        bottom="38.78%"
        left="5.21%"
        right="79.86%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={user?.ImageProfile}
        {...getOverrideProps(overrides, "user_icon_image")}
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
        width="201px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="17.35%"
        bottom="47.96%"
        left="24.65%"
        right="5.56%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={user?.username}
        {...getOverrideProps(overrides, "username_text")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="194px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57.14%"
        bottom="13.27%"
        left="24.65%"
        right="7.99%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={user?.sub}
        {...getOverrideProps(overrides, "sub_text")}
      ></Text>
    </View>
  );
}
