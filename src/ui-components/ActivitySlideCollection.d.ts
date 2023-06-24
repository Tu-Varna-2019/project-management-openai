/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActivitySlideProps } from "./ActivitySlide";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivitySlideCollectionOverridesProps = {
    ActivitySlideCollection?: PrimitiveOverrideProps<CollectionProps>;
    ActivitySlide?: ActivitySlideProps;
} & EscapeHatchProps;
export declare type ActivitySlideCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ActivitySlideProps;
} & {
    overrides?: ActivitySlideCollectionOverridesProps | undefined | null;
}>;
export default function ActivitySlideCollection(props: ActivitySlideCollectionProps): React.ReactElement;
