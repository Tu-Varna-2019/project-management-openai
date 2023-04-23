import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Createnote, Home } from "../ui-components";
import { Button, TextField , Authenticator , Image } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Alert,Card , Text } from '@aws-amplify/ui-react';


export default function HomePage(props) {

  const initialValues = {
    UserId: "",
    Email: "",
    Title: ""
  };

  const [userId,setUserId] = useState(initialValues.UserId);
  //const [title,setTitle] = useState(initialValues.Title);
  const [email,setEmail] = useState(initialValues.Email);
  // useEffect(() => {
  //  DataStore.query(NoteV2).then(setTitle);
  // },[]);

  Auth.currentAuthenticatedUser({ bypassCache: true })
  .then(user => {
    setUserId(user.attributes.sub);
    const user_email = user.attributes.email || user.attributes['custom:email'];
    if (user_email === undefined)
      setEmail("Google EXTERNAL");
    else
      setEmail(user_email);
    console.log(email);
  })
  .catch(err => console.log(err));
    const welcome_back_text = "Welcome back " + String(email);

    console.log(userId);
    return (  
        <>
        <Card variation="elevated">
          <Text>getNote</Text>
          
          </Card>
        <Home overrides={{
          "Badge" : { children: welcome_back_text}
        }}/>
      </>
    );
}
