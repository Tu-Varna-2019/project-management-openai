/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ticket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, StepperFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    asignee_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider178752242?: PrimitiveOverrideProps<DividerProps>;
    Divider178752283?: PrimitiveOverrideProps<DividerProps>;
    Divider178802042?: PrimitiveOverrideProps<DividerProps>;
    create_ticket_text?: PrimitiveOverrideProps<TextProps>;
    story_point_stepper_field?: PrimitiveOverrideProps<StepperFieldProps>;
    "Story Point"?: PrimitiveOverrideProps<TextProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    epic_link_badge?: PrimitiveOverrideProps<BadgeProps>;
    epic_link_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CreateTicketProps = React.PropsWithChildren<Partial<ViewProps> & {
    ticket?: Ticket;
} & {
    overrides?: CreateTicketOverridesProps | undefined | null;
}>;
export default function CreateTicket(props: CreateTicketProps): React.ReactElement;
