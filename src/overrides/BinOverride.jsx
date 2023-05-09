import '@aws-amplify/ui-react/styles.css';
import {NoteClass} from '../classes/NoteClass';
import { UserClass } from '../classes/UserClass';
import { useEffect } from 'react'
import { DataStore  } from 'aws-amplify';
import { NoteV2 } from '../models';
import { BinClass } from '../classes/BinClass';
import { useLocation } from 'react-router-dom';


export function BinFunc () {
    const {
        setNotes,
        notes,
        handleNoteButton,
        hideNote,
        hideNoteLabel,
        noNotesText,
        title,
        description,
        reminder,
        priority,
        selectedNote
    } = NoteClass();

    const {
        sub,
        handleSettings,
        welcome_back_text,
        UserSettingsMenu
    } = UserClass();

    const {
        handleOnClickRestore,
        handleOnClickPerDelete,
        handleOnClickDeleteAll,
        handleOnclickConfirm,
        handleOnclickCancel,
        disableEveryButton,
        infoWarningMessage,
        hideInfoWarningMessage,
        isRestoreLoading,
        isPerDeleteLoading,
        infoWarningType,
        successMessage,
        successDescription,
        setSuccessMessage,
        setSuccessDescription
    } = BinClass();

    const location = useLocation();
    useEffect(() => {
        setSuccessMessage(location.state ? location.state.success_alert : "none");
        setSuccessDescription(location.state ? location.state.title + " has been " + location.state.action : "");
       },[]);

    useEffect(() => {
            const dts_query = DataStore.query(NoteV2)
            dts_query.then(data => {
            setNotes(data.filter(item => item.sub === sub && item.Deleted === true));
            }).catch(error => {
            console.error(error);
            });
        },[sub]);
        console.log(sub);
        console.log(notes);

    const BinOverride={
        amplify_image_logo_no_note:{
            top: String(noNotesText) + "px"},
          notes_displayed_here_no_note:{
            top: String(noNotesText+197) + "px"},
          divider_notes_info:{style:{"display": hideNote}},
          title_text_field:{
            value: title,
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
          description_text_field:{
            value: description,
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
          reminder_text_field:{
            type: "datetime-local",
            value: reminder,
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
          priority_select_field: {
            value: priority,options:[priority],
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
          restore_button177161771:{ 
            onClick : (event) => (handleOnClickRestore(event,title)),
            type: "submit",isLoading: isRestoreLoading,
            isDisabled: isRestoreLoading || disableEveryButton,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
          // Delete permanently
          restore_button177161904 :{ 
            onClick : (event) => (handleOnClickPerDelete(event,title)),
            type: "submit",isLoading: isPerDeleteLoading,
            isDisabled: isRestoreLoading || disableEveryButton,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
          // Delete All button
            create_note_button :{ 
                onClick : (event) => (handleOnClickDeleteAll(event)),
                style:{"display": hideNote,textAlign: 'center'}},
            confirm_cancel_alert:{
             style:{ "display": hideInfoWarningMessage },children: infoWarningMessage,
             variation : infoWarningType
            },
            confirm_button:{
                onClick : (event) => (handleOnclickConfirm(event,selectedNote,notes)),
                style:{"display": hideInfoWarningMessage},
            },
            cancel_button:{
                onClick : (event) => (handleOnclickCancel(event)),
                style:{"display": hideInfoWarningMessage},
            },
          "Badge" : { children: welcome_back_text},
          "SelectField": {
          onChange : (event) => (handleSettings(event)),
          style:{ color: "white"},
          options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount],},
          success_alert : { style:{ "display": successMessage },children: successDescription}
    }

    const customOverrideItems = ({ item, index }) => ({
        overrides: { Button:{ children: item.Title , style:({color: "white" })}},
        onClick: () => (handleNoteButton(item))});

    const BinNoteCollectionOverride={
            NotetitlebuttonCollection:{
              items: notes,
              isSearchable: false}
            }

    return {
        BinOverride,
        customOverrideItems,
        BinNoteCollectionOverride
    }
}