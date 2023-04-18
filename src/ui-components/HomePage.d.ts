/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, CardProps, DividerProps, FlexProps, IconProps, RatingProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageOverridesProps = {
    HomePage?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Divider175552033?: PrimitiveOverrideProps<DividerProps>;
    notes_card_contents?: PrimitiveOverrideProps<CardProps>;
    Divider175691694?: PrimitiveOverrideProps<DividerProps>;
    Divider175691724?: PrimitiveOverrideProps<DividerProps>;
    copyright_text?: PrimitiveOverrideProps<BadgeProps>;
    welcome_screen_card?: PrimitiveOverrideProps<FlexProps>;
    welcome_back_badge?: PrimitiveOverrideProps<BadgeProps>;
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    feedback_text?: PrimitiveOverrideProps<BadgeProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    create_note_button?: PrimitiveOverrideProps<ButtonProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    components_footer?: PrimitiveOverrideProps<ViewProps>;
    powered_by_amplify_text?: PrimitiveOverrideProps<TextProps>;
    my_account_select_field?: PrimitiveOverrideProps<FlexProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    placeholder?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<IconProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
    task_button?: PrimitiveOverrideProps<ButtonProps>;
    reminder_button?: PrimitiveOverrideProps<ButtonProps>;
    bin_button?: PrimitiveOverrideProps<ButtonProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type HomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomePageOverridesProps | undefined | null;
}>;
export default function HomePage(props: HomePageProps): React.ReactElement;
