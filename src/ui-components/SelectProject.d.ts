/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SelectProjectOverridesProps = {
    SelectProject?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    create_project_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    confirm_button?: PrimitiveOverrideProps<ButtonProps>;
    create_one_button?: PrimitiveOverrideProps<ButtonProps>;
    welcome_back_text?: PrimitiveOverrideProps<TextProps>;
    Divider178872266?: PrimitiveOverrideProps<DividerProps>;
    Divider178892292?: PrimitiveOverrideProps<DividerProps>;
    Divider178992079?: PrimitiveOverrideProps<DividerProps>;
    or?: PrimitiveOverrideProps<TextProps>;
    edit_project_image?: PrimitiveOverrideProps<ImageProps>;
    select_project_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SelectProjectProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SelectProjectOverridesProps | undefined | null;
}>;
export default function SelectProject(props: SelectProjectProps): React.ReactElement;
