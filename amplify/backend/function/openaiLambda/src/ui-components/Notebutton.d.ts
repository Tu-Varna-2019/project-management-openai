/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NoteV2 } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotebuttonOverridesProps = {
    Notebutton?: PrimitiveOverrideProps<FlexProps>;
    note_button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NotebuttonProps = React.PropsWithChildren<Partial<FlexProps> & {
    noteV2?: NoteV2;
} & {
    overrides?: NotebuttonOverridesProps | undefined | null;
}>;
export default function Notebutton(props: NotebuttonProps): React.ReactElement;
