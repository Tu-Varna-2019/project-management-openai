/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, SearchFieldProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    Divider175691724?: PrimitiveOverrideProps<DividerProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    create_note_button?: PrimitiveOverrideProps<ButtonProps>;
    "amplify-logo.677fad72 1"?: PrimitiveOverrideProps<FlexProps>;
    "Clip path group"?: PrimitiveOverrideProps<FlexProps>;
    clip0?: PrimitiveOverrideProps<ViewProps>;
    Vector175851720?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector175851716?: PrimitiveOverrideProps<IconProps>;
    Vector175851717?: PrimitiveOverrideProps<IconProps>;
    Vector175851718?: PrimitiveOverrideProps<IconProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
    test?: Boolean;
    url?: React.ReactNode;
} & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
