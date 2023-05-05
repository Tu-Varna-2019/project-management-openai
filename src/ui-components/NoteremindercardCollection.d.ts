/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NoteremindercardProps } from "./Noteremindercard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteremindercardCollectionOverridesProps = {
    NoteremindercardCollection?: PrimitiveOverrideProps<CollectionProps>;
    Noteremindercard?: NoteremindercardProps;
} & EscapeHatchProps;
export declare type NoteremindercardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NoteremindercardProps;
} & {
    overrides?: NoteremindercardCollectionOverridesProps | undefined | null;
}>;
export default function NoteremindercardCollection(props: NoteremindercardCollectionProps): React.ReactElement;
