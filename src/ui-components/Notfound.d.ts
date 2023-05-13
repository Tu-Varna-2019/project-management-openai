/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, SearchFieldProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotfoundOverridesProps = {
    "404"?: PrimitiveOverrideProps<TextProps>;
    Notfound?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider176001288?: PrimitiveOverrideProps<DividerProps>;
    Divider176001289?: PrimitiveOverrideProps<DividerProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    components_footer?: PrimitiveOverrideProps<ViewProps>;
    powered_by_amplify_text176001292?: PrimitiveOverrideProps<TextProps>;
    powered_by_amplify_text176001293?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    task_button?: PrimitiveOverrideProps<ButtonProps>;
    bin_button?: PrimitiveOverrideProps<ButtonProps>;
    contact_us_button?: PrimitiveOverrideProps<ButtonProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    "amplify-logo.677fad72 1"?: PrimitiveOverrideProps<FlexProps>;
    "Clip path group"?: PrimitiveOverrideProps<FlexProps>;
    clip0?: PrimitiveOverrideProps<ViewProps>;
    Vector176001312?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector176001314?: PrimitiveOverrideProps<IconProps>;
    Vector176001315?: PrimitiveOverrideProps<IconProps>;
    Vector176001316?: PrimitiveOverrideProps<IconProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Sorry, the page you tried cannot be found."?: PrimitiveOverrideProps<TextProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    Divider176001306?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type NotfoundProps = React.PropsWithChildren<Partial<ViewProps> & {
    TaskBarMouseLeave?: String;
} & {
    overrides?: NotfoundOverridesProps | undefined | null;
}>;
export default function Notfound(props: NotfoundProps): React.ReactElement;
