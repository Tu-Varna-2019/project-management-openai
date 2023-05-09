/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Alert,
  Badge,
  Button,
  Divider,
  Image,
  SelectField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function HomeV2Mobile(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeV2Mobile")}
      {...rest}
    >
      <View
        width="390px"
        height="844px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="-3px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Divider
          width="374px"
          height="4px"
          position="absolute"
          top="175px"
          left="4px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178221870")}
        ></Divider>
        <View
          width="391px"
          height="171px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="-1px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(35,47,62,1)"
          {...getOverrideProps(overrides, "footer_rectangle")}
        ></View>
        <Button
          width="108px"
          height="40px"
          position="absolute"
          top="20px"
          left="146px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Note"
          {...getOverrideProps(overrides, "note_button")}
        ></Button>
        <Button
          width="108px"
          height="40px"
          position="absolute"
          top="104px"
          left="148px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Task"
          {...getOverrideProps(overrides, "task_button")}
        ></Button>
        <Button
          width="108px"
          height="40px"
          position="absolute"
          top="20px"
          left="274px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Reminder"
          {...getOverrideProps(overrides, "reminder_button")}
        ></Button>
        <Button
          width="108px"
          height="40px"
          position="absolute"
          top="104px"
          left="273px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Bin"
          {...getOverrideProps(overrides, "bin_button")}
        ></Button>
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
        <Image
          width="391px"
          height="82px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="171px"
          left="-1px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "aws_image_background")}
        ></Image>
        <Image
          width="377px"
          height="491px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="344px"
          left="4px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
          {...getOverrideProps(overrides, "aws_image_background_notes")}
        ></Image>
        <Badge
          width="98px"
          height="32px"
          position="absolute"
          backgroundColor="rgba(255,153,0,1)"
          top="189px"
          left="141px"
          size="default"
          variation="default"
          children="Welcome back"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <SelectField
          width="126px"
          height="33px"
          label="My account"
          placeholder="My account"
          position="absolute"
          top="35px"
          left="11px"
          backgroundColor="rgba(35,47,62,1)"
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "my_account_select_field")}
        ></SelectField>
        <TextField
          width="362px"
          height="67px"
          label="Title"
          placeholder="Title"
          position="absolute"
          top="359px"
          left="10px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <SelectField
          width="163px"
          height="65px"
          label="Priority"
          position="absolute"
          top="613px"
          left="211px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <Button
          width="364px"
          height="51px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="776px"
          left="13px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Save"
          {...getOverrideProps(overrides, "submit_button")}
        ></Button>
        <TextField
          width="169px"
          height="65px"
          label="Reminder"
          placeholder="mm/dd/yyy"
          position="absolute"
          top="613px"
          left="8px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "reminder_text_field")}
        ></TextField>
        <Divider
          width="524.08px"
          height="3.99px"
          position="absolute"
          top="777.07px"
          left="385px"
          transformOrigin="top left"
          transform="rotate(-89.87deg)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "divider_notes_info")}
        ></Divider>
        <Button
          width="88px"
          height="41px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="191px"
          left="279px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Create"
          {...getOverrideProps(overrides, "create_note_button")}
        ></Button>
        <SwitchField
          width="67px"
          height="37px"
          label="Delete"
          position="absolute"
          top="711px"
          left="284px"
          size="default"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "deleted_switch_field")}
        ></SwitchField>
        <Alert
          width="387px"
          height="80px"
          heading="Success"
          position="absolute"
          top="170px"
          left="3px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="success"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "success_alert")}
        ></Alert>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(104,112,120,1)"
          lineHeight="48.409088134765625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="369px"
          height="20px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="432px"
          left="9px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Notes you've added are displayed here"
          {...getOverrideProps(overrides, "notes_displayed_here_no_note")}
        ></Text>
        <Image
          width="129px"
          height="72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="350px"
          left="129px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "amplify_image_logo_no_note")}
        ></Image>
        <Divider
          width="100px"
          position="absolute"
          top="152px"
          left="156px"
          boxShadow="0px 16px 24px rgba(0, 0, 0, 0.14000000059604645)"
          size="large"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178221909")}
        ></Divider>
        <Divider
          width="365px"
          height="1px"
          position="absolute"
          top="761px"
          left="12px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178221911")}
        ></Divider>
        <TextAreaField
          width="362px"
          height="127px"
          label="Description"
          placeholder="Description"
          position="absolute"
          top="463px"
          left="10px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <Image
          width="50px"
          height="44px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="711px"
          left="17px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "shareIcon")}
        ></Image>
        <Alert
          width="387px"
          height="83px"
          heading="Info"
          position="absolute"
          top="170px"
          left="3px"
          variation="info"
          isDismissible={false}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "info_alert")}
        ></Alert>
        <Button
          width="45px"
          height="30px"
          position="absolute"
          top="211px"
          left="328px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Cancel"
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
        <Button
          width="46px"
          height="30px"
          position="absolute"
          top="208px"
          left="233px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Confirm"
          {...getOverrideProps(overrides, "confirm_button")}
        ></Button>
        <TextField
          width="136px"
          height="64px"
          label="Title"
          placeholder="john.doe@hotmail.com"
          position="absolute"
          top="96px"
          left="14px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "shareTextField")}
        ></TextField>
      </View>
    </View>
  );
}
