/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Project, Ticket, User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, DividerProps, FlexProps, ImageProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditticketfieldOverridesProps = {
    Editticketfield?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    Details_form?: PrimitiveOverrideProps<ViewProps>;
    Details?: PrimitiveOverrideProps<TextProps>;
    "Status:"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Type:"?: PrimitiveOverrideProps<TextProps>;
    "Priority:"?: PrimitiveOverrideProps<TextProps>;
    Project?: PrimitiveOverrideProps<TextProps>;
    Resolution?: PrimitiveOverrideProps<TextProps>;
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    project_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    resolution_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    status_badge?: PrimitiveOverrideProps<BadgeProps>;
    status_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    project_group?: PrimitiveOverrideProps<ViewProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    project_image_name?: PrimitiveOverrideProps<ImageProps>;
    project_name_text?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    save_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    people_group?: PrimitiveOverrideProps<ViewProps>;
    Asignee?: PrimitiveOverrideProps<TextProps>;
    Reporter?: PrimitiveOverrideProps<TextProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    reporter_icon_image?: PrimitiveOverrideProps<ImageProps>;
    asignee_name_text?: PrimitiveOverrideProps<TextProps>;
    "Reporter name"?: PrimitiveOverrideProps<TextProps>;
    People?: PrimitiveOverrideProps<TextProps>;
    dates_group?: PrimitiveOverrideProps<ViewProps>;
    Dates?: PrimitiveOverrideProps<TextProps>;
    Created?: PrimitiveOverrideProps<TextProps>;
    Updated?: PrimitiveOverrideProps<TextProps>;
    Resolved?: PrimitiveOverrideProps<TextProps>;
    created_date_text?: PrimitiveOverrideProps<TextProps>;
    updated_date_text?: PrimitiveOverrideProps<TextProps>;
    resolved_date_text?: PrimitiveOverrideProps<TextProps>;
    assign_to_me_button?: PrimitiveOverrideProps<ButtonProps>;
    watch_image?: PrimitiveOverrideProps<ImageProps>;
    watch_badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type EditticketfieldProps = React.PropsWithChildren<Partial<ViewProps> & {
    project?: Project;
    ticket?: Ticket;
    user?: User;
} & {
    overrides?: EditticketfieldOverridesProps | undefined | null;
}>;
export default function Editticketfield(props: EditticketfieldProps): React.ReactElement;
