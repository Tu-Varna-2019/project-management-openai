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
import { Badge, Text, View } from "@aws-amplify/ui-react";
export default function Noteremindercard(props) {
  const { noteV2, overrides, ...rest } = props;
  const [frameBackgroundColor, setFrameBackgroundColor] =
    useStateMutationAction("rgba(35,47,62,1)");
  const frameOnMouseOver = () => {
    setFrameBackgroundColor("grey");
  };
  const frameOnMouseLeave = () => {
    setFrameBackgroundColor("rgba(35, 47, 62, 1)");
  };
  return (
    <View
      width="232px"
      height="175px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="3px SOLID rgba(255,255,255,1)"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      cursor="pointer"
      {...getOverrideProps(overrides, "Noteremindercard")}
      {...rest}
    >
      <View
        width="227px"
        height="175px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor={frameBackgroundColor}
        cursor="pointer"
        onMouseOver={() => {
          frameOnMouseOver();
        }}
        onMouseLeave={() => {
          frameOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "Frame")}
      >
        <Badge
          width="216px"
          height="46px"
          position="absolute"
          top="118px"
          left="calc(50% - 108px - -1.5px)"
          size="default"
          variation="warning"
          children={noteV2?.Reminder}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(254,254,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="174px"
          height="75px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="33px"
          left="26px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={noteV2?.Title}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </View>
  );
}
