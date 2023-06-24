/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ticket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchResultMatchOverridesProps = {
    SearchResultMatch?: PrimitiveOverrideProps<ViewProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    title_text?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SearchResultMatchProps = React.PropsWithChildren<Partial<ViewProps> & {
    ticket?: Ticket;
} & {
    overrides?: SearchResultMatchOverridesProps | undefined | null;
}>;
export default function SearchResultMatch(props: SearchResultMatchProps): React.ReactElement;
