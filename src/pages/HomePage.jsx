import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2, Createnote, Home , NotetitlebuttonCollection } from "../ui-components";
import { Button, TextField , Authenticator , Image } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Alert,Card , Text } from '@aws-amplify/ui-react';
import { NoteV2 } from '../models';
import { useLocation } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';


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
    Reminder: new Date().toISOString(),

  };
  const initialHasErrorValues = {
    hasError: true,
    hasErrorRem: false,
    isLoading: false,
  };

  const navigate = useNavigate();
  const [user,setUser] = useState();
  const [notes,setNotes] = useState();
  const [hideNote,setHideNote] = useState(initialValues.HideNote);
  const [hideNoteLabel,setHideNoteLabel] = useState(initialValues.HideNoteLabel);
  const [successMessage,setSuccessMessage] = useState(initialValues.SuccessMessage);
  const [successDescription,setSuccessDescription] = useState(initialValues.SuccessDesc);

  const [title,setTitle] = useState(NoteValues.Title);
  const [description,setDescription] = useState(NoteValues.Description);
  const [priority,setPriority] = useState(NoteValues.Priority);
  const [reminder,setReminder] = useState(NoteValues.Reminder);
  const [hasError, setHasError] = useState(initialHasErrorValues.hasError);
  const [hasErrorRem, setHasErrorRem] = useState(initialHasErrorValues.hasErrorRem);
  const [isLoading,setIsLoading] = useState(initialHasErrorValues.isLoading);
  const [errorMessage,setErrorMessage] = useState("none");
  const [errorDescription,setErrorDescription] = useState("");

  const location = useLocation();
  const sub = user?.attributes?.sub;
  const check_email = user?.attributes?.email;
  const email = check_email === undefined ? "Google EXTERNAL" : check_email;
  console.log(location.state);

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
    setSuccessMessage(location.state ? location.state.success_alert : "none");
    setSuccessDescription(location.state ? location.state.title + " has been created !" : "");
   },[]);

   useEffect(() => {
    if (!sub)
      return;
      const dts_query = DataStore.query(NoteV2)
      dts_query.then(data => {
        setNotes(data.filter(item => item.sub === sub));
      }).catch(error => {
        console.error(error);
      });
  },[sub]);
   console.log(sub,email);
   console.log(notes);

  const handleSettings = (event) => {
    event.preventDefault();
    console.log("User settings...",event.target.value);

    switch(event.target.value){
      case UserSettingsMenu.SignOut:
         if (window.confirm("Are you sure you want to leave ?"))
            Auth.signOut();
         break;
      case UserSettingsMenu.ChangePassword:
        if (window.confirm("Are you sure you want to change password,"
        +"we will redirect you to different page?")) 
          window.location.href = 'http://localhost:3000/reset-password'; 
        break;
      case UserSettingsMenu.DeleteAccount:
        if (window.confirm("Are you sure you want to delete account,"
        +"we will redirect you to different page?")) 
          window.location.href = 'http://localhost:3000/delete-account'; 
        break;
      default: 
        console.log("default");
        break;}};

  const handleTitle = (event) => {
      event.preventDefault();
      setTitle(event.target.value);
      if (props.onChange) props.onChange(event);  
      const containsChars =  /^\s*$/.test(event.currentTarget.value);
      setHasError(containsChars);
    };
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
  const handleReminder = (event) => {
    event.preventDefault();
    const newReminder = event.target.value === "" ? "" : new Date(event.target.value).toISOString();
    setReminder(newReminder);
    const compareDates = new Date(event.target.value) >= Date.now();
    setHasErrorRem(!compareDates);
    if (props.onChange) props.onChange(event);
  };
  const handleOnClickConfirm = async  (event) => {
    event.preventDefault();
    setIsLoading(!isLoading);

    if (hasErrorRem) {
      setIsLoading(false);
      setErrorMessage("block");
      setErrorDescription("Reminder cannot be set in the past!");
    } else if (!hasError) {
      await DataStore.save(
        new NoteV2({
        "Title": title,
        "Description": description,
        "Priority": priority,
        "Reminder": reminder,
        "sub": sub,
        "Deleted": false,}));
        navigate('/note', { state: { alert_success:'block' , title: title } });
    } else {
    setIsLoading(false);
    setErrorMessage("block");
    setErrorDescription("Title must not be empty!");}
  };

  const handleNoteButton = (event) => {
      console.log(`Button ${event.Title} `);
      setHideNote("block");
      setHideNoteLabel(false);
    };
  const customOverrideItems = ({ item, index }) => ({
      overrides: { Button:{ children: item.Title , style:({color: "white" }) }},
      //overrides: { note_button:{ children: item.Title , backgroundColor: index % 2 === 0 ? 'white' : 'lightgray'}},
      onClick: () => (handleNoteButton(item))
    });

  const welcome_back_text = "Welcome back " + String(email);
    return (  
        <>
        <div className='homepages' 
          style={{position: 'relative',display: 'inline-block',overflow: "hidden"}}>
         <Home overrides={{
          title_text_field:{
            isRequired: true,hasError: hasError,value: title,
            errorMessage:"Title must not be empty !",
            onChange: (event) => (handleTitle(event)),
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
          description_text_field:{labelHidden: hideNoteLabel,style:{"display": hideNote}},
          reminder_text_field:{labelHidden: hideNoteLabel,style:{"display": hideNote}},
          priority_select_field: {labelHidden: hideNoteLabel,style:{"display": hideNote}},
          more_options_select_field: { labelHidden: hideNoteLabel, style:{"display": hideNote}},
          submit_button:{ style:{"display": hideNote ,"color":"white"}},
          "Badge" : { children: welcome_back_text},
          "SelectField": {
          onChange : (event) => (handleSettings(event)),
          options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount],},
          success_alert : { style:{ "display": successMessage },children: successDescription}}}/>
        </div>
        <div style={{ display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
    <NotetitlebuttonCollection
    style={{position: 'absolute', bottom: 300, right: 200 ,alignItems: 'center',justifyContent: 'center'}}
    overrides={{
      NotetitlebuttonCollection:{
        items: notes,
        isSearchable: false}}}
overrideItems={customOverrideItems}/></div></>);}