import '@aws-amplify/ui-react/styles.css';
import { FileUploader, ThemeProvider ,createTheme} from '@aws-amplify/ui-react';
import React from 'react';
import { studioTheme } from '../ui-components';
import { UserContext } from '../contexts/UserContext';
import { ActivityContext } from '../contexts/ActivityContext';
import { StorageManager } from '@aws-amplify/ui-react-storage';

export function ProfileFunc () {
    const {
        userProfileURL,
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
        src: userProfileURL
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
            accessLevel="protected"
            maxFileCount={1}
            processFile={handleSaveImageClick}
            onUploadSuccess={handleReloadUploadSuccImage}
          />
    )}

return {
    ProfileOverride,
    FileImageUpload
}}