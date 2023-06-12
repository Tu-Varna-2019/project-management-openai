import '@aws-amplify/ui-react/styles.css';
import { FileUploader, ThemeProvider ,createTheme} from '@aws-amplify/ui-react';
import React from 'react';
import { studioTheme } from '../ui-components';
import { UserContext } from '../contexts/UserContext';
import { ActivityContext } from '../contexts/ActivityContext';

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
        handleGoToMNotes
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


const theme = createTheme({
    name: 'my-theme',
    tokens: {
      colors: {value:"red"},
      borderWidths: {
        small: { value: '2px' },
        medium: { value: '4px' },
        large: { value: '8px' },
      },
      radii: {
        xs: { value: '1rem' },
        small: { value: '2rem' },
        medium: { value: '2rem' },
        large: { value: '2rem' },
        xl: { value: '3rem' },
      },
    },
  },studioTheme)

function FileImageUpload () {
    return (
       <ThemeProvider theme={theme}>
            <FileUploader
            shouldAutoProceed={true}
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png']}
            accessLevel="protected"
            maxFileCount={1}
            isResumable={true}
            showImages={false}
            variation='drop'
            onSuccess={(event) =>{handleSaveImageClick(event.key);}}/>
        </ThemeProvider>
    )}

return {
    ProfileOverride,
    FileImageUpload
}}