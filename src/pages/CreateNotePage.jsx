import React, { useEffect, useState } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2 } from "../ui-components";
import { Auth,DataStore } from 'aws-amplify';
import { useNavigate  } from 'react-router-dom';
import { NoteV2} from '../models';
import { Lambda } from 'aws-sdk';

export default function CreateNotePage(props) {
  
  const initialValues = {
    UserId: "",
    Title: "",
    Description: "",
    Priority: "",
    Reminder: new Date()
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
      setReminder(event.target.value);
      const compareDates = new Date(event.target.value) >= Date.now();
      setHasErrorRem(!compareDates);
     if (props.onChange) props.onChange(event);
    };
    const handleOnClickResetValues = async (event) => {
      event.preventDefault();
      setTitle(initialValues.Title);
      setDescription(initialValues.Description);
      setPriority(initialValues.Priority);
      setReminder(initialValues.Reminder);
      setHasError(initialHasErrorValues.hasError);
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

      if (hasErrorRem) {
        setIsLoading(false);
        setErrorMessage("block");
        setErrorDescription("Reminder cannot be set in the past & 5 minutes ahead !");
      } else if (!hasError) {
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
            "Deleted": false}));
            navigate('/note', { state: { alert_success:'block' , title: title , action: "created !" } });
        } catch (error) {
          setIsLoading(false);
          setErrorMessage("block");
          setErrorDescription("App is not supported in this browser's private mode! Please enable cookies!");}
      } else {
      setIsLoading(false);
      setErrorMessage("block");
      setErrorDescription("Title must not be empty!");}};

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
      cancel_button :{
        onClick : (event) => (handleOnClickCancel(event)),
        "style":{"color":"white"}},
    error_alert: {
      style:{ "display": errorMessage},
      isDismissible: false,
      children: errorDescription},
    submit_button: {
      onClick : (event) => (handleOnClickConfirm(event)),
      type: "submit",
      isLoading: isLoading,
      "style":{"color":"white"}}}}/></>)}
