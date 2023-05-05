/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Signoutalertbox(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="341px"
      height="292px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Signoutalertbox")}
      {...rest}
    >
      <View
        width="318px"
        height="274px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9px"
        left="6px"
        borderRadius="23.5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(248,248,248,1)"
        {...getOverrideProps(overrides, "Rectangle14")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="119.62px"
        height="63.49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="208px"
        left="25px"
        {...getOverrideProps(overrides, "Yesbutton")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="119.62px"
          height="63.49px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Buttonyes169493638")}
        >
          <View
            width="119.62px"
            height="63.49px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(212,197,172,1)"
            borderRadius="67px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(212,197,172,1)"
            {...getOverrideProps(overrides, "Rectangle13169493639")}
          ></View>
        </View>
        <Text
          fontFamily="Kalam"
          fontSize="16px"
          fontWeight="400"
          color="rgba(50,50,50,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="22px"
          left="48px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Yes"
          {...getOverrideProps(overrides, "Yes")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="119.62px"
        height="63.49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="208px"
        left="181px"
        {...getOverrideProps(overrides, "Nobutton")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="119.62px"
          height="63.49px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Deletealertbox")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="119.62px"
            height="63.49px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Buttonyes169493643")}
          >
            <View
              width="119.62px"
              height="63.49px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(212,197,172,1)"
              borderRadius="67px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(212,197,172,1)"
              {...getOverrideProps(overrides, "Rectangle13169493644")}
            ></View>
          </View>
        </View>
        <Text
          fontFamily="Kalam"
          fontSize="16px"
          fontWeight="400"
          color="rgba(50,50,50,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="22px"
          left="50px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="No"
          {...getOverrideProps(overrides, "No")}
        ></Text>
      </View>
      <Text
        fontFamily="Kalam"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,0.8)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="308px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30px"
        left="6px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Are you sure you want to sign out ?"
        {...getOverrideProps(overrides, "Areyousureyouwanttosignout?")}
      ></Text>
    </View>
  );
}
