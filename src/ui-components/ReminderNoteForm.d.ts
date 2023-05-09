/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NoteV2 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReminderNoteFormInputValues = {
    Title?: string;
    Reminder?: string;
    Deleted?: boolean;
    Notified?: boolean;
};
export declare type ReminderNoteFormValidationValues = {
    Title?: ValidationFunction<string>;
    Reminder?: ValidationFunction<string>;
    Deleted?: ValidationFunction<boolean>;
    Notified?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReminderNoteFormOverridesProps = {
    ReminderNoteFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Reminder?: PrimitiveOverrideProps<TextFieldProps>;
    Deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    Notified?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReminderNoteFormProps = React.PropsWithChildren<{
    overrides?: ReminderNoteFormOverridesProps | undefined | null;
} & {
    id?: string;
    noteV2?: NoteV2;
    onSubmit?: (fields: ReminderNoteFormInputValues) => ReminderNoteFormInputValues;
    onSuccess?: (fields: ReminderNoteFormInputValues) => void;
    onError?: (fields: ReminderNoteFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReminderNoteFormInputValues) => ReminderNoteFormInputValues;
    onValidate?: ReminderNoteFormValidationValues;
} & React.CSSProperties>;
export default function ReminderNoteForm(props: ReminderNoteFormProps): React.ReactElement;
