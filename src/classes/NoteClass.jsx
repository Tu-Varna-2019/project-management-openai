import { useState } from 'react'
import { DataStore,API } from 'aws-amplify';
import { NoteV2 } from '../models';
import {useNavigate} from 'react-router-dom';
import { UserClass } from './UserClass';
import { Storage } from "@aws-amplify/storage"
import { Auth } from 'aws-amplify';


export function NoteClass() {

    const {
        sub,
    } = UserClass();

    const NoteValues = {
        Title: "",
        Description: "",
        Priority: "Low",
        Reminder: new Date(),
        HideNote: "none",
        HideNoteLabel: true,
        Notes: [],
        NoteId: ""
    };    
    const initialHasErrorValues = {
        hasErrorRem: false,
        isLoading: false,
        ShowErrorMessage: "none",
        ErrorDesc: "",
    };

    const [selectedNote,setSelectedNote] = useState();
    const [title,setTitle] = useState(NoteValues.Title);
    const [description,setDescription] = useState(NoteValues.Description);
    const [priority,setPriority] = useState(NoteValues.Priority);
    const [deleted,setDeleted] = useState(false);
    const [reminder,setReminder] = useState(NoteValues.Reminder);
    const [hasErrorRem, setHasErrorRem] = useState(initialHasErrorValues.hasErrorRem);
    const [isLoading,setIsLoading] = useState(initialHasErrorValues.isLoading);
    const [editNoteId,setEditNoteId] = useState(NoteValues.NoteId);
    const [notes,setNotes] = useState(NoteValues.Notes);
    const [hideNote,setHideNote] = useState(NoteValues.HideNote);
    const [hideNoteLabel,setHideNoteLabel] = useState(NoteValues.HideNoteLabel);

    // Create note error alert
    const [errorNoteMessage,setErrorNoteMessage] = useState(initialHasErrorValues.ShowErrorMessage);
    const [errorNoteDescription,setErrorNoteDescription] = useState(initialHasErrorValues.ErrorDesc);
    // Object Image name
    const [imageName,setImageName] = useState("");

    const isTitleEmpty =  /^\s*$/.test(title);
    const noNotesText = notes.length === 0 ? 465 : -300;
    const noMoreIcon = title === "" ? -600 : 380;
    const navigate = useNavigate();
    
    const handleDelete = (event) => {
        event.preventDefault();
        setDeleted(!deleted);
    };
    const handleTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
    };
    const handleDescription = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
    };
    const handlePriority = (event) => {
        event.preventDefault();
        setPriority(event.target.value);
    };

    const handleReminder = (event) => {
        event.preventDefault();
        setReminder(event.target.value);
        const compareDates = new Date(event.target.value) >= Date.now();
        setHasErrorRem(!compareDates);
    };
    
    ////////////////////////* List all notes : HomePage,BinPage,ReminderPage ... *//////////////////////////////////////////////////////////////

    const handleNoteButton = async (event) => {
        console.log(`Button ${event.Title} `);
        setSelectedNote(event);
        setHideNote("block");
        setHideNoteLabel(false);      
        setTitle(event.Title);
        setDescription(event.Description);
        setPriority(event.Priority);
        setDeleted(false);
        const date = new Date(event.Reminder);
        const formattedDate = date.toISOString().slice(0, 16);
        setReminder(formattedDate);
        setEditNoteId(event.id);

        const credentials = await Auth.currentCredentials();
        await Storage.vault.get(
            event.ImageName,{
            level:"private",
            identityId: credentials.identityId
        }).then(data => {
            setImageName(data);
        })
    };

    const handleOnClickSave = async (event,route,reminder_state,divider_state) => {
        event.preventDefault();
        setIsLoading(!isLoading);
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newDate = new Date(new Date(reminder).getTime() - timezoneOffset);
        const newReminder = newDate.toISOString();

        const editNote = await DataStore.query(NoteV2, editNoteId);
        await DataStore.save(NoteV2.copyOf(editNote, item => {
            item.Title = title;
            item.Description = description;
            item.Priority = priority;
            item.Reminder = newReminder;
            item.Deleted = deleted;}));
        const action_message = deleted === true ? "deleted !" : "modified !";
        navigate(route, { state: { alert_success:'block' , title: title , action: action_message , reminder_state:reminder_state,divider_state: divider_state }});
        window.location.reload();
        };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    ////////////////////////* Create note : CreateNotePage ... *//////////////////////////////////////////////////////////////

    const postData = async (event) => {
        const response = await API.post('apiopenai','/openai/chatcompletion',
        { body: JSON.stringify({event}) });
        console.log(response);
        return response;
    }

    const handleAIOption = async (event) => {
        event.preventDefault();
        console.log("changed openai settings...");
        let openai_response = ""
        if (description.trim().length !== 0) {
            openai_response = await postData(description);
            setDescription(openai_response);
        }};  

    const handleOnClickResetValues = (event) => {
        event.preventDefault();
        setTitle(NoteValues.Title);
        setDescription(NoteValues.Description);
        setPriority(NoteValues.Priority);
        setReminder(NoteValues.Reminder);
        setHasErrorRem(initialHasErrorValues.hasErrorRem);
    };

    const handleOnClickCancel = (event) => {
        event.preventDefault();
        const prompt_cancel = window.confirm("Are you sure you want to leave ?");
        if (prompt_cancel) navigate('/note');
    };

    const handleOnClickConfirm = async  (event) => {
        event.preventDefault();
        setIsLoading(!isLoading);

        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newDate = new Date(new Date(reminder).getTime() - timezoneOffset);
        const newReminder = newDate.toISOString();
        try {
            await DataStore.save(
                new NoteV2({
                "Title": title,
                "Description": description,
                "Priority": priority,
                "Reminder": newReminder,
                "sub": sub,
                "Deleted": false,
                "ImageName": imageName
            }));
            navigate('/note', { state: { alert_success:'block' , title: title , action: "created !" } });
        } catch (error) {
            setIsLoading(false);
            setErrorNoteMessage("block");
            setErrorNoteDescription("App is not supported in this browser's private mode! Please enable cookies!");
    }};

    const handleImageRemoveChange = async (event) => {
        await Storage.remove(event, { level: 'private' });
        console.log("Removed file: "+ event);
        }

    const handleSafeImageChange = async (event) => {

        await Storage.put(event,{level: 'private'});
        console.log(`Saving file: ${event} `);
        setImageName(event);
        }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return {
        handleDelete,
        notes,
        handleTitle,
        handleDescription,
        handlePriority,
        handleReminder,
        handleNoteButton,
        handleOnClickSave,
        noNotesText,
        hideNote,
        hideNoteLabel,
        title,
        isTitleEmpty,
        description,
        reminder,
        hasErrorRem,
        priority,
        deleted,
        isLoading,
        NoteValues,
        handleAIOption,
        handleOnClickResetValues,
        handleOnClickCancel,
        handleOnClickConfirm,
        errorNoteMessage,
        errorNoteDescription,
        setNotes,
        selectedNote,
        noMoreIcon,
        handleImageRemoveChange,
        handleSafeImageChange,
        imageName,
    }
}