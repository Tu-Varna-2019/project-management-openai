/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NotebuttonProps } from "./Notebutton";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotebuttonCollectionOverridesProps = {
    NotebuttonCollection?: PrimitiveOverrideProps<CollectionProps>;
    Notebutton?: NotebuttonProps;
} & EscapeHatchProps;
export declare type NotebuttonCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NotebuttonProps;
} & {
    overrides?: NotebuttonCollectionOverridesProps | undefined | null;
}>;
export default function NotebuttonCollection(props: NotebuttonCollectionProps): React.ReactElement;
