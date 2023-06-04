import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { getProjectNameState } from '../states';
import { User2Class } from "./User2Class";
import { DataStore } from "aws-amplify";
import { Ticket } from "../models";
import { useState } from "react";

export function ToolbarSelectClass() {
    const {
        currentUser,
    } = User2Class();
    const navigate = useNavigate();
    const [assignedToMe,setAssignedToMe] = useState(["","assigned to me","boards"]);

    const handleProjectsSelectChange = (event) => {
        switch(event.target.value){
            case "switch project":
                if (window.confirm("Are you sure you want to switch to different project"
                +"we will redirect you to different page?")) 
                    navigate('/'); 
            break;
            default: 
                console.log("default");
            break;}};

    const handleYourWorkSelectChange = async (event) => {
        switch(event.target.value){
            case "assigned to me":
                setAssignedToMe(["","<- back"]);
                await DataStore.query(Ticket)
                .then(data => {
                    data.filter(item => {
                        if (item.Asignee === currentUser.sub ) 
                            setAssignedToMe(prevList => [...prevList,`KAI-${item.TicketID} : ${item.Title}`]);
                            return item;
                    })});
            break;
            case "boards":
                navigate('/board',{ state: { project: getProjectNameState() }});
            break;
            case "<- back":
                setAssignedToMe(["","assigned to me","boards"]);
            break;
            default:
                if (event.target.value.startsWith('KAI')) {
                    const regex = /KAI-(\d+)/;
                    const match = event.target.value.match(regex);
                    const getTicketID = match ? match[1] : null;
                    await DataStore.query(Ticket)
                    .then(data => {
                        data.filter(item => {
                            if( item.TicketID ===  parseInt(getTicketID))
                                navigate("/edit-ticket",{state:{selectedTicket:item,project: getProjectNameState()}});
                                return item;
                            })});}
                else
                    console.log("default");
            break;}};

    const handleTeamsSelectChange = (event) => {
        switch(event.target.value){
            case "switch project":
                if (window.confirm("Are you sure you want to switch to different project"
                +"we will redirect you to different page?")) 
                    navigate('/'); 
            break;
            default: 
            console.log("default");
            break;}};

    const handleProfileSelectChange = (event) => {
        switch(event.target.value){
            case "Manage account":
                navigate('/profile'); 
            break;
            case "Log out":
                if (window.confirm("Are you sure you want to sign out ?")) 
                Auth.signOut().then(() => {
                    navigate('/');})
            break;
            default: 
            console.log("default");
            break;}};

    return {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        assignedToMe}}