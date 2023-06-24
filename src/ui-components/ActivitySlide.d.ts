/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Activity } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActivitySlideOverridesProps = {
    ActivitySlide?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    asignee_name_text?: PrimitiveOverrideProps<TextProps>;
    date_text?: PrimitiveOverrideProps<TextProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    activity_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ActivitySlideProps = React.PropsWithChildren<Partial<ViewProps> & {
    Ac?: Activity;
} & {
    overrides?: ActivitySlideOverridesProps | undefined | null;
}>;
export default function ActivitySlide(props: ActivitySlideProps): React.ReactElement;
