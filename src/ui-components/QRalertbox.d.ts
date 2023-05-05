/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QRalertboxOverridesProps = {
    QRalertbox?: PrimitiveOverrideProps<ViewProps>;
    Rectangle14?: PrimitiveOverrideProps<ViewProps>;
    Yesbutton?: PrimitiveOverrideProps<ViewProps>;
    Buttonyes169703689?: PrimitiveOverrideProps<ViewProps>;
    Rectangle13169703690?: PrimitiveOverrideProps<ViewProps>;
    Confirm?: PrimitiveOverrideProps<TextProps>;
    Nobutton?: PrimitiveOverrideProps<ViewProps>;
    Deletealertbox?: PrimitiveOverrideProps<ViewProps>;
    Buttonyes169703694?: PrimitiveOverrideProps<ViewProps>;
    Rectangle13169703695?: PrimitiveOverrideProps<ViewProps>;
    Cancel?: PrimitiveOverrideProps<TextProps>;
    ScantheQRcodebyusingthefollowingapps?: PrimitiveOverrideProps<TextProps>;
    Microsoftauthenticator?: PrimitiveOverrideProps<TextProps>;
    Googleauthenticator?: PrimitiveOverrideProps<TextProps>;
    "1FX_LPYdLaX1IPlohROEaQA-4348346021"?: PrimitiveOverrideProps<ImageProps>;
    "th-34558238141"?: PrimitiveOverrideProps<ImageProps>;
    "th-36395638381"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type QRalertboxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: QRalertboxOverridesProps | undefined | null;
}>;
export default function QRalertbox(props: QRalertboxProps): React.ReactElement;
