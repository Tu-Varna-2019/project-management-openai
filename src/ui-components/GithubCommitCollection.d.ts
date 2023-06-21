/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GithubCommitProps } from "./GithubCommit";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GithubCommitCollectionOverridesProps = {
    GithubCommitCollection?: PrimitiveOverrideProps<CollectionProps>;
    GithubCommit?: GithubCommitProps;
} & EscapeHatchProps;
export declare type GithubCommitCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => GithubCommitProps;
} & {
    overrides?: GithubCommitCollectionOverridesProps | undefined | null;
}>;
export default function GithubCommitCollection(props: GithubCommitCollectionProps): React.ReactElement;
