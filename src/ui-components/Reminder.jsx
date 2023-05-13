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
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Reminder(props) {
  const { overrides, ...rest } = props;
  const [
    noteUnderScorebuttonBackgroundColor,
    setNoteUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    taskUnderScorebuttonBackgroundColor,
    setTaskUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    reminderUnderScorebuttonBackgroundColor,
    setReminderUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    binUnderScorebuttonBackgroundColor,
    setBinUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    pendingUnderScorepassedUnderScoredividerMarginLeft,
    setPendingUnderScorepassedUnderScoredividerMarginLeft,
  ] = useStateMutationAction(undefined);
  const noteUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/note",
  });
  const noteUnderScorebuttonOnMouseLeave = () => {
    setNoteUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const noteUnderScorebuttonOnMouseOver = () => {
    setNoteUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const taskUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/task",
  });
  const taskUnderScorebuttonOnMouseLeave = () => {
    setTaskUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const taskUnderScorebuttonOnMouseOver = () => {
    setTaskUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const reminderUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/reminder",
  });
  const reminderUnderScorebuttonOnMouseLeave = () => {
    setReminderUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const reminderUnderScorebuttonOnMouseOver = () => {
    setReminderUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const binUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/bin",
  });
  const binUnderScorebuttonOnMouseLeave = () => {
    setBinUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const binUnderScorebuttonOnMouseOver = () => {
    setBinUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const pendingUnderScorereminderUnderScorebuttonOnClick = () => {
    setPendingUnderScorepassedUnderScoredividerMarginLeft("28px");
  };
  const passedUnderScorereminderUnderScorebuttonOnClick = () => {
    setPendingUnderScorepassedUnderScoredividerMarginLeft("270px");
  };
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
      {...getOverrideProps(overrides, "Reminder")}
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
          {...getOverrideProps(overrides, "Divider177182476")}
        ></Divider>
        <View
          width="1921px"
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
            {...getOverrideProps(overrides, "powered_by_amplify_text177182480")}
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
            {...getOverrideProps(overrides, "powered_by_amplify_text177182481")}
          ></Text>
        </View>
        <SearchField
          width="622px"
          height="unset"
          placeholder="Search note"
          position="absolute"
          top="34px"
          left="calc(50% - 311px - 0px)"
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
          top="40px"
          left="1560px"
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
          width="1921px"
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
          src="https://d1.awsstatic.com/legal/builders-library/WEB_Library-header.d958a0d6de10906ba0ed43e35bfd1669a3c84031.jpg"
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
          left="calc(50% - 124px - 0px)"
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
          width="1916px"
          height="736px"
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
          width="1871px"
          height="2px"
          position="absolute"
          top="1016px"
          left="35px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177182494")}
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
                {...getOverrideProps(overrides, "Vector177182498")}
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
                  height: 16.66668701171875,
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
                {...getOverrideProps(overrides, "Vector177182500")}
              ></Icon>
              <Icon
                width="16.64px"
                height="23.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.642578125,
                  height: 23.015869140625,
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
                {...getOverrideProps(overrides, "Vector177182501")}
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
                {...getOverrideProps(overrides, "Vector177182502")}
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
          left="calc(50% - 163px - 0px)"
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
          top="40px"
          left="1724px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
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
          top="729px"
          left="calc(50% - 496.5px - 0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Notes with upcoming reminders are displayed here"
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
          left="calc(50% - 131px - 0px)"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2F24x24-grid-filled-symbols-1-1%2F1024%2Fbell_app_software_mobile-512.png&f=1&nofb=1&ipt=c0d9037e3e82eee21838119a8ed6669e105cc71b921d341d8d1015ac734658a4&ipo=images"
          {...getOverrideProps(overrides, "amplify_image_logo_no_note")}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="681px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="103px"
          left="calc(50% - 340.5px - -2.5px)"
          {...getOverrideProps(overrides, "task_bar_button")}
        >
          <Button
            width="150px"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            backgroundColor={noteUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Note"
            onClick={() => {
              noteUnderScorebuttonOnClick();
            }}
            onMouseLeave={() => {
              noteUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              noteUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "note_button")}
          ></Button>
          <Button
            width="150px"
            height="unset"
            position="absolute"
            top="0px"
            left="354px"
            backgroundColor={taskUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Task"
            onClick={() => {
              taskUnderScorebuttonOnClick();
            }}
            onMouseLeave={() => {
              taskUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              taskUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "task_button")}
          ></Button>
          <Button
            width="150px"
            height="unset"
            position="absolute"
            top="0px"
            left="177px"
            backgroundColor={reminderUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Reminder"
            onClick={() => {
              reminderUnderScorebuttonOnClick();
            }}
            onMouseLeave={() => {
              reminderUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              reminderUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "reminder_button")}
          ></Button>
          <Button
            width="150px"
            height="unset"
            position="absolute"
            top="0px"
            left="531px"
            backgroundColor={binUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Bin"
            onClick={() => {
              binUnderScorebuttonOnClick();
            }}
            onMouseLeave={() => {
              binUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              binUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "bin_button")}
          ></Button>
          <Divider
            width="100px"
            position="absolute"
            top="40px"
            left="205px"
            boxShadow="0px 16px 24px rgba(0, 0, 0, 0.14000000059604645)"
            size="large"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider177182515")}
          ></Divider>
        </View>
        <Divider
          width="142px"
          height="13px"
          position="absolute"
          top="307px"
          left="calc(50% - 71px - 547px)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="large"
          orientation="horizontal"
          marginLeft={pendingUnderScorepassedUnderScoredividerMarginLeft}
          {...getOverrideProps(overrides, "pending_passed_divider")}
        ></Divider>
        <Button
          width="253px"
          height="166px"
          position="absolute"
          top="174px"
          left="4px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="default"
          isDisabled={false}
          variation="link"
          fontSize="30px"
          color="white"
          children="Pending"
          onClick={() => {
            pendingUnderScorereminderUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "pending_reminder_button")}
        ></Button>
        <Button
          width="250px"
          height="166px"
          position="absolute"
          top="175px"
          left="257px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="default"
          isDisabled={false}
          variation="link"
          fontSize="30px"
          color="white"
          children="Passed"
          onClick={() => {
            passedUnderScorereminderUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "passed_reminder_button")}
        ></Button>
        <Divider
          height="153px"
          position="absolute"
          top="179px"
          left="262px"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider177451841")}
        ></Divider>
        <Divider
          width="590.96px"
          height="3.99px"
          position="absolute"
          top="984.07px"
          left="712px"
          transformOrigin="top left"
          transform="rotate(-89.87deg)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "divider_notes_info")}
        ></Divider>
        <View
          padding="0px 0px 0px 0px"
          width="613px"
          height="607px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="377px"
          left="48px"
          {...getOverrideProps(overrides, "edit_note_form")}
        >
          <TextField
            width="596px"
            height="unset"
            label="Title"
            placeholder="Title"
            position="absolute"
            top="91px"
            left="17px"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "title_text_field")}
          ></TextField>
          <SelectField
            width="276px"
            height="unset"
            label="Priority"
            position="absolute"
            top="364px"
            left="335px"
            placeholder=""
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "priority_select_field")}
          ></SelectField>
          <TextAreaField
            width="596px"
            height="unset"
            label="Description"
            placeholder="Description"
            position="absolute"
            top="185px"
            left="17px"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "description_text_field")}
          ></TextAreaField>
          <Button
            width="615px"
            height="62px"
            position="absolute"
            border="1px SOLID rgba(35,47,62,1)"
            top="546px"
            left="-1px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            backgroundColor="rgba(255,153,0,1)"
            size="default"
            isDisabled={false}
            variation="default"
            children="Save"
            {...getOverrideProps(overrides, "submit_button")}
          ></Button>
          <TextField
            width="276px"
            height="unset"
            label="Reminder"
            placeholder="mm/dd/yyy"
            position="absolute"
            top="367px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "reminder_text_field")}
          ></TextField>
          <SwitchField
            width="unset"
            height="unset"
            label="Delete"
            position="absolute"
            top="476px"
            left="502px"
            size="default"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "deleted_switch_field")}
          ></SwitchField>
          <Image
            width="121px"
            height="103px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="275px"
            borderRadius="103px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "imageNote")}
          ></Image>
          <Divider
            width="613px"
            height="1px"
            position="absolute"
            top="531px"
            left="0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider177941757")}
          ></Divider>
        </View>
        <Image
          width="2.45%"
          height="4.35%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="78.15%"
          bottom="17.5%"
          left="3.59%"
          right="93.96%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "shareIcon")}
        ></Image>
      </View>
      <Badge
        width="898px"
        height="unset"
        position="absolute"
        top="1025px"
        left="calc(50% - 449px - 0px)"
        size="default"
        variation="default"
        children="AWS Amplify Studio is supported by Amazon Web Services © 2023, Amazon Web Services, Inc. and its affiliates. All rights reserved. View the site terms and privacy policy ."
        {...getOverrideProps(overrides, "copyright_text")}
      ></Badge>
      <Alert
        width="1921px"
        height="176px"
        heading="Success"
        position="absolute"
        top="171px"
        left="-3px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        variation="success"
        isDismissible={true}
        hasIcon={true}
        children="Description"
        {...getOverrideProps(overrides, "success_alert")}
      ></Alert>
    </View>
  );
}
