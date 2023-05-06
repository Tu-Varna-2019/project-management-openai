import { useEffect } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { DataStore } from 'aws-amplify';
import { NoteV2 } from '../models';
import amplify_image_logo_no_note from '../images/amplify_image_logo_no_note.png';
import {NoteClass} from '../classes/NoteClass';
import { UserClass } from '../classes/UserClass';


export function HomeOverrideFunc () {

    const {
        handleDelete,
        setNotes,
        notes,
        handleTitle,
        handleDescription,
        handlePriority,
        handleReminder,
        handleNoteButton,
        handleOnClickSave,
        hideNote,
        hideNoteLabel,
        noNotesText,
        title,
        isTitleEmpty,
        description,
        reminder,
        hasErrorRem,
        priority,
        deleted,
        isLoading
    } = NoteClass();

    const {
        sub,
        email,
        handleSettings,
        welcome_back_text,
        UserSettingsMenu,
        successDescription,
        successMessage
    } = UserClass();

    useEffect(() => {
        const dts_query = DataStore.query(NoteV2)
        dts_query.then(data => {
        setNotes(data.filter(item => item.sub === sub && item.Deleted === false));
        }).catch(error => {
        console.error(error);
        });
    },[sub,setNotes]);
    console.log(sub,email);
    console.log(notes);

    const customOverrideItems = ({ item, index }) => ({
        overrides: { Button:{ children: item.Title , style:({color: "white" }),
        backgroundColor: item.Priority === "High" ? "rgba(197, 58, 17, 1)" : item.Priority === "Medium" ? "rgba(255, 153, 0, 1)" : 
        item.Priority === "Low" ? "rgba(241, 146, 4, 0.26)" :"white"}},
        //overrides: { note_button:{ children: item.Title , backgroundColor: index % 2 === 0 ? 'white' : 'lightgray'}},
        onClick: () => (handleNoteButton(item))
    });

    const HomeNoteCollectionOverride={
        NotetitlebuttonCollection:{
            items: notes,
            isSearchable: false}
    }

    const HomeOverride={
        amplify_image_logo_no_note:{
            src: amplify_image_logo_no_note,
            top: String(noNotesText) + "px"},
        notes_displayed_here_no_note:{
            top: String(noNotesText+197) + "px"},
        divider_notes_info:{style:{"display": hideNote}},
        title_text_field:{
            isRequired: true,hasError: isTitleEmpty & !hideNoteLabel,value: title,
            errorMessage:"Title must not be empty !",
            onChange: (event) => (handleTitle(event)),
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
        description_text_field:{
            onChange: (event) => (handleDescription(event)),
            value: description,
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
        reminder_text_field:{
            onChange : (event) => (handleReminder(event)),
            type: "datetime-local",
            value: reminder,hasError: hasErrorRem,
            errorMessage:"Reminder should be set after the current date & time !",
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
        priority_select_field: {
            onChange : (event) => (handlePriority(event)),
            value: priority,options: ["High","Medium","Low"],
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
        deleted_switch_field: { 
            onChange : (event) => (handleDelete(event)),
            isChecked:deleted,
            labelHidden: hideNoteLabel, style:{"display": hideNote}},
        submit_button:{ 
            onClick : (event) => (handleOnClickSave(event,"/","pending")),
            type: "submit",isLoading: isLoading,
            isDisabled : isTitleEmpty || hasErrorRem,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
        "Badge" : { children: welcome_back_text},
        my_account_select_field: {
            onChange : (event) => (handleSettings(event)),
            style:{ color: "white"},
            options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount]},
        success_alert : { style:{ "display": successMessage },children: successDescription}
    };

    return {
        HomeOverride,
        HomeNoteCollectionOverride,
        customOverrideItems
    }
}