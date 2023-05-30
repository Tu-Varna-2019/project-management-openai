import { useEffect, useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
import { DataStore , Storage , API } from 'aws-amplify';
import { Ticket,User } from '../models';
import { ProjectClass } from './ProjectClass';
import { User2Class } from './User2Class';
import { getProjectNameState } from '../states';
import { getDragDropTicketState, setDragDropTicketState } from '../states';

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
    const [getBiggestTicketID,setGetBiggestTicketID] = useState(0);
    const [ticketID,setTicketID] = useState("");
    const [title,setTitle] = useState(iniTicketValue.Title);
    const [description,setDescription] = useState(iniTicketValue.Description);
    const [comment,setComment] = useState(iniTicketValue.Description);
    const [storyPoint,setStoryPoint] = useState(0);
    // Reporter & asignee states
    const [reporter,setReporter] = useState("");
    const [reporterName,setReporterName] = useState("");
    const [reporterImageURL,setReporterImageURL] = useState("");
    const [asignee,setAsignee] = useState("00000000");
    const [asigneeName,setAsigneeName] = useState("Unassigned");
    const [asigneeImageURL,setAsigneeImageURL] = useState("");
    const [peopleAssign,setPeopleAssign] = useState([]);
    const [peopleAssignSub,setPeopleAssignSub] = useState([]);

    const [imageTicket,setImageTicket] = useState("");
    const [epicLink,setEpicLink] = useState("");
    const [epicLinkOptions,setEpicLinkOptions] = useState([]);
    // Dates
    const [createdDate,setCreatedDate] = useState(iniTicketValue.TicketDate);
    const [updatedDate,setUpdatedDate] = useState("-");
    const [resolvedDate,setResolvedDate] = useState("-");

    const [issueType,setIssueType] = useState(iniTicketValue.IssueType);
    const [priority,setPriority] = useState(iniTicketValue.Priority);
    const [ticketStatus,setTicketStatus] = useState("ToDo");
    const [isLoading,setIsLoading] = useState(iniErrorValue.isLoading);
    // Watch selected users
    const [watchedUsers,setWatchedUsers] = useState("");
    const [watchedAddMeVariant,setWatchedAddMeVariant] = useState("info");
    //Constant values for issue type and priority
    const isseTypeOptions = ["Task","UserStory","Feature","Bug","Subtask","Epic"];
    const priorityOptions = ["Low","Medium","High","Critical"];
    const statusOptions = ["ToDo","InProgress","InReview","Done"];
    const moreOptions = ["","Move","Clone","Delete"];
    // Regex for empty values
    const isTitleEmpty =  /^\s*$/.test(title);
    const watchedCount = watchedUsers?.match(/,/g) ? watchedUsers.match(/,/g).length : 0 ;

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
    const handleEpicLinkChange = (event) => {
        event.preventDefault();
        setEpicLink(event.target.value);
    };
    const handleAsigneeChange = async (event) => {
        event.preventDefault();
        const {selectedIndex} = event.target;
        setAsigneeName(event.target.value);
        setAsignee(peopleAssignSub[selectedIndex]);
        await DataStore.query(User)
        .then(data => {
            data.filter(item => { 
                if (item.sub === peopleAssignSub[selectedIndex]) {
                    Storage.get(
                        item.ImageProfile,{
                        level:"public"
                    }).then(data_url => {
                        setAsigneeImageURL(data_url);
                    })}
            return item;})})
    };

    const handleReporterChange = async (event) => {
        event.preventDefault();
        const {selectedIndex} = event.target;
        setReporterName(event.target.value);
        setReporter(peopleAssignSub[selectedIndex]);
        await DataStore.query(User)
        .then(data => {
            data.filter(item => { 
                if (item.sub === peopleAssignSub[selectedIndex]) {
                    Storage.get(
                        item.ImageProfile,{
                        level:"public"
                    }).then(data_url => {
                        setReporterImageURL(data_url);
                    })}
                return item;
                })})
    };

    const handleMoreOptionsChange = async (event) => {
        event.preventDefault();
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newCreatedDate = new Date(new Date(createdDate).getTime() - timezoneOffset);
        const newUpdatedDate = new Date(new Date().getTime() - timezoneOffset);
        const newTicketUpdatedDate = newUpdatedDate.toISOString();
        const newTicketCreatedDate = newCreatedDate.toISOString();
        let resolved_date = null;

        switch(event.target.value){
            // Move
            case moreOptions[1]:
            break;
            // Clone
            case moreOptions[2]:
                if (resolvedDate !== "-") {
                    const newResolvedDate = new Date(new Date(resolvedDate).getTime() - timezoneOffset);
                    resolved_date = newResolvedDate.toISOString();}
                    await DataStore.save(
                        new Ticket({
                            "Title": title,
                            "Description": description,
                            "TicketID": ticketID,
                            "StoryPoint": storyPoint,
                            "Watch": watchedUsers,
                            "Reporter": reporter,
                            "Asignee": asignee,
                            "ImageTicket": imageTicket,
                            "EpicLink": epicLink,
                            "CreatedDate": newTicketCreatedDate,
                            "UpdatedDate": newTicketUpdatedDate,
                            "ResolvedDate": resolved_date,
                            "projectID": getProjectID,
                            "IssueType": issueType,
                            "Priority": priority,
                            "TicketStatus": ticketStatus,
                            "Comment": comment
                        })
                    );
                    navigate('/board', { state: { project: getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully cloned!` }});
                    window.location.reload();
            break;
            // Delete
            case moreOptions[3]:
                if (window.confirm("Are you sure you want to delete the selected ticket ?")) 
                {
                    const modelToDelete = await DataStore.query(Ticket, editTicket.id);
                    DataStore.delete(modelToDelete);
                    navigate('/board', { state: { project: getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully deleted!` }});
                    window.location.reload();
                }
            break;
            default: 
                console.log("default");
            break;}
    };

    const postData = async (event) => {
        const response = await API.post('apiopenai','/sns/notifyticketupdate',
        { body: JSON.stringify({event})});
        console.log(response);
        return response;
    }
       ////////////* Edit ticket //////////////////

     // Goto EditTicket component
    const handleCloseEditTicketClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{edited:false,project: getProjectNameState()}})
    };

    const handleSaveEditTicketClick = async (event) => {
        event.preventDefault();
        setIsLoading(!isLoading);
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newCreatedDate = new Date(new Date(createdDate).getTime() - timezoneOffset);
        const newUpdatedDate = new Date(new Date().getTime() - timezoneOffset);
        const newTicketUpdatedDate = newUpdatedDate.toISOString();
        const newTicketCreatedDate = newCreatedDate.toISOString();
        let formattedDate = null;
        // try to catch if resolved date is eq '-'
        try {
            const date = new Date(resolvedDate);
            formattedDate = date.toISOString();
        } catch(e){/*do nothing*/}
        let resolved_date = formattedDate ;
        // if status is in done state assign current date in resolved
        if ( ticketStatus === "Done") {
            const newResolvedCurrentDate = new Date(new Date().getTime() - timezoneOffset);
            resolved_date = newResolvedCurrentDate.toISOString();}
        try {
            const editTicketDataStore = await DataStore.query(Ticket, editTicket.id);
            await DataStore.save(Ticket.copyOf(editTicketDataStore, item => {
                item.Title = title;
                item.Description = description;
                item.Priority = priority;
                item.TicketID = ticketID;
                item.StoryPoint = storyPoint;
                item.Watch = watchedUsers;
                item.Reporter = reporter;
                item.Asignee = asignee;
                item.ImageTicket = imageTicket;
                item.EpicLink = epicLink;
                item.CreatedDate = newTicketCreatedDate;
                item.UpdatedDate = newTicketUpdatedDate;
                item.ResolvedDate = resolved_date;
                item.projectID = getProjectID.toString();
                item.IssueType = issueType;
                item.TicketStatus = ticketStatus;
                item.Comment = comment;
            }));
            // check onto which Ticket props have been changed 
            let changed_props = "";
            if (title !== editTicket.Ticket)
                changed_props += `Title: ${editTicket.Ticket} --> ${title} \n`
            if (description !== editTicket.Description)
                changed_props += `Description: ${editTicket.Description} --> ${description} \n`
            if (priority !== editTicket.Priority)
                changed_props += `Priority: ${editTicket.Priority} --> ${priority} \n`
            if (storyPoint !== editTicket.StoryPoint)
                changed_props += `StoryPoint: ${editTicket.StoryPoint} --> ${storyPoint} \n`
            if (reporter !== editTicket.Reporter) {
                let editTicketReporterName = "";
                const dts_query = DataStore.query(User)
                dts_query.then(data => {
                    data.filter(item => { 
                        if (item.sub === editTicket.Reporter ) 
                            editTicketReporterName = item.username ; return item;})
                }).catch(error => {
                console.error(error);});
                changed_props += `Reporter: ${editTicketReporterName} --> ${reporterName} \n`
            }
            if (asignee !== editTicket.Asignee) {
                let editTicketAsigneeName = "";
                const dts_query = DataStore.query(User)
                dts_query.then(data => {
                    data.filter(item => { 
                        if (item.sub === editTicket.Asignee ) 
                        editTicketAsigneeName = item.username ; return item;})
                }).catch(error => {
                console.error(error);});
            changed_props += `Asignee: ${editTicketAsigneeName} --> ${asigneeName} \n`
            }
            if (epicLink !== editTicket.EpicLink)
                changed_props += `Epic Link: ${editTicket.EpicLink} --> ${epicLink} \n`
            if (ticketStatus !== editTicket.TicketStatus)
                changed_props += `TicketStatus: ${editTicket.TicketStatus} --> ${ticketStatus} \n`
            if (comment !== editTicket.Comment)
                changed_props += `${editTicket.Comment} --> ${comment} \n`

            let notify_update_ticket_response = "";
            if ( watchedUsers !== "" || asigneeName !== "Unassigned") {
                const concatenateWatchUserWithAsignee = !watchedUsers.includes(asigneeName+",") ? watchedUsers + asigneeName+"," : watchedUsers==="" ? asigneeName+"," : "" ;
                const newTicket = {
                    Title : title,
                    Description : description,
                    Priority : priority,
                    TicketID : ticketID,
                    StoryPoint : storyPoint,
                    Reporter : reporterName,
                    Asignee : asigneeName,
                    Watch: concatenateWatchUserWithAsignee,
                    EpicLink : epicLink,
                    CreatedDate : newTicketCreatedDate,
                    UpdatedDate : newTicketUpdatedDate,
                    ResolvedDate : resolved_date,
                    IssueType : issueType,
                    TicketStatus : ticketStatus,
                    Comment : comment,
                };
                notify_update_ticket_response = await postData({
                    Changes: changed_props,
                    newTicket
                });
            }
            navigate('/board', { state: { project:getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully edited : \n ${notify_update_ticket_response}` }});
            window.location.reload();
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
    }};

    const handleAssignToMeClick = async (event) => {
        event.preventDefault();
        await Storage.get(
            currentUser.ImageProfile,{
            level:"public"
        }).then(data_url => {
            setAsigneeImageURL(data_url);
            setAsigneeName(currentUser.username);})
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
        setWatchedAddMeVariant("success");}
    };
    // Set epic link options , based if user is in edit ticket state
    useEffect(() => {
        setEpicLinkOptions(["",...new Set(Object.values(tickets).map(obj => obj?.EpicLink)
        .filter(epicLink => epicLink !== null))] );
    },[epicLink,setEpicLink,tickets,setTickets,setEpicLinkOptions]);

    // Get asignees&reporters
        useEffect(() => {
            const dts_query = DataStore.query(User)
            dts_query.then(data => {
                data.filter(item => { 
                    if (item.sub !== "00000000" ) {
                        setPeopleAssign(prevList => [...prevList, item.username]);
                        setPeopleAssignSub(prevList => [...prevList, item.sub]);}
                    return item;})
                    setPeopleAssign(prevList => ["Unassigned", ...prevList]);
                    setPeopleAssignSub(prevList => ["00000000", ...prevList]);
            }).catch(error => {console.error(error);});
        },[]); // once defined for a purpose !

    // Set values of text field from edited tickets
    useEffect(() => {
            async function fetchUserData() {
                try {
                    setTitle(editTicket.Title);
                    setDescription(editTicket.Description);
                    setComment(editTicket.Comment);
                    setTicketID(editTicket.TicketID);
                    setIssueType(editTicket.IssueType);
                    setPriority(editTicket.Priority);
                    setTicketStatus(editTicket.TicketStatus);
                    setReporter(editTicket.Reporter);
                    setAsignee(editTicket.Asignee);
                    setStoryPoint(editTicket.StoryPoint === null ? 0 : editTicket.StoryPoint);
                    setCreatedDate(new Date(editTicket.CreatedDate));
                    setUpdatedDate(editTicket.UpdatedDate === null ? "-" : new Date(editTicket.UpdatedDate));
                    setResolvedDate(editTicket.ResolvedDate === null ? "-" : new Date(editTicket.ResolvedDate));
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
                                        setReporterImageURL(data_url);})}}
                                return item;
                            })});}catch(error){/*do nothing*/}}
            fetchUserData();
    },[location.state,editTicket]);
    ////////////* Create ticket //////////////////

        // Get the largest ticket ID by project
        useEffect(() => {
            async function fetchUserData() {
                await DataStore.query(Ticket)
                .then(data => {
                    data.filter(item => {
                        if( item.projectID ===  getProjectID 
                            && getBiggestTicketID < +item.TicketID) {
                            setGetBiggestTicketID(item.TicketID+1);
                        } return item;})})
            }
            fetchUserData();
        },[getBiggestTicketID,getProjectID]);

    // Goto CreateTicket component
    const handleGoToCreateTicketClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{create:true,project: getProjectNameState()}})
    };
    // Close CreateTicket component
    const handleCloseCreateTicketClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{create:false,project: getProjectNameState()}})
    };

    const handleCreateTicketClick = async  (event) => {
        event.preventDefault();
        setIsLoading(!isLoading);
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newCreatedDate = new Date(new Date().getTime() - timezoneOffset);
        const newTicketCreatedDate = newCreatedDate.toISOString();
        try {
            await DataStore.save(
                new Ticket({
                    "Title": title,
                    "Description": description,
                    "TicketID": getBiggestTicketID,
                    "StoryPoint": storyPoint,
                    "Watch": watchedUsers,
                    "Reporter": currentUser.sub,
                    "Asignee": asignee,
                    //"ImageTicket": imageTicket,
                    "EpicLink": epicLink,
                    "CreatedDate": newTicketCreatedDate,
                    "projectID": getProjectID,
                    "IssueType": issueType,
                    "Priority": priority,
                    "TicketStatus": "ToDo"}));

                    // If ticket has been assigned to user , notify !
                    let notify_create_ticket_response = "";
                    if (asigneeName !== "Unassigned") {
                        const newTicket = {
                            Title : title,
                            Description : description,
                            Priority : priority,
                            TicketID : ticketID,
                            StoryPoint : storyPoint,
                            Reporter : currentUser.username,
                            Watch: asigneeName+",",
                            Asignee : asigneeName,
                            EpicLink : epicLink,
                            CreatedDate : newTicketCreatedDate,
                            UpdatedDate : "-",
                            ResolvedDate : "-",
                            IssueType : issueType,
                            TicketStatus : "ToDo",
                            Comment : "None",
                            Project: received_project_name,
                        };
                        notify_create_ticket_response = await postData({
                            Changes: `New ticket has been assigned to you ${asigneeName}`,
                            newTicket
                        });}
           navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully created! : ${notify_create_ticket_response}` }});
           window.location.reload();
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
            window.location.reload();
    }};

    const handleHoldMoveTicket = (ticketid) => {
        setDragDropTicketState(ticketid);
    };

    const handleReleaseMoveTicket = async (draggedTicketID,boardStatus) => {
        setDragDropTicketState("");
        if (draggedTicketID !== "") {
            const editTicketDataStore = await DataStore.query(Ticket, draggedTicketID);
            if (editTicketDataStore.TicketStatus !== boardStatus) {
                        await DataStore.save(Ticket.copyOf(editTicketDataStore, item_edit_status => {
                             item_edit_status.TicketStatus = boardStatus;
                        }));
            navigate('/board', { state: { project:getProjectNameState(),
                alert_show:'block' ,
                alert_variant: "success",
                alert_description: `KAI-${editTicketDataStore.TicketID} has been successfully moved to ${boardStatus}`}});
            window.location.reload();}}
    };

    return {
        handleCreateTicketClick,
        tickets,
        setTickets,
        handleHoldMoveTicket,
        handleReleaseMoveTicket,
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
        watchedAddMeVariant,
        epicLinkOptions,
        watchedUsers,
        handleEpicLinkChange,
        isLoading,
        peopleAssign,
        handleAsigneeChange,
        handleReporterChange,
        getBiggestTicketID
    }}