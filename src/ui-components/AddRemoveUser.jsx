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
import {
  Button,
  Card,
  Divider,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function AddRemoveUser(props) {
  const { overrides, ...rest } = props;
  const [
    confirmUnderScorebuttonBackgroundColor,
    setConfirmUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(104,112,120,1)");
  const confirmUnderScorebuttonOnMouseLeave = () => {
    setConfirmUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const confirmUnderScorebuttonOnMouseOver = () => {
    setConfirmUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  return (
    <View
      width="1924px"
      height="1081px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(122,133,153,0.55)"
      {...getOverrideProps(overrides, "AddRemoveUser")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="563px"
        height="1031px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="26px"
        left="calc(50% - 281.5px - 0.5px)"
        {...getOverrideProps(overrides, "create_ticket_group")}
      >
        <Card
          width="563px"
          height="1031px"
          position="absolute"
          padding="15px 15px 15px 15px"
          top="0px"
          left="calc(50% - 281.5px - 0px)"
          border="1px SOLID rgba(0,0,0,1)"
          variation="elevated"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <Button
          width="136px"
          height="59.32px"
          position="absolute"
          border="1px SOLID rgba(0,0,0,1)"
          top="940px"
          left="398px"
          backgroundColor={confirmUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Confirm"
          onMouseLeave={() => {
            confirmUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            confirmUnderScorebuttonOnMouseOver();
          }}
          {...getOverrideProps(overrides, "confirm_button")}
        ></Button>
        <Button
          width="142px"
          height="59.32px"
          position="absolute"
          border="1px SOLID rgba(0,0,0,1)"
          top="940px"
          right="386px"
          backgroundColor={cancelUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cancel"
          onMouseLeave={() => {
            cancelUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            cancelUnderScorebuttonOnMouseOver();
          }}
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
        <Divider
          width="498px"
          height="1.02px"
          position="absolute"
          top="921px"
          left="35px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider3392598")}
        ></Divider>
        <Divider
          width="499px"
          height="1.02px"
          position="absolute"
          top="78px"
          left="34px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider3392599")}
        ></Divider>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="700"
        color="rgba(246,133,54,1)"
        lineHeight="45px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="49px"
        left="calc(50% - 198px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add & remove admin/users"
        {...getOverrideProps(overrides, "create_ticket_text")}
      ></Text>
      <SelectField
        width="435px"
        height="unset"
        label="Select Project"
        position="absolute"
        top="258px"
        left="calc(50% - 217.5px - -2.5px)"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "project_select_field")}
      ></SelectField>
    </View>
  );
}
