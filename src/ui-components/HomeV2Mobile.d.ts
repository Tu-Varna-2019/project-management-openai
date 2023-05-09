/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, DividerProps, ImageProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeV2MobileOverridesProps = {
    HomeV2Mobile?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider178221870?: PrimitiveOverrideProps<DividerProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
    task_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    bin_button?: PrimitiveOverrideProps<ButtonProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    my_account_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    submit_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    divider_notes_info?: PrimitiveOverrideProps<DividerProps>;
    create_note_button?: PrimitiveOverrideProps<ButtonProps>;
    deleted_switch_field?: PrimitiveOverrideProps<SwitchFieldProps>;
    success_alert?: PrimitiveOverrideProps<AlertProps>;
    notes_displayed_here_no_note?: PrimitiveOverrideProps<TextProps>;
    amplify_image_logo_no_note?: PrimitiveOverrideProps<ImageProps>;
    Divider178221909?: PrimitiveOverrideProps<DividerProps>;
    Divider178221911?: PrimitiveOverrideProps<DividerProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    shareIcon?: PrimitiveOverrideProps<ImageProps>;
    info_alert?: PrimitiveOverrideProps<AlertProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    confirm_button?: PrimitiveOverrideProps<ButtonProps>;
    shareTextField?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeV2MobileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomeV2MobileOverridesProps | undefined | null;
}>;
export default function HomeV2Mobile(props: HomeV2MobileProps): React.ReactElement;
