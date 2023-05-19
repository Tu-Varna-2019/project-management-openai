import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { useLocation,useNavigate } from 'react-router-dom';
import { API,DataStore } from 'aws-amplify';
import { Ticket } from '../models';

const iniTicketValue = {
    Title: "",
    Description: "",
    Priority: "Low",
    TicketDate: new Date(),
    IssueType: "Task",
};    
const iniErrorValue = {
    isLoading: false,
};


export function TicketClass(props) {
    // Ticket/s
    const [selectedTicket,setSelectedTicket] = useState("");
    const [tickets,setTickets] = useState("");

    const [title,setTitle] = useState(iniTicketValue.Title);
    const [description,setDescription] = useState(iniTicketValue.Description);
    const [comment,setComment] = useState(iniTicketValue.Description);
    const [storyPoint,setStoryPoint] = useState(0);
    const [watch,setWatch] = useState("");
    const [reporter,setReporter] = useState("");
    const [asignee,setAsignee] = useState("");
    const [imageTicket,setImageTicket] = useState("");
    const [epicLink,setEpicLink] = useState("");
    const [createdDate,setCreatedDate] = useState(iniTicketValue.TicketDate);
    const [updatedDate,setUpdatedDate] = useState(iniTicketValue.TicketDate);
    const [resolvedDate,setResolvedDate] = useState(iniTicketValue.TicketDate);
    const [issueType,setIssueType] = useState(iniTicketValue.IssueType);
    const [priority,setPriority] = useState(iniTicketValue.Priority);
    const [ticketStatus,setTicketStatus] = useState("ToDo");
    const [isLoading,setIsLoading] = useState(iniErrorValue.isLoading);

    const issueTypesArray = ["Task","Bug","UserStory","Subtask","Feature","Epic"];
    const [switchCreateTicketPage,setSwitchCreateTicketPage] = useState(false);
    const [switchEditTicketPage,setSwitchEditTicketPage] = useState(false);

    const isTitleEmpty =  /^\s*$/.test(title);
    const navigate = useNavigate();

    const handleTitle = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
    };
    const handleDescription = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
    };
    const handlePriority = (event) => {
        event.preventDefault();
        setPriority(event.target.value);
    };
    const handleIssueType = (event) => {
        event.preventDefault();
        setIssueType(event.target.value);
    };

    const handleCreatedDate = (event) => {
        event.preventDefault();
        setCreatedDate(event.target.value);
    };
    const handleUpdatedDate = (event) => {
        event.preventDefault();
        setUpdatedDate(event.target.value);
    };
    const handleResolvedDate = (event) => {
        event.preventDefault();
        setResolvedDate(event.target.value);
    };

    // Goto CreateTicket component
    const handleCreateTicketClick = (event) => {
        event.preventDefault();
        setSwitchCreateTicketPage(!switchCreateTicketPage);
        console.log(switchCreateTicketPage);
    }
    const handleAsigneeChange = (event) => {
        event.preventDefault();
        setAsignee(event.target.value);
    }

    ////////////////////////* List all tickets on board /////////////////////

    const handleSelectedTicket = (event) => {
        console.log(`Selected ticket: ${event.Title} `);
        setSelectedTicket(event);
    }


    ////////////* Create ticket //////////////////

    const handleOnClickConfirm = async  (asignee) => {
        setIsLoading(!isLoading);

        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newDate = new Date(new Date().getTime() - timezoneOffset);
        const newTicketDate = newDate.toISOString();
        try {
            await DataStore.save(
                new Ticket({
                    "Title": title,
                    "Description": description,
                    "Comment": "Lorem ipsum dolor sit amet",
                    "StoryPoint": 1,
                    "Watch": "",
                    "Reporter": "Lorem ipsum dolor sit amet",
                    "Asignee": asignee,
                    "EpicLink": "",
                    "CreatedDate": newTicketDate,
                    "projectID": "",
                    "userID": "",
                    "IssueType": issueType,
                    "Priority": priority,
                    "TicketStatus": ticketStatus
                })
            );
            navigate('/board', { state: { alert_success:'block' , title: title , action: "created !" } });
        } catch (error) {
            setIsLoading(false);
            // setErrorNoteMessage("block");
            // setErrorNoteDescription("App is not supported in this browser's private mode! Please enable cookies!");
    }};



    return {
        handleSelectedTicket,
        switchCreateTicketPage,
        switchEditTicketPage,
        handleCreateTicketClick,
        setSwitchCreateTicketPage,
        issueTypesArray,
        tickets,
        setTickets,
    }

}