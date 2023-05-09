import '@aws-amplify/ui-react/styles.css';
import { ResetPasswordClass } from '../classes/ResetPasswordClass';

export function ResetPasswordFunc () {

    const {
        oldPassword,
        newPassword,
        confirmPassword,
        errorMessage,
        errorDescription,
        isLoading,
        handleOldPassword,
        handleNewPassword,
        handleConfirmPassword,
        handleCancelPassword,
        handleResetPassword
    } = ResetPasswordClass();

    const ResetPasswordOverride={
        old_password_field : {
            onChange : (event) => (handleOldPassword(event)),
            value: oldPassword,
            isRequired: true},
          new_password_field : {
            onChange : (event) => (handleNewPassword(event)),
            value: newPassword,
            hasError: oldPassword === newPassword,
            errorMessage: "Old and new passwords should not be the same !",
            isRequired: true},
          confirm_password_field : {
            onChange : (event) => (handleConfirmPassword(event)),
            value: confirmPassword,
            hasError: newPassword !== confirmPassword,
            errorMessage: "Passwords are not the same !",
            isRequired: true},
          confirm_button: {
            onClick : (event) => (handleResetPassword(event)),
            isDisabled : (newPassword !== confirmPassword) || (oldPassword === newPassword),
            type: "submit",
            isLoading: isLoading},
          cancel_button: {
            onClick : (event) => (handleCancelPassword(event)),},
          error_alert: {
            style:{ "display": errorMessage },
            isDismissible: false,
            children: errorDescription}
    }

    return {
        ResetPasswordOverride
    }
}