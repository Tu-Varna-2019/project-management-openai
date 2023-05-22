import { useEffect, useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
import { DataStore , Storage } from 'aws-amplify';
import { Ticket,User } from '../models';
import { ProjectClass } from './ProjectClass';
import { User2Class } from './User2Class';

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
        received_project_name,
    } = ProjectClass();

    const {
        currentUser
    } = User2Class();

    const location = useLocation();
    const navigate = useNavigate();
    // Ticket/s
    const editTicket = location.state ? location.state.selectedTicket : "";
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

    const [ticketID,setTicketID] = useState("");
    const [title,setTitle] = useState(iniTicketValue.Title);
    const [description,setDescription] = useState(iniTicketValue.Description);
    const [comment,setComment] = useState(iniTicketValue.Description);
    const [storyPoint,setStoryPoint] = useState(0);
    const [watch,setWatch] = useState("");

    // Reporter & asignee states
    const [reporter,setReporter] = useState("");
    const [reporterName,setReporterName] = useState("");
    const [reporterImageURL,setReporterImageURL] = useState("");
    const [asignee,setAsignee] = useState("");
    const [asigneeName,setAsigneeName] = useState("");
    const [asigneeImageURL,setAsigneeImageURL] = useState("");

    const [imageTicket,setImageTicket] = useState("");
    const [epicLink,setEpicLink] = useState("");
    const [createdDate,setCreatedDate] = useState(iniTicketValue.TicketDate);
    const [updatedDate,setUpdatedDate] = useState(iniTicketValue.TicketDate);
    const [resolvedDate,setResolvedDate] = useState(iniTicketValue.TicketDate);
    const [issueType,setIssueType] = useState(iniTicketValue.IssueType);
    const [priority,setPriority] = useState(iniTicketValue.Priority);
    const [ticketStatus,setTicketStatus] = useState("ToDo");
    const [isLoading,setIsLoading] = useState(iniErrorValue.isLoading);

    // Watch selected users
    const [watchedUsers,setWatchedUsers] = useState("");
    const [watchedAddMeVariant,setWatchedAddMeVariant] = useState("info");

    //Constant values for issue type and priority
    const isseTypeOptions = ["Bug","UserStory","Feature","Task","Subtask","Epic"];
    const priorityOptions = ["Low","Medium","High","Critical"];
    const statusOptions = ["ToDo","InProgress","InReview","Done"];
    const moreOptions = ["","Move","Clone","Delete"];
    
    // Regex for empty values
    const isTitleEmpty =  /^\s*$/.test(title);
    const watchedCount = watchedUsers.match(/,/g) ? watchedUsers.match(/,/g).length : 0 ;

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
    const handleComment = (event) => {
        event.preventDefault();
        setComment(event.target.value);
    };
    const handlePriority = (event) => {
        event.preventDefault();
        setPriority(event.target.value);
    };
    const handleIssueType = (event) => {
        event.preventDefault();
        setIssueType(event.target.value);
    };
    const handleTicketStatus = (event) => {
        event.preventDefault();
        setTicketStatus(event.target.value);
    };
    const handleStoryPoints = (newValue) => {
        setStoryPoint(newValue);
    };

    const handleAsigneeChange = (event) => {
        event.preventDefault();
        setAsignee(event.target.value);
    }

    const handleMoreOptionsChange = async (event) => {
        event.preventDefault();
        switch(event.target.value){
            // Move
            case moreOptions[1]:
            break;
            // Clone
            case moreOptions[2]:
            break;
            // Delete
            case moreOptions[3]:
                if (window.confirm("Are you sure you want to delete the selected ticket ?")) 
                {
                    const modelToDelete = await DataStore.query(Ticket, editTicket.id);
                    DataStore.delete(modelToDelete);
                }
            break;
            default: 
                console.log("default");
            break;}
    };

       ////////////* Edit ticket //////////////////

     // Goto EditTicket component
    const handleCloseEditTicketClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{edited:false,project: received_project_name}})
    };

    const handleSaveEditTicketClick = (event) => {
        event.preventDefault();
    };

    const handleAssignToMeClick = async (event) => {
        event.preventDefault();

        await Storage.get(
            currentUser.ImageProfile,{
            level:"public"
        }).then(data_url => {
            setAsigneeImageURL(data_url);
            setAsigneeName(currentUser.username);
        })

    };
    // Add user to watch list on ticket change
    const handleAddUserToWatch = (event) => {
        event.preventDefault();
        // if the user has already added himself in watched ,
        // remove him
        if (watchedAddMeVariant === "success") {
            setWatchedUsers(watchedUsers.replace(/[^,]+,$/, ""));
            setWatchedAddMeVariant("info");
        // else if he isn't added , add him    
        } else {
        setWatchedUsers((prevValue) => prevValue + currentUser.username + ",");
        setWatchedAddMeVariant("success");
        }
    };
    console.log(`Watched users: ${watchedUsers}`);
    // Set values of text field from edited tickets
    useEffect(() => {
            async function fetchUserData() {
                try {
                    const story_point_undefined = editTicket.StoryPoint === null ?
                    0 : editTicket.StoryPoint;
                    const update_date_undefined = editTicket.UpdatedDate === null ?
                    "-" : new Date(editTicket.UpdatedDate);
                    const resolve_date_undefined = editTicket.ResolvedDate === null ?
                    "-" : new Date(editTicket.ResolvedDate);

                    setTitle(editTicket.Title);
                    setDescription(editTicket.Description);
                    setComment(editTicket.Comment);
                    setTicketID(editTicket.TicketID);
                    setIssueType(editTicket.IssueType);
                    setPriority(editTicket.Priority);
                    setTicketStatus(editTicket.TicketStatus);
                    setStoryPoint(story_point_undefined);
                    setCreatedDate(new Date(editTicket.CreatedDate));
                    setUpdatedDate(update_date_undefined);
                    setResolvedDate(resolve_date_undefined);
                    setEpicLink(editTicket.EpicLink);
                    setWatchedUsers(editTicket.Watch === null ? "" : editTicket.Watch );
                    // Get reporter & asignee name & image name
                    await DataStore.query(User)
                    .then(data => {
                            data.filter(item => { 
                                if (item.sub === editTicket.Asignee) {
                                    setAsigneeName(item.username);
                                    Storage.get(
                                        item.ImageProfile,{
                                        level:"public"
                                    }).then(data_url => {
                                        setAsigneeImageURL(data_url);
                                        // if the reporter is also the asignee
                                        if (item.sub === editTicket.Reporter){
                                            console.log("Reporter is same as asignee");
                                            setReporterName(item.username);
                                            setReporterImageURL(data_url);}
                                })}else {
                                    if (item.sub === editTicket.Reporter) {
                                        setReporterName(item.username);
                                        Storage.get(
                                            item.ImageProfile,{
                                            level:"public"
                                        }).then(data_url => {
                                            setReporterImageURL(data_url);
                                    })
                                }}
                            })});
                }catch(error){/*do nothing*/}
            }
            fetchUserData();
    },[location.state]);
    
    ////////////* Create ticket //////////////////

    // Goto CreateTicket component
    const handleGoToCreateTicketClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{create:true,project: received_project_name}})
    };
    // Close CreateTicket component
    const handleCloseCreateTicketClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{create:false,project: received_project_name}})
    };

    const handleCreateTicketClick = async  (asignee) => {
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
        handleCreateTicketClick,
        tickets,
        setTickets,
        ticketToDo,
        ticketInProgress,
        ticketInReview,
        ticketDone,
        ticketInProgressStyleTop,
        ticketInReviewStyleTop,
        ticketDoneStyleTop,
        handleCloseEditTicketClick,
        ticketID,
        title,
        description,
        comment,
        issueType,
        priority,
        storyPoint,
        ticketStatus,
        handleDescription,
        handleComment,
        handleGoToCreateTicketClick,
        handleCloseCreateTicketClick,
        handleSaveEditTicketClick,
        handleTicketStatus,
        isTitleEmpty,
        handleTitle,
        asigneeImageURL,
        reporterImageURL,
        asigneeName,
        reporterName,
        createdDate,
        updatedDate,
        resolvedDate,
        handleIssueType,
        handlePriority,
        handleMoreOptionsChange,
        handleStoryPoints,
        handleAddUserToWatch,
        handleAssignToMeClick,
        isseTypeOptions,
        priorityOptions,
        statusOptions,
        moreOptions,
        epicLink,
        watchedCount,
        watchedAddMeVariant
    }

}