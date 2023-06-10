import '@aws-amplify/ui-react/styles.css';
import { FileUploader, ThemeProvider ,createTheme} from '@aws-amplify/ui-react';
import React from 'react';
import { studioTheme } from '../ui-components';
import { UserContext } from '../contexts/UserContext';

export function ProfileFunc () {
    const {
        userProfileURL,
        regexEmail,
        email,
        handleEmailChange,
        handleSaveEmailClick,
        handleSaveImageClick,
        handleGoToChangePassword,
        handleGoToDeleteAccount,
        handleGoToMNotes
    } = React.useContext(UserContext);

const ProfileOverride={
    profile_icon_image: {
        src: userProfileURL
    },
    email_text_field:{
        onChange : (event) => (handleEmailChange(event)),
        value: email,
        hasError: !regexEmail,
        errorMessage: "Invalid email !",
        isRequired: true
    },
    save_email_button:{
        onClick: (event) => (handleSaveEmailClick(event)),
        isDisabled: !regexEmail,
    },
    change_password_button:{
        onClick: (event) => (handleGoToChangePassword(event)),
    },
    switch_mnotes_button:{
        onClick: (event) => (handleGoToMNotes(event)),
    },
    delete_account_button:{
        onClick: (event) => (handleGoToDeleteAccount(event)),
    },
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