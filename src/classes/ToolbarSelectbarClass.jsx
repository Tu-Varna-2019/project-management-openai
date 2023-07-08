import { Auth } from "aws-amplify";
import { getProjectNameState, setPINumState, setSprintNumState } from '../states';
import { DataStore } from "aws-amplify";
import { Ticket } from "../models";
import React,{ useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ProjectContext } from "../contexts/ProjectContext";
import { TicketContext } from "../contexts/TicketContext";
import fuzzysearch from 'fuzzysearch';
import { PISprintContext } from "../contexts/PISprintContext";
import Swal from "sweetalert2";

export function ToolbarSelectClass() {
    const {
        currentUser,
        userIDName,
    } = React.useContext(UserContext);
    const {
        navigate,
        location,
    } = useContext(ProjectContext);
    const {
        tickets,
    } = useContext(TicketContext);
    
    const [assignedToMe,setAssignedToMe] = useState(["","assigned to me","boards"]);
    const [allUsers,setAllUsers] = useState(["","all users"]);
    const [searchTicket,setSearchTicket] = useState("");
    const [matchedTickets,setMatchedTickets] = useState([]);
    const showSearchRect = matchedTickets.length === 0;

    const handleProjectsSelectChange = (event) => {
        switch(event.target.value){
            case "switch project":
            Swal.fire({
                title: 'Are you sure?',
                text: "Are you sure you want to switch to different project? We will redirect you to different page?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
                }).then((result) => {
                if (result.isConfirmed) {

                setPINumState(0);
                setSprintNumState(0);
                navigate('/');
            }})
            break;
            case "edit project":
            Swal.fire({
                title: 'Are you sure?',
                text: "Are you sure you want to switch to different project? We will redirect you to different page?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
                }).then((result) => {
                if (result.isConfirmed) {

                setPINumState(0);
                setSprintNumState(0);
                navigate('/edit-project');
            }})
            break;
            default:
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
                    })});break;
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
                            navigate("/edit-ticket",
                            {state:{selectedTicket:item,project: getProjectNameState()}});
                            return item;
                        })});}
            break;}};

    const handleIssueTemplateSelectChange = (event) => {
        switch(event.target.value){
            case "create one":
                navigate(location.pathname,{state:{create_it:true,project: getProjectNameState(),selectedUserID:currentUser.id}})
                break;
            case "project templates":
                navigate(location.pathname,{state:{edited_it:true,project: getProjectNameState(),selectedUserID:currentUser.id}})
                break;
            default:
                break;
        }
    };

    const handleTeamsSelectChange = (event) => {
        switch(event.target.value){
            case "all users":
                setAllUsers(["","<- back"]);
                userIDName.map(item =>{
                if (item.name)
                    setAllUsers(prevList => [...prevList,item.name]);});
            break;
            case "<- back":
                setAllUsers(["","all users"]);
                break;
            default:
            if (event.target.value.includes('@')) {
                Swal.showLoading();
                const selectedUserID = userIDName[event.target.selectedIndex-2].id;
                setTimeout(() => {
                navigate('/profile', { 
                    state: { selectedUserID: selectedUserID ,
                             selectedUserName: event.target.value }});
                window.location.reload();
            }, 1200);
                }
            break;}};

    const handleProfileSelectChange = (event) => {
        switch(event.target.value){
            case "Manage account":
                Swal.showLoading()
                setTimeout(() => {
                navigate('/profile');
                window.location.reload();
            }, 1200);
            break;
            case "Log out":
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Are you sure you want to sign out ?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                  }).then((result) => {
                    if (result.isConfirmed) {
 
                Auth.signOut().then(() => {
                    navigate('/');})
                }})
            break;
            default: 
            break;}};

    const handleClearSearchTicket = (event) => {
        setSearchTicket("");
    };

const handleSearchTicketChange = (event) => {
    setSearchTicket(event.target.value);
};

useEffect(() => {
    if (searchTicket === "")
       setMatchedTickets([]);
    else {
    const typed_value = searchTicket;
    const newResults = tickets.filter(item =>
        fuzzysearch(typed_value.toLowerCase(), item.Title.toLowerCase())
    );
    setMatchedTickets(newResults);}
},[tickets,searchTicket,setSearchTicket])

    return {
        showSearchRect,
        handleClearSearchTicket,
        handleSearchTicketChange,
        matchedTickets,
        searchTicket,
        allUsers,
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        handleIssueTemplateSelectChange,
        assignedToMe}}