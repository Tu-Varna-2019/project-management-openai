/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, CardProps, DividerProps, FlexProps, IconProps, ImageProps, SearchFieldProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNotev2OverridesProps = {
    CreateNotev2?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider176021467?: PrimitiveOverrideProps<DividerProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    components_footer?: PrimitiveOverrideProps<ViewProps>;
    powered_by_amplify_text176021471?: PrimitiveOverrideProps<TextProps>;
    powered_by_amplify_text176021472?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    task_bar_button?: PrimitiveOverrideProps<ViewProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
    task_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    bin_button?: PrimitiveOverrideProps<ButtonProps>;
    contact_us_button?: PrimitiveOverrideProps<ButtonProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    Divider176021485?: PrimitiveOverrideProps<DividerProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    "amplify-logo.677fad72 1"?: PrimitiveOverrideProps<FlexProps>;
    "Clip path group"?: PrimitiveOverrideProps<FlexProps>;
    clip0?: PrimitiveOverrideProps<ViewProps>;
    Vector176021491?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector176021493?: PrimitiveOverrideProps<IconProps>;
    Vector176021494?: PrimitiveOverrideProps<IconProps>;
    Vector176021495?: PrimitiveOverrideProps<IconProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "bg-silver-01@2x 1"?: PrimitiveOverrideProps<ImageProps>;
    Divider177841685?: PrimitiveOverrideProps<DividerProps>;
    createForm?: PrimitiveOverrideProps<ViewProps>;
    "Create Note"?: PrimitiveOverrideProps<TextProps>;
    Divider176231440?: PrimitiveOverrideProps<DividerProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    reminder_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    clear_button?: PrimitiveOverrideProps<ButtonProps>;
    submit_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    openaiDescButton?: PrimitiveOverrideProps<ImageProps>;
    error_alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type CreateNotev2Props = React.PropsWithChildren<Partial<ViewProps> & {
    NoteTitle?: String;
} & {
    overrides?: CreateNotev2OverridesProps | undefined | null;
}>;
export default function CreateNotev2(props: CreateNotev2Props): React.ReactElement;
