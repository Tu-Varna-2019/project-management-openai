import '@aws-amplify/ui-react/styles.css';
import {NoteClass} from '../classes/NoteClass';
import { UserClass } from '../classes/UserClass';
import { useEffect } from 'react'
import { ReminderClass } from '../classes/ReminderClass';
import { useLocation } from 'react-router-dom';
import { DataStore  } from 'aws-amplify';
import { NoteV2 } from '../models';
import ms_outlook_sound from '../audio/ms_outlook_sound.mp3';

export function ReminderFunc () {
    const {
        handleDelete,
        setNotes,
        notes,
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
        handleSettings,
        welcome_back_text,
        UserSettingsMenu
    } = UserClass();

    const {
        reminderState,
        setReminderState,
        dividerState,
        setDividerState,
        handleOnClickPending,
        handleOnClickPassed,
        successRemDescription,
        setSuccessRemMessage,
        successRemMessage,
        setSuccessRemDescription
    } = ReminderClass();

    const location = useLocation();

    useEffect(() => {
        try {
            console.log(location.state);
            setReminderState(location.state.reminder_state);
            setDividerState(location.state.divider_state);
            setSuccessRemMessage(location.state.alert_success);
            setSuccessRemDescription(location.state.title + " has been " + location.state.action );
        } catch(error) {console.log("");}
    },[]);

   useEffect(() => {
    const intervalId = setInterval(() => {
      const timezoneOffset = new Date().getTimezoneOffset() * 60000;
      const setDateTime = new Date(new Date(reminder).getTime() - timezoneOffset);
      notes.filter(item =>{ if(new Date(item.Reminder).getTime() === setDateTime.getTime()) { console.log("Yes");}})
      //setIsSetDateEqual(isEqual);
    }, 1000); // Execute the function every 1 second
    return () => clearInterval(intervalId);
  }, [notes.Reminder]); // Execute the effect whenever the setDateTime changes

   useEffect(() => {
      const timezoneOffset = new Date().getTimezoneOffset() * 60000;
      const newDate = new Date(new Date(reminder).getTime() - timezoneOffset);
      const dts_query = DataStore.query(NoteV2)
      dts_query.then(data => {     
        setNotes( reminderState === "passed" ? 
        data.filter(item => item.sub === sub && item.Deleted === false && new Date(item.Reminder).getTime() < newDate.getTime()) :
        data.filter(item => item.sub === sub && item.Deleted === false && new Date(item.Reminder).getTime() > newDate.getTime()));
      }).catch(error => {console.error(error);});
  },[sub,setNotes]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentDate = new Date();
//       if (currentDate.getTime() === new Date(reminder).getTime()) {
//         alert('Reminder triggered!');}
//     }, 1000); // Check every second
//     return () => clearInterval(intervalId); // Clear interval on unmount
//   }, [reminder]);

    const ReminderOverride={
        pending_reminder_button : {
            onClick: (event) => (handleOnClickPending(event))},
        passed_reminder_button: {
            onClick: (event) => (handleOnClickPassed(event))},
        pending_passed_divider: {style: {marginLeft: dividerState}},
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
            onChange : (event) => (handleReminder(event)),
            type: "datetime-local",
            value: reminder,hasError: hasErrorRem,
            errorMessage:"Reminder should be set after the current date & time !",
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
        priority_select_field: {
            options: [priority],
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
        deleted_switch_field: { 
            onChange : (event) => (handleDelete(event)),
            isChecked: deleted,
            labelHidden: hideNoteLabel, style:{"display": hideNote}},
        submit_button:{ 
            onClick : (event) => (handleOnClickSave(event,"/reminder",reminderState)),
            type: "submit",isLoading: isLoading,
            isDisabled : isTitleEmpty || hasErrorRem,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
            "Badge" : { children: welcome_back_text},
            "SelectField": {
            onChange : (event) => (handleSettings(event)),
            style:{ color: "white"},
            options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount],},
        success_alert : { style:{ "display": successRemMessage },children: successRemDescription }
    }

    const ReminderNoteCollectionOverride={
        NoteremindercardCollection:{
          items: notes,
          isSearchable: false}
        }

    const customOverrideItems = ({ item, index }) => ({
      overrides: { Button:{ children: item.Title , style:({color: "white" })}},
      onClick: () => (handleNoteButton(item))
    });

    return {
        ReminderOverride,
        ReminderNoteCollectionOverride,
        customOverrideItems
    }
}