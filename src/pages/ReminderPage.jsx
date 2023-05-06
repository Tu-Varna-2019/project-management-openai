import React, { useEffect, useState } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { NoteremindercardCollection, Reminder } from "../ui-components";
import { Auth,DataStore , Notifications } from 'aws-amplify';
import { NoteV2 } from '../models';
import { useLocation,useNavigate} from 'react-router-dom';
import ms_outlook_sound from '../audio/ms_outlook_sound.mp3';

export default function ReminderPage(props) {

  const UserSettingsMenu = {
    SignOut: "Sign out",
    ChangePassword: "Change password",
    DeleteAccount : "Delete account"
  }
  const initialValues = {
    UserId: "",
    Email: "",
    SuccessMessage: "none",
    SuccessDesc: "",
    HideNote: "none",
    HideNoteLabel: true
  };
  const NoteValues = {
    Title: "",
    Description: "",
    Priority: "",
    Reminder: new Date(),
    Reminder_state : "pending",
    Divider_state: "5px",
  };
  const initialHasErrorValues = {
    hasErrorRem: false,
    isLoading: false,
  };

  const navigate = useNavigate();
  const [user,setUser] = useState();
  const [editNoteId,setEditNoteId] = useState("");
  const [notes,setNotes] = useState([]);
  const [hideNote,setHideNote] = useState(initialValues.HideNote);
  const [hideNoteLabel,setHideNoteLabel] = useState(initialValues.HideNoteLabel);
  const [successMessage,setSuccessMessage] = useState(initialValues.SuccessMessage);
  const [successDescription,setSuccessDescription] = useState(initialValues.SuccessDesc);
  const [reminderState,setReminderState] = useState(NoteValues.Reminder_state);
  const [dividerState,setDividerState] = useState(NoteValues.Divider_state);

  const [title,setTitle] = useState(NoteValues.Title);
  const [description,setDescription] = useState(NoteValues.Description);
  const [priority,setPriority] = useState(NoteValues.Priority);
  const [deleted,setDeleted] = useState(false);
  const [reminder,setReminder] = useState(NoteValues.Reminder);
  const [hasErrorRem, setHasErrorRem] = useState(initialHasErrorValues.hasErrorRem);
  const [isLoading,setIsLoading] = useState(initialHasErrorValues.isLoading);

  const location = useLocation();
  const sub = user?.attributes?.sub;
  const check_email = user?.attributes?.email;
  const email = check_email === undefined ? "Google EXTERNAL" : check_email;
  const welcome_back_text = "Welcome back " + String(email);
  const isTitleEmpty =  /^\s*$/.test(title);
  const noNotesText = notes.length === 0 ? 465 : -300;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
    try {
        setReminderState(location.state.reminder_state);
        setDividerState(location.state.divider_state);
        setSuccessMessage(location.state.alert_success);
        setSuccessDescription(location.state.title + " has been " + location.state.action );
    } catch(error) {console.log("");}
   },[]);
   const [isSetDateEqual, setIsSetDateEqual] = useState(false);
   useEffect(() => {
    const intervalId = setInterval(() => {
      const timezoneOffset = new Date().getTimezoneOffset() * 60000;
      const setDateTime = new Date(new Date(reminder).getTime() - timezoneOffset);
      notes.filter(item =>{ if(new Date(item.Reminder).getTime() === setDateTime.getTime()) { console.log("Yes");}})
      //setIsSetDateEqual(isEqual);
    }, 1000); // Execute the function every 1 second
    return () => clearInterval(intervalId);
  }, [notes.reminder]); // Execute the effect whenever the setDateTime changes


   useEffect(() => {
      if (!sub) return;
      const timezoneOffset = new Date().getTimezoneOffset() * 60000;
      const newDate = new Date(new Date(reminder).getTime() - timezoneOffset);
      const dts_query = DataStore.query(NoteV2)
      dts_query.then(data => {     
        setNotes( reminderState === "passed" ? 
        data.filter(item => item.sub === sub && item.Deleted === false && new Date(item.Reminder).getTime() < newDate.getTime()) :
        data.filter(item => item.sub === sub && item.Deleted === false && new Date(item.Reminder).getTime() > newDate.getTime()));
      }).catch(error => {console.error(error);});
  },[sub]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      if (currentDate.getTime() === new Date(reminder).getTime()) {
        alert('Reminder triggered!');}
    }, 1000); // Check every second
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [reminder]);

  const handleSettings = (event) => {
    event.preventDefault();
    switch(event.target.value){
      case UserSettingsMenu.SignOut:
         if (window.confirm("Are you sure you want to leave ?"))
            Auth.signOut();
         break;
      case UserSettingsMenu.ChangePassword:
        if (window.confirm("Are you sure you want to change password,"
        +"we will redirect you to different page?")) 
          navigate('/reset-password');
        break;
      case UserSettingsMenu.DeleteAccount:
        if (window.confirm("Are you sure you want to delete account,"
        +"we will redirect you to different page?")) 
        navigate('/delete-account');
        break;
      default: 
        console.log("default");
        break;}};


  const handleDelete = (event) => {
    event.preventDefault();
    setDeleted(!deleted);
    if (props.onChange) props.onChange(event);
  };
  const handleReminder = (event) => {
    event.preventDefault();
    setReminder(event.target.value);
    const compareDates = new Date(event.target.value) >= Date.now();
    setHasErrorRem(!compareDates);
    if (props.onChange) props.onChange(event);};
  
  const handleNoteButton = (event) => {
      console.log(`Button ${event.Title} `);
      const date = new Date(event.Reminder);
      const formattedDate = date.toISOString().slice(0, 16);
      setHideNote("block");
      setHideNoteLabel(false);
      
      setTitle(event.Title);
      setDescription(event.Description);
      setPriority(event.Priority);
      setDeleted(false);
      setReminder(formattedDate);
      setEditNoteId(event.id);};
      
  const customOverrideItems = ({ item, index }) => ({
      overrides: { Button:{ children: item.Title , style:({color: "white" })}},
      onClick: () => (handleNoteButton(item))
    });

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
        navigate('/reminder', { state: { 
         alert_success:'block' , title: title ,
         action: action_message ,
         reminder_state: reminderState ,
         divider_state: dividerState
        }}); window.location.reload();};

  const handleOnClickPending = (event) => {
    navigate('/reminder', { state: { reminder_state: "pending" , alert_success:'none' , title:"",action:"", divider_state: "5px"}});
    window.location.reload();
  };
  const handleOnClickPassed = (event) => {
    navigate('/reminder', { state: { reminder_state: "passed" , alert_success:'none' , title:"",action:"",  divider_state: "250px" }});
    window.location.reload();
  };
  
    return (  
        <>
        <div className='reminderpages' 
          style={{position: 'relative',display: 'inline-block',overflow: "hidden"}}>
         <Reminder overrides={{
          pending_reminder_button : {
            onClick: (event) => (handleOnClickPending(event)),},
          passed_reminder_button: {
            onClick: (event) => (handleOnClickPassed(event)),},
          pending_passed_divider: {style: {marginLeft: dividerState},},
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
            onClick : (event) => (handleOnClickSave(event)),
            type: "submit",isLoading: isLoading,
            isDisabled : isTitleEmpty || hasErrorRem,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
          "Badge" : { children: welcome_back_text},
          "SelectField": {
          onChange : (event) => (handleSettings(event)),
          style:{ color: "white"},
          options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount],},
          success_alert : { style:{ "display": successMessage },children: successDescription}}}/>
    </div><div style={{ position: 'relative' , display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
    <NoteremindercardCollection
    style={{position: 'absolute', bottom: 160, right: 130 }}
    overrides={{
      NoteremindercardCollection:{
        items: notes,
        isSearchable: false}}}
overrideItems={customOverrideItems}/></div></>);}