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
  StepperField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CreateIssueTemplate(props) {
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
      {...getOverrideProps(overrides, "CreateIssueTemplate")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="563px"
        height="861px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="93px"
        left="calc(50% - 281.5px - -27.5px)"
        {...getOverrideProps(overrides, "create_ticket_group")}
      >
        <Card
          width="563px"
          height="861px"
          position="absolute"
          padding="15px 15px 15px 15px"
          top="0px"
          left="calc(50% - 281.5px - 0px)"
          border="1px SOLID rgba(0,0,0,1)"
          variation="elevated"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <TextField
          width="498px"
          height="unset"
          label="Title"
          placeholder="Add short summary ..."
          position="absolute"
          top="248px"
          left="35px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <TextAreaField
          width="499px"
          height="138px"
          label="Description"
          placeholder="Describe the task"
          position="absolute"
          top="392px"
          left="35px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <SelectField
          width="212px"
          height="unset"
          label="Issue type"
          position="absolute"
          top="89px"
          left="45px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "issue_type_select_field")}
        ></SelectField>
        <Divider
          width="498px"
          height="1px"
          position="absolute"
          top="211px"
          left="34px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider1372810")}
        ></Divider>
        <Divider
          width="499px"
          height="1px"
          position="absolute"
          top="73px"
          left="37px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider1372812")}
        ></Divider>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="700"
        color="rgba(246,133,54,1)"
        lineHeight="45px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="102px"
        left="828px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Issue template"
        {...getOverrideProps(overrides, "create_ticket_text")}
      ></Text>
      <StepperField
        width="205px"
        height="41px"
        position="absolute"
        top="213px"
        left="1021px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "story_point_stepper_field")}
      ></StepperField>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
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
        top="182px"
        left="1017px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Story Point"
        {...getOverrideProps(overrides, "Story Point")}
      ></Text>
      <Image
        width="25px"
        height="25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="221px"
        left="925px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "issue_type_image")}
      ></Image>
      <TextAreaField
        width="493px"
        height="138px"
        label="Comments"
        placeholder="Describe the task"
        position="absolute"
        top="655px"
        left="748px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "comments_text_field")}
      ></TextAreaField>
      <Button
        width="136px"
        height="59.32px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="869px"
        left="1106px"
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
        width="142px"
        height="59.32px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="869px"
        right="837px"
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
        top="830px"
        left="744px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider1372907")}
      ></Divider>
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
        top="879px"
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
        top="870.37px"
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
