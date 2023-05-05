import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login , Register , MNotes , Createnote, HomePage } from "../ui-components";
import { Button, TextField , Authenticator } from '@aws-amplify/ui-react';
import { Hub, Auth } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Alert,Card } from '@aws-amplify/ui-react';
import RegisterPage from './RegisterPage';



export default function LoginPage(props) {

    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [switchComponent,setSwitchComponent] = useState(false);
    const [switchComponentRegister,setSwitchComponentRegister] = useState(false);
    const [componentKey, setComponentKey] = useState(0);
    console.log("LoginPage!")

    const handleEmail = (event) => {
      event.preventDefault();
      console.log("changing email... ");
      setEmail(event.target.value);
     if (props.onChange) {
       props.onChange(event);
     }
    };
    const handlePassword = (event) => {
      event.preventDefault();
      console.log("changing password... ");
      setPassword(event.target.value);
     if (props.onChange) {
       props.onChange(event);
     }
    };

    const icon_override = {
        "icons8-notepad-961" : {
        src : "/note-images/notepad.png"//"/logo192.png"
        },
        "icons8-twitter2" : {
        src : "/note-images/twitter.png"
        },
        "icons8-youtube-502" : {
        src : "/note-images/youtube.png"//"/logo192.png"
        },
        "icons8-instagram-502" : {
        src : "/note-images/instagram.png"
        },
        "icons8-google-play-501" : {
        src : "/note-images/google-play.png"//"/logo192.png"
        },
        "icons8-apple-logo-501" : {
        src : "/note-images/apple-logo.png"
        },
        "icons8-windows-10-301" : {
        src : "/note-images/windows.png"//"/logo192.png"
        },
        "icons8-mac-logo-501" : {
        src : "/note-images/happy-mac.png"
        },
        "icons8-eye-241":{
        src : "/note-images/eye-open.png"
        },
        /*
        "emailinputbox" :{
        <input type="text"/>
        }*/
    }

    const switch_to_component = (switch_component) => {
        switch(switch_component) {
          case 'main':
            if (email == "" || password == "") 
              console.log("Empty email/password!");
            else
              setSwitchComponent(switchComponent => !switchComponent);
            break;
          case 'register':
            setSwitchComponentRegister(switchComponentRegister => !switchComponentRegister);
            setComponentKey(componentKey + 1);
            break;
          default:
              console.log("Nothing");
              break;
        }
    };
    
    return (
      <div className='Login' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 1000
        }}>
        <Login
      overrides={{
        icon_override,
        email_text_box:{
         onChange: (event) => (handleEmail(event)),
        },
        password_text_box:{
          onChange: (event) => (handlePassword(event))
         },
       signin_button:{
          onClick : () => {switch_to_component("main")},
       },
       signup_button:{
         onClick : () => {switch_to_component("register")},
      }
        }} 
        />

        { switchComponent && <Createnote/>}
        { switchComponentRegister && <RegisterPage key={componentKey}/>}
      </div>
    )
}





// let response = await Auth.signIn(email,password)
/*
{showMessage ? (
          <Alert variation="success">Thanks!</Alert>
          //SetShowMessage(false)
        ) : (
          <Alert variation="success">Thanks!</Alert>
        )}
        <TextField id="email_text_box"
        {...props}
        type={TextField}
        label="label"
        value={email}
        onChange={handle_email_text_box}
        />
        <Button id='signin_button'
        {...props}
          color="font.primary"
          onClick={handleButtonClick}
          />

 <Login overrides={icon_override}/>
      <Routes>
        <Route path="/Home" element={<MNotes/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route exact path="/" element={<></>}></Route>
    </Routes>
*/