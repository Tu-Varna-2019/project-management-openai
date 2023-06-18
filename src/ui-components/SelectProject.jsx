/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Card,
  Divider,
  Image,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function SelectProject(props) {
  const { overrides, ...rest } = props;
  const [
    confirmUnderScorebuttonBackgroundColor,
    setConfirmUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    createUnderScoreoneUnderScorebuttonBackgroundColor,
    setCreateUnderScoreoneUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    editUnderScoreprojectUnderScoreimageBackgroundColor,
    setEditUnderScoreprojectUnderScoreimageBackgroundColor,
  ] = useStateMutationAction(undefined);
  const confirmUnderScorebuttonOnMouseOver = () => {
    setConfirmUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const confirmUnderScorebuttonOnMouseLeave = () => {
    setConfirmUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const createUnderScoreoneUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScoreoneUnderScorebuttonBackgroundColor(
      "rgba(188, 116, 9, 1)"
    );
  };
  const createUnderScoreoneUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScoreoneUnderScorebuttonBackgroundColor(
      "rgba(255, 153, 0, 1)"
    );
  };
  const editUnderScoreprojectUnderScoreimageOnMouseOver = () => {
    setEditUnderScoreprojectUnderScoreimageBackgroundColor(
      "rgba(246, 133, 54, 1)"
    );
  };
  const editUnderScoreprojectUnderScoreimageOnMouseLeave = () => {
    setEditUnderScoreprojectUnderScoreimageBackgroundColor("white");
  };
  const editUnderScoreprojectUnderScoreimageOnClick = useNavigateAction({
    type: "url",
    url: "/edit-project",
  });
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
      {...getOverrideProps(overrides, "SelectProject")}
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
      <View
        padding="0px 0px 0px 0px"
        width="667px"
        height="592px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="276px"
        left="calc(50% - 333.5px - 0.5px)"
        {...getOverrideProps(overrides, "create_project_group")}
      >
        <Card
          width="667px"
          height="592px"
          position="absolute"
          padding="13px 13px 13px 13px"
          top="0px"
          left="calc(50% - 333.5px - 0px)"
          border="3px SOLID rgba(174,179,183,1)"
          variation="outline"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <Button
          width="563px"
          height="62px"
          position="absolute"
          top="320px"
          left="52px"
          backgroundColor={confirmUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Confirm"
          onMouseOver={() => {
            confirmUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            confirmUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "confirm_button")}
        ></Button>
        <Button
          width="563px"
          height="62px"
          position="absolute"
          top="441px"
          left="52px"
          backgroundColor={createUnderScoreoneUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create one"
          onMouseOver={() => {
            createUnderScoreoneUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            createUnderScoreoneUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "create_one_button")}
        ></Button>
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
          width="563px"
          height="64.08px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="40.47px"
          left="calc(50% - 281.5px - -1px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome back "
          {...getOverrideProps(overrides, "welcome_back_text")}
        ></Text>
        <Divider
          width="563.01px"
          height="1.43px"
          position="absolute"
          top="124.5px"
          left="53px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178872266")}
        ></Divider>
      </View>
      <SelectField
        width="435px"
        height="unset"
        label="Select Project"
        position="absolute"
        top="450px"
        left="calc(50% - 217.5px - 63.5px)"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "select_project_select_field")}
      ></SelectField>
      <Divider
        width="253px"
        height="1px"
        position="absolute"
        top="687px"
        left="680px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider178892292")}
      ></Divider>
      <Divider
        width="249px"
        height="1px"
        position="absolute"
        top="688px"
        left="991px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider178992079")}
      ></Divider>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="60px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="678px"
        left="932px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="or"
        {...getOverrideProps(overrides, "or")}
      ></Text>
      <Image
        width="68px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="458px"
        left="1172px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.vectorstock.com%2Fi%2F1000x1000%2F09%2F73%2Fedit-icon-vector-22390973.jpg&f=1&nofb=1&ipt=33bd8451919294d1c0eac29d61786e8d93bd16ed0ebcdcd386ac208f8fb1a78b&ipo=images"
        backgroundColor={editUnderScoreprojectUnderScoreimageBackgroundColor}
        onMouseOver={() => {
          editUnderScoreprojectUnderScoreimageOnMouseOver();
        }}
        onMouseLeave={() => {
          editUnderScoreprojectUnderScoreimageOnMouseLeave();
        }}
        onClick={() => {
          editUnderScoreprojectUnderScoreimageOnClick();
        }}
        {...getOverrideProps(overrides, "edit_project_image")}
      ></Image>
    </View>
  );
}
