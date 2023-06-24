/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Ticket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectCreateFormInputValues = {
    Name?: string;
    OProjectMTickets?: Ticket[];
};
export declare type ProjectCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    OProjectMTickets?: ValidationFunction<Ticket>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCreateFormOverridesProps = {
    ProjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    OProjectMTickets?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProjectCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onSuccess?: (fields: ProjectCreateFormInputValues) => void;
    onError?: (fields: ProjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onValidate?: ProjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectCreateForm(props: ProjectCreateFormProps): React.ReactElement;
