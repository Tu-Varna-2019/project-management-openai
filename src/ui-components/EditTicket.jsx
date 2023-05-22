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
  Card,
  Divider,
  Image,
  SelectField,
  StepperField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditTicket(props) {
  const { project, ticket, user, overrides, ...rest } = props;
  const [
    watchUnderScoreimageBackgroundColor,
    setWatchUnderScoreimageBackgroundColor,
  ] = useStateMutationAction(undefined);
  const [
    createUnderScorebuttonBackgroundColor,
    setCreateUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(246,133,54,1)");
  const watchUnderScoreimageOnMouseOver = () => {
    setWatchUnderScoreimageBackgroundColor("rgba(104, 112, 120, 1)");
  };
  const createUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const createUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  return (
    <View
      width="1924px"
      height="1081px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(122,133,153,0.55)"
      {...getOverrideProps(overrides, "EditTicket")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1194px"
        height="917px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 458.5px - -11px)"
        left="calc(50% - 597px - 0px)"
        {...getOverrideProps(overrides, "edit_ticket_group")}
      >
        <Card
          width="1194px"
          height="917px"
          position="absolute"
          top="0px"
          left="calc(50% - 597px - 0px)"
          variation="outline"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <View
          padding="0px 0px 0px 0px"
          width="390.28px"
          height="291px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="315px"
          left="708px"
          {...getOverrideProps(overrides, "Details_form")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="76px"
            height="22px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Details"
            {...getOverrideProps(overrides, "Details")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="60px"
            height="33px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="184px"
            left="4px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Status:"
            {...getOverrideProps(overrides, "Status:")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="121px"
            height="31px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="260px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Story points"
            {...getOverrideProps(overrides, "Story points")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="49px"
            left="4px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Type:"
            {...getOverrideProps(overrides, "Type:")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="113px"
            left="4px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Priority:"
            {...getOverrideProps(overrides, "Priority:")}
          ></Text>
          <SelectField
            width="97.28px"
            height="22.81px"
            gap="60px"
            position="absolute"
            top="45px"
            left="293px"
            placeholder=""
            size="small"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "issue_type_select_field")}
          ></SelectField>
          <SelectField
            width="97.28px"
            height="22.81px"
            gap="60px"
            position="absolute"
            top="110px"
            left="293px"
            placeholder=""
            size="small"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "priority_select_field")}
          ></SelectField>
          <SelectField
            width="97.28px"
            height="22.81px"
            gap="60px"
            position="absolute"
            top="188px"
            left="293px"
            placeholder=""
            size="small"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "status_select_field")}
          ></SelectField>
          <Image
            width="19.62px"
            height="16.59px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="50px"
            left="84px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={ticket?.IssueType}
            {...getOverrideProps(overrides, "issue_type_image")}
          ></Image>
          <Image
            width="17.17px"
            height="19.35px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="112px"
            left="84px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={ticket?.Priority}
            {...getOverrideProps(overrides, "priority_image")}
          ></Image>
          <Badge
            width="90px"
            height="48px"
            position="absolute"
            top="165px"
            left="296px"
            size="default"
            variation="info"
            fontSize="18px"
            justifyContent="center"
            children={ticket?.TicketStatus}
            {...getOverrideProps(overrides, "status_badge")}
          ></Badge>
        </View>
        <SelectField
          width="216px"
          height="23px"
          gap="60px"
          position="absolute"
          top="172px"
          left="418px"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "epic_link_select_field")}
        ></SelectField>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(104,112,120,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="106.27px"
          height="18.8px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="111px"
          left="112px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"KAI-"}${ticket?.id}`}
          {...getOverrideProps(overrides, "ticket_id_text")}
        ></Text>
        <Badge
          width="216px"
          height="48px"
          position="absolute"
          top="143px"
          left="418px"
          size="default"
          variation="info"
          justifyContent="center"
          children="Epic link"
          {...getOverrideProps(overrides, "epic_link_badge")}
        ></Badge>
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
          width="101px"
          height="37px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="52px"
          left="105px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={project?.Name}
          {...getOverrideProps(overrides, "project_name_text")}
        ></Text>
        <TextField
          width="602px"
          height="72px"
          label="Title"
          position="absolute"
          top="215px"
          left="47px"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={ticket?.Title}
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <Image
          width="46px"
          height="37px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="45px"
          left="318px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F576%2F515%2Foriginal%2Feye-icon-vector-illustration.jpg&f=1&nofb=1&ipt=71a67a38b009e7c9f4a346f6d3a9e176f6d453e6b9500133baaa0a235d81b997&ipo=images"
          backgroundColor={watchUnderScoreimageBackgroundColor}
          onMouseOver={() => {
            watchUnderScoreimageOnMouseOver();
          }}
          {...getOverrideProps(overrides, "watch_image")}
        ></Image>
        <Badge
          width="31px"
          height="33px"
          position="absolute"
          top="49px"
          left="374px"
          size="default"
          variation="info"
          children="0"
          {...getOverrideProps(overrides, "watch_badge")}
        ></Badge>
        <View
          padding="0px 0px 0px 0px"
          width="413.69px"
          height="221px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="648px"
          left="712px"
          {...getOverrideProps(overrides, "dates_group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="27px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="100.3px"
            height="29.84px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dates"
            {...getOverrideProps(overrides, "Dates")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="80px"
            height="31px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="71px"
            left="4px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Created"
            {...getOverrideProps(overrides, "Created")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="84px"
            height="31px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="129px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Updated"
            {...getOverrideProps(overrides, "Updated")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="84px"
            height="31px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="190px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Resolved"
            {...getOverrideProps(overrides, "Resolved")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="118.69px"
            height="25.77px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="63px"
            left="295px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={ticket?.CreatedDate}
            {...getOverrideProps(overrides, "created_date_text")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="118.69px"
            height="25.77px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="123px"
            left="295px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={ticket?.UpdatedDate}
            {...getOverrideProps(overrides, "updated_date_text")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="118.69px"
            height="25.77px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="184px"
            left="295px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={ticket?.ResolvedDate}
            {...getOverrideProps(overrides, "resolved_date_text")}
          ></Text>
        </View>
        <TextAreaField
          width="602px"
          height="138px"
          label="Description"
          placeholder="Describe the task"
          position="absolute"
          top="329px"
          left="47px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={ticket?.Description}
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <TextAreaField
          width="602px"
          height="138px"
          label="Comments"
          placeholder="Describe the task"
          position="absolute"
          top="525px"
          left="47px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "comments_text_field")}
        ></TextAreaField>
        <Button
          width="260px"
          height="44px"
          position="absolute"
          top="838px"
          left="32px"
          backgroundColor={createUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onMouseOver={() => {
            createUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            createUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "create_button")}
        ></Button>
        <Button
          width="260px"
          height="44px"
          position="absolute"
          top="836px"
          left="389px"
          backgroundColor="rgba(104,112,120,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cancel"
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
        <View
          padding="0px 0px 0px 0px"
          width="424px"
          height="239.41px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="33px"
          left="705px"
          {...getOverrideProps(overrides, "people_group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="76px"
            height="34px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="62px"
            left="7px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Asignee"
            {...getOverrideProps(overrides, "Asignee")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(104,112,120,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="82px"
            height="31px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="202px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Reporter"
            {...getOverrideProps(overrides, "Reporter")}
          ></Text>
          <Image
            width="46.6px"
            height="47.41px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="55px"
            left="215px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={user?.ImageProfile}
            {...getOverrideProps(overrides, "asignee_icon_image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="135px"
            height="38px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="43px"
            left="273px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Asignee name"
            {...getOverrideProps(overrides, "asignee_name_text")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="81.75px"
            height="23.71px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="7px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="People"
            {...getOverrideProps(overrides, "People")}
          ></Text>
          <Button
            width="184px"
            height="33px"
            position="absolute"
            top="113px"
            left="240px"
            size="default"
            isDisabled={false}
            variation="link"
            children="Assign to me"
            {...getOverrideProps(overrides, "assign_to_me_button")}
          ></Button>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="135px"
            height="34px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="205px"
            left="279px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Reporter name"
            {...getOverrideProps(overrides, "reporter_name_text")}
          ></Text>
          <Image
            width="46.6px"
            height="47.41px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="192px"
            left="215px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "reporter_icon_image")}
          ></Image>
        </View>
      </View>
      <Divider
        height="906px"
        position="absolute"
        top="99px"
        left="1043px"
        size="small"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider179382085")}
      ></Divider>
      <SelectField
        width="216px"
        height="unset"
        position="absolute"
        top="137px"
        left="783px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "more_options_select_field")}
      ></SelectField>
      <Image
        width="58px"
        height="59px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="145px"
        left="403px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "project_image_name")}
      ></Image>
      <Divider
        width="398px"
        height="1px"
        position="absolute"
        top="776px"
        left="1070px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider179402161")}
      ></Divider>
      <Divider
        width="398px"
        height="1px"
        position="absolute"
        top="443px"
        left="1070px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider179402163")}
      ></Divider>
      <Divider
        width="398px"
        height="1px"
        position="absolute"
        top="156px"
        left="1078px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider179402165")}
      ></Divider>
      <StepperField
        width="142px"
        height="41px"
        position="absolute"
        top="671px"
        left="1326px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "story_point_stepper_field")}
      ></StepperField>
    </View>
  );
}
