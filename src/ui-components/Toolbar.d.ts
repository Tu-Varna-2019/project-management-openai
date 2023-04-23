/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToolbarOverridesProps = {
    Toolbar?: PrimitiveOverrideProps<ViewProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    components_footer?: PrimitiveOverrideProps<ViewProps>;
    powered_by_amplify_text175901700?: PrimitiveOverrideProps<TextProps>;
    powered_by_amplify_text175901701?: PrimitiveOverrideProps<TextProps>;
    my_account_select_field?: PrimitiveOverrideProps<FlexProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<IconProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
    task_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    bin_button?: PrimitiveOverrideProps<ButtonProps>;
    contact_us_button?: PrimitiveOverrideProps<ButtonProps>;
    "amplify-logo.677fad72 1"?: PrimitiveOverrideProps<FlexProps>;
    "Clip path group"?: PrimitiveOverrideProps<FlexProps>;
    clip0?: PrimitiveOverrideProps<ViewProps>;
    Vector175901719?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector175901721?: PrimitiveOverrideProps<IconProps>;
    Vector175901722?: PrimitiveOverrideProps<IconProps>;
    Vector175901723?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type ToolbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ToolbarOverridesProps | undefined | null;
}>;
export default function Toolbar(props: ToolbarProps): React.ReactElement;
