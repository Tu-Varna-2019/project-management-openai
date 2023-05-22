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
  Badge,
  Button,
  Card,
  Divider,
  Image,
  SelectField,
  Text,
  TextAreaField,
  TextField,
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
        width="508px"
        height="1016px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18px"
        left="calc(50% - 254px - 0px)"
        {...getOverrideProps(overrides, "create_ticket_group")}
      >
        <Card
          width="508px"
          height="1016px"
          position="absolute"
          padding="15px 15px 15px 15px"
          top="0px"
          left="calc(50% - 254px - 0px)"
          border="1px SOLID rgba(0,0,0,1)"
          variation="elevated"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <Button
          width="150px"
          height="64px"
          position="absolute"
          border="1px SOLID rgba(0,0,0,1)"
          top="925px"
          left="35px"
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
          width="156px"
          height="64px"
          position="absolute"
          border="1px SOLID rgba(0,0,0,1)"
          top="925px"
          right="31px"
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
          width="440px"
          height="unset"
          label="Title"
          placeholder="Add short summary ..."
          position="absolute"
          top="411px"
          left="35px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <Image
          width="51px"
          height="34px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="496px"
          left="387px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F576%2F515%2Foriginal%2Feye-icon-vector-illustration.jpg&f=1&nofb=1&ipt=71a67a38b009e7c9f4a346f6d3a9e176f6d453e6b9500133baaa0a235d81b997&ipo=images"
          {...getOverrideProps(overrides, "watch_image")}
        ></Image>
        <Badge
          width="unset"
          height="unset"
          position="absolute"
          top="501px"
          left="441px"
          size="default"
          variation="info"
          children="0"
          {...getOverrideProps(overrides, "watch_badge")}
        ></Badge>
        <TextAreaField
          width="442px"
          height="169px"
          label="Description"
          placeholder="Describe the task"
          position="absolute"
          top="539px"
          left="35px"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <SelectField
          width="212px"
          height="unset"
          label="Project"
          position="absolute"
          top="143px"
          left="34px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "project_select_field178752215")}
        ></SelectField>
        <SelectField
          width="212px"
          height="unset"
          label="Epic link"
          position="absolute"
          top="754px"
          left="262px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "project_select_field179402173")}
        ></SelectField>
        <SelectField
          width="212px"
          height="unset"
          label="Issue type"
          position="absolute"
          top="261px"
          left="34px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "issue_type_select_field")}
        ></SelectField>
        <SelectField
          width="212px"
          height="unset"
          label="Priority"
          position="absolute"
          top="261px"
          left="262px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <SelectField
          width="211px"
          height="unset"
          label="Asignee"
          position="absolute"
          top="754px"
          left="35px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "asignee_select_field")}
        ></SelectField>
        <Divider
          width="440px"
          height="1px"
          position="absolute"
          top="379px"
          left="35px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178752242")}
        ></Divider>
        <Divider
          width="447px"
          height="1px"
          position="absolute"
          top="886px"
          left="35px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178752283")}
        ></Divider>
        <Divider
          width="441px"
          height="1px"
          position="absolute"
          top="92px"
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
        {...getOverrideProps(overrides, "Create ticket KAI-")}
      ></Text>
      <TextField
        width="204px"
        height="unset"
        label="StoryPoint"
        position="absolute"
        top="161px"
        left="974px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "story_point_text_field")}
      ></TextField>
    </View>
  );
}
