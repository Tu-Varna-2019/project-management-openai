import '@aws-amplify/ui-react/styles.css';
import { DeleteAccountClass } from '../classes/DeleteAccountClass';

export function DeleteAccountFunc () {

    const {
        password,
        confirmPassword,
        errorMessage,
        errorDescription,
        checkBox,
        errorCheckBox,
        isLoading,
        handleCheckBox,
        handlePassword,
        handleConfirmPassword,
        handleCancelPassword,
        handleDeleteAccount
    } = DeleteAccountClass();

    const DeleteAccountOverride={
        password_field : {
            onChange : (event) => (handlePassword(event)),
            value: password,
            isRequired: true},
          confirm_password_field : {
            onChange : (event) => (handleConfirmPassword(event)),
            value: confirmPassword,
            hasError: password !== confirmPassword,
            errorMessage: "Passwords are not the same !",
            isRequired: true},
            delete_account_button: {
            onClick : (event) => (handleDeleteAccount(event)),
            type: "submit",
            isLoading: isLoading,},
          cancel_button: {
            onClick : (event) => (handleCancelPassword(event)),},
          agreement_checkbox: {
            hasError: errorCheckBox,
            errorMessage: "You must agree to the terms in service , before deleting your account",
            onChange: (event) => (handleCheckBox(event)),
            isRequired: true,
            labelHidden : true,
            value: checkBox,
          },
          error_alert: {
            style:{ "display": errorMessage },
            isDismissible: false,
            children: errorDescription}
    }

    return {
        DeleteAccountOverride
    }
}