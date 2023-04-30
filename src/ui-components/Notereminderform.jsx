/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function Notereminderform(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="336px"
      height="207px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Notereminderform")}
      {...rest}
    >
      <View
        width="336px"
        height="217px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Card
          width="336px"
          height="206px"
          position="absolute"
          top="0px"
          left="0px"
          variation="outline"
          {...getOverrideProps(overrides, "card_reminder_form")}
        ></Card>
        <TextField
          width="302px"
          height="unset"
          label="Title"
          placeholder="Title"
          position="absolute"
          top="8px"
          left="16px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <TextField
          width="302px"
          height="unset"
          label="Reminder"
          placeholder="mm/dd/yyy"
          position="absolute"
          top="63px"
          left="16px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "reminder_text_field")}
        ></TextField>
        <SelectField
          width="300px"
          height="unset"
          label="More"
          position="absolute"
          top="118px"
          left="16px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "more_info_select_field")}
        ></SelectField>
      </View>
    </View>
  );
}
