/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteselectedOverridesProps = {
    Noteselected?: PrimitiveOverrideProps<ViewProps>;
    Noteselected170724254?: PrimitiveOverrideProps<ViewProps>;
    Rectangle20170724247?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    description?: PrimitiveOverrideProps<TextProps>;
    "icons8-pin-481"?: PrimitiveOverrideProps<ImageProps>;
    Rectangle20170724239?: PrimitiveOverrideProps<ViewProps>;
    MoreVertical24Regular?: PrimitiveOverrideProps<ViewProps>;
    Color?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NoteselectedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NoteselectedOverridesProps | undefined | null;
}>;
export default function Noteselected(props: NoteselectedProps): React.ReactElement;
