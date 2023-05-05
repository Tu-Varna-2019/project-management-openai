/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignoutalertboxOverridesProps = {
    Signoutalertbox?: PrimitiveOverrideProps<ViewProps>;
    Rectangle14?: PrimitiveOverrideProps<ViewProps>;
    Yesbutton?: PrimitiveOverrideProps<ViewProps>;
    Buttonyes169493638?: PrimitiveOverrideProps<ViewProps>;
    Rectangle13169493639?: PrimitiveOverrideProps<ViewProps>;
    Yes?: PrimitiveOverrideProps<TextProps>;
    Nobutton?: PrimitiveOverrideProps<ViewProps>;
    Deletealertbox?: PrimitiveOverrideProps<ViewProps>;
    Buttonyes169493643?: PrimitiveOverrideProps<ViewProps>;
    Rectangle13169493644?: PrimitiveOverrideProps<ViewProps>;
    No?: PrimitiveOverrideProps<TextProps>;
    "Areyousureyouwanttosignout?"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SignoutalertboxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SignoutalertboxOverridesProps | undefined | null;
}>;
export default function Signoutalertbox(props: SignoutalertboxProps): React.ReactElement;
