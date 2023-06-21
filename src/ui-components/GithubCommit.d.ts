/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GithubCommitOverridesProps = {
    GithubCommit?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    comitee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    commitee_name_text?: PrimitiveOverrideProps<TextProps>;
    date_text?: PrimitiveOverrideProps<TextProps>;
    sha_text?: PrimitiveOverrideProps<TextProps>;
    commit_message_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type GithubCommitProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GithubCommitOverridesProps | undefined | null;
}>;
export default function GithubCommit(props: GithubCommitProps): React.ReactElement;
