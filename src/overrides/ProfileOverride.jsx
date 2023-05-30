import '@aws-amplify/ui-react/styles.css';
import { User2Class } from '../classes/User2Class';
import { FileUploader, ThemeProvider ,createTheme} from '@aws-amplify/ui-react';
import React from 'react';
import { studioTheme } from '../ui-components';
import { TicketClass } from '../classes/TicketClass';
import { ToolbarSelectClass } from '../classes/ToolbarSelectbarClass';

export function ProfileFunc () {

    const {
        userProfileURL,
        alertVariant,
        alertVisibility,
        alertDescription,
        regexEmail,
        email,
        handleEmailChange,
        handleSaveEmailClick,
        handleSaveImageClick,
        handleGoToChangePassword,
        handleGoToDeleteAccount,
        handleGoToMNotes
    } = User2Class();

    const {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
    } = ToolbarSelectClass();

    const {
        handleGoToCreateTicketClick,
    } = TicketClass();

const ProfileOverride={
    profile_icon_image179662223: {
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
    success_alert : { 
        style:{"display": alertVisibility },
        children: alertDescription,
        variant: alertVariant,
    },
    projects_select_field:{
        style:{color:"transparent"},
        onChange : (event) => (handleProjectsSelectChange(event)),
        options:["","switch project"],
    },
    your_work_select_field:{
        style:{color:"transparent"},
        onChange : (event) => (handleYourWorkSelectChange(event)),
        options:["","assigned to me","boards"],
    },
    issue_templates_select_field:{
        style:{color:"transparent"},
        //onChange : (event) => (handleSelectedProjectOnChange(event)),
        options:["","all templates","project templates"],
    },
    profile_select_field: {
        style:{color:"transparent"},
        onChange : (event) => (handleProfileSelectChange(event)),
        options:["","Manage account","Log out"],
    },
    teams_select_field:{
        style:{color:"transparent"},
        onChange : (event) => (handleTeamsSelectChange(event)),
        options:["","all users"],
    },
    create_ticket_button:{
        onClick: (event) => (handleGoToCreateTicketClick(event))},
    profile_icon_image179642350:{
            src: userProfileURL
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
            shouldAutoProceed={false}
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg']}
            accessLevel="public"
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