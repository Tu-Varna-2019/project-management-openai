/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, CardProps, CheckboxFieldProps, DividerProps, ImageProps, PasswordFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeleteAccountOverridesProps = {
    DeleteAccount?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "aws image background notes 1"?: PrimitiveOverrideProps<ImageProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    Form_field?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    delete_account_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    password_field?: PrimitiveOverrideProps<PasswordFieldProps>;
    confirm_password_field?: PrimitiveOverrideProps<PasswordFieldProps>;
    MNotes?: PrimitiveOverrideProps<TextProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
    error_alert?: PrimitiveOverrideProps<AlertProps>;
    "I understand that as a user of this service, I may want to delete my account for various reasons. To request the deletion of my account ."?: PrimitiveOverrideProps<TextProps>;
    agreement_checkbox?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type DeleteAccountProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DeleteAccountOverridesProps | undefined | null;
}>;
export default function DeleteAccount(props: DeleteAccountProps): React.ReactElement;
