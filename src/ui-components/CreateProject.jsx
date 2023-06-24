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
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CreateProject(props) {
  const { overrides, ...rest } = props;
  const [
    createUnderScorebuttonBackgroundColor,
    setCreateUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(104,112,120,1)");
  const createUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const createUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
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
      {...getOverrideProps(overrides, "CreateProject")}
      {...rest}
    >
      <Image
        width="1924px"
        height="1081px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
        {...getOverrideProps(overrides, "aws_image_background_notes")}
      ></Image>
      <Card
        width="697px"
        height="655px"
        position="absolute"
        padding="13px 13px 13px 13px"
        top="136px"
        left="calc(50% - 348.5px - -7.5px)"
        border="3px SOLID rgba(174,179,183,1)"
        variation="outline"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <View
        padding="0px 0px 0px 0px"
        width="627px"
        height="595px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="159px"
        left="calc(50% - 313.5px - -9.5px)"
        {...getOverrideProps(overrides, "create_project_group")}
      >
        <Button
          width="624px"
          height="52px"
          position="absolute"
          top="486px"
          left="1px"
          backgroundColor={createUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create"
          onMouseLeave={() => {
            createUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            createUnderScorebuttonOnMouseOver();
          }}
          {...getOverrideProps(overrides, "create_button")}
        ></Button>
        <Button
          width="627px"
          height="52px"
          position="absolute"
          top="543px"
          right="0px"
          backgroundColor={cancelUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cancel"
          onMouseOver={() => {
            cancelUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            cancelUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
        <TextField
          width="480px"
          height="77.61px"
          label="Project name"
          placeholder="Type here"
          position="absolute"
          top="162px"
          left="calc(50% - 240px - 0.5px)"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "project_name_text_field")}
        ></TextField>
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
          width="211px"
          height="44.78px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="calc(50% - 105.5px - 0px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create project"
          {...getOverrideProps(overrides, "Create project")}
        ></Text>
        <Divider
          width="627px"
          height="1px"
          position="absolute"
          top="59.14px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
      </View>
    </View>
  );
}
