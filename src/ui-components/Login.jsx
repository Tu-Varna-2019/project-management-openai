/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Icon,
  Image,
  PasswordField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  const signinmenuOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <View
      width="492px"
      height="605px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <View
        width="492px"
        height="605px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Login168583462")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="442px"
          height="493px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="89px"
          left="25px"
          onClick={() => {
            signinmenuOnClick();
          }}
          {...getOverrideProps(overrides, "Signinmenu")}
        >
          <View
            width="442px"
            height="70px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="423px"
            left="0px"
            borderRadius="35px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(208,192,164,1)"
            {...getOverrideProps(overrides, "Rectangle11")}
          ></View>
          <View
            width="155px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="139px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "SigninTitle172481633")}
          >
            <Text
              fontFamily="Kalam"
              fontSize="36px"
              fontWeight="400"
              color="rgba(203,163,109,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="155px"
              height="22px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Sign in"
              {...getOverrideProps(overrides, "Signin172481634")}
            ></Text>
          </View>
          <Text
            fontFamily="Kalam"
            fontSize="12px"
            fontWeight="400"
            color="rgba(203,163,109,1)"
            lineHeight="24px"
            textAlign="justify"
            display="block"
            direction="column"
            justifyContent="unset"
            width="193px"
            height="25px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="41px"
            bottom="427px"
            left="calc(50% - 96.5px - 92.5px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Remember everything important.&#xA;"
            {...getOverrideProps(overrides, "Remembereverythingimportant")}
          ></Text>
          <View
            width="360px"
            height="26px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="26px"
            left="36px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "01DividersADefault-Dark")}
          >
            <View
              width="360px"
              height="1px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 0.5px - -0.5px)"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Divider")}
            >
              <View
                width="360px"
                height="0.5px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="50%"
                bottom="0%"
                left="0%"
                right="0%"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(41,41,41,1)"
                {...getOverrideProps(overrides, "Color17254817")}
              ></View>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="192px"
            height="254.97px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="84px"
            left="36px"
            {...getOverrideProps(overrides, "Signinform")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="134px"
              height="47.94px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              {...getOverrideProps(overrides, "emailbar")}
            >
              <View
                width="66px"
                height="21.09px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "SigninTitle172481648")}
              >
                <Text
                  fontFamily="Kalam"
                  fontSize="15px"
                  fontWeight="400"
                  color="rgba(203,163,109,1)"
                  lineHeight="24px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="66px"
                  height="21.09px"
                  gap="unset"
                  alignItems="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Email"
                  {...getOverrideProps(overrides, "Signin172481649")}
                ></Text>
              </View>
              <View
                width="125px"
                height="17.26px"
                {...getOverrideProps(overrides, "SigninTitle168693913")}
              ></View>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="183px"
              height="22.51px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="232.46px"
              left="9px"
              {...getOverrideProps(overrides, "orlines2")}
            >
              <View
                width="69px"
                height="1px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="10.54px"
                left="0px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "01DividersATop-Dark172481640")}
              >
                <View
                  width="69px"
                  height="0.5px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="50%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(41,41,41,1)"
                  {...getOverrideProps(overrides, "Color172481641")}
                ></View>
              </View>
              <View
                width="74px"
                height="1px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="10.54px"
                left="109px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "01DividersATop-Dark172481638")}
              >
                <View
                  width="74px"
                  height="0.5px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="50%"
                  left="0%"
                  right="0%"
                  padding="0px 0px 0px 0px"
                  backgroundColor="rgba(41,41,41,1)"
                  {...getOverrideProps(overrides, "Color172481639")}
                ></View>
              </View>
              <Text
                fontFamily="Kalam"
                fontSize="20px"
                fontWeight="400"
                color="rgba(216,192,159,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="65px"
                height="22.51px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="27.24%"
                right="37.24%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="or"
                {...getOverrideProps(overrides, "ortext")}
              ></Text>
            </View>
          </View>
          <Text
            fontFamily="Kalam"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="157px"
            height="97px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="288px"
            left="251px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="By continuing with Email, you agree to MNotes’s Terms of Service and Privacy Policy.&#xA;"
            {...getOverrideProps(
              overrides,
              "BycontinuingwithEmail,youagreetoMNotes\u2019sTermsofServiceandPrivacyPolicy"
            )}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="101.86px"
            height="115.49px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="106px"
            left="271.14px"
            {...getOverrideProps(overrides, "Logo")}
          >
            <Image
              width="86.91px"
              height="71px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="14.95px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "icons8-notepad-961")}
            ></Image>
            <Text
              fontFamily="Just Another Hand"
              fontSize="32px"
              fontWeight="400"
              color="rgba(68,177,208,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="93.03px"
              height="19.36px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="83.23%"
              bottom="0%"
              left="0%"
              right="8.67%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="MNotes"
              {...getOverrideProps(overrides, "MNotes")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="137px"
            height="58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="428px"
            left="45px"
            {...getOverrideProps(overrides, "Followusonwidget169283802")}
          >
            <View
              width="110px"
              height="21.82px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="13px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SigninTitle172481642")}
            >
              <Text
                fontFamily="Kalam"
                fontSize="13px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="110px"
                height="21.82px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Follow us on"
                {...getOverrideProps(overrides, "Signin172481643")}
              ></Text>
            </View>
            <View
              width="137px"
              height="31px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27px"
              left="0px"
              borderRadius="15.5px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle1169283804")}
            ></View>
          </View>
          <Image
            width="24px"
            height="21px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="461px"
            left="58px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "icons8-twitter2")}
          ></Image>
          <Image
            width="27px"
            height="19px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="461px"
            left="96px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "icons8-youtube-502")}
          ></Image>
          <Image
            width="23px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="459px"
            left="137px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "icons8-instagram-502")}
          ></Image>
          <View
            padding="0px 0px 0px 0px"
            width="163px"
            height="57px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="430px"
            left="248px"
            {...getOverrideProps(overrides, "Followusonwidget170023876")}
          >
            <View
              width="110px"
              height="21.82px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="22px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "SigninTitle172481644")}
            >
              <Text
                fontFamily="Kalam"
                fontSize="13px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="110px"
                height="21.82px"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Available on"
                {...getOverrideProps(overrides, "Signin172481645")}
              ></Text>
            </View>
            <View
              width="163px"
              height="31px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26px"
              left="0px"
              borderRadius="15.5px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle1170023878")}
            ></View>
            <Icon
              width="24px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 24, height: 20 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="33px"
              left="27px"
              {...getOverrideProps(overrides, "icons8-twitter1")}
            ></Icon>
          </View>
          <Image
            width="25px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="460px"
            left="263px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "icons8-google-play-501")}
          ></Image>
          <Image
            width="27px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="459px"
            left="331px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "icons8-windows-10-301")}
          ></Image>
          <Image
            width="27px"
            height="29px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="456px"
            left="370px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "icons8-mac-logo-501")}
          ></Image>
          <Image
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="460px"
            left="293px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "icons8-apple-logo-501")}
          ></Image>
        </View>
        <TextField
          width="182px"
          height="33px"
          placeholder="e.g john@mail.com"
          position="absolute"
          top="202px"
          left="73px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "email_text_box")}
        ></TextField>
        <Button
          width="181.86px"
          height="39.47px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="341px"
          left="71.12px"
          transformOrigin="top left"
          transform="rotate(0.18deg)"
          backgroundColor="rgba(208,192,164,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign in"
          {...getOverrideProps(overrides, "signin_button")}
        ></Button>
        <Button
          width="181.86px"
          height="39.47px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="435px"
          left="68.12px"
          transformOrigin="top left"
          transform="rotate(0.18deg)"
          backgroundColor="rgba(208,192,164,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign up"
          {...getOverrideProps(overrides, "signup_button")}
        ></Button>
        <PasswordField
          width="182px"
          height="76px"
          label="Password"
          position="absolute"
          top="248px"
          left="73px"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={true}
          {...getOverrideProps(overrides, "password_text_box")}
        ></PasswordField>
      </View>
    </View>
  );
}
