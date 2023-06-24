/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChildTicketShortProps } from "./ChildTicketShort";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChildTicketShortCollectionOverridesProps = {
    ChildTicketShortCollection?: PrimitiveOverrideProps<CollectionProps>;
    ChildTicketShort?: ChildTicketShortProps;
} & EscapeHatchProps;
export declare type ChildTicketShortCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ChildTicketShortProps;
} & {
    overrides?: ChildTicketShortCollectionOverridesProps | undefined | null;
}>;
export default function ChildTicketShortCollection(props: ChildTicketShortCollectionProps): React.ReactElement;
