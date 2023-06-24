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
  Badge,
  Button,
  Divider,
  Icon,
  Image,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditTicketFull(props) {
  const { user, overrides, ...rest } = props;
  const [
    createUnderScorebuttonBackgroundColor,
    setCreateUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(104,112,120,1)");
  const createUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const createUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(255, 255, 255, 1)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(104, 112, 120, 1)");
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
      {...getOverrideProps(overrides, "EditTicketFull")}
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
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
        <Image
          width="1919px"
          height="835px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="247px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
          {...getOverrideProps(overrides, "aws_image_background_notes")}
        ></Image>
        <Image
          width="1920px"
          height="135px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="112px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://d1.awsstatic.com/aws-media-series-assets/Site-Merch_AWS-Back-to-Basics_Vid-Series_Hero-BG.c12b4f1f0099e91cbf1dd0b7efbdf53e8e6a8f84.png"
          {...getOverrideProps(overrides, "aws_image_background")}
        ></Image>
        <Divider
          width="304px"
          height="1px"
          position="absolute"
          top="989px"
          left="15px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178532437")}
        ></Divider>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(246,133,54,1)"
          lineHeight="32px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="106px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="263px"
          left="366px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="KAI-"
          {...getOverrideProps(overrides, "ticket_id_text")}
        ></Text>
        <TextField
          width="763px"
          height="73px"
          position="absolute"
          top="430px"
          left="368px"
          label=""
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <Badge
          width="31px"
          height="33px"
          position="absolute"
          top="319px"
          left="366px"
          size="default"
          variation="info"
          children="0"
          {...getOverrideProps(overrides, "watch_badge")}
        ></Badge>
        <TextAreaField
          width="763px"
          height="138px"
          label="Description"
          placeholder="Describe the task"
          position="absolute"
          top="519px"
          left="365px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <TextAreaField
          width="763px"
          height="135px"
          label="Comments"
          placeholder="Describe the task"
          position="absolute"
          top="689px"
          left="365px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "comments_text_field")}
        ></TextAreaField>
        <Button
          width="151px"
          height="44px"
          position="absolute"
          top="380px"
          left="368px"
          backgroundColor={createUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onMouseLeave={() => {
            createUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            createUnderScorebuttonOnMouseOver();
          }}
          {...getOverrideProps(overrides, "create_button")}
        ></Button>
        <Button
          width="151px"
          height="44px"
          position="absolute"
          top="380px"
          left="533px"
          backgroundColor={cancelUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cancel"
          onMouseOver={() => {
            cancelUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            cancelUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
        <SelectField
          width="148px"
          height="unset"
          position="absolute"
          top="374px"
          left="983px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "more_options_select_field")}
        ></SelectField>
        <Button
          width="unset"
          height="unset"
          position="absolute"
          top="314px"
          left="397px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Watch this issue"
          {...getOverrideProps(overrides, "watch_issue_button")}
        ></Button>
        <View
          padding="0px 0px 0px 0px"
          width="162.08px"
          height="63.28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="13.7%"
          bottom="80.44%"
          left="1.41%"
          right="90.15%"
          {...getOverrideProps(overrides, "logo-gradient-blue-jira")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="92.31px"
            height="54.47px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.22%"
            bottom="5.71%"
            left="43.05%"
            right="0%"
            {...getOverrideProps(overrides, "Jira")}
          >
            <Icon
              width="19.18px"
              height="51.29px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 19.18017578125,
                height: 51.294921875,
              }}
              paths={[
                {
                  d: "M13.1435 0L19.1802 0L19.1802 35.4304C19.1802 44.7727 15.5887 51.2947 7.25951 51.2947C4.12652 51.2947 1.68118 50.6779 0 49.9727L0 43.1864C1.83401 44.0678 4.05 44.5085 6.26599 44.5085C11.3858 44.5085 13.1435 40.9829 13.1435 35.8711L13.1435 0Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="5.02%"
              bottom="0.81%"
              left="0%"
              right="79.22%"
              {...getOverrideProps(overrides, "Vector180442973")}
            ></Icon>
            <Icon
              width="8.1px"
              height="53.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.10009765625,
                height: 53.6748046875,
              }}
              paths={[
                {
                  d: "M4.05 0C6.41883 0 8.1 1.67457 8.1 4.67117C8.1 7.57965 6.41883 9.34236 4.05 9.34236C1.68097 9.34236 0 7.66779 0 4.67117C0 1.76271 1.68097 0 4.05 0ZM1.06984 14.8948L6.87732 14.8948L6.87732 53.6746L1.06984 53.6746L1.06984 14.8948Z",
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
              bottom="1.46%"
              left="28.39%"
              right="62.83%"
              {...getOverrideProps(overrides, "Vector180442974")}
            ></Icon>
            <Icon
              width="17.58px"
              height="39.44px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.57568359375,
                height: 39.4365234375,
              }}
              paths={[
                {
                  d: "M5.65487 39.4365L0 39.4365L0 0.656731L5.65487 0.656731L5.65487 7.44326C7.6415 2.86018 11.0039 -0.400825 17.5755 0.0398653L17.5755 6.56188C10.1634 5.6805 5.65487 8.23631 5.65487 16.5211L5.65487 39.4365Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.14%"
              bottom="1.46%"
              left="45.28%"
              right="35.68%"
              {...getOverrideProps(overrides, "Vector180442975")}
            ></Icon>
            <Icon
              width="30.64px"
              height="40.37px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 30.642578125,
                height: 40.36572265625,
              }}
              paths={[
                {
                  d: "M24.8348 32.6101C22.6954 37.722 18.6454 40.3658 13.449 40.3658C4.50851 40.3658 0 31.6406 0 20.1829C0 9.254 4.73764 0 14.1368 0C19.0273 0 22.8482 2.5558 24.8348 7.57958L24.8348 0.793041L30.6425 0.793041L30.6425 39.5728L24.8348 39.5728L24.8348 32.6101ZM14.9773 34.1964C20.1737 34.1964 24.7585 30.4066 24.7585 21.7693L24.7585 18.6847C24.7585 10.0473 20.5557 6.2575 15.5887 6.2575C9.09332 6.2575 5.73117 11.1932 5.73117 20.1829C5.80748 29.5253 9.017 34.1964 14.9773 34.1964Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="25.89%"
              bottom="0%"
              left="66.8%"
              right="0%"
              {...getOverrideProps(overrides, "Vector180442976")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="54.87px"
            height="63.28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="66.15%"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="28.73px"
              height="32.87px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.73193359375,
                height: 32.87451171875,
              }}
              paths={[
                {
                  d: "M26.4395 0L0 0C0 7.57965 5.34898 13.7491 11.9206 13.7491L16.8111 13.7491L16.8111 19.1254C16.8111 26.7049 22.1603 32.8746 28.732 32.8746L28.732 2.64407C28.732 1.14577 27.7387 0 26.4395 0Z",
                  fill: "rgba(38,132,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="48.05%"
              left="47.63%"
              right="0%"
              {...getOverrideProps(overrides, "Vector180442978")}
            ></Icon>
            <Icon
              width="28.73px"
              height="32.96px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.73193359375,
                height: 32.962890625,
              }}
              paths={[
                {
                  d: "M26.4396 0L0 0C0 7.57965 5.34905 13.7491 11.9208 13.7491L16.8113 13.7491L16.8113 19.2135C16.8113 26.7931 22.1605 32.9628 28.7321 32.9628L28.7321 2.64397C28.7321 1.23389 27.7386 0 26.4396 0Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="23.96%"
              bottom="23.96%"
              left="23.82%"
              right="23.82%"
              {...getOverrideProps(overrides, "Vector_2")}
            ></Icon>
            <Icon
              width="28.73px"
              height="32.87px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.73193359375,
                height: 32.87451171875,
              }}
              paths={[
                {
                  d: "M26.4397 0L0 0C0 7.57958 5.34905 13.749 11.9207 13.749L16.8113 13.749L16.8113 19.1254C16.8113 26.7049 22.1603 32.8744 28.732 32.8744L28.732 2.64389C28.732 1.14564 27.6624 0 26.4397 0Z",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="48.05%"
              bottom="0%"
              left="0%"
              right="47.63%"
              {...getOverrideProps(overrides, "Vector_3")}
            ></Icon>
          </View>
        </View>
        <Divider
          height="753px"
          position="absolute"
          top="292px"
          left="1199px"
          size="default"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider52565")}
        ></Divider>
      </View>
    </View>
  );
}
