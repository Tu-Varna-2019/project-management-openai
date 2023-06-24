/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsersAdminInfoProps } from "./UsersAdminInfo";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersAdminInfoCollectionOverridesProps = {
    UsersAdminInfoCollection?: PrimitiveOverrideProps<CollectionProps>;
    UsersAdminInfo?: UsersAdminInfoProps;
} & EscapeHatchProps;
export declare type UsersAdminInfoCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => UsersAdminInfoProps;
} & {
    overrides?: UsersAdminInfoCollectionOverridesProps | undefined | null;
}>;
export default function UsersAdminInfoCollection(props: UsersAdminInfoCollectionProps): React.ReactElement;
