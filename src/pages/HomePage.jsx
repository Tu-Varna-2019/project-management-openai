import React, { useEffect, useState } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Home ,HomeV2,NotetitlebuttonCollection } from "../ui-components";
import { Auth,DataStore } from 'aws-amplify';
import { NoteV2 } from '../models';
import { useLocation,useNavigate} from 'react-router-dom';
import amplify_image_logo_no_note from '../images/amplify_image_logo_no_note.png';

export default function HomePage(props) {

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
    setSuccessMessage(location.state ? location.state.success_alert : "none");
    setSuccessDescription(location.state ? location.state.title + " has been " + location.state.action : "");
   },[location.state]);

   useEffect(() => {
    if (!sub)
      return;
      const dts_query = DataStore.query(NoteV2)
      dts_query.then(data => {
        setNotes(data.filter(item => item.sub === sub && item.Deleted === false));
      }).catch(error => {
        console.error(error);
      });
  },[sub]);
   console.log(sub,email);
   console.log(notes);

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

  const handleTitle = (event) => {
      event.preventDefault();
      setTitle(event.target.value);
      if (props.onChange) props.onChange(event);};
  const handleDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
    if (props.onChange) props.onChange(event); 
  };
  const handlePriority = (event) => {
    event.preventDefault();
    setPriority(event.target.value);
    if (props.onChange) props.onChange(event);
  };
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
      setHideNote("block");
      setHideNoteLabel(false);
      
      setTitle(event.Title);
      setDescription(event.Description);
      setPriority(event.Priority);
      setDeleted(false);
      const date = new Date(event.Reminder);
      const formattedDate = date.toISOString().slice(0, 16);
      setReminder(formattedDate);
      setEditNoteId(event.id);};
      
  const customOverrideItems = ({ item, index }) => ({
      overrides: { Button:{ children: item.Title , style:({color: "white" }),
      backgroundColor: item.Priority === "High" ? "rgba(197, 58, 17, 1)" : item.Priority === "Medium" ? "rgba(255, 153, 0, 1)" : 
      item.Priority === "Low" ? "rgba(241, 146, 4, 0.26)" :"white"}},
      //overrides: { note_button:{ children: item.Title , backgroundColor: index % 2 === 0 ? 'white' : 'lightgray'}},
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
        navigate('/', { state: { alert_success:'block' , title: title , action: action_message }});
        window.location.reload();
      };
  
    return (  
        <>
        <div className='homepages' 
          style={{position: 'relative',display: 'inline-block',overflow: "hidden"}}>
         <HomeV2 overrides={{
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
            isChecked: deleted,
            labelHidden: hideNoteLabel, style:{"display": hideNote}},
          submit_button:{ 
            onClick : (event) => (handleOnClickSave(event)),
            type: "submit",isLoading: isLoading,
            isDisabled : isTitleEmpty || hasErrorRem,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
          "Badge" : { children: welcome_back_text},
          "my_account_select_field": {
          onChange : (event) => (handleSettings(event)),
          style:{ color: "white"},
          options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount]},
          success_alert : { style:{ "display": successMessage },children: successDescription}}}/>
    </div><div style={{ position: 'relative' , display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
    <NotetitlebuttonCollection
    style={{position: 'absolute', bottom: 160, right: 180 }}
    overrides={{
      NotetitlebuttonCollection:{
        items: notes,
        isSearchable: false}}}
overrideItems={customOverrideItems}/></div></>);}