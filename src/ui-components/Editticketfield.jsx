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
  Flex,
  Image,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Editticketfield(props) {
  const { project, ticket, user, overrides, ...rest } = props;
  const [
    saveUnderScorebuttonBackgroundColor,
    setSaveUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(104,112,120,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(104,112,120,1)");
  const [
    watchUnderScoreimageBackgroundColor,
    setWatchUnderScoreimageBackgroundColor,
  ] = useStateMutationAction(undefined);
  const saveUnderScorebuttonOnMouseOver = () => {
    setSaveUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 0.48)");
  };
  const saveUnderScorebuttonOnMouseLeave = () => {
    setSaveUnderScorebuttonBackgroundColor("rgba(104, 112, 120, 1)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 0.48)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(104, 112, 120, 1)");
  };
  const watchUnderScoreimageOnMouseOver = () => {
    setWatchUnderScoreimageBackgroundColor("rgba(104, 112, 120, 1)");
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
      backgroundColor="rgba(44,58,75,0.72)"
      {...getOverrideProps(overrides, "Editticketfield")}
      {...rest}
    >
      <Card
        width="1199px"
        height="1016px"
        position="absolute"
        top="5px"
        left="calc(50% - 599.5px - -124.5px)"
        variation="outline"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <View
        padding="0px 0px 0px 0px"
        width="295px"
        height="382px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="259px"
        left="613px"
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
          width="unset"
          height="unset"
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="288px"
          left="5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Status:"
          {...getOverrideProps(overrides, "Status:")}
        ></Text>
        <Flex
          gap="60px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="57px"
          left="5px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 6")}
        >
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
            shrink="0"
            position="relative"
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Priority:"
            {...getOverrideProps(overrides, "Priority:")}
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Project"
            {...getOverrideProps(overrides, "Project")}
          ></Text>
        </Flex>
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
          top="365px"
          left="5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Resolution"
          {...getOverrideProps(overrides, "Resolution")}
        ></Text>
        <SelectField
          width="119px"
          height="unset"
          gap="60px"
          position="absolute"
          top="49px"
          left="176px"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "issue_type_select_field")}
        ></SelectField>
        <SelectField
          width="119px"
          height="unset"
          gap="60px"
          position="absolute"
          top="117px"
          left="176px"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <SelectField
          width="119px"
          height="unset"
          gap="60px"
          position="absolute"
          top="195px"
          left="173px"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "project_select_field")}
        ></SelectField>
        <SelectField
          width="119px"
          height="unset"
          position="absolute"
          top="349px"
          left="170px"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "resolution_select_field")}
        ></SelectField>
        <Image
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="58px"
          left="146px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={ticket?.IssueType}
          {...getOverrideProps(overrides, "issue_type_image")}
        ></Image>
        <Image
          width="21px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="123px"
          left="146px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={ticket?.Priority}
          {...getOverrideProps(overrides, "priority_image")}
        ></Image>
        <Badge
          width="91px"
          height="40px"
          position="absolute"
          top="263px"
          left="194px"
          size="default"
          variation="info"
          children={ticket?.TicketStatus}
          {...getOverrideProps(overrides, "status_badge")}
        ></Badge>
        <SelectField
          width="119px"
          height="43px"
          position="absolute"
          top="268px"
          left="176px"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "status_select_field")}
        ></SelectField>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="401px"
        height="149px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="22px"
        left="507px"
        {...getOverrideProps(overrides, "project_group")}
      >
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
          width="130px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="6px"
          left="201px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"KAI-"}${ticket?.id}`}
          {...getOverrideProps(overrides, "ticket_id_text")}
        ></Text>
        <Image
          width="65px"
          height="66px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F02%2FJira-Emblem.png&f=1&nofb=1&ipt=562cb1cbb88b18989f31a562aca75ae4896610a0da1f2a65ab4281712659dab7&ipo=images"
          {...getOverrideProps(overrides, "project_image_name")}
        ></Image>
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
          width="90px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="88px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={project?.Name}
          {...getOverrideProps(overrides, "project_name_text")}
        ></Text>
        <Divider
          height="24.26px"
          position="absolute"
          top="1px"
          left="189.11px"
          transformOrigin="top left"
          transform="rotate(27.26deg)"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Button
          width="90px"
          height="33px"
          position="absolute"
          top="116px"
          left="89px"
          backgroundColor={saveUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onMouseOver={() => {
            saveUnderScorebuttonOnMouseOver();
          }}
          onMouseLeave={() => {
            saveUnderScorebuttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "save_button")}
        ></Button>
        <Button
          width="94px"
          height="33px"
          position="absolute"
          top="116px"
          left="194px"
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
        <TextField
          width="313px"
          height="unset"
          position="absolute"
          top="54px"
          left="88px"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          value={ticket?.Title}
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
      </View>
      <TextAreaField
        width="939px"
        height="192px"
        label="Description"
        position="absolute"
        top="794px"
        left="618px"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={ticket?.Description}
        {...getOverrideProps(overrides, "description_text_field")}
      ></TextAreaField>
      <View
        padding="0px 0px 0px 0px"
        width="364px"
        height="228px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="57px"
        left="1193px"
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="75px"
          left="0px"
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="190px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Reporter"
          {...getOverrideProps(overrides, "Reporter")}
        ></Text>
        <Image
          width="57px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="53px"
          left="146px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={user?.ImageProfile}
          {...getOverrideProps(overrides, "asignee_icon_image")}
        ></Image>
        <Image
          width="57px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="170px"
          left="146px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "reporter_icon_image")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="70px"
          left="220px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Asignee name"
          {...getOverrideProps(overrides, "asignee_name_text")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="189px"
          left="220px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Reporter name"
          {...getOverrideProps(overrides, "Reporter name")}
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
          width="100px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="People"
          {...getOverrideProps(overrides, "People")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="356px"
        height="270px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="392px"
        left="1189px"
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
          width="120px"
          height="44px"
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
          width="77px"
          height="45px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="66px"
          left="0px"
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
          width="77px"
          height="45px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="150px"
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
          width="88px"
          height="45px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="225px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Resolved"
          {...getOverrideProps(overrides, "Resolved")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="142px"
          height="38px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="72px"
          left="214px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ticket?.CreatedDate}
          {...getOverrideProps(overrides, "created_date_text")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="142px"
          height="38px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="152px"
          left="214px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ticket?.UpdatedDate}
          {...getOverrideProps(overrides, "updated_date_text")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="142px"
          height="38px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="217px"
          left="214px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ticket?.ResolvedDate}
          {...getOverrideProps(overrides, "resolved_date_text")}
        ></Text>
      </View>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="168px"
        left="1413px"
        size="default"
        isDisabled={false}
        variation="link"
        children="Assign to me"
        {...getOverrideProps(overrides, "assign_to_me_button")}
      ></Button>
      <Image
        width="51px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="133px"
        left="826px"
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
        width="unset"
        height="unset"
        position="absolute"
        top="138px"
        left="880px"
        size="default"
        variation="info"
        children="0"
        {...getOverrideProps(overrides, "watch_badge")}
      ></Badge>
    </View>
  );
}
