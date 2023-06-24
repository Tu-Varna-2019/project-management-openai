/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, SearchFieldProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReminderOverridesProps = {
    Reminder?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider177182476?: PrimitiveOverrideProps<DividerProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    components_footer?: PrimitiveOverrideProps<ViewProps>;
    powered_by_amplify_text177182480?: PrimitiveOverrideProps<TextProps>;
    powered_by_amplify_text177182481?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    contact_us_button?: PrimitiveOverrideProps<ButtonProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    feedback_text?: PrimitiveOverrideProps<BadgeProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    Divider177182494?: PrimitiveOverrideProps<DividerProps>;
    "amplify-logo.677fad72 1"?: PrimitiveOverrideProps<FlexProps>;
    "Clip path group"?: PrimitiveOverrideProps<FlexProps>;
    clip0?: PrimitiveOverrideProps<ViewProps>;
    Vector177182498?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector177182500?: PrimitiveOverrideProps<IconProps>;
    Vector177182501?: PrimitiveOverrideProps<IconProps>;
    Vector177182502?: PrimitiveOverrideProps<IconProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    notes_displayed_here_no_note?: PrimitiveOverrideProps<TextProps>;
    amplify_image_logo_no_note?: PrimitiveOverrideProps<ImageProps>;
    task_bar_button?: PrimitiveOverrideProps<ViewProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
    task_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    bin_button?: PrimitiveOverrideProps<ButtonProps>;
    Divider177182515?: PrimitiveOverrideProps<DividerProps>;
    pending_passed_divider?: PrimitiveOverrideProps<DividerProps>;
    pending_reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    passed_reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    Divider177451841?: PrimitiveOverrideProps<DividerProps>;
    divider_notes_info?: PrimitiveOverrideProps<DividerProps>;
    edit_note_form?: PrimitiveOverrideProps<ViewProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    submit_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    deleted_switch_field?: PrimitiveOverrideProps<SwitchFieldProps>;
    imageNote?: PrimitiveOverrideProps<ImageProps>;
    Divider177941757?: PrimitiveOverrideProps<DividerProps>;
    shareIcon?: PrimitiveOverrideProps<ImageProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    success_alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type ReminderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ReminderOverridesProps | undefined | null;
}>;
export default function Reminder(props: ReminderProps): React.ReactElement;
