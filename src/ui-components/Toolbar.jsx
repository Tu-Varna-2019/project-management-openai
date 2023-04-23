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
  Flex,
  Icon,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function Toolbar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1346px"
      height="171px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Toolbar")}
      {...rest}
    >
      <View
        width="1346px"
        height="171px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(35,47,62,1)"
        {...getOverrideProps(overrides, "footer_rectangle")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="1240px"
        height="114px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="30px"
        left="70px"
        {...getOverrideProps(overrides, "components_footer")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="100px"
          height="26px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="6px"
          left="6px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Created by "
          {...getOverrideProps(overrides, "powered_by_amplify_text175901700")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="112px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="85px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="AWS Amplify"
          {...getOverrideProps(overrides, "powered_by_amplify_text175901701")}
        ></Text>
        <Flex
          gap="8px"
          direction="column"
          width="159px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="0px"
          left="1081px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(35,47,62,1)"
          {...getOverrideProps(overrides, "my_account_select_field")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InputGroup")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              border="1px SOLID rgba(35,47,62,1)"
              borderRadius="5px"
              padding="8px 16px 8px 16px"
              {...getOverrideProps(overrides, "Input")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="My account"
                {...getOverrideProps(overrides, "placeholder")}
              ></Text>
              <Icon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="chevron_down"
                fontSize="24px"
                {...getOverrideProps(overrides, "Icon")}
              ></Icon>
            </Flex>
          </Flex>
        </Flex>
      </View>
      <SearchField
        width="622px"
        height="unset"
        placeholder="Search note"
        position="absolute"
        top="34px"
        left="350px"
        backgroundColor="rgba(255,255,255,1)"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Button
        width="150px"
        height="unset"
        position="absolute"
        top="115px"
        left="340px"
        backgroundColor="rgba(35,47,62,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Note"
        {...getOverrideProps(overrides, "note_button")}
      ></Button>
      <Button
        width="150px"
        height="unset"
        position="absolute"
        top="115px"
        left="694px"
        backgroundColor="rgba(35,47,62,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Task"
        {...getOverrideProps(overrides, "task_button")}
      ></Button>
      <Button
        width="150px"
        height="unset"
        position="absolute"
        top="115px"
        left="517px"
        backgroundColor="rgba(35,47,62,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Reminder"
        {...getOverrideProps(overrides, "reminder_button")}
      ></Button>
      <Button
        width="150px"
        height="unset"
        position="absolute"
        top="115px"
        left="871px"
        backgroundColor="rgba(35,47,62,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Bin"
        {...getOverrideProps(overrides, "bin_button")}
      ></Button>
      <Button
        width="150px"
        height="unset"
        position="absolute"
        top="34px"
        left="993px"
        backgroundColor="rgba(35,47,62,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Contact us"
        {...getOverrideProps(overrides, "contact_us_button")}
      ></Button>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="74px"
        left="101px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "amplify-logo.677fad72 1")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="36.35px"
          height="25px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Clip path group")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="36.35px"
            height="25px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "clip0")}
          >
            <Icon
              width="36.35px"
              height="25px"
              viewBox={{ minX: 0, minY: 0, width: 36.350830078125, height: 25 }}
              paths={[
                {
                  d: "M36.3508 0L0 0L0 25L36.3508 25L36.3508 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector175901719")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="36.35px"
            height="25px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group")}
          >
            <Icon
              width="21.02px"
              height="16.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 21.022216796875,
                height: 16.666748046875,
              }}
              paths={[
                {
                  d: "M7.40773 4.91926L0 16.6667L21.0222 16.6667L18.368 12.4578L7.98281 12.4578L13.1773 4.22649L10.5121 0L7.40773 4.91926Z",
                  fill: "rgba(255,153,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="33.33%"
              bottom="0.01%"
              left="0%"
              right="42.17%"
              {...getOverrideProps(overrides, "Vector175901721")}
            ></Icon>
            <Icon
              width="16.64px"
              height="23.02px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.642578125,
                height: 23.015869140625,
              }}
              paths={[
                {
                  d: "M0 4.06973L11.6339 23.0158L16.6426 23.0158L2.49916 0L0 4.06973Z",
                  fill: "rgba(255,153,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="7.94%"
              bottom="0%"
              left="32.53%"
              right="21.69%"
              {...getOverrideProps(overrides, "Vector175901722")}
            ></Icon>
            <Icon
              width="21.02px"
              height="25px"
              viewBox={{ minX: 0, minY: 0, width: 21.022216796875, height: 25 }}
              paths={[
                {
                  d: "M0 0L15.8942 25L21.0222 25L5.12158 0L0 0Z",
                  fill: "rgba(255,153,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="42.17%"
              right="0%"
              {...getOverrideProps(overrides, "Vector175901723")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
    </View>
  );
}
