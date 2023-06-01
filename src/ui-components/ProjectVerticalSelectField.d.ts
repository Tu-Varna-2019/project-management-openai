/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, DividerProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectVerticalSelectFieldOverridesProps = {
    ProjectVerticalSelectField?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    project_name_text?: PrimitiveOverrideProps<TextProps>;
    "Software project"?: PrimitiveOverrideProps<TextProps>;
    project_image_name?: PrimitiveOverrideProps<ImageProps>;
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    feedback_text?: PrimitiveOverrideProps<BadgeProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    Divider180442991?: PrimitiveOverrideProps<DividerProps>;
    Divider180442992?: PrimitiveOverrideProps<DividerProps>;
    roadmap_button?: PrimitiveOverrideProps<ButtonProps>;
    backlog_button?: PrimitiveOverrideProps<ButtonProps>;
    active_sprints_button?: PrimitiveOverrideProps<ButtonProps>;
    issues_button?: PrimitiveOverrideProps<ButtonProps>;
    team_calendar_button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProjectVerticalSelectFieldProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProjectVerticalSelectFieldOverridesProps | undefined | null;
}>;
export default function ProjectVerticalSelectField(props: ProjectVerticalSelectFieldProps): React.ReactElement;
