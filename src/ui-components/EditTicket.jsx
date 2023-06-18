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
        width="1362px"
        height="917px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 458.5px - -11px)"
        left="calc(50% - 681px - 0px)"
        {...getOverrideProps(overrides, "edit_ticket_group")}
      >
        <Card
          width="1362px"
          height="917px"
          position="absolute"
          top="0px"
          left="calc(50% - 681px - 0px)"
          variation="outline"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
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
          placeholder=""
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
          top="151px"
          left="562px"
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
          top="155px"
          left="618px"
          size="default"
          variation="info"
          children="0"
          {...getOverrideProps(overrides, "watch_badge")}
        ></Badge>
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
          top="494px"
          left="47px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "comments_text_field")}
        ></TextAreaField>
        <Button
          width="143px"
          height="44px"
          position="absolute"
          top="150px"
          left="38px"
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
          width="143px"
          height="44px"
          position="absolute"
          top="151px"
          left="196px"
          backgroundColor="rgba(104,112,120,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cancel"
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
      </View>
      <Divider
        height="821px"
        position="absolute"
        top="130px"
        left="979px"
        size="small"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider179382085")}
      ></Divider>
      <SelectField
        width="204px"
        height="unset"
        position="absolute"
        top="137px"
        left="726px"
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
        top="134px"
        left="319px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "project_image_name")}
      ></Image>
      <Divider
        width="635px"
        height="1px"
        position="absolute"
        top="724px"
        left="991px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider332416")}
      ></Divider>
      <Button
        width="83px"
        height="40px"
        position="absolute"
        top="188px"
        left="386px"
        size="default"
        isDisabled={false}
        variation="link"
        color="rgba(246, 133, 54, 1)"
        children="KAI-"
        {...getOverrideProps(overrides, "ticket_id_text")}
      ></Button>
    </View>
  );
}
