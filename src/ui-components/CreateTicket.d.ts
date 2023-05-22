/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ticket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateTicketOverridesProps = {
    CreateTicket?: PrimitiveOverrideProps<ViewProps>;
    create_ticket_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    create_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    watch_image?: PrimitiveOverrideProps<ImageProps>;
    watch_badge?: PrimitiveOverrideProps<BadgeProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    project_select_field178752215?: PrimitiveOverrideProps<SelectFieldProps>;
    project_select_field179402173?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    asignee_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider178752242?: PrimitiveOverrideProps<DividerProps>;
    Divider178752283?: PrimitiveOverrideProps<DividerProps>;
    Divider178802042?: PrimitiveOverrideProps<DividerProps>;
    "Create ticket KAI-"?: PrimitiveOverrideProps<TextProps>;
    story_point_text_field?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateTicketProps = React.PropsWithChildren<Partial<ViewProps> & {
    ticket?: Ticket;
} & {
    overrides?: CreateTicketOverridesProps | undefined | null;
}>;
export default function CreateTicket(props: CreateTicketProps): React.ReactElement;
