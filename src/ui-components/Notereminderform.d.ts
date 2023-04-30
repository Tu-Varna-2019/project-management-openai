/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotereminderformOverridesProps = {
    Notereminderform?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    card_reminder_form?: PrimitiveOverrideProps<CardProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    reminder_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    more_info_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type NotereminderformProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NotereminderformOverridesProps | undefined | null;
}>;
export default function Notereminderform(props: NotereminderformProps): React.ReactElement;
