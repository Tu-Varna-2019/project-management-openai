/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Alert,
  Button,
  Flex,
  Image,
  SearchField,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function Toolbar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="247px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Toolbar")}
      {...rest}
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
        left="0px"
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
        left="calc(50% - 207.5px - -360.5px)"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "search_ticket_select_field")}
      ></SearchField>
      <Button
        width="145px"
        height="48px"
        position="absolute"
        border="1px SOLID rgba(35,47,62,1)"
        top="40px"
        left="calc(50% - 71.5px - 124.5px)"
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
        left="1580px"
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
        left="86px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
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
        left="21px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="KAI"
        {...getOverrideProps(overrides, "KAI")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="131px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34px"
        left="177px"
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
          height="64px"
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
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34px"
        left="308px"
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
          height="64px"
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
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34px"
        left="426px"
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
          width="180px"
          height="64px"
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
      <View
        padding="0px 0px 0px 0px"
        width="153.5px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34px"
        left="606px"
        {...getOverrideProps(overrides, "Your work group178532301")}
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
          height="64px"
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
        left="1821px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "profile_select_field")}
      ></SelectField>
      <Alert
        width="1920px"
        height="133px"
        heading="Success"
        position="absolute"
        top="113px"
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
