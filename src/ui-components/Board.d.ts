/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, CardProps, IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoardOverridesProps = {
    Board?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    todo_card?: PrimitiveOverrideProps<CardProps>;
    in_progress_card?: PrimitiveOverrideProps<CardProps>;
    in_review_card?: PrimitiveOverrideProps<CardProps>;
    done_card?: PrimitiveOverrideProps<CardProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    Badge178502026?: PrimitiveOverrideProps<BadgeProps>;
    Badge178532415?: PrimitiveOverrideProps<BadgeProps>;
    Badge178532419?: PrimitiveOverrideProps<BadgeProps>;
    Badge178532423?: PrimitiveOverrideProps<BadgeProps>;
    "logo-gradient-blue-jira"?: PrimitiveOverrideProps<ViewProps>;
    Jira?: PrimitiveOverrideProps<ViewProps>;
    Vector178562483?: PrimitiveOverrideProps<IconProps>;
    Vector178562484?: PrimitiveOverrideProps<IconProps>;
    Vector178562485?: PrimitiveOverrideProps<IconProps>;
    Vector178562486?: PrimitiveOverrideProps<IconProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector178562488?: PrimitiveOverrideProps<IconProps>;
    Vector_2?: PrimitiveOverrideProps<IconProps>;
    Vector_3?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BoardProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
} & {
    overrides?: BoardOverridesProps | undefined | null;
}>;
export default function Board(props: BoardProps): React.ReactElement;
