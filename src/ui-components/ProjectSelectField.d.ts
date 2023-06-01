/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, IconProps, ImageProps, RatingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectSelectFieldOverridesProps = {
    ProjectSelectField?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<FlexProps>;
    project_name_text?: PrimitiveOverrideProps<TextProps>;
    "Software project"?: PrimitiveOverrideProps<TextProps>;
    project_image_name?: PrimitiveOverrideProps<ImageProps>;
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    feedback_text?: PrimitiveOverrideProps<BadgeProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    Divider180572628?: PrimitiveOverrideProps<ViewProps>;
    "Line 1180572629"?: PrimitiveOverrideProps<IconProps>;
    Divider180572630?: PrimitiveOverrideProps<ViewProps>;
    "Line 1180572631"?: PrimitiveOverrideProps<IconProps>;
    roadmap_button?: PrimitiveOverrideProps<FlexProps>;
    label180572634?: PrimitiveOverrideProps<TextProps>;
    backlog_button?: PrimitiveOverrideProps<FlexProps>;
    label180572638?: PrimitiveOverrideProps<TextProps>;
    active_sprints_button?: PrimitiveOverrideProps<FlexProps>;
    label180572642?: PrimitiveOverrideProps<TextProps>;
    issues_button?: PrimitiveOverrideProps<FlexProps>;
    label180572626?: PrimitiveOverrideProps<TextProps>;
    team_calendar_button?: PrimitiveOverrideProps<FlexProps>;
    label180572646?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProjectSelectFieldProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProjectSelectFieldOverridesProps | undefined | null;
}>;
export default function ProjectSelectField(props: ProjectSelectFieldProps): React.ReactElement;
