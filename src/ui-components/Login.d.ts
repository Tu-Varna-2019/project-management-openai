/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, IconProps, ImageProps, PasswordFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    Login?: PrimitiveOverrideProps<ViewProps>;
    Login168583462?: PrimitiveOverrideProps<ViewProps>;
    Signinmenu?: PrimitiveOverrideProps<ViewProps>;
    Rectangle11?: PrimitiveOverrideProps<ViewProps>;
    SigninTitle172481633?: PrimitiveOverrideProps<ViewProps>;
    Signin172481634?: PrimitiveOverrideProps<TextProps>;
    Remembereverythingimportant?: PrimitiveOverrideProps<TextProps>;
    "01DividersADefault-Dark"?: PrimitiveOverrideProps<ViewProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    Color17254817?: PrimitiveOverrideProps<ViewProps>;
    Signinform?: PrimitiveOverrideProps<ViewProps>;
    emailbar?: PrimitiveOverrideProps<ViewProps>;
    SigninTitle172481648?: PrimitiveOverrideProps<ViewProps>;
    Signin172481649?: PrimitiveOverrideProps<TextProps>;
    SigninTitle168693913?: PrimitiveOverrideProps<ViewProps>;
    orlines2?: PrimitiveOverrideProps<ViewProps>;
    "01DividersATop-Dark172481640"?: PrimitiveOverrideProps<ViewProps>;
    Color172481641?: PrimitiveOverrideProps<ViewProps>;
    "01DividersATop-Dark172481638"?: PrimitiveOverrideProps<ViewProps>;
    Color172481639?: PrimitiveOverrideProps<ViewProps>;
    ortext?: PrimitiveOverrideProps<TextProps>;
    "BycontinuingwithEmail,youagreetoMNotes\u2019sTermsofServiceandPrivacyPolicy"?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    "icons8-notepad-961"?: PrimitiveOverrideProps<ImageProps>;
    MNotes?: PrimitiveOverrideProps<TextProps>;
    Followusonwidget169283802?: PrimitiveOverrideProps<ViewProps>;
    SigninTitle172481642?: PrimitiveOverrideProps<ViewProps>;
    Signin172481643?: PrimitiveOverrideProps<TextProps>;
    Rectangle1169283804?: PrimitiveOverrideProps<ViewProps>;
    "icons8-twitter2"?: PrimitiveOverrideProps<ImageProps>;
    "icons8-youtube-502"?: PrimitiveOverrideProps<ImageProps>;
    "icons8-instagram-502"?: PrimitiveOverrideProps<ImageProps>;
    Followusonwidget170023876?: PrimitiveOverrideProps<ViewProps>;
    SigninTitle172481644?: PrimitiveOverrideProps<ViewProps>;
    Signin172481645?: PrimitiveOverrideProps<TextProps>;
    Rectangle1170023878?: PrimitiveOverrideProps<ViewProps>;
    "icons8-twitter1"?: PrimitiveOverrideProps<IconProps>;
    "icons8-google-play-501"?: PrimitiveOverrideProps<ImageProps>;
    "icons8-windows-10-301"?: PrimitiveOverrideProps<ImageProps>;
    "icons8-mac-logo-501"?: PrimitiveOverrideProps<ImageProps>;
    "icons8-apple-logo-501"?: PrimitiveOverrideProps<ImageProps>;
    email_text_box?: PrimitiveOverrideProps<TextFieldProps>;
    signin_button?: PrimitiveOverrideProps<ButtonProps>;
    signup_button?: PrimitiveOverrideProps<ButtonProps>;
    password_text_box?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginOverridesProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
