import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export function ReminderClass() {

    const RemValues = {
        Reminder_state : "pending",
        Divider_state: "5px",
        SuccessMessage: "none",
        SuccessDesc: ""
    };
    const [reminderState,setReminderState] = useState(RemValues.Reminder_state);
    const [dividerState,setDividerState] = useState(RemValues.Divider_state);
    const [successRemMessage,setSuccessRemMessage] = useState(RemValues.SuccessMessage);
    const [successRemDescription,setSuccessRemDescription] = useState(RemValues.SuccessDesc);
    const navigate = useNavigate();

    const handleOnClickPending = (event) => {
        navigate('/reminder', { state: { reminder_state: "pending" , alert_success:'none' , title:"",action:"", divider_state: "5px"}});
        window.location.reload();
     };
    const handleOnClickPassed = (event) => {
        navigate('/reminder', { state: { reminder_state: "passed" , alert_success:'none' , title:"",action:"",  divider_state: "250px"}});
        window.location.reload();
     };

    return {
        reminderState,
        setReminderState,
        dividerState,
        setDividerState,
        handleOnClickPending,
        handleOnClickPassed,
        successRemDescription,
        setSuccessRemMessage,
        successRemMessage,
        setSuccessRemDescription
    }
}