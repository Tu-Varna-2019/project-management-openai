/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card, CheckboxField, Text, View } from "@aws-amplify/ui-react";
export default function Taskcard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="379px"
      height="68px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Taskcard")}
      {...rest}
    >
      <Card
        width="379px"
        height="68px"
        position="absolute"
        backgroundColor="rgba(35,47,62,1)"
        top="0px"
        left="0px"
        variation="elevated"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23px"
        left="89px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "task_description")}
      ></Text>
      <CheckboxField
        width="75px"
        height="69px"
        position="absolute"
        top="0px"
        left="0px"
        backgroundColor="rgba(255,255,255,1)"
        label=""
        size="large"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="end"
        {...getOverrideProps(overrides, "checkbox_task")}
      ></CheckboxField>
    </View>
  );
}
