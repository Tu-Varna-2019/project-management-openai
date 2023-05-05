/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Createreminder2OverridesProps = {
    Createreminder2?: PrimitiveOverrideProps<ViewProps>;
    Rectangle20?: PrimitiveOverrideProps<ViewProps>;
    iconbelloutline?: PrimitiveOverrideProps<ViewProps>;
    Vector170245793?: PrimitiveOverrideProps<IconProps>;
    Vector170245794?: PrimitiveOverrideProps<IconProps>;
    Addreminder?: PrimitiveOverrideProps<TextProps>;
    "03Text"?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Createreminder2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Createreminder2OverridesProps | undefined | null;
}>;
export default function Createreminder2(props: Createreminder2Props): React.ReactElement;
