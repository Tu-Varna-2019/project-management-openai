import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2, Createnote, Home } from "../ui-components";
import { Button, TextField , Authenticator , Image } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Alert,Card , Text } from '@aws-amplify/ui-react';
import { Note, NoteV2 } from '../models';
import { useLocation } from 'react-router-dom';


export default function HomePage(props) {

  const UserSettingsMenu = {
    SignOut: "Sign out",
    ChangePassword: "Change password",
    DeleteAccount : "Delete account"
  }
  const initialValues = {
    UserId: "",
    Email: "",
    Title: ""
  };

  const [user,setUser] = useState();
  const [userSettings,setUserSettings] = useState(initialValues.Title);
  const [notes,setNotes] = useState();

  const [successMessage,setSuccessMessage] = useState("none");
  const [successDescription,setSuccessDescription] = useState("");
  const location = useLocation();
  console.log(location.state);

  const sub = user?.attributes?.sub;
  const check_email = user?.attributes?.email;
  const email = check_email === undefined ? "Google EXTERNAL" : check_email;

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
        // Perform your query on the resolved data
        const filteredData = data.filter(item => item.sub === sub);
        console.log(filteredData,filteredData.length);
      }).catch(error => {
        console.error(error);
      });
      // DataStore.query(NoteV2, (r) => r.PromiseResult.sub("eq", sub)).then(
      //   (notes) => console.log(notes)
      // );
  },[sub]);
   console.log(sub,email);

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

   
  const welcome_back_text = "Welcome back " + String(email);
    return (  
        <> <Home overrides={{
          "Badge" : { children: welcome_back_text},
          "SelectField": {
           onChange : (event) => (handleSettings(event)),
          options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount],},
          success_alert : {
            style:{ "display": successMessage },
            children: successDescription,}
        }}/></>);}