/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, DividerProps, RadioProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddRemoveUserOverridesProps = {
    AddRemoveUser?: PrimitiveOverrideProps<ViewProps>;
    create_ticket_group?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    confirm_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    Divider3392598?: PrimitiveOverrideProps<DividerProps>;
    Divider3392599?: PrimitiveOverrideProps<DividerProps>;
    create_ticket_text?: PrimitiveOverrideProps<TextProps>;
    select_project_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    admin_radio?: PrimitiveOverrideProps<RadioProps>;
    user_radio?: PrimitiveOverrideProps<RadioProps>;
    Divider3722625?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type AddRemoveUserProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AddRemoveUserOverridesProps | undefined | null;
}>;
export default function AddRemoveUser(props: AddRemoveUserProps): React.ReactElement;
