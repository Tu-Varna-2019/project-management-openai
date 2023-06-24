import { useContext, useEffect } from "react";
import { TicketInfoScrollFunc } from "./TicketInfoScrollOverride"
import { IssueTemplateContext } from "../contexts/IssueTemplateContext";
import { EditTicketFunc } from './EditTicketOverride';
import { TicketContext } from "../contexts/TicketContext";
import { ProjectContext } from "../contexts/ProjectContext";


export function CreateTicketScrollFunc(props) {
    const {
        ITNames,
        handleSelectITChange,
    } = useContext(IssueTemplateContext);

    const {
        setTitle,
        setDescription,
        setComment,
        setStoryPoint,
        setImageTicket,
        setEpicLink,
        setIssueType,
        setPriority,
        setTicketStatus,
        setWatchedUsers,
        setWatchedAddMeVariant,
        setSubtasks,
    } = useContext(TicketContext);

    const {
        location
    } = useContext(ProjectContext);
    
   const {TicketInfoScrollOverride} = TicketInfoScrollFunc();
   const {EditTicketOverride} = EditTicketFunc();
   const {title_text_field,description_text_field,comments_text_field,watch_image,watch_badge} = EditTicketOverride;

   useEffect(() => {
    const createTicketClearField = location.state ? location.state.create : false;
    if (createTicketClearField) {
        setTitle("");
        setDescription("");
        setComment("");
        setImageTicket("");
        setStoryPoint(0);
        setEpicLink("");
        setIssueType("Task");
        setPriority("Low");
        setWatchedUsers("");
        setWatchedAddMeVariant("info");
        setSubtasks([]);
    }
   },[location.state,setComment,setDescription,setImageTicket,setEpicLink,
    setIssueType,setPriority,setStoryPoint,setTicketStatus,setTitle,
    setWatchedAddMeVariant,setWatchedUsers,setSubtasks,]);
   
    const CreateTicketScrollOverride = {
        issue_template_select_field:{
            options: ITNames,
            onChange: (event) => (handleSelectITChange(event))
        },
        title_text_field,
        description_text_field,
        comments_text_field,
        watch_image,
        watch_badge,
        ...TicketInfoScrollOverride,
    }

    return {
        CreateTicketScrollOverride
    }}