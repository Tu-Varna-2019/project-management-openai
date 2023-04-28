import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2, Createnote, Home } from "../ui-components";
import { Button, TextField , Authenticator , Image } from '@aws-amplify/ui-react';
import { Hub, Auth, Logger,DataStore } from 'aws-amplify';
import { useNavigate  } from 'react-router-dom';
import { Note ,User , NoteV2} from '../models';

export default function CreateNotePage(props) {
  
  const initialValues = {
    UserId: "",
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
    const [title,setTitle] = useState(initialValues.Title);
    const [description,setDescription] = useState(initialValues.Description);
    const [priority,setPriority] = useState(initialValues.Priority);
    const [reminder,setReminder] = useState(initialValues.Reminder);
    const [hasError, setHasError] = useState(initialHasErrorValues.hasError);
    const [hasErrorRem, setHasErrorRem] = useState(initialHasErrorValues.hasErrorRem);

    const [isLoading,setIsLoading] = useState(initialHasErrorValues.isLoading);
    const [errorMessage,setErrorMessage] = useState("none");
    const [errorDescription,setErrorDescription] = useState("");
    const [user,setUser] = useState();
    const sub = user?.attributes?.sub;
  
    useEffect(() => {
      Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
     },[]);
     console.log(sub,typeof(sub));

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
    const handleOnClickResetValues = (event) => {
      event.preventDefault();
      setTitle(initialValues.Title);
      setDescription(initialValues.Description);
      setPriority(initialValues.Priority);
      setReminder(initialValues.Reminder);
      setHasError(initialHasErrorValues.hasError);
      // TODO: Disabled reminder clear due to bug 
      // when selecting a date the initial value is returned 
      //setHasErrorRem(initialHasErrorValues.hasErrorRem);
    };
    const handleOnClickCancel = (event) => {
      event.preventDefault();
      console.log("Canceling content...");
      const prompt_cancel = window.confirm("Are you sure you want to leave ?");
      if (prompt_cancel) window.location.href = 'http://localhost:3000/note';  
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

    return (  
      <>
      <CreateNotev2
      overrides={{
        title_text_field:{
          isRequired: true,hasError: hasError,value: title,
          errorMessage:"Title must not be empty !",
          onChange: (event) => (handleTitle(event)),
          "inputStyles":{"style":{"color":"white"}}},
        description_text_field : {
          onChange: (event) => (handleDescription(event)),
          value: description,
          "inputStyles":{"style":{"color":"white"}}},
        priority_select_field : {
          onChange : (event) => (handlePriority(event)),
          value: priority,
          options: ["High","Medium","Low"],
          "inputStyles":{"style":{"color":"white"}}},
        reminder_text_field : {
          onChange : (event) => (handleReminder(event)),
          type: "datetime-local",
          //value: reminder,
          defaultValue: reminder,
          hasError: hasErrorRem,
          errorMessage:"Reminder should be set after the current date & time !",
          "inputStyles":{"style":{"color":"white"}}},
        clear_button : {
          type:"reset",
          onClick : (event) => (handleOnClickResetValues(event)),
          "style":{"color":"white"}},
      cancel_button :{
        onClick : (event) => (handleOnClickCancel(event)),
        "style":{"color":"white"}},
    error_alert: {
      style:{ "display": errorMessage},
      isDismissible: false,
      children: errorDescription,},
    submit_button: {
      onClick : (event) => (handleOnClickConfirm(event)),
      type: "submit",
      isLoading: isLoading,
      "style":{"color":"white"}}}}/></>)}
