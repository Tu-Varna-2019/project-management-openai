/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, CardProps, DividerProps, ImageProps, PasswordFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResetPasswordOverridesProps = {
    ResetPassword?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    "aws image background notes 1"?: PrimitiveOverrideProps<ImageProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    Form_field?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    confirm_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    old_password_field?: PrimitiveOverrideProps<PasswordFieldProps>;
    new_password_field?: PrimitiveOverrideProps<PasswordFieldProps>;
    confirm_password_field?: PrimitiveOverrideProps<PasswordFieldProps>;
    MNotes?: PrimitiveOverrideProps<TextProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
    error_alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type ResetPasswordProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ResetPasswordOverridesProps | undefined | null;
}>;
export default function ResetPassword(props: ResetPasswordProps): React.ReactElement;
