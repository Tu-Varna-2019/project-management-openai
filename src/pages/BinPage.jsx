import React, { useEffect, useState } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Bin ,NotetitlebuttonCollection } from "../ui-components";
import { Auth,DataStore } from 'aws-amplify';
import { NoteV2 } from '../models';
import { useLocation,useNavigate} from 'react-router-dom';

export default function BinPage(props) {

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
    isLoading: false,
  };

  const navigate = useNavigate();
  const [user,setUser] = useState();
  const [editNoteId,setEditNoteId] = useState("");
  const [notes,setNotes] = useState([]);
  const [hideNote,setHideNote] = useState(initialValues.HideNote);
  const [hideInfoWarningMessage,setHideInfoWarningMessage] = useState(initialValues.HideNote);
  const [hideNoteLabel,setHideNoteLabel] = useState(initialValues.HideNoteLabel);

  const [successMessage,setSuccessMessage] = useState(initialValues.SuccessMessage);
  const [successDescription,setSuccessDescription] = useState(initialValues.SuccessDesc);
  const [infoWarningMessage,setInfoWarningMessage] = useState(initialValues.SuccessMessage);
  const [infoWarningType,setInfoWarningType] = useState("info");

  const [title,setTitle] = useState(NoteValues.Title);
  const [description,setDescription] = useState(NoteValues.Description);
  const [priority,setPriority] = useState(NoteValues.Priority);
  const [reminder,setReminder] = useState(NoteValues.Reminder);
  const [isRestoreLoading,setisRestoreLoading] = useState(initialHasErrorValues.isLoading);
  const [isPerDeleteLoading,setisPerDeleteLoading] = useState(initialHasErrorValues.isLoading);
  const disableEveryButton = infoWarningType === "error" ? true : false;

  const location = useLocation();
  const sub = user?.attributes?.sub;
  const check_email = user?.attributes?.email;
  const email = check_email === undefined ? "Google EXTERNAL" : check_email;
  const welcome_back_text = "Welcome back " + String(email);
  const noNotesText = notes.length === 0 ? 465 : -300;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
    setSuccessMessage(location.state ? location.state.success_alert : "none");
    setSuccessDescription(location.state ? location.state.title + " has been " + location.state.action : "");
   },[]);

   useEffect(() => {
    if (!sub)
      return;
      const dts_query = DataStore.query(NoteV2)
      dts_query.then(data => {
        setNotes(data.filter(item => item.sub === sub && item.Deleted === true));
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
  
  const handleNoteButton = (event) => {
      console.log(`Button ${event.Title} `);
      setHideNote("block");
      setHideNoteLabel(false);
      
      setTitle(event.Title);
      setDescription(event.Description);
      setPriority(event.Priority);
      const date = new Date(event.Reminder);
      const formattedDate = date.toISOString().slice(0, 16);
      setReminder(formattedDate);
      setEditNoteId(event.id);};
      
  const customOverrideItems = ({ item, index }) => ({
      overrides: { Button:{ children: item.Title , style:({color: "white" })}},
      onClick: () => (handleNoteButton(item))});

  const handleOnClickRestore = (event) => {
      event.preventDefault();
      setisRestoreLoading(!isRestoreLoading);
      setInfoWarningType("info");
      setHideInfoWarningMessage("block");
      setInfoWarningMessage("Are you sure you want to restore "+title+" ?"); };
   const handleOnClickPerDelete = (event) => {
    event.preventDefault();
    setisPerDeleteLoading(!isPerDeleteLoading);
    setHideInfoWarningMessage("block");
    setInfoWarningType("warning");
    setInfoWarningMessage("Are you sure you want to delete "+title+" ?");};
    const handleOnClickDeleteAll = (event) => {
        event.preventDefault();
        setHideInfoWarningMessage("block");
        setInfoWarningType("error");
        setInfoWarningMessage("Are you sure you want to empty bin ? Note : You won't be able to restore them");};

    const handleOnclickConfirm = async (event) => {
        const editNote = await DataStore.query(NoteV2, editNoteId);
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newDate = new Date(new Date(reminder).getTime() - timezoneOffset);
        const newReminder = newDate.toISOString();

        switch(infoWarningType){
            case "info":
                await DataStore.save(NoteV2.copyOf(editNote, item => {
                    item.Title = title;
                    item.Description = description;
                    item.Priority = priority;
                    item.Reminder = newReminder;
                    item.Deleted = false;}));
                    navigate('/bin', { state: { alert_success:'block' , title: title , action: "restored !" }});
                    window.location.reload();
            break;
            case "warning":
                await DataStore.delete(editNote);
                navigate('/bin', { state: { alert_success:'block' , title: title , action: "deleted permanently !" }});
                window.location.reload();
            break;
            case "error":
                notes.forEach(item => DataStore.delete(item));
                //await DataStore.delete(editNote);
                navigate('/bin', { state: { alert_success:'block' , title: "Bin" , action: "emptied !" }});
                window.location.reload();
              break;
            default: 
              console.log("default");
              break;}
    };
    const handleOnclickCancel = (event) => {
        setHideInfoWarningMessage("none");
        setisRestoreLoading(false);
        setisPerDeleteLoading(false);
        setInfoWarningType("info");
    };
  
    return (  
        <>
        <div className='binpages' 
          style={{position: 'relative',display: 'inline-block',overflow: "hidden"}}>
         <Bin overrides={{
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
            type: "datetime-local",
            value: reminder,
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
          priority_select_field: {
            value: priority,options:[priority],
            labelHidden: hideNoteLabel,style:{"display": hideNote}},
          restore_button177161771:{ 
            onClick : (event) => (handleOnClickRestore(event)),
            type: "submit",isLoading: isRestoreLoading,
            isDisabled: isRestoreLoading || disableEveryButton,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
          // Delete permanently
          restore_button177161904 :{ 
            onClick : (event) => (handleOnClickPerDelete(event)),
            type: "submit",isLoading: isPerDeleteLoading,
            isDisabled: isRestoreLoading || disableEveryButton,
            style:{"display": hideNote ,"color":"white",textAlign: 'center'}},
          // Delete All button
            create_note_button :{ 
                onClick : (event) => (handleOnClickDeleteAll(event)),
                style:{"display": hideNote,textAlign: 'center'}},
            confirm_cancel_alert:{
             style:{ "display": hideInfoWarningMessage },children: infoWarningMessage,
             variation : infoWarningType
            },
            confirm_button:{
                onClick : (event) => (handleOnclickConfirm(event)),
                style:{"display": hideInfoWarningMessage},
            },
            cancel_button:{
                onClick : (event) => (handleOnclickCancel(event)),
                style:{"display": hideInfoWarningMessage},
            },
          "Badge" : { children: welcome_back_text},
          "SelectField": {
          onChange : (event) => (handleSettings(event)),
          style:{ color: "white"},
          options: [UserSettingsMenu.SignOut,UserSettingsMenu.ChangePassword,UserSettingsMenu.DeleteAccount],},
          success_alert : { style:{ "display": successMessage },children: successDescription}}}/>
    </div><div style={{ position: 'relative' , display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
    <NotetitlebuttonCollection
    style={{position: 'absolute', bottom: 160, right: 180 }}
    overrides={{
      NotetitlebuttonCollection:{
        items: notes,
        isSearchable: false}}}
overrideItems={customOverrideItems}/></div></>);}