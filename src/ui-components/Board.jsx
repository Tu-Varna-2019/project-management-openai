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
  Flex,
  Icon,
  Image,
  Rating,
  SearchField,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function Board(props) {
  const { user, overrides, ...rest } = props;
  const [
    createUnderScoreticketUnderScorebuttonBackgroundColor,
    setCreateUnderScoreticketUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,255,255,1)");
  const createUnderScoreticketUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScoreticketUnderScorebuttonBackgroundColor(
      "rgba(35, 47, 62, 0.42)"
    );
  };
  const createUnderScoreticketUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScoreticketUnderScorebuttonBackgroundColor(
      "rgba(255, 255, 255, 1)"
    );
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
      {...getOverrideProps(overrides, "Board")}
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
          width="1921px"
          height="112px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="-1px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="7px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(35,47,62,1)"
          {...getOverrideProps(overrides, "footer_rectangle")}
        ></View>
        <SearchField
          width="415px"
          height="unset"
          placeholder="Search"
          position="absolute"
          top="38px"
          left="calc(50% - 207.5px - -359.5px)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "search_ticket_select_field")}
        ></SearchField>
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
        <Image
          width="1593px"
          height="813px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="267px"
          left="327px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
          {...getOverrideProps(overrides, "aws_image_background_notes")}
        ></Image>
        <Button
          width="145px"
          height="48px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="40px"
          left="calc(50% - 71.5px - 125.5px)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor={
            createUnderScoreticketUnderScorebuttonBackgroundColor
          }
          size="default"
          isDisabled={false}
          variation="default"
          children="Create"
          onMouseOver={() => {
            createUnderScoreticketUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            createUnderScoreticketUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "create_ticket_button")}
        ></Button>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="32px"
          left="1579px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 3")}
        >
          <Image
            width="49px"
            height="49px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fnotification-icon-png-4.png&f=1&nofb=1&ipt=259df9d928323bec9e20e8e6ae4894f17fd4fc732b65a2a58e3ab5e8fc8ada98&ipo=images"
            {...getOverrideProps(overrides, "reminder_icon_image")}
          ></Image>
          <Image
            width="51px"
            height="52px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fquestion_mark%2Fquestion_mark_PNG130.png&f=1&nofb=1&ipt=80eb082ba2915fdf4805c3925e746ae65068fe66b2e15c8f6c3d8e6ed5834abd&ipo=images"
            {...getOverrideProps(overrides, "help_icon_image")}
          ></Image>
          <Image
            width="51px"
            height="51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fdtafalonso%2Fandroid-lollipop%2F512%2FSettings-icon.png&f=1&nofb=1&ipt=654a723082ce2bbf65e1318335bb081d913befbeaf8738f6c2986ef2080ae725&ipo=images"
            {...getOverrideProps(overrides, "settings_icon_image")}
          ></Image>
          <Image
            width="49px"
            height="51px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={user?.ImageProfile}
            {...getOverrideProps(overrides, "profile_icon_image")}
          ></Image>
        </Flex>
        <Image
          width="56px"
          height="70px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="22px"
          left="85px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Faws-ec2-logo-png-transparent.png&f=1&nofb=1&ipt=4b831e1f2fa38b82e4d5320d48c551604d111dee5b0e481f95970b469a094c2e&ipo=images"
          {...getOverrideProps(overrides, "logo 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="48px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="33px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="KAI"
          {...getOverrideProps(overrides, "KAI")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="131px"
          height="59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="176px"
          {...getOverrideProps(overrides, "Your work group178522270")}
        >
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="25.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="99px"
            height="38.43px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10.02px"
            left="3px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your work"
            {...getOverrideProps(overrides, "Your work")}
          ></Text>
          <SelectField
            width="131px"
            height="59px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "your_work_select_field")}
          ></SelectField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="118px"
          height="59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="307px"
          {...getOverrideProps(overrides, "Your work group178522279")}
        >
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="25.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="99px"
            height="38.43px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10.02px"
            left="3px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Projects"
            {...getOverrideProps(overrides, "Projects")}
          ></Text>
          <SelectField
            width="118px"
            height="59px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "projects_select_field")}
          ></SelectField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="191px"
          height="59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="425px"
          {...getOverrideProps(overrides, "Your work group178522290")}
        >
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="25.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="187.57px"
            height="38px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10px"
            left="3.43px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Issue Templates"
            {...getOverrideProps(overrides, "Issue Templates")}
          ></Text>
          <SelectField
            width="179.56px"
            height="59px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "issue_templates_select_field")}
          ></SelectField>
        </View>
        <Card
          width="301px"
          height="779px"
          position="absolute"
          padding="11px 11px 11px 11px"
          backgroundColor="rgba(230, 230, 230, 1)"
          top="285px"
          left="375px"
          border="none"
          variation="elevated"
          {...getOverrideProps(overrides, "todo_card")}
        ></Card>
        <Card
          width="301px"
          height="779px"
          position="absolute"
          padding="11px 11px 11px 11px"
          backgroundColor="rgba(230, 230, 230, 1)"
          top="285px"
          left="764px"
          border="none"
          variation="elevated"
          {...getOverrideProps(overrides, "in_progress_card")}
        ></Card>
        <Card
          width="301px"
          height="779px"
          position="absolute"
          padding="11px 11px 11px 11px"
          backgroundColor="rgba(230, 230, 230, 1)"
          top="285px"
          left="1153px"
          border="none"
          variation="elevated"
          {...getOverrideProps(overrides, "in_review_card")}
        ></Card>
        <Card
          width="301px"
          height="779px"
          position="absolute"
          padding="11px 11px 11px 11px"
          backgroundColor="rgba(230, 230, 230, 1)"
          top="285px"
          left="1542px"
          border="none"
          variation="elevated"
          {...getOverrideProps(overrides, "done_card")}
        ></Card>
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
        <Badge
          width="302px"
          height="36px"
          position="absolute"
          backgroundColor="rgba(230,230,230,1)"
          top="196px"
          left="calc(50% - 151px - 434px)"
          size="default"
          variation="default"
          fontSize="20px"
          justifyContent="center"
          children="To Do"
          {...getOverrideProps(overrides, "Badge178502026")}
        ></Badge>
        <Badge
          width="302px"
          height="36px"
          position="absolute"
          backgroundColor="rgba(230,230,230,1)"
          top="196px"
          left="calc(50% - 151px - 45px)"
          size="default"
          variation="default"
          fontSize="20px"
          justifyContent="center"
          children="In progress"
          {...getOverrideProps(overrides, "Badge178532415")}
        ></Badge>
        <Badge
          width="302px"
          height="36px"
          position="absolute"
          backgroundColor="rgba(230,230,230,1)"
          top="196px"
          left="calc(50% - 151px - -344px)"
          size="default"
          variation="default"
          fontSize="20px"
          justifyContent="center"
          children="In review"
          {...getOverrideProps(overrides, "Badge178532419")}
        ></Badge>
        <Badge
          width="302px"
          height="36px"
          position="absolute"
          backgroundColor="rgba(230,230,230,1)"
          top="196px"
          left="calc(50% - 151px - -733px)"
          size="default"
          variation="default"
          fontSize="20px"
          justifyContent="center"
          children="Done"
          {...getOverrideProps(overrides, "Badge178532423")}
        ></Badge>
        <Card
          width="327px"
          height="833px"
          position="absolute"
          top="247px"
          left="0px"
          variation="elevated"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="297px"
          left="92px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My project"
          {...getOverrideProps(overrides, "project_name_text")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(104,112,120,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="332px"
          left="93px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Software project"
          {...getOverrideProps(overrides, "Software project")}
        ></Text>
        <Image
          width="44px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="304px"
          left="31px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F02%2FJira-Emblem.png&f=1&nofb=1&ipt=562cb1cbb88b18989f31a562aca75ae4896610a0da1f2a65ab4281712659dab7&ipo=images"
          {...getOverrideProps(overrides, "project_image_name")}
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
          top="999px"
          left="calc(50% - 124px - 796px)"
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
        <Divider
          width="304px"
          height="1px"
          position="absolute"
          top="987px"
          left="12px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178532437")}
        ></Divider>
        <Divider
          width="304px"
          height="1px"
          position="absolute"
          top="376px"
          left="16px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider178532441")}
        ></Divider>
        <Button
          width="302px"
          height="63px"
          gap="15px"
          position="absolute"
          top="460px"
          left="6px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Roadmap"
          {...getOverrideProps(overrides, "roadmap_button")}
        ></Button>
        <Button
          width="302px"
          height="62px"
          gap="15px"
          position="absolute"
          top="682px"
          left="6px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Backlog"
          {...getOverrideProps(overrides, "backlog_button")}
        ></Button>
        <Button
          width="302px"
          height="62px"
          gap="15px"
          position="absolute"
          top="534px"
          left="6px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Active sprints"
          {...getOverrideProps(overrides, "active_sprints_button")}
        ></Button>
        <Button
          width="302px"
          height="62px"
          gap="15px"
          position="absolute"
          top="608px"
          left="6px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Issues"
          {...getOverrideProps(overrides, "issues_button")}
        ></Button>
        <Button
          width="307px"
          height="63px"
          gap="15px"
          position="absolute"
          top="755px"
          left="5px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Team calendar"
          {...getOverrideProps(overrides, "team_calendar_button")}
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
          left="1.88%"
          right="89.68%"
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
                width: 19.1796875,
                height: 51.2947998046875,
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
              {...getOverrideProps(overrides, "Vector178562483")}
            ></Icon>
            <Icon
              width="8.1px"
              height="53.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.099609375,
                height: 53.674560546875,
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
              {...getOverrideProps(overrides, "Vector178562484")}
            ></Icon>
            <Icon
              width="17.58px"
              height="39.44px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.5751953125,
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
              {...getOverrideProps(overrides, "Vector178562485")}
            ></Icon>
            <Icon
              width="30.64px"
              height="40.37px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 30.642578125,
                height: 40.3658447265625,
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
              {...getOverrideProps(overrides, "Vector178562486")}
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
                width: 28.732421875,
                height: 32.8746337890625,
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
              {...getOverrideProps(overrides, "Vector178562488")}
            ></Icon>
            <Icon
              width="28.73px"
              height="32.96px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 28.732421875,
                height: 32.9627685546875,
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
                width: 28.732421875,
                height: 32.8743896484375,
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
        <View
          padding="0px 0px 0px 0px"
          width="100px"
          height="59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="605px"
          {...getOverrideProps(overrides, "Your work group178532301")}
        >
          <SelectField
            width="94.01px"
            height="59px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "teams_select_field")}
          ></SelectField>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="25.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="98.2px"
            height="38px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10px"
            left="1.8px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Teams"
            {...getOverrideProps(overrides, "Teams")}
          ></Text>
        </View>
      </View>
      <Alert
        width="1920px"
        height="133px"
        heading="Success"
        position="absolute"
        top="114px"
        left="0px"
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
