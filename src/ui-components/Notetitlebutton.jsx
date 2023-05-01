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
import { Button, Flex } from "@aws-amplify/ui-react";
export default function Notetitlebutton(props) {
  const { overrides, ...rest } = props;
  const [buttonBackgroundColor, setButtonBackgroundColor] =
    useStateMutationAction("rgba(35,47,62,1)");
  const notetitlebuttonOnMouseLeave = () => {
    setButtonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const notetitlebuttonOnMouseOver = () => {
    setButtonBackgroundColor("grey");
  };
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="87px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="3px SOLID rgba(190,206,254,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      onMouseLeave={() => {
        notetitlebuttonOnMouseLeave();
      }}
      onMouseOver={() => {
        notetitlebuttonOnMouseOver();
      }}
      {...getOverrideProps(overrides, "Notetitlebutton")}
      {...rest}
    >
      <Button
        width="150px"
        height="89px"
        border="1px SOLID rgba(35,47,62,1)"
        shrink="0"
        backgroundColor={buttonBackgroundColor}
        size="default"
        isDisabled={false}
        variation="default"
        children="Title"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
