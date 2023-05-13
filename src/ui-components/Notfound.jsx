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
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  SearchField,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function Notfound(props) {
  const { TaskBarMouseLeave, overrides, ...rest } = props;
  const [
    noteUnderScorebuttonBackgroundColor,
    setNoteUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    reminderUnderScorebuttonBackgroundColor,
    setReminderUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    taskUnderScorebuttonBackgroundColor,
    setTaskUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    binUnderScorebuttonBackgroundColor,
    setBinUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
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
      {...getOverrideProps(overrides, "Notfound")}
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
          {...getOverrideProps(overrides, "Divider176001288")}
        ></Divider>
        <Divider
          width="1346px"
          height="16px"
          position="absolute"
          top="340px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider176001289")}
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
          top="31px"
          left="74px"
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
            {...getOverrideProps(overrides, "powered_by_amplify_text176001292")}
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
            {...getOverrideProps(overrides, "powered_by_amplify_text176001293")}
          ></Text>
        </View>
        <SearchField
          width="722px"
          height="unset"
          placeholder="Search note"
          gap="20px"
          alignItems="center"
          position="absolute"
          top="calc(50% - 20px - 476px)"
          left="calc(50% - 361px - 0px)"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="103px"
          left="calc(50% - 376px - 0px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Button
            width="173px"
            height="unset"
            gap="10px"
            justifyContent="space-between"
            shrink="0"
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
            width="173px"
            height="unset"
            gap="10px"
            justifyContent="space-between"
            shrink="0"
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
            width="173px"
            height="unset"
            gap="10px"
            justifyContent="space-between"
            shrink="0"
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
            width="173px"
            height="unset"
            gap="10px"
            justifyContent="space-between"
            shrink="0"
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
        </Flex>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="46px"
          left="1540px"
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
          width="1919px"
          height="909px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="171px"
          left="1px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
          {...getOverrideProps(overrides, "aws_image_background_notes")}
        ></Image>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="69px"
          left="105px"
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
                {...getOverrideProps(overrides, "Vector176001312")}
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
                {...getOverrideProps(overrides, "Vector176001314")}
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
                {...getOverrideProps(overrides, "Vector176001315")}
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
                {...getOverrideProps(overrides, "Vector176001316")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <SelectField
          width="175px"
          height="47px"
          placeholder="My account"
          position="absolute"
          top="41px"
          right="24px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <Flex
          gap="141px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="382px"
          left="calc(50% - 379.5px - 0.5px)"
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
            children="404"
            {...getOverrideProps(overrides, "404")}
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
            children="Sorry, the page you tried cannot be found."
            {...getOverrideProps(
              overrides,
              "Sorry, the page you tried cannot be found."
            )}
          ></Text>
        </Flex>
        <Badge
          width="898px"
          height="29px"
          position="absolute"
          top="1030px"
          left="calc(50% - 449px - 0px)"
          size="default"
          variation="default"
          children="AWS Amplify Studio is supported by Amazon Web Services © 2023, Amazon Web Services, Inc. and its affiliates. All rights reserved. View the site terms and privacy policy ."
          {...getOverrideProps(overrides, "copyright_text")}
        ></Badge>
        <Divider
          width="1868px"
          height="2px"
          position="absolute"
          top="1007px"
          left="31px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider176001306")}
        ></Divider>
      </View>
    </View>
  );
}
