import '@aws-amplify/ui-react/styles.css';
import {NoteClass} from '../classes/NoteClass';
import { UserClass } from '../classes/UserClass';


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
        errorNoteDescription
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
            "inputStyles":{"style":{"color":"white"}}},
        description_text_field : {
            onChange: (event) => (handleDescription(event)),
            value: description,
            "inputStyles":{"style":{"color":"white"}}},
        priority_select_field : {
            onChange : (event) => (handlePriority(event)),
            value: priority,
            options: ["","High","Medium","Low"],
            "inputStyles":{"style":{"color":"white"}}},
        reminder_text_field : {
            onChange : (event) => (handleReminder(event)),
            type: "datetime-local",
            value: reminder,
            hasError: hasErrorRem,
            errorMessage:"Reminder should be set after the current date & time !",
            "inputStyles":{"style":{"color":"white"}}},
        clear_button : {
            type:"reset",
            onClick : (event) => (handleOnClickResetValues(event)),
            "style":{"color":"white"}},
        openai_select_field:{
            onChange : (event) => (handleAIOption(event)),
            style:{ color: "white"},
            options: ["","OpenAI change description"]
            },
        cancel_button :{
            onClick : (event) => (handleOnClickCancel(event)),
            "style":{"color":"white"}},
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
            "style":{"color":"white"}}}


        return {
            CreateNoteOverride
        }
}