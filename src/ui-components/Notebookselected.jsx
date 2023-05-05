/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Notebookselected(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="296px"
      height="284px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(212,197,172,1)"
      borderRadius="29px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Notebookselected")}
      {...rest}
    >
      <View
        width="294px"
        height="282px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame1")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="223px"
          height="57.71px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="23.83px"
          left="11px"
          {...getOverrideProps(overrides, "Note2")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="223px"
            height="57.71px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Noteselected")}
          >
            <View
              width="223px"
              height="57.71px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              bottom="0px"
              left="0px"
              border="1px SOLID rgba(212,197,172,1)"
              borderRadius="28px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle20")}
            ></View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="213.06px"
            height="51.95px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0.17px"
            left="9.94px"
            {...getOverrideProps(overrides, "Note1")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="400"
              color="rgba(209,174,127,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="205.11px"
              height="30.66px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="7.95px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Title"
              {...getOverrideProps(overrides, "Title")}
            ></Text>
            <Text
              fontFamily="Roboto"
              fontSize="15px"
              fontWeight="400"
              color="rgba(209,174,127,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="205.11px"
              height="30.66px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="21.29px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="description"
              {...getOverrideProps(overrides, "description")}
            ></Text>
          </View>
        </View>
      </View>
    </View>
  );
}
