/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function Sharedselectednoemail(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="248px"
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
      {...getOverrideProps(overrides, "Sharedselectednoemail")}
      {...rest}
    >
      <View
        width="250px"
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
          width="55px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="17px"
          left="6px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Add24Filled")}
        >
          <Icon
            width="18px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
            paths={[
              {
                d: "M8.88338 0.0067277L9 0C9.51284 0 9.93551 0.38604 9.99327 0.883379L10 1L10 8L17 8C17.5128 8 17.9355 8.38604 17.9933 8.88338L18 9C18 9.51284 17.614 9.93551 17.1166 9.99327L17 10L10 10L10 17C10 17.5128 9.61396 17.9355 9.11662 17.9933L9 18C8.48716 18 8.06449 17.614 8.00673 17.1166L8 17L8 10L1 10C0.487164 10 0.0644928 9.61396 0.0067277 9.11662L0 9C0 8.48716 0.38604 8.06449 0.883379 8.00673L1 8L8 8L8 1C8 0.487164 8.38604 0.0644928 8.88338 0.0067277L9 0L8.88338 0.0067277Z",
                fill: "rgba(212,197,172,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="calc(50% - 9px - -0.5px)"
            left="calc(50% - 9px - -0.5px)"
            {...getOverrideProps(overrides, "Color")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
