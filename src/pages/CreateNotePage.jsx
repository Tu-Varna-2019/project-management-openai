import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2, Createnote, Home , NewForm1 } from "../ui-components";
import { Button, TextField , Authenticator , Image } from '@aws-amplify/ui-react';
import { Hub, Auth, Logger,DataStore } from 'aws-amplify';
import { Alert,Card } from '@aws-amplify/ui-react';
import { Note ,User} from '../models';

export default function CreateNotePage(props) {
  
  const initialValues = {
    Title: "",
    Description: "",
    Priority: "",
    Reminder: new Date().toISOString(),
  };
  const initialHasErrorValues = {
    hasError: true,
    hasErrorRem: false,
  };
  
    const [title,setTitle] = useState(initialValues.Title);
    const [description,setDescription] = useState(initialValues.Description);
    const [priority,setPriority] = useState(initialValues.Priority);
    const [reminder,setReminder] = useState(initialValues.Reminder);
    const [hasError, setHasError] = useState(initialHasErrorValues.hasError);
    const [hasErrorRem, setHasErrorRem] = useState(initialHasErrorValues.hasErrorRem);

    const handleTitle = (event) => {
      event.preventDefault();
      //const containsChars = /\d/.test(event.currentTarget.value);
      console.log("changing title... ");
      setTitle(event.target.value);
     if (props.onChange) {
       props.onChange(event);
     }
     const containsChars =  /^\s*$/.test(event.currentTarget.value);
     setHasError(containsChars);
    };
    const handleDescription = (event) => {
      event.preventDefault();
      console.log("changing description... ");
      setDescription(event.target.value);
     if (props.onChange) {
       props.onChange(event);
     }
    };
    const handlePriority = (event) => {
      event.preventDefault();
      console.log("changing priority...");
      setPriority(event.target.value);
     if (props.onChange) {
       props.onChange(event);
     }
    };
    const handleReminder = (event) => {
      event.preventDefault();
      console.log("changing reminder...");
      const newReminder = event.target.value === "" ? "" : new Date(event.target.value).toISOString();
      setReminder(newReminder);
      const compareDates = new Date(event.target.value) >= Date.now();
      setHasErrorRem(!compareDates);
     if (props.onChange) {
       props.onChange(event);
     }
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
      console.log("Clearing content...");
    };
    const handleOnClickCancel = (event) => {
      event.preventDefault();
      console.log("Canceling content...");
      const prompt_cancel = window.confirm("Are you sure you want to leave ?");
      if (prompt_cancel)
        window.location.href = 'http://localhost:3000/note';  
    };
    const handleOnClickConfirm =  (event) => {
      event.preventDefault();
      console.log("Creating content...");

      if (title.trim() !== "") {
         DataStore.save(
          new Note({
          "Title": title,
          "Description": description,
          "Priority": priority,
          "Deleted": false,
          "userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
          "Reminder": reminder,
          "binID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
        })
      );
      window.location.href = 'http://localhost:3000/note';
       // window.location.reload();
      }
      else
        return "<><Alert variation='error'>Error</Alert></>";
    };


    return (  
      <>
      <CreateNotev2
      overrides={{
        title_text_field:{
          isRequired: true,
          hasError: hasError,
          value: title,
          errorMessage:"Title must not be empty !",
          onChange: (event) => (handleTitle(event)),
          "inputStyles":{
            "style":{
              "color":"white"
            }
          }
         },
        description_text_field : {
          onChange: (event) => (handleDescription(event)),
          value: description,
          "inputStyles":{
            "style":{
              "color":"white"
            }
          }
        },
        priority_select_field : {
          onChange : (event) => (handlePriority(event)),
          value: priority,
          options: ["High","Medium","Low"],
          "inputStyles":{
            "style":{
              "color":"white"
            }
          }
        },
        reminder_text_field : {
          onChange : (event) => (handleReminder(event)),
          type: "datetime-local",
          //value: reminder,
          defaultValue: reminder,
          //"inputprops":{ "min": new Date().toISOString()},
          hasError: hasErrorRem,
          errorMessage:"Reminder should be set after the current date & time !",
          "inputStyles":{
            "style":{
              "color":"white"
            }
          }
        },
        clear_button : {
          type:"reset",
          onClick : (event) => (handleOnClickResetValues(event)),
          "style":{
            "color":"white",
          }
      },
      cancel_button :{
        onClick : (event) => (handleOnClickCancel(event)),
        "style":{
          "color":"white",
        }
    },
    submit_button: {
      onClick : (event) => (handleOnClickConfirm(event)),
      type: "submit",
      "style":{
        "color":"white",
      }
    },
      }}/>
      </>
    )
}
