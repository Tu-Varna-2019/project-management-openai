/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NoteV2 } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, SearchFieldProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeV2OverridesProps = {
    HomeV2?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider177411804?: PrimitiveOverrideProps<DividerProps>;
    Divider177411805?: PrimitiveOverrideProps<DividerProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    components_footer?: PrimitiveOverrideProps<ViewProps>;
    powered_by_amplify_text177411808?: PrimitiveOverrideProps<TextProps>;
    powered_by_amplify_text177411809?: PrimitiveOverrideProps<TextProps>;
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
    Vector177411826?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector177411828?: PrimitiveOverrideProps<IconProps>;
    Vector177411829?: PrimitiveOverrideProps<IconProps>;
    Vector177411830?: PrimitiveOverrideProps<IconProps>;
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
    Divider177411844?: PrimitiveOverrideProps<DividerProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    Divider177941757?: PrimitiveOverrideProps<DividerProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    shareIcon?: PrimitiveOverrideProps<ImageProps>;
    info_alert?: PrimitiveOverrideProps<AlertProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    confirm_button?: PrimitiveOverrideProps<ButtonProps>;
    shareTextField?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HomeV2Props = React.PropsWithChildren<Partial<ViewProps> & {
    noteV2?: NoteV2;
} & {
    overrides?: HomeV2OverridesProps | undefined | null;
}>;
export default function HomeV2(props: HomeV2Props): React.ReactElement;
