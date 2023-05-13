/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoteV2CreateFormInputValues = {
    Title?: string;
    Description?: string;
    Priority?: string;
    Reminder?: string;
    sub?: string;
    Deleted?: boolean;
    Notified?: boolean;
    ImageName?: string;
};
export declare type NoteV2CreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Priority?: ValidationFunction<string>;
    Reminder?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
    Deleted?: ValidationFunction<boolean>;
    Notified?: ValidationFunction<boolean>;
    ImageName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteV2CreateFormOverridesProps = {
    NoteV2CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Priority?: PrimitiveOverrideProps<TextFieldProps>;
    Reminder?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
    Deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    Notified?: PrimitiveOverrideProps<SwitchFieldProps>;
    ImageName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoteV2CreateFormProps = React.PropsWithChildren<{
    overrides?: NoteV2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NoteV2CreateFormInputValues) => NoteV2CreateFormInputValues;
    onSuccess?: (fields: NoteV2CreateFormInputValues) => void;
    onError?: (fields: NoteV2CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoteV2CreateFormInputValues) => NoteV2CreateFormInputValues;
    onValidate?: NoteV2CreateFormValidationValues;
} & React.CSSProperties>;
export default function NoteV2CreateForm(props: NoteV2CreateFormProps): React.ReactElement;
