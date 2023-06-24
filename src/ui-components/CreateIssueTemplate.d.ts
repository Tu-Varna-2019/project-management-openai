/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateIssueTemplateOverridesProps = {
    CreateIssueTemplate?: PrimitiveOverrideProps<ViewProps>;
    create_ticket_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider1372810?: PrimitiveOverrideProps<DividerProps>;
    Divider1372812?: PrimitiveOverrideProps<DividerProps>;
    create_ticket_text?: PrimitiveOverrideProps<TextProps>;
    story_point_stepper_field?: PrimitiveOverrideProps<StepperFieldProps>;
    "Story Point"?: PrimitiveOverrideProps<TextProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    comments_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    create_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    Divider1372907?: PrimitiveOverrideProps<DividerProps>;
    More?: PrimitiveOverrideProps<TextProps>;
    ai_options_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CreateIssueTemplateProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateIssueTemplateOverridesProps | undefined | null;
}>;
export default function CreateIssueTemplate(props: CreateIssueTemplateProps): React.ReactElement;
