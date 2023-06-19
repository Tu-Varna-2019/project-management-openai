/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Card,
  Icon,
  Image,
  SelectField,
  SwitchField,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Editnotecard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="645px"
      height="787px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Editnotecard")}
      {...rest}
    >
      <Card
        width="645px"
        height="842.42px"
        position="absolute"
        padding="13px 13px 13px 13px"
        top="0%"
        bottom="-7.04%"
        left="0%"
        right="0%"
        border="3px SOLID rgba(255,153,0,1)"
        variation="outline"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <View
        padding="0px 0px 0px 0px"
        width="602px"
        height="606.45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="26.38%"
        bottom="-3.44%"
        left="2.95%"
        right="3.72%"
        {...getOverrideProps(overrides, "note_edit_group")}
      >
        <TextField
          width="596px"
          height="unset"
          label="Title"
          placeholder="Title"
          position="absolute"
          top="0%"
          bottom="88.13%"
          left="1%"
          right="0%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "title_text_field")}
        ></TextField>
        <SelectField
          width="268px"
          height="unset"
          label="Priority"
          position="absolute"
          top="45.63%"
          bottom="42.5%"
          left="54.49%"
          right="1%"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "priority_select_field")}
        ></SelectField>
        <Button
          width="592px"
          height="56.14px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="90.91%"
          bottom="-0.16%"
          left="-0.17%"
          right="1.83%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,153,0,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Save"
          {...getOverrideProps(overrides, "submit_button")}
        ></Button>
        <TextField
          width="276px"
          height="unset"
          label="Reminder"
          placeholder="mm/dd/yyy"
          position="absolute"
          top="45.63%"
          bottom="42.5%"
          left="0.83%"
          right="53.32%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "reminder_text_field")}
        ></TextField>
        <SwitchField
          width="unset"
          height="unset"
          label="Delete"
          position="absolute"
          top="68.93%"
          bottom="24.47%"
          left="81.23%"
          right="0.66%"
          size="default"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "deleted_switch_field")}
        ></SwitchField>
        <TextAreaField
          width="596px"
          height="unset"
          label="Description"
          placeholder="Description"
          position="absolute"
          top="18.69%"
          bottom="58.55%"
          left="1%"
          right="0%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "description_text_field")}
        ></TextAreaField>
        <Image
          width="7.81%"
          height="7.77%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="67.76%"
          bottom="24.47%"
          left="1%"
          right="91.2%"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "shareIcon")}
        ></Image>
      </View>
      <Image
        width="18.76%"
        height="13.12%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6.75%"
        bottom="80.13%"
        left="41.4%"
        right="39.84%"
        borderRadius="103px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "imageNote")}
      ></Image>
      <Icon
        width="597px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 597.000732421875,
          height: 0.5041999816894531,
        }}
        paths={[
          {
            d: "M0 0L597.001 0L597.001 -1L0 -1L0 0Z",
            stroke: "rgba(174,179,183,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="94.01%"
        bottom="5.99%"
        left="2.95%"
        right="4.5%"
        transformOrigin="top left"
        transform="rotate(0.05deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Icon
        width="57px"
        height="52.13px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="1.78%"
        bottom="91.59%"
        left="3.1%"
        right="88.06%"
        padding="0px 0px 0px 0px"
        type="close"
        fontSize="57px"
        {...getOverrideProps(overrides, "close_note")}
      ></Icon>
    </View>
  );
}
