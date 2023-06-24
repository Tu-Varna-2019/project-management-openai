/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotfoundOverridesProps = {
    "404"?: PrimitiveOverrideProps<TextProps>;
    Notfound?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider176001288?: PrimitiveOverrideProps<DividerProps>;
    Divider176001289?: PrimitiveOverrideProps<DividerProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Sorry, the page you tried cannot be found."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NotfoundProps = React.PropsWithChildren<Partial<ViewProps> & {
    TaskBarMouseLeave?: String;
} & {
    overrides?: NotfoundOverridesProps | undefined | null;
}>;
export default function Notfound(props: NotfoundProps): React.ReactElement;
