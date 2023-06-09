/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User, Ticket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileOverridesProps = {
    Profile?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    "vertical-logo-onecolor-neutral-atlassian 1"?: PrimitiveOverrideProps<ViewProps>;
    "mini-vertical-logo-onecolor-blue-atlassian"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Group_2?: PrimitiveOverrideProps<ViewProps>;
    Group_3?: PrimitiveOverrideProps<ViewProps>;
    Group_4?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Vector_2?: PrimitiveOverrideProps<IconProps>;
    Vector_3?: PrimitiveOverrideProps<IconProps>;
    Vector_4?: PrimitiveOverrideProps<IconProps>;
    Vector_5?: PrimitiveOverrideProps<IconProps>;
    Vector_6?: PrimitiveOverrideProps<IconProps>;
    Vector_7?: PrimitiveOverrideProps<IconProps>;
    Vector_8?: PrimitiveOverrideProps<IconProps>;
    Vector_9?: PrimitiveOverrideProps<IconProps>;
    Group_5?: PrimitiveOverrideProps<ViewProps>;
    Vector_10?: PrimitiveOverrideProps<IconProps>;
    Vector_11?: PrimitiveOverrideProps<IconProps>;
    "Profile and visibility"?: PrimitiveOverrideProps<TextProps>;
    image_group?: PrimitiveOverrideProps<ViewProps>;
    done_card179642365?: PrimitiveOverrideProps<CardProps>;
    profile_icon_image?: PrimitiveOverrideProps<ImageProps>;
    options_group?: PrimitiveOverrideProps<ViewProps>;
    done_card179692303?: PrimitiveOverrideProps<CardProps>;
    delete_account_button?: PrimitiveOverrideProps<ButtonProps>;
    change_password_button?: PrimitiveOverrideProps<ButtonProps>;
    switch_mnotes_button?: PrimitiveOverrideProps<ButtonProps>;
    email_group?: PrimitiveOverrideProps<ViewProps>;
    done_card179692275?: PrimitiveOverrideProps<CardProps>;
    save_email_button?: PrimitiveOverrideProps<ButtonProps>;
    email_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    "Email:"?: PrimitiveOverrideProps<TextProps>;
    clear_activity_button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
    ticket?: Ticket;
} & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
