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
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditProject(props) {
  const { overrides, ...rest } = props;
  const [
    saveUnderScorebuttonBackgroundColor,
    setSaveUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(104,112,120,1)");
  const [
    deleteUnderScoreprojectUnderScoreimageBackgroundColor,
    setDeleteUnderScoreprojectUnderScoreimageBackgroundColor,
  ] = useStateMutationAction(undefined);
  const saveUnderScorebuttonOnMouseLeave = () => {
    setSaveUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const saveUnderScorebuttonOnMouseOver = () => {
    setSaveUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const deleteUnderScoreprojectUnderScoreimageOnMouseLeave = () => {
    setDeleteUnderScoreprojectUnderScoreimageBackgroundColor("white");
  };
  const deleteUnderScoreprojectUnderScoreimageOnMouseOver = () => {
    setDeleteUnderScoreprojectUnderScoreimageBackgroundColor(
      "rgba(246, 133, 54, 1)"
    );
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
      {...getOverrideProps(overrides, "EditProject")}
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
        width="717px"
        height="726px"
        position="absolute"
        padding="13px 13px 13px 13px"
        top="137px"
        left="calc(50% - 358.5px - -9.5px)"
        border="3px SOLID rgba(174,179,183,1)"
        variation="outline"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <View
        padding="0px 0px 0px 0px"
        width="627px"
        height="659px"
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
          top="550px"
          left="1px"
          backgroundColor={saveUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onMouseLeave={() => {
            saveUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            saveUnderScorebuttonOnMouseOver();
          }}
          {...getOverrideProps(overrides, "save_button")}
        ></Button>
        <Button
          width="627px"
          height="52px"
          position="absolute"
          top="607px"
          right="0px"
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
        <TextField
          width="451px"
          height="78px"
          label="Project name"
          placeholder="Type here"
          position="absolute"
          top="194px"
          left="calc(50% - 225.5px - 15px)"
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
          children="Edit project"
          {...getOverrideProps(overrides, "Edit project")}
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
      <SelectField
        width="362px"
        height="unset"
        label="Select Project"
        position="absolute"
        top="249px"
        left="calc(50% - 181px - 34px)"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "select_project_select_field")}
      ></SelectField>
      <Image
        width="48px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="278px"
        left="1134px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Frecycle-bin-icon-9.png&f=1&nofb=1&ipt=340487e1d387f0bae46d2795484fb676cb67e34437418eef51ebb8f4e848cae6&ipo=images"
        backgroundColor={deleteUnderScoreprojectUnderScoreimageBackgroundColor}
        onMouseLeave={() => {
          deleteUnderScoreprojectUnderScoreimageOnMouseLeave();
        }}
        onMouseOver={() => {
          deleteUnderScoreprojectUnderScoreimageOnMouseOver();
        }}
        {...getOverrideProps(overrides, "delete_project_image")}
      ></Image>
    </View>
  );
}
