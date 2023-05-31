/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, CardProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, SearchFieldProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditTicketFullOverridesProps = {
    EditTicketFull?: PrimitiveOverrideProps<ViewProps>;
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
    profile_icon_image?: PrimitiveOverrideProps<ImageProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
    KAI?: PrimitiveOverrideProps<TextProps>;
    "Your work group180222547"?: PrimitiveOverrideProps<ViewProps>;
    "Your work"?: PrimitiveOverrideProps<TextProps>;
    your_work_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group180222550"?: PrimitiveOverrideProps<ViewProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    projects_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group180222553"?: PrimitiveOverrideProps<ViewProps>;
    "Issue Templates"?: PrimitiveOverrideProps<TextProps>;
    issue_templates_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    "Your work group180222557"?: PrimitiveOverrideProps<ViewProps>;
    Teams?: PrimitiveOverrideProps<TextProps>;
    teams_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    profile_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    project_name_text?: PrimitiveOverrideProps<TextProps>;
    "Software project"?: PrimitiveOverrideProps<TextProps>;
    project_image_name?: PrimitiveOverrideProps<ImageProps>;
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    feedback_text?: PrimitiveOverrideProps<BadgeProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    Divider178532437?: PrimitiveOverrideProps<DividerProps>;
    Divider178532441?: PrimitiveOverrideProps<DividerProps>;
    roadmap_button?: PrimitiveOverrideProps<ButtonProps>;
    backlog_button?: PrimitiveOverrideProps<ButtonProps>;
    active_sprints_button?: PrimitiveOverrideProps<ButtonProps>;
    issues_button?: PrimitiveOverrideProps<ButtonProps>;
    team_calendar_button?: PrimitiveOverrideProps<ButtonProps>;
    ticket_id_text?: PrimitiveOverrideProps<TextProps>;
    title_text_field?: PrimitiveOverrideProps<TextFieldProps>;
    watch_badge?: PrimitiveOverrideProps<BadgeProps>;
    description_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    comments_text_field?: PrimitiveOverrideProps<TextAreaFieldProps>;
    create_button?: PrimitiveOverrideProps<ButtonProps>;
    cancel_button?: PrimitiveOverrideProps<ButtonProps>;
    more_options_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    watch_issue_button?: PrimitiveOverrideProps<ButtonProps>;
    "logo-gradient-blue-jira"?: PrimitiveOverrideProps<ViewProps>;
    Jira?: PrimitiveOverrideProps<ViewProps>;
    Vector180442973?: PrimitiveOverrideProps<IconProps>;
    Vector180442974?: PrimitiveOverrideProps<IconProps>;
    Vector180442975?: PrimitiveOverrideProps<IconProps>;
    Vector180442976?: PrimitiveOverrideProps<IconProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector180442978?: PrimitiveOverrideProps<IconProps>;
    Vector_2?: PrimitiveOverrideProps<IconProps>;
    Vector_3?: PrimitiveOverrideProps<IconProps>;
    success_alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type EditTicketFullProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
} & {
    overrides?: EditTicketFullOverridesProps | undefined | null;
}>;
export default function EditTicketFull(props: EditTicketFullProps): React.ReactElement;
