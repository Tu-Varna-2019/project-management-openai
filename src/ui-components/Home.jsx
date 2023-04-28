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
export default function Home(props) {
  const { user, test, url, overrides, ...rest } = props;
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
  const contactUnderScoreusUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/contact-us",
  });
  const createUnderScorenoteUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/create-note",
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
      {...getOverrideProps(overrides, "Home")}
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
          {...getOverrideProps(overrides, "Divider175552033")}
        ></Divider>
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
            {...getOverrideProps(overrides, "powered_by_amplify_text175572064")}
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
            {...getOverrideProps(overrides, "powered_by_amplify_text175851722")}
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
          about=""
          children="Contact us"
          onClick={() => {
            contactUnderScoreusUnderScorebuttonOnClick();
          }}
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
          src="https://d1.awsstatic.com/aws-media-series-assets/Site-Merch_AWS-Back-to-Basics_Vid-Series_Hero-BG.c12b4f1f0099e91cbf1dd0b7efbdf53e8e6a8f84.png"
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
            alignSelf=""
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
          {...getOverrideProps(overrides, "Divider175691724")}
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
                {...getOverrideProps(overrides, "Vector175851720")}
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
              {...getOverrideProps(overrides, "Group175851715")}
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
                {...getOverrideProps(overrides, "Vector175851716")}
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
                {...getOverrideProps(overrides, "Vector175851717")}
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
                {...getOverrideProps(overrides, "Vector175851718")}
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
          children="Welcome back "
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <SelectField
          width="175px"
          height="47px"
          placeholder="My account"
          position="absolute"
          top="34px"
          left="1151px"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <Alert
          width="1342px"
          height="173px"
          heading="Success"
          position="absolute"
          top="171px"
          left="4px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="success"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "success_alert")}
        ></Alert>
        <Button
          width="207px"
          height="84px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="225px"
          left="970px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Create"
          onClick={() => {
            createUnderScorenoteUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "create_note_button")}
        ></Button>
        <TextField
          width="300px"
          height="unset"
          label="Title"
          placeholder="Title"
          position="absolute"
          top="398px"
          left="61px"
          size="default"
          isDisabled={false}
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
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <SelectField
          width="191px"
          height="unset"
          label="More options"
          position="absolute"
          top="515px"
          left="467px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "more_options_select_field")}
        ></SelectField>
        <TextAreaField
          width="367px"
          height="unset"
          label="Description"
          placeholder="Description"
          position="absolute"
          top="511px"
          left="61px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <Button
          width="599px"
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
          children="Save"
          {...getOverrideProps(overrides, "submit_button")}
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
          isDisabled={false}
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
          {...getOverrideProps(overrides, "Divider176891819")}
        ></Divider>
        <View
          width="45px"
          height="44px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="665px"
          left="573px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "trash-svgrepo-com 1")}
        ></View>
        <View
          width="37px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="714px"
          left="570px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "trash-svgrepo-com(1) 1")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="37px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "SVGRepo_iconCarrier")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="37px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group176891885")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="37px"
                height="40px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group176891886")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="37px"
                  height="40px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group176891887")}
                >
                  <Icon
                    width="37px"
                    height="40px"
                    viewBox={{ minX: 0, minY: 0, width: 37, height: 40 }}
                    paths={[
                      {
                        d: "M35.4584 6.66664L32.3751 6.66664L32.375 6.66664L27.4122 6.66664L26.9054 4.4743C26.2978 1.84445 24.112 0 21.6049 0L15.395 0C12.8879 0 10.7021 1.84445 10.0945 4.47445L9.58777 6.66664L4.62514 6.66664C4.62514 6.66664 4.62507 6.66664 4.625 6.66664L1.54164 6.66664C0.690209 6.66664 0 7.41289 0 8.33336C0 9.25383 0.690209 10 1.54164 10L3.16675 10L4.46565 35.2758C4.60209 37.9259 6.62994 40 9.08516 40L27.9151 40C30.3703 40 32.3981 37.9259 32.5346 35.2759L33.8335 10L35.4584 10C36.3098 10 37 9.25383 37 8.33336C37 7.41289 36.3098 6.66664 35.4584 6.66664ZM13.0859 5.28234C13.3506 4.13672 14.3027 3.33328 15.3951 3.33328L21.605 3.33328C22.6973 3.33328 23.6494 4.13672 23.9141 5.28219L24.2341 6.66664L12.7659 6.66664L13.0859 5.28234ZM29.456 35.0909C29.4105 35.9745 28.7339 36.6666 27.9151 36.6666L9.08516 36.6666C8.26639 36.6666 7.5897 35.9745 7.54417 35.0907L6.25488 10L10.7917 10L26.2084 10L30.7455 10L29.456 35.0909Z",
                        fill: "rgba(255,255,255,1)",
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
                    {...getOverrideProps(overrides, "Vector176891888")}
                  ></Icon>
                  <Icon
                    width="3.08px"
                    height="20px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 3.08349609375,
                      height: 19.99993896484375,
                    }}
                    paths={[
                      {
                        d: "M1.54164 0C0.69021 0 0 0.746171 0 1.66664L0 18.3333C0 19.2537 0.69021 19.9999 1.54164 19.9999C2.39308 19.9999 3.08329 19.2537 3.08329 18.3333L3.08329 1.66664C3.08329 0.746171 2.39308 0 1.54164 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="33.33%"
                    bottom="16.67%"
                    left="29.17%"
                    right="62.5%"
                    {...getOverrideProps(overrides, "Vector176891889")}
                  ></Icon>
                  <Icon
                    width="3.08px"
                    height="20px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 3.08349609375,
                      height: 19.99993896484375,
                    }}
                    paths={[
                      {
                        d: "M1.54164 0C0.690208 0 0 0.746171 0 1.66664L0 18.3333C0 19.2537 0.690208 19.9999 1.54164 19.9999C2.39308 19.9999 3.08329 19.2537 3.08329 18.3333L3.08329 1.66664C3.08329 0.746171 2.39308 0 1.54164 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="33.33%"
                    bottom="16.67%"
                    left="45.83%"
                    right="45.83%"
                    {...getOverrideProps(overrides, "Vector176891890")}
                  ></Icon>
                  <Icon
                    width="3.08px"
                    height="20px"
                    viewBox={{
                      minX: 0,
                      minY: 0,
                      width: 3.08349609375,
                      height: 19.99993896484375,
                    }}
                    paths={[
                      {
                        d: "M1.54164 0C0.69021 0 0 0.746171 0 1.66664L0 18.3333C0 19.2537 0.69021 19.9999 1.54164 19.9999C2.39308 19.9999 3.08328 19.2537 3.08328 18.3333L3.08328 1.66664C3.08336 0.746171 2.39308 0 1.54164 0Z",
                        fill: "rgba(255,255,255,1)",
                        fillRule: "nonzero",
                      },
                    ]}
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="33.33%"
                    bottom="16.67%"
                    left="62.5%"
                    right="29.17%"
                    {...getOverrideProps(overrides, "Vector176891891")}
                  ></Icon>
                </View>
              </View>
            </View>
          </View>
        </View>
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
