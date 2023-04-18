/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SharedselectedOverridesProps = {
    Sharedselected?: PrimitiveOverrideProps<ViewProps>;
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    "01DividersBBottom-Dark"?: PrimitiveOverrideProps<ViewProps>;
    Color172482509?: PrimitiveOverrideProps<ViewProps>;
    SigninTitle?: PrimitiveOverrideProps<ViewProps>;
    emailhint?: PrimitiveOverrideProps<TextProps>;
    Add24Filled?: PrimitiveOverrideProps<ViewProps>;
    Color172482507?: PrimitiveOverrideProps<IconProps>;
    Delete24Regular?: PrimitiveOverrideProps<ViewProps>;
    Color172482505?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SharedselectedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SharedselectedOverridesProps | undefined | null;
}>;
export default function Sharedselected(props: SharedselectedProps): React.ReactElement;
