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
  Alert,
  Badge,
  Button,
  Card,
  Divider,
  Image,
  PasswordField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function ResetPassword(props) {
  const { overrides, ...rest } = props;
  const [
    confirmUnderScorebuttonBackgroundColor,
    setConfirmUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const confirmUnderScorebuttonOnMouseOver = () => {
    setConfirmUnderScorebuttonBackgroundColor("lightskyblue");
  };
  const confirmUnderScorebuttonOnMouseLeave = () => {
    setConfirmUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("lightskyblue");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  return (
    <View
      width="1346px"
      height="937px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ResetPassword")}
      {...rest}
    >
      <View
        width="1346px"
        height="937px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Image
          width="1346px"
          height="937px"
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
          {...getOverrideProps(overrides, "aws image background notes 1")}
        ></Image>
        <Divider
          width="1316px"
          height="2px"
          position="absolute"
          top="854px"
          left="17px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Badge
          width="898px"
          height="unset"
          position="absolute"
          top="876px"
          left="224px"
          size="default"
          variation="default"
          children="AWS Amplify Studio is supported by Amazon Web Services © 2023, Amazon Web Services, Inc. and its affiliates. All rights reserved. View the site terms and privacy policy ."
          {...getOverrideProps(overrides, "copyright_text")}
        ></Badge>
        <View
          padding="0px 0px 0px 0px"
          width="655px"
          height="607px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="199px"
          left="348px"
          {...getOverrideProps(overrides, "Form_field")}
        >
          <Card
            width="655px"
            height="607px"
            position="absolute"
            padding="15px 15px 15px 15px"
            top="0px"
            left="0px"
            border="1px SOLID rgba(104,112,120,1)"
            variation="elevated"
            {...getOverrideProps(overrides, "Card")}
          ></Card>
          <Button
            width="210px"
            height="91px"
            position="absolute"
            border="1px SOLID rgba(255,255,255,1)"
            top="453px"
            left="70px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            backgroundColor={confirmUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="default"
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
            width="210px"
            height="91px"
            position="absolute"
            border="1px SOLID rgba(255,255,255,1)"
            top="453px"
            left="370px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            backgroundColor={cancelUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="default"
            children="Cancel"
            onMouseOver={() => {
              cancelUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              cancelUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "cancel_button")}
          ></Button>
          <PasswordField
            width="390px"
            height="82.92px"
            label="Old Password"
            position="absolute"
            top="46px"
            left="130px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={false}
            {...getOverrideProps(overrides, "old_password_field")}
          ></PasswordField>
          <PasswordField
            width="390px"
            height="82.92px"
            label="New Password"
            position="absolute"
            top="154px"
            left="124px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={false}
            {...getOverrideProps(overrides, "new_password_field")}
          ></PasswordField>
          <PasswordField
            width="390px"
            height="82.92px"
            label="Confirm Password"
            position="absolute"
            top="300.2px"
            left="124px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={false}
            {...getOverrideProps(overrides, "confirm_password_field")}
          ></PasswordField>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="800"
          color="rgba(84,84,84,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="98px"
          left="580px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="MNotes"
          {...getOverrideProps(overrides, "MNotes")}
        ></Text>
        <Image
          width="106px"
          height="132px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="54px"
          left="774px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Faws-ec2-logo-png-transparent.png&f=1&nofb=1&ipt=4b831e1f2fa38b82e4d5320d48c551604d111dee5b0e481f95970b469a094c2e&ipo=images"
          {...getOverrideProps(overrides, "logo 1")}
        ></Image>
        <Alert
          width="1346px"
          height="130px"
          heading="Error"
          position="absolute"
          top="0px"
          left="0px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="error"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "error_alert")}
        ></Alert>
      </View>
    </View>
  );
}
