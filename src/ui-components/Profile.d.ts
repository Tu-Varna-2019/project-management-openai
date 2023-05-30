/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User, Ticket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, ButtonProps, CardProps, FlexProps, IconProps, ImageProps, SearchFieldProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileOverridesProps = {
    Profile?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    search_ticket_select_field?: PrimitiveOverrideProps<SearchFieldProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    create_ticket_button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    reminder_icon_image?: PrimitiveOverrideProps<ImageProps>;
    help_icon_image?: PrimitiveOverrideProps<ImageProps>;
    settings_icon_image?: PrimitiveOverrideProps<ImageProps>;
    profile_icon_image179642350?: PrimitiveOverrideProps<ImageProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
    KAI?: PrimitiveOverrideProps<TextProps>;
    "Your work group179642353"?: PrimitiveOverrideProps<ViewProps>;
    "Your work"?: PrimitiveOverrideProps<TextProps>;
    your_work_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group179642356"?: PrimitiveOverrideProps<ViewProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    projects_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group179642359"?: PrimitiveOverrideProps<ViewProps>;
    "Issue Templates"?: PrimitiveOverrideProps<TextProps>;
    issue_templates_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    "Your work group179642395"?: PrimitiveOverrideProps<ViewProps>;
    Teams?: PrimitiveOverrideProps<TextProps>;
    teams_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    profile_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
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
    success_alert?: PrimitiveOverrideProps<AlertProps>;
    image_group?: PrimitiveOverrideProps<ViewProps>;
    done_card179642365?: PrimitiveOverrideProps<CardProps>;
    profile_icon_image179662223?: PrimitiveOverrideProps<ImageProps>;
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
} & EscapeHatchProps;
export declare type ProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
    ticket?: Ticket;
} & {
    overrides?: ProfileOverridesProps | undefined | null;
}>;
export default function Profile(props: ProfileProps): React.ReactElement;
