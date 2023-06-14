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
export default function CreateTicket(props) {
  const { ticket, overrides, ...rest } = props;
  const [
    createUnderScorebuttonBackgroundColor,
    setCreateUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(104,112,120,1)");
  const createUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const createUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(104, 112, 120, 1)");
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
      {...getOverrideProps(overrides, "CreateTicket")}
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
        left="calc(50% - 281.5px - -27.5px)"
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
          backgroundColor={createUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create"
          onMouseOver={() => {
            createUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            createUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "create_button")}
        ></Button>
        <Button
          width="142px"
          height="59.32px"
          position="absolute"
          border="1px SOLID rgba(0,0,0,1)"
          top="940px"
          right="184px"
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
          {...getOverrideProps(overrides, "Divider178752283")}
        ></Divider>
        <Divider
          width="499px"
          height="1.02px"
          position="absolute"
          top="78px"
          left="34px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178802042")}
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
        width="396px"
        height="60px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="49px"
        left="742px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create ticket KAI-"
        {...getOverrideProps(overrides, "create_ticket_text")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(246,133,54,1)"
        lineHeight="27px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="82px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="971px"
        left="764px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="More"
        {...getOverrideProps(overrides, "More")}
      ></Text>
      <SelectField
        width="143px"
        height="unset"
        position="absolute"
        top="967.37px"
        left="743px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "ai_options_select_field")}
      ></SelectField>
    </View>
  );
}
