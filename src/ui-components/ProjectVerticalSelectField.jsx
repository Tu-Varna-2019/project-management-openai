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
  Card,
  Divider,
  Image,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function ProjectVerticalSelectField(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="316px"
      height="839px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProjectVerticalSelectField")}
      {...rest}
    >
      <Card
        width="312px"
        height="833px"
        position="absolute"
        top="0px"
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
        top="50px"
        left="81px"
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
        top="85px"
        left="82px"
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
        top="57px"
        left="20px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
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
        top="752px"
        left="calc(50% - 124px - 5px)"
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
        top="740px"
        left="1px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider180442991")}
      ></Divider>
      <Divider
        width="304px"
        height="1px"
        position="absolute"
        top="129px"
        left="5px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider180442992")}
      ></Divider>
      <Button
        width="302px"
        height="63px"
        gap="15px"
        position="absolute"
        top="215px"
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
        top="437px"
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
        top="289px"
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
        top="363px"
        left="6px"
        size="default"
        isDisabled={false}
        variation="link"
        children="Issues"
        {...getOverrideProps(overrides, "issues_button")}
      ></Button>
    </View>
  );
}
