/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Createnotebook1OverridesProps = {
    Createnotebook1?: PrimitiveOverrideProps<ViewProps>;
    Rectangle20?: PrimitiveOverrideProps<ViewProps>;
    Addtonotebook?: PrimitiveOverrideProps<TextProps>;
    "Youdon\u2019thaveanycreatednotebooks"?: PrimitiveOverrideProps<TextProps>;
    bookoutline?: PrimitiveOverrideProps<ViewProps>;
    Vector170414014?: PrimitiveOverrideProps<IconProps>;
    Vector170414015?: PrimitiveOverrideProps<IconProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Createnotebook1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Createnotebook1OverridesProps | undefined | null;
}>;
export default function Createnotebook1(props: Createnotebook1Props): React.ReactElement;
