/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Createnotebook2OverridesProps = {
    Createnotebook2?: PrimitiveOverrideProps<ViewProps>;
    Rectangle20?: PrimitiveOverrideProps<ViewProps>;
    Addtonotebook?: PrimitiveOverrideProps<TextProps>;
    Createnewnotebook?: PrimitiveOverrideProps<TextProps>;
    bookoutline?: PrimitiveOverrideProps<ViewProps>;
    Vector170434027?: PrimitiveOverrideProps<IconProps>;
    Vector170434028?: PrimitiveOverrideProps<IconProps>;
    name?: PrimitiveOverrideProps<ViewProps>;
    SigninTitle?: PrimitiveOverrideProps<ViewProps>;
    namebar?: PrimitiveOverrideProps<ViewProps>;
    Signinbutton?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    "01Dividers"?: PrimitiveOverrideProps<ViewProps>;
    Divid?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Createnotebook2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Createnotebook2OverridesProps | undefined | null;
}>;
export default function Createnotebook2(props: Createnotebook2Props): React.ReactElement;
