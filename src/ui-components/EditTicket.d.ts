/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Project, Ticket, User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditTicketOverridesProps = {
    EditTicket?: PrimitiveOverrideProps<ViewProps>;
    edit_ticket_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    project_name_text?: PrimitiveOverrideProps<TextProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    watch_image?: PrimitiveOverrideProps<ImageProps>;
    watch_badge?: PrimitiveOverrideProps<BadgeProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    comments_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    create_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    Divider179382085?: PrimitiveOverrideProps<DividerProps>;
    more_options_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    project_image_name?: PrimitiveOverrideProps<ImageProps>;
    Divider332416?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type EditTicketProps = React.PropsWithChildren<Partial<ViewProps> & {
    project?: Project;
    ticket?: Ticket;
    user?: User;
} & {
    overrides?: EditTicketOverridesProps | undefined | null;
}>;
export default function EditTicket(props: EditTicketProps): React.ReactElement;
