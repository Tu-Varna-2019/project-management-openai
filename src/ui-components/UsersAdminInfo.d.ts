/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersAdminInfoOverridesProps = {
    UsersAdminInfo?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    user_icon_image?: PrimitiveOverrideProps<ImageProps>;
    username_text?: PrimitiveOverrideProps<TextProps>;
    sub_text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UsersAdminInfoProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
} & {
    overrides?: UsersAdminInfoOverridesProps | undefined | null;
}>;
export default function UsersAdminInfo(props: UsersAdminInfoProps): React.ReactElement;
