import '@aws-amplify/ui-react/styles.css';
import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { ActivityContext } from '../contexts/ActivityContext';
import { StorageManager } from '@aws-amplify/ui-react-storage';

export function ProfileFunc () {
    const {
        isUserAdmin,
        viewedUserProfileURL,
        regexEmail,
        email,
        handleEmailChange,
        handleSaveEmailClick,
        currentUser,
        selectedUserID,
        selectedUsername,
        handleSaveImageClick,
        handleGoToChangePassword,
        handleGoToDeleteAccount,
        handleGoToMNotes,
        handleReloadUploadSuccImage
    } = React.useContext(UserContext);
    const {
        handleClearActivityClick,
        clearActivityBtnLoading,
    } = React.useContext(ActivityContext);

const isDisableUserProfileOptions = currentUser.id !== selectedUserID;

const ProfileOverride={
    profile_icon_image: {
        src: viewedUserProfileURL
    },
    email_text_field:{
        onChange : (event) => (handleEmailChange(event)),
        value: email,
        placeholder: selectedUsername,
        isDisabled: isDisableUserProfileOptions,
        hasError: !regexEmail,
        errorMessage: "Invalid email !",
        isRequired: true
    },
    save_email_button:{
        onClick: (event) => (handleSaveEmailClick(event)),
        isDisabled: !regexEmail || isDisableUserProfileOptions,
    },
    change_password_button:{
        isDisabled: isDisableUserProfileOptions,
        onClick: (event) => (handleGoToChangePassword(event)),
    },
    switch_mnotes_button:{
        isDisabled: isDisableUserProfileOptions,
        onClick: (event) => (handleGoToMNotes(event)),
        style:{visibility: isUserAdmin === true ? "visible" : "hidden"}
    },
    delete_account_button:{
        isDisabled: isDisableUserProfileOptions,
        onClick: (event) => (handleGoToDeleteAccount(event)),
    },
    clear_activity_button:{
        isDisabled: isDisableUserProfileOptions,
        isLoading: clearActivityBtnLoading,
        onClick: (event) => (handleClearActivityClick(event)),
    }
}

function FileImageUpload () {
    return (
            <StorageManager
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png','.svg']}
            accessLevel="public"
            maxFileCount={1}
            processFile={handleSaveImageClick}
            onUploadSuccess={handleReloadUploadSuccImage}
            path="shared/"
          />
    )}

return {
    ProfileOverride,
    FileImageUpload
}}