/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, SearchFieldProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider175552033?: PrimitiveOverrideProps<DividerProps>;
    Divider175691694?: PrimitiveOverrideProps<DividerProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    components_footer?: PrimitiveOverrideProps<ViewProps>;
    powered_by_amplify_text175572064?: PrimitiveOverrideProps<TextProps>;
    powered_by_amplify_text175851722?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
    task_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    bin_button?: PrimitiveOverrideProps<ButtonProps>;
    contact_us_button?: PrimitiveOverrideProps<ButtonProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    feedback_text?: PrimitiveOverrideProps<BadgeProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    divider_consent_text?: PrimitiveOverrideProps<DividerProps>;
    "amplify-logo.677fad72 1"?: PrimitiveOverrideProps<FlexProps>;
    "Clip path group"?: PrimitiveOverrideProps<FlexProps>;
    clip0?: PrimitiveOverrideProps<ViewProps>;
    Vector175851720?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector175851716?: PrimitiveOverrideProps<IconProps>;
    Vector175851717?: PrimitiveOverrideProps<IconProps>;
    Vector175851718?: PrimitiveOverrideProps<IconProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    my_account_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submit_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    divider_notes_info?: PrimitiveOverrideProps<DividerProps>;
    create_note_button?: PrimitiveOverrideProps<ButtonProps>;
    deleted_switch_field?: PrimitiveOverrideProps<SwitchFieldProps>;
    success_alert?: PrimitiveOverrideProps<AlertProps>;
    notes_displayed_here_no_note?: PrimitiveOverrideProps<TextProps>;
    amplify_image_logo_no_note?: PrimitiveOverrideProps<ImageProps>;
    Divider177161908?: PrimitiveOverrideProps<DividerProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
    test?: Boolean;
    url?: React.ReactNode;
} & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
