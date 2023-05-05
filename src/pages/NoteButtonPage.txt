import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2, Createnote, Home , NewForm1, Notebutton, NotebuttonCollection, NotetitlebuttonCollection } from "../ui-components";
import { Button, TextField , Authenticator , Image } from '@aws-amplify/ui-react';
import { Hub, Auth, Logger,DataStore } from 'aws-amplify';
import { useNavigate  } from 'react-router-dom';
import { Note ,User , NoteV2} from '../models';
import { Collection } from '@aws-amplify/ui-react';

export default function NoteButtonPage(props) {
  
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
    const [notes,setNotes] = useState([]);
    const sub = user?.attributes?.sub;
    const check_email = user?.attributes?.email;
    const email = check_email === undefined ? "Google EXTERNAL" : check_email;

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
       },[]);

   useEffect(() => {
    if (!sub)
      return;
      const dts_query = DataStore.query(NoteV2)
      dts_query.then(data => {
        // Perform your query on the resolved data
        //const filteredData = data.filter(item => item.sub === sub);
        setNotes(data.filter(item => item.sub === sub));  
      }).catch(error => {
        console.error(error);
      });
  },[sub]);
   console.log(sub,email);
   console.log(notes,notes.length);

  
    const handleNoteButton = (event) => {
      console.log(`Button ${event.Title} `)
    };


    const customOverrideItems = ({ item, index }) => ({
      overrides: { note_button:{ children: item.Title , style:({color: "white"}) }},
      //overrides: { note_button:{ children: item.Title , backgroundColor: index % 2 === 0 ? 'white' : 'lightgray'}},
      onClick: () => (handleNoteButton(item))
    });

    return ( 
      <>
      <div className='homepages' style={{ 
            position: 'relative',
             display: 'inline-block',
              overflow: "auto"}}>
        <Home/ >
            </div>
            <div style={{ 
            position: 'relative',
             display: 'block',
              alignItems: 'center',
              justifyContent: 'center',
              top: "-100px",
              width: "1341px",
              left: "100px",
              objectFit: "cover"}}>
    <NotetitlebuttonCollection
    style={{position: 'absolute', bottom: 250, right: 200 ,alignItems: 'center',justifyContent: 'center'}}
    overrides={{
        NotebuttonCollection:{
        items: notes,
        isSearchable: true
    }
}}
overrideItems={customOverrideItems}
>
  </NotetitlebuttonCollection>
</div>
      </>
    )
}
