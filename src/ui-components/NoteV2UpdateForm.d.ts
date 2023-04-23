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
export declare type NoteV2UpdateFormInputValues = {
    Title?: string;
    Description?: string;
    Priority?: string;
    Reminder?: string;
    UserId?: string;
    Deleted?: boolean;
};
export declare type NoteV2UpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Priority?: ValidationFunction<string>;
    Reminder?: ValidationFunction<string>;
    UserId?: ValidationFunction<string>;
    Deleted?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteV2UpdateFormOverridesProps = {
    NoteV2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Priority?: PrimitiveOverrideProps<TextFieldProps>;
    Reminder?: PrimitiveOverrideProps<TextFieldProps>;
    UserId?: PrimitiveOverrideProps<TextFieldProps>;
    Deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NoteV2UpdateFormProps = React.PropsWithChildren<{
    overrides?: NoteV2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    noteV2?: NoteV2;
    onSubmit?: (fields: NoteV2UpdateFormInputValues) => NoteV2UpdateFormInputValues;
    onSuccess?: (fields: NoteV2UpdateFormInputValues) => void;
    onError?: (fields: NoteV2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoteV2UpdateFormInputValues) => NoteV2UpdateFormInputValues;
    onValidate?: NoteV2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function NoteV2UpdateForm(props: NoteV2UpdateFormProps): React.ReactElement;
