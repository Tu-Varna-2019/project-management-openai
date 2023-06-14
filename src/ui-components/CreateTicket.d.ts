/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ticket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateTicketOverridesProps = {
    CreateTicket?: PrimitiveOverrideProps<ViewProps>;
    create_ticket_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    create_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    Divider178752283?: PrimitiveOverrideProps<DividerProps>;
    Divider178802042?: PrimitiveOverrideProps<DividerProps>;
    create_ticket_text?: PrimitiveOverrideProps<TextProps>;
    More?: PrimitiveOverrideProps<TextProps>;
    ai_options_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CreateTicketProps = React.PropsWithChildren<Partial<ViewProps> & {
    ticket?: Ticket;
} & {
    overrides?: CreateTicketOverridesProps | undefined | null;
}>;
export default function CreateTicket(props: CreateTicketProps): React.ReactElement;
