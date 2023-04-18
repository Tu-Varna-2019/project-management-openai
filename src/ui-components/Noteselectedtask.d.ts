/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteselectedtaskOverridesProps = {
    Noteselectedtask?: PrimitiveOverrideProps<ViewProps>;
    Noteselected?: PrimitiveOverrideProps<ViewProps>;
    Rectangle20170784360?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    description?: PrimitiveOverrideProps<TextProps>;
    "icons8-pin-481"?: PrimitiveOverrideProps<ImageProps>;
    Rectangle20170784364?: PrimitiveOverrideProps<ViewProps>;
    MoreVertical24Regular?: PrimitiveOverrideProps<ViewProps>;
    Color?: PrimitiveOverrideProps<IconProps>;
    Ellipse2?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NoteselectedtaskProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NoteselectedtaskOverridesProps | undefined | null;
}>;
export default function Noteselectedtask(props: NoteselectedtaskProps): React.ReactElement;
