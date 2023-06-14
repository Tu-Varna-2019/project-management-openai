/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
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
export default function EditIssueTemplate(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "EditIssueTemplate")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="563px"
        height="974px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="22px"
        left="calc(50% - 281.5px - -27.5px)"
        {...getOverrideProps(overrides, "create_ticket_group")}
      >
        <Card
          width="563px"
          height="974px"
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
          top="366px"
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
          top="510px"
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
          top="230px"
          left="40px"
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
          top="342px"
          left="35px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider1412684")}
        ></Divider>
        <Divider
          width="499px"
          height="1px"
          position="absolute"
          top="73px"
          left="37px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider1412685")}
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
        top="31px"
        left="849px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edit Issue template"
        {...getOverrideProps(overrides, "create_ticket_text")}
      ></Text>
      <StepperField
        width="205px"
        height="41px"
        position="absolute"
        top="284px"
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
        top="253px"
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
        top="291px"
        left="920px"
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
        top="693px"
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
        top="907px"
        left="1106px"
        backgroundColor="rgba(246,133,54,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Save"
        {...getOverrideProps(overrides, "save_button")}
      ></Button>
      <Button
        width="142px"
        height="59.32px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="907px"
        right="837px"
        backgroundColor="rgba(104,112,120,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Cancel"
        {...getOverrideProps(overrides, "cancel_button")}
      ></Button>
      <Divider
        width="498px"
        height="1.02px"
        position="absolute"
        top="868px"
        left="744px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider1412693")}
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
        top="915px"
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
        top="908.37px"
        left="743px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "ai_options_select_field")}
      ></SelectField>
      <SelectField
        width="217px"
        height="35px"
        gap="60px"
        position="absolute"
        top="15.36%"
        bottom="81.41%"
        left="38.77%"
        right="49.95%"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "issue_template_select_field")}
      ></SelectField>
      <SelectField
        width="217px"
        height="35px"
        gap="60px"
        position="absolute"
        top="15.36%"
        bottom="81.41%"
        left="52.44%"
        right="36.28%"
        placeholder=""
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "project_select_field")}
      ></SelectField>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="400"
        color="rgba(104,112,120,1)"
        lineHeight="17px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="130.36px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11.93%"
        bottom="84.55%"
        left="38.77%"
        right="54.45%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Issue template"
        {...getOverrideProps(overrides, "issue_template_text1412756")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="400"
        color="rgba(104,112,120,1)"
        lineHeight="17px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="130.36px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11.84%"
        bottom="84.64%"
        left="52.44%"
        right="40.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Project"
        {...getOverrideProps(overrides, "issue_template_text1412774")}
      ></Text>
      <Image
        width="25px"
        height="25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="171px"
        left="1189px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "project_image_name")}
      ></Image>
    </View>
  );
}
