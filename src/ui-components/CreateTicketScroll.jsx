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
  Divider,
  Image,
  SelectField,
  StepperField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CreateTicketScroll(props) {
  const { overrides, ...rest } = props;
  const [
    watchUnderScoreimageBackgroundColor,
    setWatchUnderScoreimageBackgroundColor,
  ] = useStateMutationAction(undefined);
  const watchUnderScoreimageOnMouseOver = () => {
    setWatchUnderScoreimageBackgroundColor("rgba(184, 206, 249, 1)");
  };
  return (
    <View
      width="528px"
      height="1140px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CreateTicketScroll")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="528px"
        height="1140px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "CreateTicketScrollGroup")}
      >
        <View
          width="528px"
          height="1140px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(254,254,255,1)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="467.98px"
          height="68px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="48.16%"
          bottom="45.88%"
          left="6.22%"
          right="5.15%"
          {...getOverrideProps(overrides, "people_group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(104,112,120,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="81.72px"
            height="38.97px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="25%"
            bottom="17.7%"
            left="0%"
            right="82.54%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Asignee"
            {...getOverrideProps(overrides, "Asignee")}
          ></Text>
          <Image
            width="12.18%"
            height="79.41%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="7.35%"
            bottom="13.24%"
            left="45.13%"
            right="42.69%"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "asignee_icon_image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="181px"
            height="63px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="7.35%"
            bottom="0%"
            left="61.32%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Asignee name"
            {...getOverrideProps(overrides, "asignee_name_text")}
          ></Text>
          <SelectField
            width="186.63px"
            height="48px"
            position="absolute"
            top="0%"
            bottom="29.41%"
            left="57.11%"
            right="3.01%"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            border="none"
            color="transparent"
            {...getOverrideProps(overrides, "asignee_select_field")}
          ></SelectField>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="459.54px"
          height="323px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="67.46%"
          bottom="4.21%"
          left="6.75%"
          right="6.22%"
          {...getOverrideProps(overrides, "Details_form")}
        >
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="400"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="130px"
            height="39px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="87.93%"
            bottom="0%"
            left="0.08%"
            right="71.63%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Epic link"
            {...getOverrideProps(overrides, "Epic link")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="400"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="88.1px"
            height="19.23px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="30.78%"
            bottom="63.27%"
            left="0%"
            right="80.83%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Issue type"
            {...getOverrideProps(overrides, "Issue type")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="400"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="65.81px"
            height="19.23px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="59.93%"
            bottom="34.12%"
            left="0%"
            right="85.68%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Priority:"
            {...getOverrideProps(overrides, "Priority:")}
          ></Text>
          <SelectField
            width="103.26px"
            height="25.81px"
            gap="60px"
            position="absolute"
            top="25.7%"
            bottom="66.31%"
            left="74.6%"
            right="2.93%"
            placeholder=""
            size="small"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "issue_type_select_field")}
          ></SelectField>
          <SelectField
            width="103.26px"
            height="25.81px"
            gap="60px"
            position="absolute"
            top="58.09%"
            bottom="33.92%"
            left="73.79%"
            right="3.74%"
            placeholder=""
            size="small"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "priority_select_field")}
          ></SelectField>
          <Image
            width="4.84%"
            height="6.11%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="29.36%"
            bottom="64.52%"
            left="66.15%"
            right="29.01%"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "issue_type_image")}
          ></Image>
          <Image
            width="4.23%"
            height="7.34%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="59.93%"
            bottom="32.74%"
            left="66.15%"
            right="29.62%"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "priority_image")}
          ></Image>
          <View
            padding="0px 0px 0px 0px"
            width="155.68px"
            height="49.83px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="82.97%"
            bottom="1.6%"
            left="66.12%"
            right="0%"
            {...getOverrideProps(overrides, "epic_link_group")}
          >
            <Badge
              width="140.73px"
              height="48.76px"
              position="absolute"
              top="0%"
              bottom="2.15%"
              left="4.9%"
              right="4.7%"
              size="default"
              variation="info"
              justifyContent="center"
              children="Epic link"
              {...getOverrideProps(overrides, "epic_link_badge")}
            ></Badge>
            <SelectField
              width="155.68px"
              height="42px"
              gap="60px"
              position="absolute"
              top="15.72%"
              bottom="0%"
              left="0%"
              right="0%"
              placeholder=""
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="quiet"
              color="transparent"
              {...getOverrideProps(overrides, "epic_link_select_field")}
            ></SelectField>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="400"
            color="rgba(104,112,120,1)"
            lineHeight="17px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="130.1px"
            height="35.53px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="1.55%"
            bottom="87.45%"
            left="0%"
            right="71.69%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Story points"
            {...getOverrideProps(overrides, "Story points")}
          ></Text>
          <StepperField
            width="207.51px"
            height="46.99px"
            position="absolute"
            top="0%"
            bottom="85.45%"
            left="52.45%"
            right="2.39%"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "story_point_stepper_field")}
          ></StepperField>
        </View>
        <SelectField
          width="103.26px"
          height="25.81px"
          gap="60px"
          position="absolute"
          top="59.82%"
          bottom="37.91%"
          left="73.18%"
          right="7.26%"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          borderBottom="none"
          {...getOverrideProps(overrides, "issue_template_select_field")}
        ></SelectField>
        <Text
          fontFamily="Inter"
          fontSize="17px"
          fontWeight="400"
          color="rgba(104,112,120,1)"
          lineHeight="17px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="130.36px"
          height="38px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="59.82%"
          bottom="36.84%"
          left="6.75%"
          right="68.56%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Issue template"
          {...getOverrideProps(overrides, "issue_template_text")}
        ></Text>
      </View>
      <TextField
        width="467.04px"
        height="unset"
        label="Title"
        placeholder="Add short summary ..."
        position="absolute"
        top="2.54%"
        bottom="90.61%"
        left="5.68%"
        right="5.86%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "title_text_field")}
      ></TextField>
      <Image
        width="9.06%"
        height="2.98%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.7%"
        bottom="86.32%"
        left="74.6%"
        right="16.34%"
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
        top="10.88%"
        bottom="86.49%"
        left="86.12%"
        right="7.44%"
        size="default"
        variation="info"
        children="0"
        {...getOverrideProps(overrides, "watch_badge")}
      ></Badge>
      <TextAreaField
        width="467.98px"
        height="138px"
        label="Description"
        placeholder="Describe the task"
        position="absolute"
        top="15%"
        bottom="72.89%"
        left="5.68%"
        right="5.68%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "description_text_field")}
      ></TextAreaField>
      <TextAreaField
        width="462.35px"
        height="138px"
        label="Comments"
        placeholder="Describe the task"
        position="absolute"
        top="29.39%"
        bottom="58.51%"
        left="6.22%"
        right="6.22%"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "comments_text_field")}
      ></TextAreaField>
      <Divider
        width="462.35px"
        height="1px"
        position="absolute"
        top="45.79%"
        bottom="54.12%"
        left="6.22%"
        right="6.22%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider1292757")}
      ></Divider>
      <Divider
        width="462.35px"
        height="1px"
        position="absolute"
        top="55.18%"
        bottom="44.74%"
        left="6.22%"
        right="6.22%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider1292759")}
      ></Divider>
    </View>
  );
}
