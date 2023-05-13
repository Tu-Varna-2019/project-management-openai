/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, IconProps, ImageProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditnotecardOverridesProps = {
    Editnotecard?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    note_edit_group?: PrimitiveOverrideProps<ViewProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    submit_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    deleted_switch_field?: PrimitiveOverrideProps<SwitchFieldProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    shareIcon?: PrimitiveOverrideProps<ImageProps>;
    imageNote?: PrimitiveOverrideProps<ImageProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    close_note?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EditnotecardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EditnotecardOverridesProps | undefined | null;
}>;
export default function Editnotecard(props: EditnotecardProps): React.ReactElement;
