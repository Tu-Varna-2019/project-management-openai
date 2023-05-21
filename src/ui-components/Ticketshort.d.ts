/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ticket, User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, CardProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketshortOverridesProps = {
    Ticketshort?: PrimitiveOverrideProps<ViewProps>;
    "Frame 4"?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    story_points_badge?: PrimitiveOverrideProps<BadgeProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    title_ticket_text?: PrimitiveOverrideProps<TextProps>;
    epic_link_badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type TicketshortProps = React.PropsWithChildren<Partial<ViewProps> & {
    ticket?: Ticket;
    user?: User;
} & {
    overrides?: TicketshortOverridesProps | undefined | null;
}>;
export default function Ticketshort(props: TicketshortProps): React.ReactElement;
