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
  SearchField,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CreateNotev2(props) {
  const { NoteTitle, overrides, ...rest } = props;
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
    submitUnderScorebuttonBackgroundColor,
    setSubmitUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    clearUnderScorebuttonBackgroundColor,
    setClearUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const noteUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/note",
  });
  const noteUnderScorebuttonOnMouseOver = () => {
    setNoteUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const noteUnderScorebuttonOnMouseLeave = () => {
    setNoteUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
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
  const reminderUnderScorebuttonOnMouseOver = () => {
    setReminderUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const reminderUnderScorebuttonOnMouseLeave = () => {
    setReminderUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
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
  const submitUnderScorebuttonOnMouseOver = () => {
    setSubmitUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const submitUnderScorebuttonOnMouseLeave = () => {
    setSubmitUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 0.6)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 0.6)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const clearUnderScorebuttonOnMouseLeave = () => {
    setClearUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 0.6)");
  };
  const clearUnderScorebuttonOnMouseOver = () => {
    setClearUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  return (
    <View
      width="1335px"
      height="937px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateNotev2")}
      {...rest}
    >
      <View
        width="1345px"
        height="937px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="-10px"
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
          {...getOverrideProps(overrides, "Divider176021467")}
        ></Divider>
        <View
          width="1328px"
          height="171px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="17px"
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
            {...getOverrideProps(overrides, "powered_by_amplify_text176021471")}
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
            {...getOverrideProps(overrides, "powered_by_amplify_text176021472")}
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
          backgroundColor={noteUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Note"
          onClick={() => {
            noteUnderScorebuttonOnClick();
          }}
          onMouseOver={() => {
            noteUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            noteUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "note_button")}
        ></Button>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="115px"
          left="693px"
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
          top="115px"
          left="516px"
          backgroundColor={reminderUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Reminder"
          onClick={() => {
            reminderUnderScorebuttonOnClick();
          }}
          onMouseOver={() => {
            reminderUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            reminderUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "reminder_button")}
        ></Button>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="115px"
          left="870px"
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
        <Divider
          width="1316px"
          height="2px"
          position="absolute"
          top="854px"
          left="17px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider176021485")}
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
                {...getOverrideProps(overrides, "Vector176021491")}
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
                  height: 16.6666259765625,
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
                {...getOverrideProps(overrides, "Vector176021493")}
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
                {...getOverrideProps(overrides, "Vector176021494")}
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
                {...getOverrideProps(overrides, "Vector176021495")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <SelectField
          width="175px"
          height="47px"
          placeholder="My account"
          position="absolute"
          top="34px"
          left="1151px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <Image
          width="1328px"
          height="690px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="166px"
          left="17px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://dqqb8jb1p8fmj.cloudfront.net/AiqBuyerFrontend/bg-silver-01@2x.b626e5f906ef4637bd304f3297a2a4ab.png"
          {...getOverrideProps(overrides, "bg-silver-01@2x 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="188px"
          left="519px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create Note"
          {...getOverrideProps(overrides, "Create Note")}
        ></Text>
        <TextField
          width="300px"
          height="40px"
          placeholder="Title"
          position="absolute"
          top="333px"
          left="286px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <TextAreaField
          width="466px"
          height="110px"
          placeholder="Description"
          position="absolute"
          top="439px"
          left="286px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <SelectField
          width="300px"
          height="unset"
          label="Priority"
          position="absolute"
          top="615px"
          left="633px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <TextField
          width="300px"
          height="61px"
          label="Reminder"
          placeholder="mm/dd/yyy"
          position="absolute"
          top="620px"
          left="286px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "reminder_text_field")}
        ></TextField>
        <Button
          width="303px"
          height="66px"
          position="absolute"
          border="3px SOLID rgba(255,153,0,1)"
          borderRadius="7px"
          top="750px"
          left="calc(50% - 148.5px - -100px)"
          backgroundColor={submitUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="default"
          children="Submit"
          onMouseOver={() => {
            submitUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            submitUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "submit_button")}
        ></Button>
        <Button
          width="303px"
          height="64px"
          position="absolute"
          border="3px SOLID rgba(255,153,0,1)"
          borderRadius="7px"
          top="751px"
          left="calc(50% - 148.5px - 244px)"
          backgroundColor={cancelUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancel"
          onMouseLeave={() => {
            cancelUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            cancelUnderScorebuttonOnMouseOver();
          }}
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
        <Button
          width="156px"
          height="112px"
          position="absolute"
          border="3px SOLID rgba(255,153,0,1)"
          borderRadius="7px"
          top="436px"
          left="calc(50% - 75px - -191.5px)"
          backgroundColor={clearUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="default"
          children="Clear"
          onMouseLeave={() => {
            clearUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            clearUnderScorebuttonOnMouseOver();
          }}
          {...getOverrideProps(overrides, "clear_button")}
        ></Button>
        <SelectField
          width="98px"
          height="unset"
          position="absolute"
          top="218px"
          left="862px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "openai_select_field")}
        ></SelectField>
        <Divider
          width="674px"
          height="1px"
          position="absolute"
          top="265px"
          left="286px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider176231440")}
        ></Divider>
        <Alert
          width="1328px"
          height="146px"
          heading="Error"
          position="absolute"
          top="166px"
          left="17px"
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
