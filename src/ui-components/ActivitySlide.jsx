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
import { Image, Text, TextAreaField, View } from "@aws-amplify/ui-react";
export default function ActivitySlide(props) {
  const { Ac, overrides, ...rest } = props;
  const [rectangleOneBackgroundColor, setRectangleOneBackgroundColor] =
    useStateMutationAction("rgba(254,254,255,1)");
  const rectangleOneOnMouseLeave = () => {
    setRectangleOneBackgroundColor("rgba(255, 255, 255, 0)");
  };
  const rectangleOneOnMouseOver = () => {
    setRectangleOneBackgroundColor("rgba(104, 112, 120, 0.19)");
  };
  return (
    <View
      width="517px"
      height="190px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ActivitySlide")}
      {...rest}
    >
      <View
        width="517px"
        height="190px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor={rectangleOneBackgroundColor}
        cursor="pointer"
        onMouseLeave={() => {
          rectangleOneOnMouseLeave();
        }}
        onMouseOver={() => {
          rectangleOneOnMouseOver();
        }}
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Image
        width="8.55%"
        height="23.73%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="14.85%"
        bottom="61.42%"
        left="2.08%"
        right="89.37%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "asignee_icon_image")}
      ></Image>
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
        width="154.69px"
        height="35.68px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="7.86%"
        bottom="73.36%"
        left="14.08%"
        right="56%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Asignee name"
        {...getOverrideProps(overrides, "asignee_name_text")}
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
        width="146.41px"
        height="28.21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="81.58%"
        bottom="3.57%"
        left="65.76%"
        right="5.92%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="date"
        {...getOverrideProps(overrides, "date_text")}
      ></Text>
      <Image
        width="4.64%"
        height="9.61%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.04%"
        bottom="80.35%"
        left="90.72%"
        right="4.64%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "issue_type_image")}
      ></Image>
      <Image
        width="4%"
        height="11.79%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9.17%"
        bottom="79.04%"
        left="83.2%"
        right="12.8%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "priority_image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,153,0,1)"
        lineHeight="16px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="87.91px"
        height="15.6px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="81.66%"
        bottom="10.13%"
        left="14.08%"
        right="68.92%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="KAI-"
        {...getOverrideProps(overrides, "ticket_id_text")}
      ></Text>
      <TextAreaField
        width="427.66px"
        height="unset"
        position="absolute"
        top="21.89%"
        bottom="22.32%"
        left="12.64%"
        right="4.64%"
        placeholder=""
        size="default"
        isDisabled={true}
        labelHidden={true}
        variation="default"
        value={Ac?.Changes}
        {...getOverrideProps(overrides, "activity_text_field")}
      ></TextAreaField>
    </View>
  );
}
