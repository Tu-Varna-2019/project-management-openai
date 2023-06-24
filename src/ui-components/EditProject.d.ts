/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, ImageProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditProjectOverridesProps = {
    EditProject?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    create_project_group?: PrimitiveOverrideProps<ViewProps>;
    save_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    project_name_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    "Edit project"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    select_project_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    delete_project_image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type EditProjectProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EditProjectOverridesProps | undefined | null;
}>;
export default function EditProject(props: EditProjectProps): React.ReactElement;
