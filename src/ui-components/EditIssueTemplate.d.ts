/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditIssueTemplateOverridesProps = {
    EditIssueTemplate?: PrimitiveOverrideProps<ViewProps>;
    create_ticket_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider1412684?: PrimitiveOverrideProps<DividerProps>;
    Divider1412685?: PrimitiveOverrideProps<DividerProps>;
    create_ticket_text?: PrimitiveOverrideProps<TextProps>;
    story_point_stepper_field?: PrimitiveOverrideProps<StepperFieldProps>;
    "Story Point"?: PrimitiveOverrideProps<TextProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    comments_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    save_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    Divider1412693?: PrimitiveOverrideProps<DividerProps>;
    More?: PrimitiveOverrideProps<TextProps>;
    ai_options_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_template_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    project_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_template_text1412756?: PrimitiveOverrideProps<TextProps>;
    issue_template_text1412774?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EditIssueTemplateProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EditIssueTemplateOverridesProps | undefined | null;
}>;
export default function EditIssueTemplate(props: EditIssueTemplateProps): React.ReactElement;
