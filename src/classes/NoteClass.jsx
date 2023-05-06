import { useState } from 'react'
import { DataStore } from 'aws-amplify';
import { NoteV2 } from '../models';
import {useNavigate} from 'react-router-dom';

export function NoteClass() {

    const NoteValues = {
        Title: "",
        Description: "",
        Priority: "",
        Reminder: new Date(),
        HideNote: "none",
        HideNoteLabel: true
    };    
    const initialHasErrorValues = {
        hasErrorRem: false,
        isLoading: false,
    };

    const [title,setTitle] = useState(NoteValues.Title);
    const [description,setDescription] = useState(NoteValues.Description);
    const [priority,setPriority] = useState(NoteValues.Priority);
    const [deleted,setDeleted] = useState(false);
    const [reminder,setReminder] = useState(NoteValues.Reminder);
    const [hasErrorRem, setHasErrorRem] = useState(initialHasErrorValues.hasErrorRem);
    const [isLoading,setIsLoading] = useState(initialHasErrorValues.isLoading);
    const [editNoteId,setEditNoteId] = useState("");
    const [notes,setNotes] = useState([]);
    const [hideNote,setHideNote] = useState(NoteValues.HideNote);
    const [hideNoteLabel,setHideNoteLabel] = useState(NoteValues.HideNoteLabel);

    const isTitleEmpty =  /^\s*$/.test(title);
    const noNotesText = notes.length === 0 ? 465 : -300;
    const navigate = useNavigate();

    const handleDelete = (event) => {
        event.preventDefault();
        setDeleted(!deleted);
        //if (props.onChange) props.onChange(event);
    };

    const handleTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
       // if (props.onChange) props.onChange(event);
    };
    const handleDescription = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
     // if (props.onChange) props.onChange(event); 
    };
    const handlePriority = (event) => {
        event.preventDefault();
        setPriority(event.target.value);
    //  if (props.onChange) props.onChange(event);
    };

    const handleReminder = (event) => {
        event.preventDefault();
        setReminder(event.target.value);
        const compareDates = new Date(event.target.value) >= Date.now();
        setHasErrorRem(!compareDates);
     // if (props.onChange) props.onChange(event);
    };
    
    const handleNoteButton = (event) => {
        console.log(`Button ${event.Title} `);
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
    };

    const handleOnClickSave = async  (event) => {
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
        navigate('/', { state: { alert_success:'block' , title: title , action: action_message }});
        window.location.reload();
        };

    return {
        handleDelete,
        setNotes,
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
        isLoading
    }
}