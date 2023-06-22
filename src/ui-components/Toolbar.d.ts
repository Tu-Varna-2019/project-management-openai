/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, ImageProps, SearchFieldProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToolbarOverridesProps = {
    Toolbar?: PrimitiveOverrideProps<ViewProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    search_ticket_select_field?: PrimitiveOverrideProps<SearchFieldProps>;
    create_ticket_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_icon_image?: PrimitiveOverrideProps<ImageProps>;
    profile_icon_image?: PrimitiveOverrideProps<ImageProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
    KAI?: PrimitiveOverrideProps<TextProps>;
    "Your work group178522270"?: PrimitiveOverrideProps<ViewProps>;
    "Your work"?: PrimitiveOverrideProps<TextProps>;
    your_work_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group178522279"?: PrimitiveOverrideProps<ViewProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    projects_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group178522290"?: PrimitiveOverrideProps<ViewProps>;
    "Issue Templates"?: PrimitiveOverrideProps<TextProps>;
    issue_templates_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group178532301"?: PrimitiveOverrideProps<ViewProps>;
    Teams?: PrimitiveOverrideProps<TextProps>;
    teams_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    profile_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    notify_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    success_alert?: PrimitiveOverrideProps<AlertProps>;
    notify_count_badge?: PrimitiveOverrideProps<BadgeProps>;
    admin_user_badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type ToolbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ToolbarOverridesProps | undefined | null;
}>;
export default function Toolbar(props: ToolbarProps): React.ReactElement;
