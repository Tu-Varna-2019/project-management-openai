/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Card,
  Divider,
  Flex,
  Icon,
  Rating,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function HomePage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1346px"
      height="933px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomePage")}
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
        <Divider
          width="1337px"
          height="4px"
          position="absolute"
          top="175px"
          left="4px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider175552033")}
        ></Divider>
        <Card
          width="1346px"
          height="586px"
          position="absolute"
          padding="15px 15px 15px 15px"
          top="347px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          variation="default"
          {...getOverrideProps(overrides, "notes_card_contents")}
        ></Card>
        <Divider
          width="1346px"
          height="16px"
          position="absolute"
          top="340px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider175691694")}
        ></Divider>
        <Divider
          width="1316px"
          height="2px"
          position="absolute"
          top="854px"
          left="17px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider175691724")}
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
        <Flex
          gap="0"
          direction="column"
          width="1320px"
          height="165px"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="175px"
          left="4px"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "welcome_screen_card")}
        ></Flex>
        <Badge
          width="327px"
          height="40px"
          justifyContent="flex-start"
          position="absolute"
          backgroundColor="rgba(255,153,0,1)"
          top="196px"
          left="509px"
          size="default"
          variation="default"
          {...getOverrideProps(overrides, "welcome_back_badge")}
        ></Badge>
        <View
          padding="0px 0px 0px 0px"
          width="248px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="256px"
          left="549px"
          {...getOverrideProps(overrides, "Feedback")}
        >
          <Badge
            width="unset"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            size="default"
            variation="default"
            children="We’d love to hear your feedback !"
            {...getOverrideProps(overrides, "feedback_text")}
          ></Badge>
          <Rating
            width="unset"
            height="unset"
            position="absolute"
            top="41px"
            left="48px"
            size="default"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
        </View>
        <Button
          width="207px"
          height="84px"
          position="absolute"
          border="1px SOLID rgba(0,0,0,1)"
          top="741px"
          left="1114px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Create"
          {...getOverrideProps(overrides, "create_note_button")}
        ></Button>
        <View
          width="1346px"
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
        <View
          padding="0px 0px 0px 0px"
          width="1273px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="30px"
          left="36px"
          {...getOverrideProps(overrides, "components_footer")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="223px"
            height="35px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="4px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Powered by AWS Amplify"
            {...getOverrideProps(overrides, "powered_by_amplify_text")}
          ></Text>
          <Flex
            gap="8px"
            direction="column"
            width="159px"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            position="absolute"
            top="0px"
            left="1114px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(35,47,62,1)"
            {...getOverrideProps(overrides, "my_account_select_field")}
          >
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "InputGroup")}
            >
              <Flex
                gap="10px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(35,47,62,1)"
                borderRadius="5px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Input")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="unset"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="My account"
                  {...getOverrideProps(overrides, "placeholder")}
                ></Text>
                <Icon
                  width="24px"
                  height="24px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="chevron_down"
                  fontSize="24px"
                  {...getOverrideProps(overrides, "Icon")}
                ></Icon>
              </Flex>
            </Flex>
          </Flex>
        </View>
        <SearchField
          width="529px"
          height="unset"
          placeholder="Search note"
          position="absolute"
          top="34px"
          left="408px"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Button
          width="127px"
          height="unset"
          position="absolute"
          borderRadius="4px"
          top="102px"
          left="356px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Note"
          {...getOverrideProps(overrides, "note_button")}
        ></Button>
        <Button
          width="127px"
          height="unset"
          position="absolute"
          borderRadius="4px"
          top="102px"
          left="678px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Task"
          {...getOverrideProps(overrides, "task_button")}
        ></Button>
        <Button
          width="127px"
          height="unset"
          position="absolute"
          borderRadius="4px"
          top="102px"
          left="517px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Reminder"
          {...getOverrideProps(overrides, "reminder_button")}
        ></Button>
        <Button
          width="127px"
          height="unset"
          position="absolute"
          borderRadius="4px"
          top="102px"
          left="839px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Bin"
          {...getOverrideProps(overrides, "bin_button")}
        ></Button>
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
      </View>
    </View>
  );
}
