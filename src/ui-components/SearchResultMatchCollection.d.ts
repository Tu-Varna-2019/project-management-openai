/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SearchResultMatchProps } from "./SearchResultMatch";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchResultMatchCollectionOverridesProps = {
    SearchResultMatchCollection?: PrimitiveOverrideProps<CollectionProps>;
    SearchResultMatch?: SearchResultMatchProps;
} & EscapeHatchProps;
export declare type SearchResultMatchCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => SearchResultMatchProps;
} & {
    overrides?: SearchResultMatchCollectionOverridesProps | undefined | null;
}>;
export default function SearchResultMatchCollection(props: SearchResultMatchCollectionProps): React.ReactElement;
