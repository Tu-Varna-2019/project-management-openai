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
  Button,
  Card,
  Flex,
  Icon,
  Image,
  SearchField,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { user, ticket, overrides, ...rest } = props;
  const [
    deleteUnderScoreaccountUnderScorebuttonBackgroundColor,
    setDeleteUnderScoreaccountUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(242,78,30,1)");
  const [
    changeUnderScorepasswordUnderScorebuttonBackgroundColor,
    setChangeUnderScorepasswordUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,0.72)");
  const [
    switchUnderScoremnotesUnderScorebuttonBackgroundColor,
    setSwitchUnderScoremnotesUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const [
    saveUnderScoreemailUnderScorebuttonBackgroundColor,
    setSaveUnderScoreemailUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,255,255,1)");
  const deleteUnderScoreaccountUnderScorebuttonOnMouseOver = () => {
    setDeleteUnderScoreaccountUnderScorebuttonBackgroundColor(
      "rgba(194, 66, 28, 1)"
    );
  };
  const deleteUnderScoreaccountUnderScorebuttonOnMouseLeave = () => {
    setDeleteUnderScoreaccountUnderScorebuttonBackgroundColor(
      "rgba(242, 78, 30, 1)"
    );
  };
  const changeUnderScorepasswordUnderScorebuttonOnMouseOver = () => {
    setChangeUnderScorepasswordUnderScorebuttonBackgroundColor(
      "rgba(159, 100, 12, 0.72)"
    );
  };
  const changeUnderScorepasswordUnderScorebuttonOnMouseLeave = () => {
    setChangeUnderScorepasswordUnderScorebuttonBackgroundColor(
      "rgba(255, 153, 0, 0.72)"
    );
  };
  const switchUnderScoremnotesUnderScorebuttonOnMouseOver = () => {
    setSwitchUnderScoremnotesUnderScorebuttonBackgroundColor(
      "rgba(173, 95, 40, 1)"
    );
  };
  const switchUnderScoremnotesUnderScorebuttonOnMouseLeave = () => {
    setSwitchUnderScoremnotesUnderScorebuttonBackgroundColor(
      "rgba(246, 133, 54, 1)"
    );
  };
  const switchUnderScoremnotesUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/home",
  });
  const saveUnderScoreemailUnderScorebuttonOnMouseLeave = () => {
    setSaveUnderScoreemailUnderScorebuttonBackgroundColor(
      "rgba(255, 255, 255, 1)"
    );
  };
  const saveUnderScoreemailUnderScorebuttonOnMouseOver = () => {
    setSaveUnderScoreemailUnderScorebuttonBackgroundColor(
      "rgba(169, 162, 162, 1)"
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
      {...getOverrideProps(overrides, "Profile")}
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
          width="1921px"
          height="824px"
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
        <Button
          width="145px"
          height="48px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="40px"
          left="calc(50% - 71.5px - 125.5px)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Create"
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
            src={ticket?.ImageTicket}
            {...getOverrideProps(overrides, "profile_icon_image179642350")}
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
          height="69px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="176px"
          {...getOverrideProps(overrides, "Your work group179642353")}
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
            height="69px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "your_work_select_field")}
          ></SelectField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="118px"
          height="69px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="307px"
          {...getOverrideProps(overrides, "Your work group179642356")}
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
            height="69px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "projects_select_field")}
          ></SelectField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="191px"
          height="69px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="425px"
          {...getOverrideProps(overrides, "Your work group179642359")}
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
            width="180px"
            height="69px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "issue_templates_select_field")}
          ></SelectField>
        </View>
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
        <View
          padding="0px 0px 0px 0px"
          width="153.5px"
          height="69px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="34px"
          left="605px"
          {...getOverrideProps(overrides, "Your work group179642395")}
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
            width="136.5px"
            height="38px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="11px"
            left="17px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Teams"
            {...getOverrideProps(overrides, "Teams")}
          ></Text>
          <SelectField
            width="131px"
            height="69px"
            label="Your work"
            position="absolute"
            top="0px"
            left="0px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "teams_select_field")}
          ></SelectField>
        </View>
        <SelectField
          width="100px"
          height="80px"
          label="Your work"
          position="absolute"
          top="32px"
          left="1820px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "profile_select_field")}
        ></SelectField>
        <View
          width="114px"
          height="114px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="124px"
          left="75px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "vertical-logo-onecolor-neutral-atlassian 1"
          )}
        >
          <View
            padding="0px 0px 0px 0px"
            width="102.7px"
            height="114px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="6.25%"
            right="3.66%"
            {...getOverrideProps(
              overrides,
              "mini-vertical-logo-onecolor-blue-atlassian"
            )}
          >
            <View
              padding="0px 0px 0px 0px"
              width="102.7px"
              height="114px"
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
              <View
                padding="0px 0px 0px 0px"
                width="102.7px"
                height="12.84px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="88.74%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group_2")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="90.27px"
                  height="12.84px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="12.1%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group_3")}
                >
                  <View
                    padding="0px 0px 0px 0px"
                    width="90.27px"
                    height="12.84px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Group_4")}
                  >
                    <Icon
                      width="9.7px"
                      height="12.84px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.705078125,
                        height: 12.841796875,
                      }}
                      paths={[
                        {
                          d: "M9.70496 9.03735C9.70496 6.82931 8.524 5.80224 5.28889 5.13463C3.49161 4.72387 3.02955 4.31312 3.02955 3.74846C3.02955 3.02955 3.69716 2.7214 4.87813 2.7214C6.31596 2.7214 7.75378 3.18345 9.08865 3.74846L9.08865 0.872815C8.11324 0.410759 6.67542 0 4.98073 0C1.74563 0 0.0513017 1.38617 0.0513017 3.69716C0.0513017 5.54574 0.924111 6.98321 4.26182 7.65083C6.26465 8.06158 6.67542 8.36974 6.67542 9.03735C6.67542 9.70496 6.26466 10.1157 4.82684 10.1157C3.18345 10.1157 1.23227 9.55071 0 8.7805L0 11.81C1.02707 12.3238 2.36194 12.8371 4.82684 12.8371C8.31844 12.9401 9.70496 11.348 9.70496 9.03735Z",
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
                      left="38.05%"
                      right="51.19%"
                      {...getOverrideProps(overrides, "Vector")}
                    ></Icon>
                    <Icon
                      width="10.89px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 10.8857421875,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M0 0L0 12.478L2.67009 12.478L2.67009 2.92695L3.79976 5.49444L7.54822 12.478L10.8859 12.478L10.8859 0L8.21584 0L8.21584 8.06194L7.24043 5.7L4.21052 0L0 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="2%"
                      bottom="0.84%"
                      left="87.94%"
                      right="0%"
                      {...getOverrideProps(overrides, "Vector_2")}
                    ></Icon>
                    <Icon
                      width="2.93px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 2.9267578125,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M2.92695 0L0 0L0 12.478L2.92695 12.478L2.92695 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="2%"
                      bottom="0.84%"
                      left="65.93%"
                      right="30.83%"
                      {...getOverrideProps(overrides, "Vector_3")}
                    ></Icon>
                    <Icon
                      width="9.7px"
                      height="12.84px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.705078125,
                        height: 12.841796875,
                      }}
                      paths={[
                        {
                          d: "M9.70497 9.03735C9.70497 6.82931 8.52399 5.80224 5.28889 5.13463C3.49161 4.72387 3.02955 4.31312 3.02955 3.74846C3.02955 3.02955 3.69717 2.7214 4.87813 2.7214C6.31596 2.7214 7.75343 3.18345 9.08865 3.74846L9.08865 0.872815C8.11288 0.410759 6.67541 0 4.98073 0C1.74562 0 0.0513017 1.38617 0.0513017 3.69716C0.0513017 5.54574 0.924114 6.98321 4.26182 7.65083C6.2643 8.06158 6.67541 8.36974 6.67541 9.03735C6.67541 9.70496 6.2643 10.1157 4.82683 10.1157C3.18345 10.1157 1.23227 9.55071 0 8.7805L0 11.81C1.02671 12.3238 2.36194 12.8371 4.82683 12.8371C8.31844 12.9401 9.70497 11.348 9.70497 9.03735Z",
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
                      left="51.48%"
                      right="37.77%"
                      {...getOverrideProps(overrides, "Vector_4")}
                    ></Icon>
                    <Icon
                      width="6.93px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.93212890625,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M0 0L0 12.478L6.00787 12.478L6.93234 9.75662L2.92695 9.75662L2.92695 0L0 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="2%"
                      bottom="0.84%"
                      left="13.08%"
                      right="79.24%"
                      {...getOverrideProps(overrides, "Vector_5")}
                    ></Icon>
                    <Icon
                      width="9.65px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.65380859375,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M0 0L0 2.67045L3.235 2.67045L3.235 12.478L6.16191 12.478L6.16191 2.67045L9.65366 2.67045L9.65366 0L0 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="1.99%"
                      bottom="0.84%"
                      left="0%"
                      right="89.31%"
                      {...getOverrideProps(overrides, "Vector_6")}
                    ></Icon>
                  </View>
                </View>
                <Icon
                  width="12.53px"
                  height="12.48px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.529296875,
                    height: 12.4775390625,
                  }}
                  paths={[
                    {
                      d: "M8.21587 0L4.3647 0L0 12.4777L3.33771 12.4777L3.95391 10.3726C4.67279 10.5778 5.49437 10.732 6.26462 10.732C7.03487 10.732 7.85645 10.6291 8.57533 10.3726L9.19153 12.4777L12.5292 12.4777L8.21587 0ZM6.26462 8.11324C5.69979 8.11324 5.18629 8.01029 4.67279 7.90769L6.26462 2.46454L7.85642 7.90769C7.34295 8.06194 6.82946 8.11324 6.26462 8.11324Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="1.99%"
                  bottom="0.85%"
                  left="0%"
                  right="87.8%"
                  {...getOverrideProps(overrides, "Vector_7")}
                ></Icon>
                <Icon
                  width="12.53px"
                  height="12.48px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.529296875,
                    height: 12.4775390625,
                  }}
                  paths={[
                    {
                      d: "M8.21619 0L4.36477 0L0 12.4777L3.33771 12.4777L3.95402 10.3726C4.67293 10.5778 5.49444 10.732 6.26466 10.732C7.08653 10.732 7.85674 10.6291 8.57565 10.3726L9.19161 12.4777L12.5293 12.4777L8.21619 0ZM6.26466 8.11323C5.7 8.11323 5.18664 8.01028 4.67293 7.90768L6.26466 2.46453L7.85674 7.90768C7.34303 8.06194 6.82967 8.11323 6.26466 8.11323Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="2%"
                  bottom="0.84%"
                  left="31.5%"
                  right="56.3%"
                  {...getOverrideProps(overrides, "Vector_8")}
                ></Icon>
                <Icon
                  width="12.53px"
                  height="12.48px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.52880859375,
                    height: 12.4775390625,
                  }}
                  paths={[
                    {
                      d: "M8.21584 0L4.36478 0L0 12.4777L3.33771 12.4777L3.95366 10.3726C4.67258 10.5778 5.49445 10.732 6.26466 10.732C7.08617 10.732 7.85638 10.6291 8.5753 10.3726L9.19126 12.4777L12.529 12.4777L8.21584 0ZM6.31596 8.11323C5.75095 8.11323 5.23759 8.01028 4.72388 7.90768L6.31596 2.46453L7.90769 7.90768C7.39433 8.06194 6.88062 8.11323 6.31596 8.11323Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="2%"
                  bottom="0.84%"
                  left="75.1%"
                  right="12.7%"
                  {...getOverrideProps(overrides, "Vector_9")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="93.52px"
                height="93.4px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="18.07%"
                left="4.48%"
                right="4.45%"
                {...getOverrideProps(overrides, "Group_5")}
              >
                <Icon
                  width="39.54px"
                  height="50.6px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 39.5400390625,
                    height: 50.5986328125,
                  }}
                  paths={[
                    {
                      d: "M26.8713 0.78976C26.3579 0.224747 25.639 -0.0830523 24.9201 0.0195477C24.3038 0.122148 23.7391 0.584202 23.4823 1.14921L0.221069 47.6716C-0.29243 48.6986 0.118362 49.8796 1.14536 50.3929C1.45344 50.5472 1.76153 50.5985 2.06961 50.5985L34.4712 50.5985C35.2414 50.5985 35.9603 50.1877 36.2684 49.4688C43.0978 35.3991 38.8872 13.5756 26.8713 0.78976Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="45.83%"
                  bottom="0%"
                  left="0%"
                  right="57.72%"
                  {...getOverrideProps(overrides, "Vector_10")}
                ></Icon>
                <Icon
                  width="58.2px"
                  height="93.4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 58.20068359375,
                    height: 93.404296875,
                  }}
                  paths={[
                    {
                      d: "M57.9437 90.4775C57.5329 89.6043 14.3483 3.235 13.2699 1.07833C12.9618 0.462142 12.3968 0.0513492 11.7295 0L11.6778 0C10.9076 0.0513492 10.2404 0.462142 9.82926 1.12968C-1.87818 19.6667 -3.21341 42.055 6.28636 61.0028L21.8965 92.2744C22.256 92.9934 22.9236 93.4041 23.7451 93.4041L56.1464 93.4041C57.2761 93.4041 58.2005 92.48 58.2005 91.3503C58.1492 91.0422 58.0976 90.734 57.9437 90.4775Z",
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
                  left="37.77%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector_11")}
                ></Icon>
              </View>
            </View>
          </View>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="72px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="148px"
          left="calc(50% - 230.5px - 0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile and visibility"
          {...getOverrideProps(overrides, "Profile and visibility")}
        ></Text>
        <Alert
          width="1920px"
          height="133px"
          heading="Success"
          position="absolute"
          top="114px"
          left="-1px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="success"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "success_alert")}
        ></Alert>
        <View
          padding="0px 0px 0px 0px"
          width="798px"
          height="216px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="330px"
          left="calc(50% - 399px - 447px)"
          {...getOverrideProps(overrides, "image_group")}
        >
          <Card
            width="798px"
            height="216px"
            position="absolute"
            backgroundColor="rgba(230, 230, 230, 1)"
            top="0px"
            left="calc(50% - 399px - 0px)"
            variation="elevated"
            {...getOverrideProps(overrides, "done_card179642365")}
          ></Card>
          <Image
            width="122px"
            height="127px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="44px"
            left="calc(50% - 61px - -278px)"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={user?.ImageProfile}
            {...getOverrideProps(overrides, "profile_icon_image179662223")}
          ></Image>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="680px"
          height="183.6px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="780px"
          left="calc(50% - 340px - 0px)"
          {...getOverrideProps(overrides, "options_group")}
        >
          <Card
            width="678.3px"
            height="183.6px"
            position="absolute"
            backgroundColor="rgba(255,255,255,0.61)"
            top="0px"
            left="calc(50% - 339.15px - -0.85px)"
            variation="elevated"
            {...getOverrideProps(overrides, "done_card179692303")}
          ></Card>
          <Button
            width="678.3px"
            height="61.2px"
            position="absolute"
            top="122.4px"
            left="calc(50% - 339.15px - 0px)"
            backgroundColor={
              deleteUnderScoreaccountUnderScorebuttonBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="link"
            fontSize={20}
            color="white"
            children="Delete account"
            onMouseOver={() => {
              deleteUnderScoreaccountUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              deleteUnderScoreaccountUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "delete_account_button")}
          ></Button>
          <Button
            width="678.3px"
            height="61.2px"
            position="absolute"
            top="0px"
            left="calc(50% - 339.15px - 0.85px)"
            backgroundColor={
              changeUnderScorepasswordUnderScorebuttonBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="link"
            color="white"
            fontSize={20}
            children="Change password"
            onMouseOver={() => {
              changeUnderScorepasswordUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              changeUnderScorepasswordUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "change_password_button")}
          ></Button>
          <Button
            width="678.3px"
            height="61.2px"
            position="absolute"
            top="61.2px"
            left="calc(50% - 339.15px - 0px)"
            backgroundColor={
              switchUnderScoremnotesUnderScorebuttonBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="link"
            fontSize={20}
            color="white"
            children="Switch to MNotes"
            onMouseOver={() => {
              switchUnderScoremnotesUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              switchUnderScoremnotesUnderScorebuttonOnMouseLeave();
            }}
            onClick={() => {
              switchUnderScoremnotesUnderScorebuttonOnClick();
            }}
            {...getOverrideProps(overrides, "switch_mnotes_button")}
          ></Button>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="799px"
          height="216px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="330px"
          left="calc(50% - 399.5px - -404.5px)"
          {...getOverrideProps(overrides, "email_group")}
        >
          <Card
            width="798px"
            height="216px"
            position="absolute"
            backgroundColor="rgba(230, 230, 230, 1)"
            top="0px"
            left="calc(50% - 399px - -0.5px)"
            variation="elevated"
            {...getOverrideProps(overrides, "done_card179692275")}
          ></Card>
          <Button
            width="798px"
            height="54px"
            position="absolute"
            top="162px"
            left="calc(50% - 399px - 0.5px)"
            backgroundColor={saveUnderScoreemailUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="link"
            children="Save"
            onMouseLeave={() => {
              saveUnderScoreemailUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              saveUnderScoreemailUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "save_email_button")}
          ></Button>
        </View>
        <TextField
          width="350px"
          height="40px"
          position="absolute"
          top="387px"
          left="calc(50% - 175px - -466px)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,255,255,1)"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "email_text_field")}
        ></TextField>
        <Text
          fontFamily="Inter"
          fontSize="26px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="39px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="387px"
          left="1134px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email:"
          {...getOverrideProps(overrides, "Email:")}
        ></Text>
      </View>
    </View>
  );
}
