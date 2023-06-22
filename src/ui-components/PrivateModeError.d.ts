/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivateModeErrorOverridesProps = {
    PrivateModeError?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider3482751?: PrimitiveOverrideProps<DividerProps>;
    Divider3482752?: PrimitiveOverrideProps<DividerProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Sorry !"?: PrimitiveOverrideProps<TextProps>;
    "App is not supported in this browser's private mode"?: PrimitiveOverrideProps<TextProps>;
    log_out_button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PrivateModeErrorProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PrivateModeErrorOverridesProps | undefined | null;
}>;
export default function PrivateModeError(props: PrivateModeErrorProps): React.ReactElement;
