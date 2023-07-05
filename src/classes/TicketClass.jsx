import { useContext, useEffect, useState } from 'react'
import { DataStore , Storage , API, Auth } from 'aws-amplify';
import { Ticket,User , Activity, PI, Sprint, Project } from '../models';
import { getDragDropTicketState, getNotificationCountState, getNotificationsState, getProjectNameState,setDragDropTicketState, setNotificationCountState, setNotificationsState } from '../states';
import { ProjectContext } from '../contexts/ProjectContext';
import { PISprintContext } from '../contexts/PISprintContext';
import { UserContext } from '../contexts/UserContext';


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
        navigate,
        location,
        getProjectID,
    } = useContext(ProjectContext);
    const {
        currentUser,
    } = useContext(UserContext);
    const {
        sprintID,
        PIID,
        setPIID,
        setPINum,
    } = useContext(PISprintContext);

    // Ticket/s
    const editTicket = location.state ? location.state.selectedTicket : "";
    
    const backlogTicketBoolean = location.state ? location.state.edited_bg : false;
    const editTicketBoolean = location.state ? location.state.edited : false;
    const createTicketBoolean = location.state ? location.state.create : false;
    const createIssueTemplateBoolean = location.state ? location.state.create_it : false;
    const editIssueTemplateBoolean = location.state ? location.state.edited_it : false;

    const [subtasks,setSubtasks] = useState([]);
    const [tickets,setTickets] = useState([]);
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
    const moreOptions = ["","Clone","Delete"];
    // Regex for empty values
    const isTitleEmpty =  /^\s*$/.test(title);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const watchedCount = watchedUsers?.match(/,/g) ? watchedUsers.match(/,/g).length : 0 ;
    const ticketStatusColorVariant = ticketStatus === "ToDo" ? "error" : 
    ticketStatus === "InProgress" ? "warning" : 
    ticketStatus === "InReview" ? "info" : "success" ;

    const [notifications,setNotifications] = useState([""]);
    const [notificationCount,setNotificationCount] = useState(0);

    // PI Sprint for backlog page
    const [sprint1,setSprint1] = useState([]);
    const [sprint2,setSprint2] = useState([]);
    const [sprint3,setSprint3] = useState([]);
    const [sprint4,setSprint4] = useState([]);

    useEffect(() => {
        async function fetchPISprints() {
            setSprint1([]);
            setSprint2([]);
            setSprint3([]);
            setSprint4([]);
            try {
            await DataStore.query(PI,PIID).then(PIObj => {
                PIObj.Sprints.values.then(sprintsArray => {
                    sprintsArray.forEach( async item => {
                    await DataStore.query(Sprint,item.id)
                    .then(sprintIter => {
                    const ticketArr = [];
                    sprintIter.Tickets.values.then(TicketsArray => {
                        TicketsArray.forEach( async itemT => {
                            await DataStore.query(Ticket,itemT.id)
                            .then(TicketsIter => {
                            ticketArr.push(TicketsIter);
                            switch (sprintIter.Number) {
                                case 1:
                                    setSprint1(ticketArr);
                                    break;
                                case 2:
                                    setSprint2(ticketArr);
                                    break;
                                case 3:
                                    setSprint3(ticketArr);
                                    break;
                                case 4:
                                    setSprint4(ticketArr);
                                    break;
                                    default:
                                        break;}})})})})})})
                                    });}catch(err){/* */}
                                }
        fetchPISprints();
    },[PIID,setPIID,setPINum]);

    useEffect(() => {
        if (getNotificationCountState() !== null 
            && getNotificationsState() !== null) {
        const splitNotifSelectField = getNotificationsState().split(",");
        setNotifications(splitNotifSelectField);
        setNotificationCount(getNotificationCountState());
            }},[]);
    // Get tickets by sprint
    useEffect(() => {
        async function fetchUserData() {
            await DataStore.query(Ticket)
            .then(data => {
                setTickets(data.filter(item => item.sprintID === sprintID));
            }).catch(error => {console.error(error);});}
        fetchUserData();},[sprintID]);

    // Get ticket statuses
    useEffect(() => {
        setTicketToDo(Object.values(tickets).filter(item => item.TicketStatus === 'ToDo'));
        setTicketInProgress(Object.values(tickets).filter(item => item.TicketStatus === 'InProgress'));
        setTicketInReview(Object.values(tickets).filter(item => item.TicketStatus === 'InReview'));
        setTicketDone(Object.values(tickets).filter(item => item.TicketStatus === 'Done'));
    },[tickets]);

    // Set epic link options , based if user is in edit ticket state
    useEffect(() => {
        setEpicLinkOptions(["",Object.keys(tickets)
        .filter(key => tickets[key].IssueType === 'Epic')
        .map(key => `KAI-${tickets[key].TicketID}: ${tickets[key].Title}`)]);
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
                setDeletedTaskID([]);
                setSubtasks(editTicket.Subtasks);
                setTitle(editTicket.Title);
                setDescription(editTicket.Description === null ? "": editTicket.Description);
                setComment(editTicket.Comment === null ? "": editTicket.Comment);
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
                        "shared/"+item.ImageProfile,{
                        level:"public"
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
                            "shared/"+item.ImageProfile,{
                            level:"public"
                        }).then(data_url => {
                            setReporterImageURL(data_url);})}}
                    return item;})});}catch(err){/*do nothing */}}}
        fetchUserData();
    },[location.state,editTicket]);

    // Get the largest ticket ID by project
    useEffect(() => {
        async function fetchUserData() {
            await DataStore.query(Ticket)
            .then(data => {
                data.filter(item => {
                if( item.sprintID === sprintID
                    && getBiggestTicketID <= +item.TicketID) {
                    setGetBiggestTicketID(item.TicketID+1);
                    } return item;})})}
        fetchUserData();
    },[getBiggestTicketID,sprintID]);
    // Get all urls by image names , seperated by ,
    useEffect(() => {
        if (imageTicket !== "" && attachmentName.length === 0) {
        const imageNames = imageTicket.split(",");
        const newDataUrls = [];
        const newAttachmentNames = [];
        imageNames.map(async (iter) => {
            const credentials = await Auth.currentCredentials();
            await Storage.vault.get("shared/"+iter, { 
                level: 'public',
                identityId: credentials.identityId
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
        setIssueType(event.target.value);
        const newTaskOption = [];
        const newTaskIDs = [];
        const isEditedTicketID = editTicket === undefined ? "" : editTicket.id;
        const issueTypeTaskSub = event.target.value === "Task" ?
        "Subtask" : "Task";
        // Check if issue type is either task or subtask
        switch(event.target.value) {
            case "Task":
            case "Subtask":
                try {
                    const data_ticket = await DataStore.query(Ticket);
                    for (const item_ticket of data_ticket) {
                      const data_sprints = await DataStore.query(Sprint, item_ticket.sprintID);
                        const data_PI = await DataStore.query(PI, data_sprints.piID);
                        if (data_PI !== undefined && data_PI.projectID === getProjectID) {
                          if (item_ticket.IssueType === issueTypeTaskSub 
                            && item_ticket.id !== isEditedTicketID
                            && (!subtasks || !subtasks.includes(item_ticket.id))) {
                            newTaskOption.push(item_ticket.Title);
                            newTaskIDs.push(item_ticket.id);
                          }
                        }}
                  } catch (error) {
                    console.error("An error occurred:", error);
                  }
                  setPriority("Medium");
                  newTaskIDs.unshift("");
                  newTaskOption.unshift("");
                  setTicketTaskIDs(newTaskIDs);
                  setPriorityOptions(newTaskOption);
                break;
            default:
                setPriorityOptions(["Low","Medium","High","Critical"]);
                break;}
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
                        "shared/"+item.ImageProfile,{
                        level:"public"
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
                        "shared/"+item.ImageProfile,{
                        level:"public"
                    }).then(data_url => {
                        setReporterImageURL(data_url);})}
                return item;})})};

    const handleSafeTicketImageChange = async ({ file }) => {
        const fileExtension = file.name.split('.').pop();
        return file
          .arrayBuffer()
          .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer))
          .then((hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map((a) => a.toString(16).padStart(2, '0')).join('');
            let randomString = Math.random().toString(36).substring(2, 15);
            setImageTicket((prevValue) => {
              const parts = prevValue.split(',');
              if (parts.length <= 10) {
                return prevValue + `${hashHex}${randomString}.${fileExtension},`;
              } else 
                window.alert("Error image max count 10!");});
            return { file, key: `${hashHex}${randomString}.${fileExtension}` };});
    }
        
    const handleDeleteImageChange = async (index) => {
        const deletedImageName = attachmentName[index];
        if (deletedImageName !== "" && deletedImageName !== undefined) {
            if(window.confirm(`Are you sure you want to remove the selected image ?`)) {
                await Storage.remove("shared/"+deletedImageName, { level: 'public' });
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
            // Clone
            case moreOptions[1]:
                if (resolvedDate !== "-") {
                    const newResolvedDate = new Date(new Date(resolvedDate).getTime() - timezoneOffset);
                    resolved_date = newResolvedDate.toISOString();}
                    await DataStore.save(
                        new Ticket({
                            "Title": title,
                            "Description": description,
                            "TicketID": getBiggestTicketID,
                            "StoryPoint": storyPoint,
                            "Watch": watchedUsers,
                            "Reporter": reporter,
                            "Asignee": asignee,
                            "ImageTicket": imageTicket,
                            "EpicLink": epicLink,
                            "CreatedDate": newTicketCreatedDate,
                            "UpdatedDate": newTicketUpdatedDate,
                            "ResolvedDate": resolved_date,
                            "IssueType": issueType,
                            "Priority": priority,
                            "TicketStatus": ticketStatus,
                            "Comment": comment,
                            "sprintID": sprintID,
                            "Subtasks": subtasks,
                        }));
                    navigate(location.pathname, { state: { project: getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully cloned!` }});
                    window.location.reload();
            break;
            // Delete
            case moreOptions[2]:
                if (window.confirm("Are you sure you want to delete the selected ticket ?")) 
                {
                    const modelToDelete = await DataStore.query(Ticket, editTicket.id);
                    DataStore.delete(modelToDelete);
                    navigate(location.pathname, { state: { project: getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully deleted!` }});
                    window.location.reload();
                }
            break;
            default: console.log("default");break;}};

    const postData = async (event) => {
        const response = await API.post('apiopenai','/sns/notifyticketupdate',
        { body: JSON.stringify({event})});
        //console.log(response);
        return response;}

     // Goto EditTicket component
    const handleCloseEditTicketClick = (event) => {
        navigate(location.pathname,{state:{edited:false,project: getProjectNameState()}})
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
        formattedDate = date.toISOString();} catch(e){/*do nothing*/}
    let resolved_date = formattedDate ;
    // if status is in done state assign current date in resolved
    if ( ticketStatus === "Done") {
        const newResolvedCurrentDate = new Date(new Date().getTime() - timezoneOffset);
        resolved_date = newResolvedCurrentDate.toISOString();}
    // Save state of editing ticket
    try {
        // check onto which Ticket props have been changed 
        let changed_props = "";
        if (title !== editTicket.Ticket && editTicket.Ticket !== undefined)
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
                }).catch(error => {console.error(error);});
                changed_props += `Reporter: ${editTicketReporterName} --> ${reporterName} \n`
            }
            if (asignee !== editTicket.Asignee) {
                let editTicketAsigneeName = "";
                const dts_query = DataStore.query(User)
                dts_query.then(data => {
                    data.filter(item => { 
                        if (item.sub === editTicket.Asignee ) 
                        editTicketAsigneeName = item.username ; return item;})
                }).catch(error => {console.error(error);});
            changed_props += `Asignee: ${editTicketAsigneeName} --> ${asigneeName} \n`
            }
        if (epicLink !== editTicket.EpicLink)
            changed_props += `Epic Link: ${editTicket.EpicLink} --> ${epicLink} \n`
        if (ticketStatus !== editTicket.TicketStatus)
            changed_props += `TicketStatus: ${editTicket.TicketStatus} --> ${ticketStatus} \n`
        if (comment !== editTicket.Comment)
            changed_props += `${editTicket.Comment} --> ${comment} \n`

        const editTicketDataStore = await DataStore.query(Ticket, editTicket.id);
        // Check if subtask is Task is empty
        const checkEditTicketSubs = editTicket.Subtasks !== null ? editTicket.Subtasks : [];
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
            item.IssueType = issueType;
            item.TicketStatus = ticketStatus;
            item.Comment = comment;
            // Add
            if (selectedTaskID.trim() !== "" )
            item.Subtasks = [...checkEditTicketSubs,selectedTaskID];
            // Remove
            if (deletedTaskID.length > 0 ) {
                let deletedSet = new Set(deletedTaskID);
                item.Subtasks = item.Subtasks.filter(subs => !deletedSet.has(subs));}
        }));
        // Check if subtask is Task or Subtask to also update the linked ticket
        // ADD
        if (selectedTaskID.trim() !== "") {
            const editParentChildTaskDataStore = await DataStore.query(Ticket, selectedTaskID);
            // Include task/subtask into activity if added or deleted
            changed_props +=`Linked ${editParentChildTaskDataStore.IssueType} --> ${editParentChildTaskDataStore.Title}`;

            const checkEditTicketSubs = editParentChildTaskDataStore.Subtasks !== null ?
             editParentChildTaskDataStore.Subtasks : [];
            await DataStore.save(Ticket.copyOf(editParentChildTaskDataStore, item => {
                item.Subtasks = [...checkEditTicketSubs,editTicket.id];}))
        }
        // DELETE
        if (deletedTaskID.length > 0 ) {
            const editParentTaskDataStore = await DataStore.query(Ticket, editTicket.id);

                deletedTaskID.map(async (deleted_id) => {
                  changed_props += `Unlinked ${editParentTaskDataStore.IssueType} --> ${editParentTaskDataStore.Title}\n`;
              
                  const ticketToModify = await DataStore.query(Ticket, deleted_id);
                  // Delete Linked Task/Subtask
                  await DataStore.save(
                    Ticket.copyOf(ticketToModify, item_link => {
                        if (item_link.Subtasks !== null)
                        item_link.Subtasks = item_link.Subtasks.filter(subs => subs !== editTicket.id);
                    }));
                
                })}
            if (changed_props !== ""){
            await DataStore.save(
                new Activity({
                    "ModifiedDate": newTicketUpdatedDate,
                    "UserID": currentUser.id,
                    "TicketID": editTicket.id,
                    "Changes": changed_props
                }));}
        
        let notify_update_ticket_response = "";
        if ( watchedUsers !== "" || asigneeName !== "Unassigned") {
            const concatenateWatchUserWithAsignee = !watchedUsers.includes(asigneeName+",") && isEmailValid.test(asigneeName) ? watchedUsers + asigneeName+"," : watchedUsers==="" ? asigneeName+"," : "" ;
            const newTicket = {
                Title : title,
                Description : description,
                Priority : priority,
                TicketID : ticketID,
                StoryPoint : storyPoint,
                Reporter : isEmailValid.test(reporterName) ? reporterName 
                : "" ,
                Asignee : isEmailValid.test(asigneeName) ? asigneeName 
                : "" ,
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
        navigate(location.pathname, { state: { project:getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully edited : \n ${notify_update_ticket_response} ` }});
       window.location.reload();
    } catch (error) {
        setIsLoading(false);
        console.log(error);
       navigate(location.pathname, { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
    }};

    const handleAssignToMeClick = async (event) => {
        event.preventDefault();
        await Storage.get(
            "shared/"+currentUser.ImageProfile,{
            level:"public"
        }).then(data_url => {
            setAsignee(peopleAssignSub[peopleAssign.indexOf(currentUser.username)]);
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
        navigate(location.pathname,{state:{create:true,project: getProjectNameState(),selectedUserID:currentUser.id}})
    };
    // Close CreateTicket component
    const handleCloseCreateTicketClick = (event) => {
        event.preventDefault();
        navigate(location.pathname,{state:{create:false,project: getProjectNameState(),selectedUserID:currentUser.id}})
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
                    "Comment": comment,
                    "TicketID": getBiggestTicketID,
                    "StoryPoint": storyPoint,
                    "Watch": watchedUsers,
                    "Reporter": currentUser.sub,
                    "Asignee": asignee,
                    "EpicLink": epicLink,
                    "ImageTicket": imageTicket,
                    "CreatedDate": newTicketCreatedDate,
                    "IssueType": issueType,
                    "Priority": priority,
                    "TicketStatus": "ToDo",
                    "sprintID": sprintID,
                    //"Subtasks": subtasks,
                }));
                    // If ticket has been assigned to user , notify !
                    let notify_create_ticket_response = "";
                    if (asigneeName !== "Unassigned") {
                        const newTicket = {
                            Title : title,
                            Description : description,
                            Priority : priority,
                            TicketID : ticketID,
                            StoryPoint : storyPoint,
                            Reporter : isEmailValid.test(currentUser.username) ? currentUser.username 
                            : "" ,
                            Watch: isEmailValid.test(asigneeName) ? asigneeName+"," : "",
                            Asignee : isEmailValid.test(asigneeName)  ? asigneeName 
                            : "" ,
                            EpicLink : epicLink,
                            CreatedDate : newTicketCreatedDate,
                            UpdatedDate : "-",
                            ResolvedDate : "-",
                            IssueType : issueType,
                            TicketStatus : "ToDo",
                            Comment : "None",
                            Project: getProjectNameState(),
                        };
                        notify_create_ticket_response = await postData({
                            Changes: `New ticket has been assigned to you ${asigneeName}`,
                            newTicket});}
           navigate(location.pathname, { state: { project:  getProjectNameState(),selectedUserID:currentUser.id, alert_show:'block' , alert_variant: "success", alert_description: `${title} has been successfully created! : ${notify_create_ticket_response}` }});
           window.location.reload();
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            navigate(location.pathname, { state: { project:  getProjectNameState(),selectedUserID:currentUser.id, alert_show:'block' , alert_variant: "error", alert_description: `App is not supported in this browser's private mode! Please enable cookies! ${error}`}});
            window.location.reload();}};

    const handleHoldMoveTicket = (ticketid) => {
        setDragDropTicketState(ticketid);};

    const handleReleaseMoveTicket = async (draggedTicketID,boardStatus) => {
        const getEditedTicketID = getDragDropTicketState() || "";
        setDragDropTicketState("");
        if (draggedTicketID !== "" && getEditedTicketID !== "" && currentUser.id !== undefined) {
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

                const isNotifStateNull = getNotificationsState() === null ? "" : getNotificationsState() ;
                setNotificationsState(`${isNotifStateNull},${currentUser.username} : ${editTicketDataStore.Title} : ${ticketStatus} --> ${boardStatus}`);

                setNotificationCountState(+getNotificationCountState() + 1);

                await DataStore.save(Ticket.copyOf(editTicketDataStore,item_edit_status => {
                        item_edit_status.TicketStatus = boardStatus;
                        item_edit_status.UpdatedDate = newTicketUpdatedDate;
                        item_edit_status.ResolvedDate = ticketStatusDone;
                    }));
            navigate(location.pathname, { state: { project:getProjectNameState(),
                alert_show:'block' ,
                alert_variant: "success",
                alert_description: `KAI-${editTicketDataStore.TicketID} has been successfully moved to ${boardStatus}`}});
            window.location.reload();
        }}};

    const handleResetNotificationClick = (event) => {
        setNotifications([""]);
        setNotificationsState("");
        setNotificationCount(0);
        setNotificationCountState(0);
    }

    return {
        backlogTicketBoolean,
        editIssueTemplateBoolean,
        createIssueTemplateBoolean,
        createTicketBoolean,
        editTicketBoolean,
        editTicket,
        sprint1,
        sprint2,
        sprint3,
        sprint4,
        handleResetNotificationClick,
        setImageTicket,
        notifications,
        notificationCount,
        setTitle,
        setTicketStatus,
        setWatchedUsers,
        setWatchedAddMeVariant,
        setDescription,
        setComment,
        setPriority,
        setStoryPoint,
        setIssueType,
        subtasks,
        setEpicLink,
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