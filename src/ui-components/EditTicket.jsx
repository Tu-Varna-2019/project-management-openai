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
        width="1232px"
        height="959px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 479.5px - 0px)"
        left="calc(50% - 616px - -16px)"
        {...getOverrideProps(overrides, "edit_ticket_group")}
      >
        <Card
          width="1232px"
          height="959px"
          position="absolute"
          top="0px"
          left="calc(50% - 616px - 0px)"
          variation="outline"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <View
          padding="0px 0px 0px 0px"
          width="295px"
          height="323px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="273px"
          left="101px"
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
            width="61px"
            height="15.22px"
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
            width="59px"
            height="14.37px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="243.52px"
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
            height="144.59px"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="48.2px"
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
            width="88px"
            height="14.37px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="308.63px"
            left="5px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Resolution"
            {...getOverrideProps(overrides, "Resolution")}
          ></Text>
          <SelectField
            width="119px"
            height="27.9px"
            gap="60px"
            position="absolute"
            top="41.43px"
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
            height="27.9px"
            gap="60px"
            position="absolute"
            top="98.93px"
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
            height="27.9px"
            gap="60px"
            position="absolute"
            top="164.88px"
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
            height="27.9px"
            position="absolute"
            top="295.1px"
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
            height="20.29px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="49.04px"
            left="146px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={ticket?.IssueType}
            {...getOverrideProps(overrides, "issue_type_image")}
          ></Image>
          <Image
            width="21px"
            height="23.68px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="104px"
            left="146px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={ticket?.Priority}
            {...getOverrideProps(overrides, "priority_image")}
          ></Image>
          <Badge
            width="91px"
            height="33.82px"
            position="absolute"
            top="222.38px"
            left="194px"
            size="default"
            variation="info"
            children={ticket?.TicketStatus}
            {...getOverrideProps(overrides, "status_badge")}
          ></Badge>
          <SelectField
            width="119px"
            height="36.36px"
            position="absolute"
            top="226.61px"
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
          height="146px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="32px"
          left="101px"
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
            {...getOverrideProps(overrides, "Divider178662025")}
          ></Divider>
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
          <Image
            width="51px"
            height="34px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="111px"
            left="313px"
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
            top="116px"
            left="367px"
            size="default"
            variation="info"
            children="0"
            {...getOverrideProps(overrides, "watch_badge")}
          ></Badge>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="364px"
          height="228px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="68px"
          left="775px"
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
          <Button
            width="unset"
            height="unset"
            position="absolute"
            top="111px"
            left="220px"
            size="default"
            isDisabled={false}
            variation="link"
            children="Assign to me"
            {...getOverrideProps(overrides, "assign_to_me_button")}
          ></Button>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="364px"
          height="224px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="369px"
          left="783px"
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
            width="122.7px"
            height="36.5px"
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
            width="78.73px"
            height="37.33px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="54.76px"
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
            width="78.73px"
            height="37.33px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="124.44px"
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
            width="89.98px"
            height="37.33px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="186.67px"
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
            width="145.19px"
            height="31.53px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="59.73px"
            left="218.81px"
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
            width="145.19px"
            height="31.53px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="126.1px"
            left="218.81px"
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
            width="145.19px"
            height="31.53px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="180.03px"
            left="218.81px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={ticket?.ResolvedDate}
            {...getOverrideProps(overrides, "resolved_date_text")}
          ></Text>
        </View>
        <TextAreaField
          width="1029px"
          height="192px"
          label="Description"
          placeholder="Describe the task"
          position="absolute"
          top="730px"
          left="101px"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={ticket?.Description}
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <Button
          width="401px"
          height="54px"
          position="absolute"
          top="187px"
          left="101px"
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
      </View>
      <Divider
        width="1027px"
        height="1px"
        position="absolute"
        top="712px"
        left="465px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider178992077")}
      ></Divider>
      <Button
        width="113px"
        height="89px"
        position="absolute"
        top="66px"
        left="1475px"
        size="default"
        isDisabled={false}
        variation="link"
        color="rgba(255, 153, 0, 1)"
        fontSize="35px"
        children="X"
        {...getOverrideProps(overrides, "cancel_button")}
      ></Button>
    </View>
  );
}
