import React,{ useEffect, useState } from "react"
import { DataStore,Storage } from "aws-amplify";
import { Activity, Ticket, User } from "../models";
import { UserContext } from "../contexts/UserContext";

export function ActivityClass(props) {
    const {
        selectedUserID,
        location,
    } = React.useContext(UserContext);

    const [activity,setActivity] = useState([]);
    const [activityTicket,setActivityTicket] = useState([]);
    const [activityPriorityImage,setActivityPriorityImage] = useState([]);
    const [activityissueType,setActivityissueType] = useState([]);
    const [activityTicketID,setActivityTicketID] = useState([]);
    const [activityUser,setActivityUser] = useState({
        Name: "",ImageURL: ""});
    const [clearActivityBtnLoading,setClearActivityBtnLoading] = useState(false);

    useEffect(() => {
        const newActivity = [];
        async function fetchUserData() {
            const activities = await DataStore.query(Activity);
            for (let activityIter of activities) {
                if (activityIter.UserID === selectedUserID) {
                if (activityUser.Name === "") {
                    const user = await DataStore.query(User, activityIter.UserID);
                    await Storage.get(user.ImageProfile, { 
                        level: 'protected'
                    }).then( url => {
                        setActivityUser(prevState => ({
                            ...prevState,
                            Name : user.username,
                            ImageURL: url,}));})}
                        
                    const tickets = await DataStore.query(Ticket, activityIter.TicketID);
                    setActivityPriorityImage(
                        prevState => ([...prevState,tickets.Priority,]));
                        setActivityTicketID(
                            prevState => ([...prevState,tickets.TicketID,]));
                        setActivityissueType(
                            prevState => ([...prevState,tickets.IssueType,]));
                        setActivityTicket(
                            prevState => ([...prevState,tickets,]));
                    newActivity.push(activityIter);
                }
            } setActivity(newActivity);
        }fetchUserData();
    }, [location.state, activityUser, selectedUserID]);
    
    const handleClearActivityClick = async (event) => {
        setClearActivityBtnLoading(!clearActivityBtnLoading);
        if (activity.length > 0) {
            if (window.confirm(`Are you sure you want to delete your activity?`)) {
                for (let activityIter of activity) {
                    const modelToDelete = await DataStore.query(Activity, activityIter.id);
                    DataStore.delete(modelToDelete);}}}
        setClearActivityBtnLoading(false);
    }


    return {
        activityUser,
        activity,
        activityPriorityImage,
        activityTicketID,
        activityissueType,
        activityTicket,
        handleClearActivityClick,
        clearActivityBtnLoading
    }}