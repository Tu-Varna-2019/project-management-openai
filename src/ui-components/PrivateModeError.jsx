/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function PrivateModeError(props) {
  const { overrides, ...rest } = props;
  const logUnderScoreoutUnderScorebuttonOnClick = useAuthSignOutAction({
    global: false,
  });
  return (
    <View
      width="1920px"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PrivateModeError")}
      {...rest}
    >
      <View
        width="1920px"
        height="1080px"
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
        <Divider
          width="1337px"
          height="4px"
          position="absolute"
          top="175px"
          left="4px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider3482751")}
        ></Divider>
        <Divider
          width="1346px"
          height="16px"
          position="absolute"
          top="340px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider3482752")}
        ></Divider>
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
        <Image
          width="1919px"
          height="1080px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="1px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
          {...getOverrideProps(overrides, "aws_image_background_notes")}
        ></Image>
        <Flex
          gap="141px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="245px"
          left="calc(50% - 468px - 0px)"
          padding="0px 10px 0px 10px"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Text
            fontFamily="Inter"
            fontSize="96px"
            fontWeight="700"
            color="rgba(104,112,120,1)"
            lineHeight="144px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sorry !"
            {...getOverrideProps(overrides, "Sorry !")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="36px"
            fontWeight="700"
            color="rgba(255,153,0,1)"
            lineHeight="54px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="App  is not supported in this browser's private mode"
            {...getOverrideProps(
              overrides,
              "App is not supported in this browser's private mode"
            )}
          ></Text>
        </Flex>
        <Button
          width="399px"
          height="102px"
          position="absolute"
          top="698px"
          left="calc(50% - 199.5px - -0.5px)"
          backgroundColor="rgba(255,153,0,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Log out"
          onClick={() => {
            logUnderScoreoutUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "log_out_button")}
        ></Button>
      </View>
    </View>
  );
}
