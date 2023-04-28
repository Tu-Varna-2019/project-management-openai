/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NotetitlebuttonProps } from "./Notetitlebutton";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotetitlebuttonCollectionOverridesProps = {
    NotetitlebuttonCollection?: PrimitiveOverrideProps<CollectionProps>;
    Notetitlebutton?: NotetitlebuttonProps;
} & EscapeHatchProps;
export declare type NotetitlebuttonCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NotetitlebuttonProps;
} & {
    overrides?: NotetitlebuttonCollectionOverridesProps | undefined | null;
}>;
export default function NotetitlebuttonCollection(props: NotetitlebuttonCollectionProps): React.ReactElement;
