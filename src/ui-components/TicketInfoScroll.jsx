/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Image,
  SelectField,
  StepperField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function TicketInfoScroll(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="634px"
      height="1334px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TicketInfoScroll")}
      {...rest}
    >
      <View
        width="634px"
        height="1334px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-0.52%"
        bottom="0.52%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(254,254,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="602.32px"
        height="245.25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5.17%"
        bottom="76.44%"
        left="calc(50% - 301.16px - -1.16px)"
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
          width="87.13px"
          height="38.97px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="32.58%"
          bottom="51.53%"
          left="5.98%"
          right="79.56%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Asignee"
          {...getOverrideProps(overrides, "Asignee")}
        ></Text>
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
          width="94.01px"
          height="35.53px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="80.29%"
          bottom="5.22%"
          left="5.98%"
          right="78.41%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Reporter"
          {...getOverrideProps(overrides, "Reporter")}
        ></Text>
        <Image
          width="8.87%"
          height="22.16%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="24.87%"
          bottom="52.97%"
          left="47.32%"
          right="43.81%"
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
          width="237.32px"
          height="43.55px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="31.4%"
          bottom="50.85%"
          left="60.6%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Asignee name"
          {...getOverrideProps(overrides, "asignee_name_text")}
        ></Text>
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
          width="93.72px"
          height="27.17px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="88.92%"
          left="0%"
          right="84.44%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Details"
          {...getOverrideProps(overrides, "Details")}
        ></Text>
        <Button
          width="210.95px"
          height="37.82px"
          position="absolute"
          top="48.49%"
          bottom="36.09%"
          left="54.02%"
          right="10.95%"
          size="default"
          isDisabled={false}
          variation="link"
          children="Assign to me"
          {...getOverrideProps(overrides, "assign_to_me_button")}
        ></Button>
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
          width="154.77px"
          height="38.97px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="84%"
          bottom="0.12%"
          left="58.77%"
          right="15.53%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Reporter name"
          {...getOverrideProps(overrides, "reporter_name_text")}
        ></Text>
        <Image
          width="8.87%"
          height="22.16%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="77.84%"
          bottom="0%"
          left="46.55%"
          right="44.58%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "reporter_icon_image")}
        ></Image>
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
        width="138.72px"
        height="35.53px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29.84%"
        bottom="67.5%"
        left="53px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Story points"
        {...getOverrideProps(overrides, "Story points")}
      ></Text>
      <StepperField
        width="221.27px"
        height="46.99px"
        position="absolute"
        top="29.84%"
        bottom="66.64%"
        left="45.43%"
        right="19.67%"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "story_point_stepper_field")}
      ></StepperField>
      <View
        padding="0px 0px 0px 0px"
        width="461.53px"
        height="378px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="37.63%"
        bottom="34.03%"
        left="calc(50% - 230.76px - 33.24px)"
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
          width="68.79px"
          height="37.82px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="59.52%"
          bottom="30.47%"
          left="0%"
          right="85.1%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Status:"
          {...getOverrideProps(overrides, "Status:")}
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
          width="69px"
          height="40px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="89.42%"
          bottom="0%"
          left="0%"
          right="85.05%"
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
          width="95.16px"
          height="19.48px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="4.4%"
          bottom="90.45%"
          left="0%"
          right="79.38%"
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
          width="71.08px"
          height="19.48px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="29.63%"
          bottom="65.22%"
          left="0%"
          right="84.6%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Priority:"
          {...getOverrideProps(overrides, "Priority:")}
        ></Text>
        <SelectField
          width="111.53px"
          height="26.14px"
          gap="60px"
          position="absolute"
          top="0%"
          bottom="93.08%"
          left="75.84%"
          right="0%"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "issue_type_select_field")}
        ></SelectField>
        <SelectField
          width="111.53px"
          height="26.14px"
          gap="60px"
          position="absolute"
          top="28.04%"
          bottom="65.04%"
          left="74.97%"
          right="0.87%"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <Image
          width="5.2%"
          height="5.29%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.17%"
          bottom="91.53%"
          left="65.44%"
          right="29.36%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "issue_type_image")}
        ></Image>
        <Image
          width="4.55%"
          height="6.35%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29.63%"
          bottom="64.02%"
          left="65.44%"
          right="30.01%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "priority_image")}
        ></Image>
        <Badge
          width="103.18px"
          height="55.01px"
          position="absolute"
          top="57.14%"
          bottom="28.3%"
          left="76.05%"
          right="1.59%"
          size="default"
          variation="info"
          children="ToDo"
          {...getOverrideProps(overrides, "status_badge")}
        ></Badge>
        <SelectField
          width="117px"
          height="71px"
          gap="60px"
          position="absolute"
          top="57.14%"
          bottom="24.07%"
          left="74.32%"
          right="0.33%"
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
        width="446.07px"
        height="224.53px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="73.24%"
        bottom="9.93%"
        left="8.68%"
        right="20.97%"
        {...getOverrideProps(overrides, "dates_group")}
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
          width="91.72px"
          height="35.53px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="84.18%"
          left="0%"
          right="79.44%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Created"
          {...getOverrideProps(overrides, "Created")}
        ></Text>
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
          width="96.3px"
          height="35.53px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="43.65%"
          bottom="40.53%"
          left="0%"
          right="78.41%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Updated"
          {...getOverrideProps(overrides, "Updated")}
        ></Text>
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
          width="96.3px"
          height="35.53px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="84.18%"
          bottom="0%"
          left="0%"
          right="78.41%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Resolved"
          {...getOverrideProps(overrides, "Resolved")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="134px"
          height="30px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="2.67%"
          bottom="83.97%"
          left="69.5%"
          right="0.46%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="000000000"
          {...getOverrideProps(overrides, "created_date_text")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="136.07px"
          height="29.54px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="37.41%"
          bottom="49.43%"
          left="69.5%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="000000000"
          {...getOverrideProps(overrides, "updated_date_text")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="136.07px"
          height="29.54px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="77.94%"
          bottom="8.9%"
          left="69.5%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="000000000"
          {...getOverrideProps(overrides, "resolved_date_text")}
        ></Text>
      </View>
      <SelectField
        width="220.12px"
        height="48.13px"
        position="absolute"
        top="10.64%"
        bottom="85.75%"
        left="55.99%"
        right="9.29%"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "asignee_select_field")}
      ></SelectField>
      <SelectField
        width="169px"
        height="48px"
        position="absolute"
        top="20.61%"
        bottom="75.79%"
        left="calc(50% - 84.5px - -125.5px)"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "reporter_select_field")}
      ></SelectField>
      <View
        padding="0px 0px 0px 0px"
        width="152px"
        height="82px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="825px"
        left="361px"
        {...getOverrideProps(overrides, "epic_link_group")}
      >
        <Badge
          width="152px"
          height="49.39px"
          position="absolute"
          top="18.52px"
          left="0px"
          size="default"
          variation="info"
          children="Epic link"
          {...getOverrideProps(overrides, "epic_link_badge")}
        ></Badge>
        <SelectField
          width="152px"
          height="82px"
          gap="60px"
          position="absolute"
          top="0px"
          left="0px"
          placeholder=""
          size="small"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "epic_link_select_field")}
        ></SelectField>
      </View>
    </View>
  );
}
