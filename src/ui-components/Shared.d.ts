/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SharedOverridesProps = {
    Shared?: PrimitiveOverrideProps<ViewProps>;
    "02SearchBWithAccountSwitching-Primary"?: PrimitiveOverrideProps<ViewProps>;
    ToolsStatusBar?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    statusbar?: PrimitiveOverrideProps<ViewProps>;
    time?: PrimitiveOverrideProps<ViewProps>;
    Time?: PrimitiveOverrideProps<TextProps>;
    battery?: PrimitiveOverrideProps<ViewProps>;
    bounds172481781?: PrimitiveOverrideProps<IconProps>;
    Shape172481782?: PrimitiveOverrideProps<IconProps>;
    cellular?: PrimitiveOverrideProps<ViewProps>;
    bounds172481784?: PrimitiveOverrideProps<IconProps>;
    Shape172481785?: PrimitiveOverrideProps<IconProps>;
    wifi?: PrimitiveOverrideProps<ViewProps>;
    bounds172481787?: PrimitiveOverrideProps<IconProps>;
    Shape172481788?: PrimitiveOverrideProps<IconProps>;
    Path?: PrimitiveOverrideProps<IconProps>;
    Path13?: PrimitiveOverrideProps<IconProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    "icons8-notepad-961"?: PrimitiveOverrideProps<ImageProps>;
    "SharedSearchBarADefault-Light"?: PrimitiveOverrideProps<ViewProps>;
    InputField?: PrimitiveOverrideProps<IconProps>;
    Placeholder?: PrimitiveOverrideProps<TextProps>;
    Search24Regular?: PrimitiveOverrideProps<ViewProps>;
    Color172481793?: PrimitiveOverrideProps<IconProps>;
    "SharedHandleDefault-Light"?: PrimitiveOverrideProps<ViewProps>;
    Handle?: PrimitiveOverrideProps<ViewProps>;
    Delete24Regular?: PrimitiveOverrideProps<ViewProps>;
    Color172481798?: PrimitiveOverrideProps<IconProps>;
    Sharedinmenu169914176?: PrimitiveOverrideProps<ViewProps>;
    Sharedinmenu169914177?: PrimitiveOverrideProps<ViewProps>;
    Person24Regular?: PrimitiveOverrideProps<ViewProps>;
    Tasksinmenu?: PrimitiveOverrideProps<ViewProps>;
    Checkmark24Regular?: PrimitiveOverrideProps<ViewProps>;
    Color172481800?: PrimitiveOverrideProps<IconProps>;
    Remindersinmenu?: PrimitiveOverrideProps<ViewProps>;
    "icons8-notification-241"?: PrimitiveOverrideProps<ImageProps>;
    Notebookinmenu?: PrimitiveOverrideProps<ViewProps>;
    "icons8-journal-501"?: PrimitiveOverrideProps<ImageProps>;
    Mynotesinmenu?: PrimitiveOverrideProps<ViewProps>;
    "icons8-list-view-161"?: PrimitiveOverrideProps<ImageProps>;
    Rectangle3?: PrimitiveOverrideProps<ViewProps>;
    Quickaddballoon?: PrimitiveOverrideProps<ViewProps>;
    Ellipse1?: PrimitiveOverrideProps<IconProps>;
    Add24Filled?: PrimitiveOverrideProps<ViewProps>;
    Color172481796?: PrimitiveOverrideProps<IconProps>;
    Rectangle4?: PrimitiveOverrideProps<IconProps>;
    Accountbutton?: PrimitiveOverrideProps<ViewProps>;
    "01ProfilePictureEX-Large-Light"?: PrimitiveOverrideProps<ViewProps>;
    John?: PrimitiveOverrideProps<TextProps>;
    iconshare?: PrimitiveOverrideProps<ViewProps>;
    Vector170114129?: PrimitiveOverrideProps<IconProps>;
    Vector170114130?: PrimitiveOverrideProps<IconProps>;
    Sharednotesappearhere?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SharedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SharedOverridesProps | undefined | null;
}>;
export default function Shared(props: SharedProps): React.ReactElement;
