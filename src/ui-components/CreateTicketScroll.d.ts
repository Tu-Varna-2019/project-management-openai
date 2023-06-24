/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, DividerProps, ImageProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateTicketScrollOverridesProps = {
    CreateTicketScroll?: PrimitiveOverrideProps<ViewProps>;
    CreateTicketScrollGroup?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    people_group?: PrimitiveOverrideProps<ViewProps>;
    Asignee?: PrimitiveOverrideProps<TextProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    asignee_name_text?: PrimitiveOverrideProps<TextProps>;
    asignee_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Details_form?: PrimitiveOverrideProps<ViewProps>;
    "Epic link"?: PrimitiveOverrideProps<TextProps>;
    "Issue type"?: PrimitiveOverrideProps<TextProps>;
    "Priority:"?: PrimitiveOverrideProps<TextProps>;
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    epic_link_group?: PrimitiveOverrideProps<ViewProps>;
    epic_link_badge?: PrimitiveOverrideProps<BadgeProps>;
    epic_link_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Story points"?: PrimitiveOverrideProps<TextProps>;
    story_point_stepper_field?: PrimitiveOverrideProps<StepperFieldProps>;
    issue_template_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_template_text?: PrimitiveOverrideProps<TextProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    watch_image?: PrimitiveOverrideProps<ImageProps>;
    watch_badge?: PrimitiveOverrideProps<BadgeProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    comments_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Divider1292757?: PrimitiveOverrideProps<DividerProps>;
    Divider1292759?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type CreateTicketScrollProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateTicketScrollOverridesProps | undefined | null;
}>;
export default function CreateTicketScroll(props: CreateTicketScrollProps): React.ReactElement;
