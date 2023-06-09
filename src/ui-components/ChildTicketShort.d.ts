/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ticket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChildTicketShortOverridesProps = {
    ChildTicketShort?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    status_badge?: PrimitiveOverrideProps<BadgeProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    title_text?: PrimitiveOverrideProps<TextProps>;
    unlink_task_button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ChildTicketShortProps = React.PropsWithChildren<Partial<ViewProps> & {
    ticket?: Ticket;
} & {
    overrides?: ChildTicketShortOverridesProps | undefined | null;
}>;
export default function ChildTicketShort(props: ChildTicketShortProps): React.ReactElement;
