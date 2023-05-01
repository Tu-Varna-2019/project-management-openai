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
} from "@aws-amplify/ui-react/internal";
import {
  Alert,
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  SearchField,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Bin(props) {
  const { overrides, ...rest } = props;
  const noteUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/note",
  });
  const taskUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/task",
  });
  const reminderUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/reminder",
  });
  const binUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/bin",
  });
  return (
    <View
      width="1346px"
      height="986px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Bin")}
      {...rest}
    >
      <View
        width="1352px"
        height="986px"
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
          width="1337px"
          height="4px"
          position="absolute"
          top="175px"
          left="4px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177161739")}
        ></Divider>
        <Divider
          width="1346px"
          height="16px"
          position="absolute"
          top="340px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177161740")}
        ></Divider>
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
          width="112px"
          height="108px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="36px"
          left="69px"
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
            width="100px"
            height="26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="6px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Created by "
            {...getOverrideProps(overrides, "powered_by_amplify_text177161743")}
          ></Text>
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
            width="112px"
            height="29px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="79px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="AWS Amplify"
            {...getOverrideProps(overrides, "powered_by_amplify_text177161744")}
          ></Text>
        </View>
        <SearchField
          width="622px"
          height="unset"
          placeholder="Search note"
          position="absolute"
          top="34px"
          left="349px"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="115px"
          left="339px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Note"
          onClick={() => {
            noteUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "note_button")}
        ></Button>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="115px"
          left="693px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Task"
          onClick={() => {
            taskUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "task_button")}
        ></Button>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="115px"
          left="516px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Reminder"
          onClick={() => {
            reminderUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "reminder_button")}
        ></Button>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="115px"
          left="870px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Bin"
          onClick={() => {
            binUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "bin_button")}
        ></Button>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="34px"
          left="992px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Contact us"
          {...getOverrideProps(overrides, "contact_us_button")}
        ></Button>
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
        <Image
          width="1347px"
          height="173px"
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
          src="https://d1.awsstatic.com/ColorSet3_Background_FY22.bae4ee87ebdbec9f09a6d3d0eb57b29c607e936e.png"
          {...getOverrideProps(overrides, "aws_image_background")}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="248px"
          height="57.02px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="266px"
          left="546px"
          {...getOverrideProps(overrides, "Feedback")}
        >
          <Badge
            width="unset"
            height="33px"
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
            height="15.02px"
            position="absolute"
            top="42px"
            left="28px"
            size="default"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
        </View>
        <Image
          width="1341px"
          height="663px"
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
        <Divider
          width="1316px"
          height="2px"
          position="absolute"
          top="919px"
          left="19px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177161757")}
        ></Divider>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="74px"
          left="100px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "amplify-logo.677fad72 1")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="36.35px"
            height="25px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Clip path group")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="36.35px"
              height="25px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "clip0")}
            >
              <Icon
                width="36.35px"
                height="25px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 36.35107421875,
                  height: 25,
                }}
                paths={[
                  {
                    d: "M36.3508 0L0 0L0 25L36.3508 25L36.3508 0Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector177161761")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="36.35px"
              height="25px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group")}
            >
              <Icon
                width="21.02px"
                height="16.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 21.0224609375,
                  height: 16.666667938232422,
                }}
                paths={[
                  {
                    d: "M7.40773 4.91926L0 16.6667L21.0222 16.6667L18.368 12.4578L7.98281 12.4578L13.1773 4.22649L10.5121 0L7.40773 4.91926Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="33.33%"
                bottom="0.01%"
                left="0%"
                right="42.17%"
                {...getOverrideProps(overrides, "Vector177161763")}
              ></Icon>
              <Icon
                width="16.64px"
                height="23.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.642578125,
                  height: 23.015838623046875,
                }}
                paths={[
                  {
                    d: "M0 4.06973L11.6339 23.0158L16.6426 23.0158L2.49916 0L0 4.06973Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="7.94%"
                bottom="0%"
                left="32.53%"
                right="21.69%"
                {...getOverrideProps(overrides, "Vector177161764")}
              ></Icon>
              <Icon
                width="21.02px"
                height="25px"
                viewBox={{ minX: 0, minY: 0, width: 21.0224609375, height: 25 }}
                paths={[
                  {
                    d: "M0 0L15.8942 25L21.0222 25L5.12158 0L0 0Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="42.17%"
                right="0%"
                {...getOverrideProps(overrides, "Vector177161765")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Badge
          width="326px"
          height="40px"
          position="absolute"
          backgroundColor="rgba(255,153,0,1)"
          top="213px"
          left="507px"
          size="default"
          variation="default"
          children="Welcome back"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <SelectField
          width="175px"
          height="40px"
          label="My account"
          placeholder="My account"
          position="absolute"
          top="34px"
          left="1136px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <TextField
          width="300px"
          height="unset"
          label="Title"
          placeholder="Title"
          position="absolute"
          top="398px"
          left="61px"
          size="default"
          isDisabled={true}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <SelectField
          width="191px"
          height="unset"
          label="Priority"
          position="absolute"
          top="398px"
          left="466px"
          placeholder=""
          size="default"
          isDisabled={true}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <TextAreaField
          width="367px"
          height="unset"
          label="Description"
          placeholder="Description"
          position="absolute"
          top="511px"
          left="61px"
          size="default"
          isDisabled={true}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <Button
          width="279px"
          height="62px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="835px"
          left="60px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Restore"
          {...getOverrideProps(overrides, "restore_button177161771")}
        ></Button>
        <Button
          width="279px"
          height="62px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="835px"
          left="372px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Permanently delete"
          {...getOverrideProps(overrides, "restore_button177161904")}
        ></Button>
        <TextField
          width="242px"
          height="unset"
          label="Reminder"
          placeholder="mm/dd/yyy"
          position="absolute"
          top="690px"
          left="60px"
          size="default"
          isDisabled={true}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "reminder_text_field")}
        ></TextField>
        <Divider
          width="524.08px"
          height="3.99px"
          position="absolute"
          top="896.12px"
          left="718.05px"
          transformOrigin="top left"
          transform="rotate(-89.87deg)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "divider_notes_info")}
        ></Divider>
        <Button
          width="205px"
          height="82px"
          position="absolute"
          borderRadius="4px"
          top="226px"
          left="971px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Delete all"
          {...getOverrideProps(overrides, "create_note_button")}
        ></Button>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(20,81,117,1)"
          lineHeight="48.409088134765625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="669px"
          left="416px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="There are no notes in the bin"
          {...getOverrideProps(overrides, "notes_displayed_here_no_note")}
        ></Text>
        <Image
          width="262px"
          height="168px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="485px"
          left="563px"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="https://vectorified.com/images/bin-icon-16.png"
          {...getOverrideProps(overrides, "amplify_image_logo_no_note")}
        ></Image>
        <Divider
          width="100px"
          position="absolute"
          top="155px"
          left="897px"
          boxShadow="0px 16px 24px rgba(0, 0, 0, 0.14000000059604645)"
          size="large"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177162054")}
        ></Divider>
        <Alert
          width="1342px"
          height="173px"
          heading="Success"
          position="absolute"
          top="171px"
          left="5px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="success"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "success_alert")}
        ></Alert>
        <Alert
          width="1342px"
          height="173px"
          heading="Info"
          position="absolute"
          top="171px"
          left="4px"
          variation="info"
          isDismissible={false}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "confirm_cancel_alert")}
        ></Alert>
        <Button
          width="122px"
          height="64px"
          position="absolute"
          top="280px"
          left="1101px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Confirm"
          {...getOverrideProps(overrides, "confirm_button")}
        ></Button>
        <Button
          width="123px"
          height="64px"
          position="absolute"
          top="280px"
          left="1223px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Cancel"
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
      </View>
      <Badge
        width="898px"
        height="unset"
        position="absolute"
        top="937px"
        left="227px"
        size="default"
        variation="default"
        children="AWS Amplify Studio is supported by Amazon Web Services © 2023, Amazon Web Services, Inc. and its affiliates. All rights reserved. View the site terms and privacy policy ."
        {...getOverrideProps(overrides, "copyright_text")}
      ></Badge>
    </View>
  );
}
