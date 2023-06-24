/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, DividerProps, IconProps, ImageProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditTicketFullOverridesProps = {
    EditTicketFull?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    Divider178532437?: PrimitiveOverrideProps<DividerProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    watch_badge?: PrimitiveOverrideProps<BadgeProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    comments_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    create_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    more_options_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    watch_issue_button?: PrimitiveOverrideProps<ButtonProps>;
    "logo-gradient-blue-jira"?: PrimitiveOverrideProps<ViewProps>;
    Jira?: PrimitiveOverrideProps<ViewProps>;
    Vector180442973?: PrimitiveOverrideProps<IconProps>;
    Vector180442974?: PrimitiveOverrideProps<IconProps>;
    Vector180442975?: PrimitiveOverrideProps<IconProps>;
    Vector180442976?: PrimitiveOverrideProps<IconProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector180442978?: PrimitiveOverrideProps<IconProps>;
    Vector_2?: PrimitiveOverrideProps<IconProps>;
    Vector_3?: PrimitiveOverrideProps<IconProps>;
    Divider52565?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type EditTicketFullProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
} & {
    overrides?: EditTicketFullOverridesProps | undefined | null;
}>;
export default function EditTicketFull(props: EditTicketFullProps): React.ReactElement;
