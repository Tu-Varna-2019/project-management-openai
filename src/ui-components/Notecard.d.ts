/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotecardOverridesProps = {
    Notecard?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type NotecardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NotecardOverridesProps | undefined | null;
}>;
export default function Notecard(props: NotecardProps): React.ReactElement;
