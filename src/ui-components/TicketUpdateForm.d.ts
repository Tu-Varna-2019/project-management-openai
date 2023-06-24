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
export declare type TicketUpdateFormInputValues = {
    Title?: string;
    Description?: string;
    Comment?: string;
    StoryPoint?: number;
    Watch?: string;
    Reporter?: string;
    Asignee?: string;
    ImageTicket?: string;
    EpicLink?: string;
    CreatedDate?: string;
    UpdatedDate?: string;
    ResolvedDate?: string;
    projectID?: string;
    userID?: string;
    IssueType?: string;
    Priority?: string;
    TicketStatus?: string;
};
export declare type TicketUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Comment?: ValidationFunction<string>;
    StoryPoint?: ValidationFunction<number>;
    Watch?: ValidationFunction<string>;
    Reporter?: ValidationFunction<string>;
    Asignee?: ValidationFunction<string>;
    ImageTicket?: ValidationFunction<string>;
    EpicLink?: ValidationFunction<string>;
    CreatedDate?: ValidationFunction<string>;
    UpdatedDate?: ValidationFunction<string>;
    ResolvedDate?: ValidationFunction<string>;
    projectID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    IssueType?: ValidationFunction<string>;
    Priority?: ValidationFunction<string>;
    TicketStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketUpdateFormOverridesProps = {
    TicketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Comment?: PrimitiveOverrideProps<TextFieldProps>;
    StoryPoint?: PrimitiveOverrideProps<TextFieldProps>;
    Watch?: PrimitiveOverrideProps<TextFieldProps>;
    Reporter?: PrimitiveOverrideProps<TextFieldProps>;
    Asignee?: PrimitiveOverrideProps<TextFieldProps>;
    ImageTicket?: PrimitiveOverrideProps<TextFieldProps>;
    EpicLink?: PrimitiveOverrideProps<TextFieldProps>;
    CreatedDate?: PrimitiveOverrideProps<TextFieldProps>;
    UpdatedDate?: PrimitiveOverrideProps<TextFieldProps>;
    ResolvedDate?: PrimitiveOverrideProps<TextFieldProps>;
    projectID?: PrimitiveOverrideProps<AutocompleteProps>;
    userID?: PrimitiveOverrideProps<AutocompleteProps>;
    IssueType?: PrimitiveOverrideProps<TextFieldProps>;
    Priority?: PrimitiveOverrideProps<TextFieldProps>;
    TicketStatus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TicketUpdateFormProps = React.PropsWithChildren<{
    overrides?: TicketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ticket?: Ticket;
    onSubmit?: (fields: TicketUpdateFormInputValues) => TicketUpdateFormInputValues;
    onSuccess?: (fields: TicketUpdateFormInputValues) => void;
    onError?: (fields: TicketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketUpdateFormInputValues) => TicketUpdateFormInputValues;
    onValidate?: TicketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TicketUpdateForm(props: TicketUpdateFormProps): React.ReactElement;
