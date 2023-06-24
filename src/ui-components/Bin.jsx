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
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Bin(props) {
  const { noteV2, overrides, ...rest } = props;
  const [
    restoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneBackgroundColor,
    setRestoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [
    restoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourBackgroundColor,
    setRestoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [
    createUnderScorenoteUnderScorebuttonBackgroundColor,
    setCreateUnderScorenoteUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
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
    confirmUnderScorecancelUnderScorealertDisplay,
    setConfirmUnderScorecancelUnderScorealertDisplay,
  ] = useStateMutationAction(undefined);
  const restoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneOnMouseOver =
    () => {
      setRestoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneBackgroundColor(
        "rgba(195, 120, 6, 1)"
      );
    };
  const restoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneOnMouseLeave =
    () => {
      setRestoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneBackgroundColor(
        "rgba(255, 153, 0, 1)"
      );
    };
  const restoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourOnMouseLeave =
    () => {
      setRestoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourBackgroundColor(
        "rgba(255, 153, 0, 1)"
      );
    };
  const restoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourOnMouseOver =
    () => {
      setRestoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourBackgroundColor(
        "rgba(195, 120, 6, 1)"
      );
    };
  const createUnderScorenoteUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScorenoteUnderScorebuttonBackgroundColor(
      "rgba(255, 153, 0, 1)"
    );
  };
  const createUnderScorenoteUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScorenoteUnderScorebuttonBackgroundColor(
      "rgba(188, 116, 9, 1)"
    );
  };
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
  const cancelUnderScorebuttonOnClick = () => {
    setConfirmUnderScorecancelUnderScorealertDisplay("none");
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
      {...getOverrideProps(overrides, "Bin")}
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
          left="calc(50% - 311px - 0px)"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          itemProp={noteV2?.Title}
          itemRef={noteV2?.Title}
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="34px"
          left="1579px"
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
          width="1889px"
          height="2px"
          position="absolute"
          top="1015px"
          left="15px"
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
                  height: 16.666671752929688,
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
          top="34px"
          left="1723px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <View
          padding="0px 0px 0px 0px"
          width="668.28px"
          height="600px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="373px"
          left="45px"
          {...getOverrideProps(overrides, "edit_note_form")}
        >
          <TextField
            width="626px"
            height="unset"
            label="Title"
            placeholder="Title"
            position="absolute"
            top="26px"
            left="6px"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "title_text_field")}
          ></TextField>
          <SelectField
            width="271px"
            height="100px"
            label="Priority"
            position="absolute"
            top="344px"
            left="353px"
            placeholder=""
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "priority_select_field")}
          ></SelectField>
          <TextAreaField
            width="626px"
            height="141px"
            label="Description"
            placeholder="Description"
            position="absolute"
            top="159px"
            left="6px"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "description_text_field")}
          ></TextAreaField>
          <Button
            width="288px"
            height="62px"
            position="absolute"
            border="1px SOLID rgba(35,47,62,1)"
            top="539px"
            left="-1px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            backgroundColor={
              restoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="default"
            children="Restore"
            onMouseOver={() => {
              restoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneOnMouseOver();
            }}
            onMouseLeave={() => {
              restoreUnderScorebuttonOneSevenSevenOneSixOneSevenSevenOneOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "restore_button177161771")}
          ></Button>
          <Button
            width="279px"
            height="62px"
            position="absolute"
            border="1px SOLID rgba(35,47,62,1)"
            top="539px"
            left="338px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            backgroundColor={
              restoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="default"
            children="Permanently delete"
            onMouseLeave={() => {
              restoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourOnMouseLeave();
            }}
            onMouseOver={() => {
              restoreUnderScorebuttonOneSevenSevenOneSixOneNineZeroFourOnMouseOver();
            }}
            {...getOverrideProps(overrides, "restore_button177161904")}
          ></Button>
          <TextField
            width="265px"
            height="unset"
            label="Reminder"
            placeholder="mm/dd/yyy"
            position="absolute"
            top="370px"
            left="6px"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "reminder_text_field")}
          ></TextField>
          <Divider
            width="585.46px"
            height="3.99px"
            position="absolute"
            top="585.46px"
            left="662.91px"
            transformOrigin="top left"
            transform="rotate(-89.87deg)"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "divider_notes_info")}
          ></Divider>
        </View>
        <Button
          width="205px"
          height="82px"
          position="absolute"
          borderRadius="4px"
          top="225px"
          right="172px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor={createUnderScorenoteUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="default"
          children="Delete all"
          onMouseLeave={() => {
            createUnderScorenoteUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            createUnderScorenoteUnderScorebuttonOnMouseOver();
          }}
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
          top="712px"
          left="calc(50% - 278px - -26px)"
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
          left="calc(50% - 131px - 0px)"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="https://vectorified.com/images/bin-icon-16.png"
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
          top="111px"
          left="calc(50% - 340.5px - -0.5px)"
          {...getOverrideProps(overrides, "task_bar_buttons")}
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
            left="558px"
            boxShadow="0px 16px 24px rgba(0, 0, 0, 0.14000000059604645)"
            size="large"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider177162054")}
          ></Divider>
        </View>
        <Alert
          width="1920px"
          height="173px"
          heading="Success"
          position="absolute"
          top="171px"
          left="0px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="success"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "success_alert")}
        ></Alert>
        <Alert
          width="1921px"
          height="173px"
          heading="Info"
          position="absolute"
          top="171px"
          left="-1px"
          variation="info"
          isDismissible={false}
          hasIcon={true}
          children="Description"
          display={confirmUnderScorecancelUnderScorealertDisplay}
          {...getOverrideProps(overrides, "confirm_cancel_alert")}
        ></Alert>
        <Button
          width="174px"
          height="64px"
          position="absolute"
          top="280px"
          left="1570px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Confirm"
          {...getOverrideProps(overrides, "confirm_button")}
        ></Button>
        <Button
          width="176px"
          height="64px"
          position="absolute"
          top="280px"
          left="1744px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Cancel"
          onClick={() => {
            cancelUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
      </View>
      <Badge
        width="898px"
        height="unset"
        position="absolute"
        top="1028px"
        left="calc(50% - 449px - 0px)"
        size="default"
        variation="default"
        children="AWS Amplify Studio is supported by Amazon Web Services © 2023, Amazon Web Services, Inc. and its affiliates. All rights reserved. View the site terms and privacy policy ."
        {...getOverrideProps(overrides, "copyright_text")}
      ></Badge>
    </View>
  );
}
