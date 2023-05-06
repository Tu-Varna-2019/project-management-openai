

import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { NoteV2 } from '../models';

export function BinClass() {

    const initialValues = {
        HideNote: "none",
        HideNoteLabel: true,
        isLoading: false,
        SuccessMessage: "none",
        SuccessDesc: "",
      };

    const navigate = useNavigate();
    const [successMessage,setSuccessMessage] = useState(initialValues.SuccessMessage);
    const [successDescription,setSuccessDescription] = useState(initialValues.SuccessDesc);
    const [infoWarningMessage,setInfoWarningMessage] = useState(initialValues.SuccessMessage);
    const [hideInfoWarningMessage,setHideInfoWarningMessage] = useState(initialValues.HideNote);
    const [infoWarningType,setInfoWarningType] = useState("info");
    const [isRestoreLoading,setisRestoreLoading] = useState(initialValues.isLoading);
    const [isPerDeleteLoading,setisPerDeleteLoading] = useState(initialValues.isLoading);
    const disableEveryButton = infoWarningType === "error" ? true : false;

    const handleOnClickRestore = (event,title) => {
        event.preventDefault();
        console.log(title);
        setisRestoreLoading(!isRestoreLoading);
        setInfoWarningType("info");
        setHideInfoWarningMessage("block");
        setInfoWarningMessage("Are you sure you want to restore "+title+" ?"); };

    const handleOnClickPerDelete = (event,title) => {
        event.preventDefault();
        setisPerDeleteLoading(!isPerDeleteLoading);
        setHideInfoWarningMessage("block");
        setInfoWarningType("warning");
        setInfoWarningMessage("Are you sure you want to delete "+title+" ?");};

    const handleOnClickDeleteAll = (event) => {
        event.preventDefault();
        setHideInfoWarningMessage("block");
        setInfoWarningType("error");
        setInfoWarningMessage("Are you sure you want to empty bin ? Note : You won't be able to restore them");};

    const handleOnclickConfirm = async (event,editNote,notes) => {
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newDate = new Date(new Date(editNote.Reminder).getTime() - timezoneOffset);
        const newReminder = newDate.toISOString();

        switch(infoWarningType){
            case "info":
                await DataStore.save(NoteV2.copyOf(editNote, item => {
                    item.Title = editNote.Title;
                    item.Description = editNote.Description;
                    item.Priority = editNote.Priority;
                    item.Reminder = newReminder;
                    item.Deleted = false;}));
                    navigate('/bin', { state: { alert_success:'block' , title: editNote.Title , action: "restored !" }});
                    window.location.reload();
            break;
            case "warning":
                await DataStore.delete(editNote);
                navigate('/bin', { state: { alert_success:'block' , title: editNote.Title , action: "deleted permanently !" }});
                window.location.reload();
            break;
            case "error":
                notes.forEach(item => DataStore.delete(item));
                navigate('/bin', { state: { alert_success:'block' , title: "Bin" , action: "emptied !" }});
                window.location.reload();
                break;
            default: 
                console.log("default");
                break;}
            }

    const handleOnclickCancel = (event) => {
        setHideInfoWarningMessage("none");
        setisRestoreLoading(false);
        setisPerDeleteLoading(false);
        setInfoWarningType("info");
    };

    return {
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
    }
}