import '@aws-amplify/ui-react/styles.css';
import {NoteClass} from '../classes/NoteClass';
import { UserClass } from '../classes/UserClass';
import React from 'react';
import { FileUploader } from '@aws-amplify/ui-react';

export function CreateNoteFunc () {

    const {
        handleTitle,
        handleDescription,
        handlePriority,
        handleReminder,
        title,
        isTitleEmpty,
        description,
        reminder,
        hasErrorRem,
        priority,
        isLoading,
        handleAIOption,
        handleOnClickResetValues,
        handleOnClickCancel,
        handleOnClickConfirm,
        errorNoteMessage,
        errorNoteDescription,
        handleSafeImageChange,
    } = NoteClass();

    const {
        handleSettings,
        UserSettingsMenu,
    } = UserClass();

    const CreateNoteOverride={
        title_text_field:{
            isRequired: true,
            hasError: isTitleEmpty,
            value: title,
            errorMessage: "Title must not be empty !",
            onChange: (event) => (handleTitle(event)),
            },
        description_text_field : {
            onChange: (event) => (handleDescription(event)),
            value: description,
            },
        priority_select_field : {
            onChange : (event) => (handlePriority(event)),
            value: priority,
            options: ["Low","Medium","High"]
            },
        reminder_text_field : {
            onChange : (event) => (handleReminder(event)),
            type: "datetime-local",
            value: reminder,
            hasError: hasErrorRem,
            errorMessage:"Reminder should be set after the current date & time !",
            },
        clear_button : {
            type:"reset",
            onClick : (event) => (handleOnClickResetValues(event))},
        openaiDescButton:{
            onClick : (event) => (handleAIOption(event)),
            },
        cancel_button :{
            onClick : (event) => (handleOnClickCancel(event))
        },
        error_alert: {
            style:{ "display": errorNoteMessage},
            isDismissible: false,
            children: errorNoteDescription},
        SelectField:{
            onChange : (event) => (handleSettings(event)),
            style:{ color: "white"},
            options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount]}, 
        submit_button: {
            onClick : (event) => (handleOnClickConfirm(event)),
            type: "submit",
            isLoading: isLoading,
            isDisabled : isTitleEmpty || hasErrorRem,
            }}

    function FileImageUpload () {
        return (
            <FileUploader
            shouldAutoProceed={false}
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg']}
            accessLevel="private"
            maxFileCount={1}
            maxSize={100000}
            isResumable={true}
            showImages={true}
            onSuccess={(event) =>{handleSafeImageChange(event.key);}}
        />
        )}

        return {
            CreateNoteOverride,
            FileImageUpload
        }
}