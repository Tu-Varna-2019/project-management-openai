/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardProps, CheckboxFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskcardOverridesProps = {
    Taskcard?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    task_description?: PrimitiveOverrideProps<TextProps>;
    checkbox_task?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type TaskcardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TaskcardOverridesProps | undefined | null;
}>;
export default function Taskcard(props: TaskcardProps): React.ReactElement;
