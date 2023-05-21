import { useEffect, useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Ticket } from '../models';
import { ProjectClass } from './ProjectClass';

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

    const {
        getProjectID,
        selectedProject,
    } = ProjectClass();
    // Ticket/s
    const [selectedTicket,setSelectedTicket] = useState("");
    const [tickets,setTickets] = useState("");

    // Ticket by statuses
    const [ticketToDo,setTicketToDo] = useState("");
    const [ticketInProgress,setTicketInProgress] = useState("");
    const [ticketInReview,setTicketInReview] = useState("");
    const [ticketDone,setTicketDone] = useState("");
    // Ticket style props
    const ticketInProgressStyleTop = ticketInProgress.length === 0 ? -100 : -35;
    const ticketInReviewStyleTop = ticketInReview.length === 0 ? -195 : -70;
    const ticketDoneStyleTop = ticketDone.length === 0 ? -295 : -105;

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

    const [switchCreateTicketPage,setSwitchCreateTicketPage] = useState(false);
    const [switchEditTicketPage,setSwitchEditTicketPage] = useState(false);

    const location = useLocation();
    const editTicket = location.state ? location.state.selectedTicket : "";
    console.log(editTicket);

    const isTitleEmpty =  /^\s*$/.test(title);
    const navigate = useNavigate();

    // Get tickets by project
    useEffect(() => {
        const dts_query = DataStore.query(Ticket)
        dts_query.then(data => {
            setTickets(data.filter(item => item.projectID === getProjectID));
        }).catch(error => {
        console.error(error);
        });
    },[selectedProject,getProjectID]);
    // Get ticket statuses
    useEffect(() => {
        setTicketToDo(Object.values(tickets).filter(item => item.TicketStatus === 'ToDo'));
        setTicketInProgress(Object.values(tickets).filter(item => item.TicketStatus === 'InProgress'));
        setTicketInReview(Object.values(tickets).filter(item => item.TicketStatus === 'InReview'));
        setTicketDone(Object.values(tickets).filter(item => item.TicketStatus === 'Done'));
    },[tickets]);

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
    };

    const handleCancelEditTicketClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{edited:false}})

    };
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
                    "getProjectID": "",
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
        tickets,
        setTickets,
        ticketToDo,
        ticketInProgress,
        ticketInReview,
        ticketDone,
        ticketInProgressStyleTop,
        ticketInReviewStyleTop,
        ticketDoneStyleTop,
        setSwitchEditTicketPage,
        handleCancelEditTicketClick
    }

}