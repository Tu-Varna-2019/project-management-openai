/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Project, Ticket, User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditTicketOverridesProps = {
    EditTicket?: PrimitiveOverrideProps<ViewProps>;
    edit_ticket_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    Details_form?: PrimitiveOverrideProps<ViewProps>;
    Details?: PrimitiveOverrideProps<TextProps>;
    "Status:"?: PrimitiveOverrideProps<TextProps>;
    "Story points"?: PrimitiveOverrideProps<TextProps>;
    "Type:"?: PrimitiveOverrideProps<TextProps>;
    "Priority:"?: PrimitiveOverrideProps<TextProps>;
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    status_badge?: PrimitiveOverrideProps<BadgeProps>;
    status_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    epic_link_badge?: PrimitiveOverrideProps<BadgeProps>;
    project_name_text?: PrimitiveOverrideProps<TextProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    watch_image?: PrimitiveOverrideProps<ImageProps>;
    watch_badge?: PrimitiveOverrideProps<BadgeProps>;
    dates_group?: PrimitiveOverrideProps<ViewProps>;
    Dates?: PrimitiveOverrideProps<TextProps>;
    Created?: PrimitiveOverrideProps<TextProps>;
    Updated?: PrimitiveOverrideProps<TextProps>;
    Resolved?: PrimitiveOverrideProps<TextProps>;
    created_date_text?: PrimitiveOverrideProps<TextProps>;
    updated_date_text?: PrimitiveOverrideProps<TextProps>;
    resolved_date_text?: PrimitiveOverrideProps<TextProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    comments_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    create_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    people_group?: PrimitiveOverrideProps<ViewProps>;
    Asignee?: PrimitiveOverrideProps<TextProps>;
    Reporter?: PrimitiveOverrideProps<TextProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    asignee_name_text?: PrimitiveOverrideProps<TextProps>;
    People?: PrimitiveOverrideProps<TextProps>;
    assign_to_me_button?: PrimitiveOverrideProps<ButtonProps>;
    reporter_name_text?: PrimitiveOverrideProps<TextProps>;
    reporter_icon_image?: PrimitiveOverrideProps<ImageProps>;
    epic_link_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider179382085?: PrimitiveOverrideProps<DividerProps>;
    more_options_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    project_image_name?: PrimitiveOverrideProps<ImageProps>;
    Divider179402161?: PrimitiveOverrideProps<DividerProps>;
    Divider179402163?: PrimitiveOverrideProps<DividerProps>;
    Divider179402165?: PrimitiveOverrideProps<DividerProps>;
    story_point_stepper_field?: PrimitiveOverrideProps<StepperFieldProps>;
    asignee_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    reporter_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type EditTicketProps = React.PropsWithChildren<Partial<ViewProps> & {
    project?: Project;
    ticket?: Ticket;
    user?: User;
} & {
    overrides?: EditTicketOverridesProps | undefined | null;
}>;
export default function EditTicket(props: EditTicketProps): React.ReactElement;
