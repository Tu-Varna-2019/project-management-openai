/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NoteV2 } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteremindercardOverridesProps = {
    Noteremindercard?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NoteremindercardProps = React.PropsWithChildren<Partial<ViewProps> & {
    noteV2?: NoteV2;
} & {
    overrides?: NoteremindercardOverridesProps | undefined | null;
}>;
export default function Noteremindercard(props: NoteremindercardProps): React.ReactElement;
