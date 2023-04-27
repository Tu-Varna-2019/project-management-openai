/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Notebutton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Notebutton")}
      {...rest}
    >
      <Button
        width="184px"
        height="125px"
        border="3px SOLID rgba(255,153,0,1)"
        padding="5px 13px 5px 13px"
        shrink="0"
        backgroundColor="rgba(35,47,62,1)"
        size="large"
        isDisabled={false}
        variation="link"
        children="Title"
        {...getOverrideProps(overrides, "note_button")}
      ></Button>
    </Flex>
  );
}
