import { useEffect, useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom';
import { DataStore , Storage , API } from 'aws-amplify';
import { Ticket,User , Activity } from '../models';
import { ProjectClass } from './ProjectClass';
import { User2Class } from './User2Class';
import { getDragDropTicketState, getProjectNameState,setDragDropTicketState } from '../states';

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
    } = ProjectClass();
    const {
        currentUser
    } = User2Class();

    const location = useLocation();
    const navigate = useNavigate();
    // Ticket/s
    const editTicket = location.state ? location.state.selectedTicket : "";
    const [subtasks,setSubtasks] = useState([]);
    const [tickets,setTickets] = useState("");
    // Ticket by statuses
    const [ticketToDo,setTicketToDo] = useState("");
    const [ticketInProgress,setTicketInProgress] = useState("");
    const [ticketInReview,setTicketInReview] = useState("");
    const [ticketDone,setTicketDone] = useState("");
    // Ticket style props
    const [getBiggestTicketID,setGetBiggestTicketID] = useState(0);
    const [ticketID,setTicketID] = useState(0);
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
    const [attachmentUrls,setAttachmentUrls] = useState([]);
    const [attachmentName,setAttachmentName] = useState([]);
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

    const [ticketTaskIDs,setTicketTaskIDs] = useState([""]);
    const [selectedTaskID,setSelectedTaskID] = useState("");
    const [deletedTaskID,setDeletedTaskID] = useState([]);
    //Constant values for issue type and priority
    const isseTypeOptions = ["Task","UserStory","Feature","Bug","Subtask","Epic"];
    const [priorityOptions,setPriorityOptions] = useState(["Low","Medium","High","Critical"]);
    const statusOptions = ["ToDo","InProgress","InReview","Done"];
    const moreOptions = ["","Move","Clone","Delete"];
    // Regex for empty values
    const isTitleEmpty =  /^\s*$/.test(title);
    const watchedCount = watchedUsers?.match(/,/g) ? watchedUsers.match(/,/g).length : 0 ;

    const ticketStatusColorVariant = ticketStatus === "ToDo" ? "error" : 
    ticketStatus === "InProgress" ? "warning" : 
    ticketStatus === "InReview" ? "info" : "success" ;

    // Get tickets by project
    useEffect(() => {
        async function fetchUserData() {
            await DataStore.query(Ticket)
            .then(data => {
                setTickets(data.filter(item => item.projectID === getProjectID));
            }).catch(error => {
            console.error(error);});}
        fetchUserData();},[getProjectID]);
    // Get ticket statuses
    useEffect(() => {
        setTicketToDo(Object.values(tickets).filter(item => item.TicketStatus === 'ToDo'));
        setTicketInProgress(Object.values(tickets).filter(item => item.TicketStatus === 'InProgress'));
        setTicketInReview(Object.values(tickets).filter(item => item.TicketStatus === 'InReview'));
        setTicketDone(Object.values(tickets).filter(item => item.TicketStatus === 'Done'));
    },[tickets]);
    // Set epic link options , based if user is in edit ticket state
    useEffect(() => {
        setEpicLinkOptions(["",...new Set(Object.values(tickets).map(obj => obj?.EpicLink)
        .filter(epicLink => epicLink !== null))] );
    },[epicLink,setEpicLink,tickets,setTickets,setEpicLinkOptions]);
    // Get asignees&reporters
    useEffect(() => {
        async function fetchUser() {
        await DataStore.query(User)
        .then(data => {
            data.filter(item => { 
                if (item.sub !== "00000000" ) {
                    setPeopleAssign(prevList => [...new Set([...prevList, item.username])]);
                    setPeopleAssignSub(prevList => [...new Set([...prevList, item.sub])]);}
                return item;})
                setPeopleAssign(prevList => ["Unassigned", ...prevList]);
                setPeopleAssignSub(prevList => ["00000000", ...prevList]);
        }).catch(error => {console.error(error);});}
        fetchUser();
    },[]); // once defined for a purpose !
    // Set values of text field from edited tickets
    useEffect(() => {
        async function fetchUserData() {
            if (editTicket !== ""){
            try{
                setAttachmentUrls([]);
                setAttachmentName([]);
                setSubtasks(editTicket.Subtasks);
                setTitle(editTicket.Title);
                setDescription(editTicket.Description);
                setComment(editTicket.Comment);
                setImageTicket(editTicket.ImageTicket === null ? "" : editTicket.ImageTicket);
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
                        level:"protected"
                    }).then(data_url => {
                        setAsigneeImageURL(data_url);
                        // if the reporter is also the asignee
                        if (item.sub === editTicket.Reporter){
                            setReporterName(item.username);
                            setReporterImageURL(data_url);}
                })}else {
                    if (item.sub === editTicket.Reporter) {
                        setReporterName(item.username);
                        Storage.get(
                            item.ImageProfile,{
                            level:"protected"
                        }).then(data_url => {
                            setReporterImageURL(data_url);})}}
                    return item;})});}catch(err){/*do nothing */}}}
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
                    } return item;})})}
        fetchUserData();
    },[getBiggestTicketID,getProjectID]);
    // Get all urls by image names , seperated by ,
    useEffect(() => {
        if (imageTicket !== "" && attachmentName.length === 0) {
        const imageNames = imageTicket.split(",");
        const newDataUrls = [];
        const newAttachmentNames = [];
        imageNames.map(async (iter) => {
            await Storage.get(iter, { 
                level: 'protected',
            }).then(data_url => {
                newDataUrls.push(data_url);
                newAttachmentNames.push(iter);
        })})
        setAttachmentUrls(newDataUrls);
        setAttachmentName(newAttachmentNames);}
    },[imageTicket,setImageTicket,location.state,attachmentName.length]);

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
        // check if task ids is empty without empty str
        if (ticketTaskIDs.some(item => item.trim() !== "") ) {
            const selectedIndex = priorityOptions.indexOf(event.target.value);
            setSelectedTaskID(ticketTaskIDs[selectedIndex]);  
        } else setPriority(event.target.value);};

    const handleIssueType = async (event) => {
        event.preventDefault();
        const newTaskOption = [];
        const newTaskIDs = [];
        const issueTypeTaskSub = event.target.value === "Task" ?
        "Subtask" : "Task";
        // Check if issue type is either task or subtask
        switch(event.target.value) {
            case "Task":
            case "Subtask":
                await DataStore.query(Ticket)
                .then(data => {
                    data.filter(item => {
                        if( item.IssueType === issueTypeTaskSub 
                            && (!subtasks || !subtasks.includes(item.id)) ) {
                            newTaskOption.push(item.Title);
                            newTaskIDs.push(item.id);
                        } return item;})});
                setPriority("Medium");
                newTaskIDs.unshift("");
                newTaskOption.unshift("");
                setTicketTaskIDs(newTaskIDs);
                setPriorityOptions(newTaskOption);
                break;
            default:
                setPriorityOptions(["Low","Medium","High","Critical"]);
                break;}
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
                        level:"protected"
                    }).then(data_url => {
                        setAsigneeImageURL(data_url);})}
            return item;})})};

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
                        level:"protected"
                    }).then(data_url => {
                        setReporterImageURL(data_url);})}
                return item;})})};
    const handleSafeTicketImageChange = async (event) => {
        await Storage.put(
            event, 
            'Protected Content', {
            level: 'protected'});
        setImageTicket((prevValue) => {
        const parts = prevValue.split(',');
            if (parts.length <= 10) {
                return prevValue + event + ",";
            } else {
                window.alert("Error image max count 10!");
                return prevValue;}})};
            
    const handleDeleteImageChange = async (index) => {
        const deletedImageName = attachmentName[index];
        if (deletedImageName !== "" && deletedImageName !== undefined) {
            if(window.confirm(`Are you sure you want to remove: ${deletedImageName} ?`)) {
                await Storage.remove(deletedImageName, { level: 'protected' });
                setImageTicket(imageTicket.replace(deletedImageName+",", ""));
                setAttachmentUrls([]);
                setAttachmentName([]);
                const editTicketDataStore = await DataStore.query(Ticket, editTicket.id);
                await DataStore.save(Ticket.copyOf(editTicketDataStore, item => {
                    item.ImageTicket = imageTicket.replace(deletedImageName+",", "")}))
            window.alert(`${deletedImageName} deleted!`);}}
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
                            "Comment": comment}));
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
            default: console.log("default");break;}};

    const postData = async (event) => {
        const response = await API.post('apiopenai','/sns/notifyticketupdate',
        { body: JSON.stringify({event})});
        console.log(response);
        return response;}

     // Goto EditTicket component
    const handleCloseEditTicketClick = (event) => {
        navigate("/board",{state:{edited:false,project: getProjectNameState()}})};

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
    // Save state of editing ticket
    try {
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
            if (subtasks!== null) {
            if (selectedTaskID.trim() !== "")
                item.Subtasks = [...subtasks, selectedTaskID];
            else 
                item.Subtasks = [...subtasks];}
        }));

        await DataStore.save(
            new Activity({
                "ModifiedDate": newTicketUpdatedDate,
                "UserID": currentUser.id,
                "TicketID": editTicket.id,
                "Changes": changed_props
            }));
        // Check if subtask is Task or Subtask to also update the linked ticket
        // ADD
        if (selectedTaskID.trim() !== "") {
            const editParentChildTaskDataStore = await DataStore.query(Ticket, selectedTaskID);
            await DataStore.save(Ticket.copyOf(editParentChildTaskDataStore, item => {
                if (item.Subtasks === null) 
                    item.Subtasks = [editTicket.id];
                    else {
                    const uniqueSubtasks = new Set([...item.Subtasks,editTicket.id]);
                    item.Subtasks = [...uniqueSubtasks];}}));
        }
        // DELETE
        if (deletedTaskID.length > 0 ) {
        deletedTaskID.map(async (deleted_id) => {
            const editParentChildTaskDataStore = await DataStore.query(Ticket, deleted_id);
            await DataStore.save(Ticket.copyOf(editParentChildTaskDataStore, item => {
                if (item.Subtasks !== null) 
                    item.Subtasks = item.Subtasks.filter(subs => subs !== editTicket.id);
            }));
        })}
        
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
                Comment : comment};
            try {
            notify_update_ticket_response = await postData({
                Changes: changed_props,
                newTicket});
            }catch(err){notify_update_ticket_response="Unable to send message , sorry for the inconvinience!";}
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
            level:"protected"
        }).then(data_url => {
            setAsigneeImageURL(data_url);
            setAsigneeName(currentUser.username);})};
    // Add user to watch list on ticket change
    const handleAddUserToWatch = (event) => {
        event.preventDefault();
        // if the user has already added himself in watched ,remove him
        if (watchedAddMeVariant === "success") {
            setWatchedUsers(watchedUsers.replace(/[^,]+,$/, ""));
            setWatchedAddMeVariant("info");
        // else if he isn't added , add him    
        } else {
        setWatchedUsers((prevValue) => prevValue + currentUser.username + ",");
        setWatchedAddMeVariant("success");}
    };
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
                            Project: getProjectNameState(),};
                        notify_create_ticket_response = await postData({
                            Changes: `New ticket has been assigned to you ${asigneeName}`,
                            newTicket});}
           navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully created! : ${notify_create_ticket_response}` }});
           window.location.reload();
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
            window.location.reload();}};

    const handleHoldMoveTicket = (ticketid) => {
        setDragDropTicketState(ticketid);};

    const handleReleaseMoveTicket = async (draggedTicketID,boardStatus) => {
        const getEditedTicketID = getDragDropTicketState();
        setDragDropTicketState("");
        if (draggedTicketID !== "") {
            const editTicketDataStore = await DataStore.query(Ticket, draggedTicketID);
            if (editTicketDataStore.TicketStatus !== boardStatus) {
                const timezoneOffset = new Date().getTimezoneOffset() * 60000;
                const newUpdatedDate = new Date(new Date().getTime() - timezoneOffset);
                const newTicketUpdatedDate = newUpdatedDate.toISOString();
                let ticketStatusDone = null;
                // check if ticket is moved in done board
                if (boardStatus === "Done") {
                    const newResolvedCurrentDate = new Date(new Date().getTime() - timezoneOffset);
                    ticketStatusDone = newResolvedCurrentDate.toISOString();}

                await DataStore.save(
                    new Activity({
                        "ModifiedDate": newTicketUpdatedDate,
                        "UserID": currentUser.id,
                        "TicketID": getEditedTicketID,
                        "Changes": `TicketStatus: ${ticketStatus} --> ${boardStatus} \n`
                    }));
                
                await DataStore.save(Ticket.copyOf(editTicketDataStore,item_edit_status => {
                        item_edit_status.TicketStatus = boardStatus;
                        item_edit_status.UpdatedDate = newTicketUpdatedDate;
                        item_edit_status.ResolvedDate = ticketStatusDone;
                    }));
            navigate('/board', { state: { project:getProjectNameState(),
                alert_show:'block' ,
                alert_variant: "success",
                alert_description: `KAI-${editTicketDataStore.TicketID} has been successfully moved to ${boardStatus}`}});
            window.location.reload();}}};

    return {
        subtasks,
        setSubtasks,
        attachmentUrls,
        handleCreateTicketClick,
        handleDeleteImageChange,
        tickets,
        setTickets,
        handleHoldMoveTicket,
        handleReleaseMoveTicket,
        ticketToDo,
        ticketInProgress,
        ticketInReview,
        ticketDone,
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
        handleSafeTicketImageChange,
        getBiggestTicketID,
        ticketStatusColorVariant,
        setSelectedTaskID,
        selectedTaskID,
        deletedTaskID,
        setDeletedTaskID
    }}