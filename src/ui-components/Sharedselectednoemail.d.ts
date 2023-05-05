/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SharedselectednoemailOverridesProps = {
    Sharedselectednoemail?: PrimitiveOverrideProps<ViewProps>;
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    Add24Filled?: PrimitiveOverrideProps<ViewProps>;
    Color?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SharedselectednoemailProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SharedselectednoemailOverridesProps | undefined | null;
}>;
export default function Sharedselectednoemail(props: SharedselectednoemailProps): React.ReactElement;
