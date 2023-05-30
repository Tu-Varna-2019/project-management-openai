import { TicketClass } from '../classes/TicketClass';
import { ProjectClass } from '../classes/ProjectClass';


export function EditTicketFunc (props) {

    const {
        ticketID,
        title,
        description,
        issueType,
        priority,
        comment,
        storyPoint,
        ticketStatus,
        handleDescription,
        handleComment,
        handleCloseEditTicketClick,
        handleSaveEditTicketClick,
        isTitleEmpty,
        handleTitle,
        asigneeImageURL,
        reporterImageURL,
        asigneeName,
        reporterName,
        createdDate,
        updatedDate,
        resolvedDate,
        epicLink,
        handleIssueType,
        handlePriority,
        handleTicketStatus,
        handleMoreOptionsChange,
        handleStoryPoints,
        handleAddUserToWatch,
        handleAssignToMeClick,
        handleEpicLinkChange,
        isseTypeOptions,
        priorityOptions,
        statusOptions,
        moreOptions,
        watchedCount,
        watchedAddMeVariant,
        epicLinkOptions,
        isLoading,
        peopleAssign,
        handleAsigneeChange,
        handleReporterChange
    } = TicketClass();

    const {
        received_project_name,
        imageProjectURL,
    } = ProjectClass();

    const ticketStatusColorVariant = ticketStatus === "ToDo" ? "error" : 
        ticketStatus === "InProgress" ? "warning" : 
        ticketStatus === "InReview" ? "info" : "success" ;

    const EditTicketOverride={
        project_name_text:{
            children: received_project_name
        },
        ticket_id_text: {
            children: "KAI-"+ticketID
        },
        title_text_field:{
            isRequired: true,
            hasError: isTitleEmpty,
            value: title,
            errorMessage: "Title must not be empty!",
            onChange: (event) => (handleTitle(event)),
        },
        description_text_field:{
            value: description,
            onChange: (event) => (handleDescription(event)),
        },
        comments_text_field:{
            value: comment,
            onChange: (event) => (handleComment(event)),
        },
        project_image_name:{
            src: imageProjectURL
        },
        asignee_name_text:{
            children: asigneeName
        },
        asignee_icon_image:{
            src: asigneeImageURL
        },
        reporter_name_text:{
            children: reporterName
        },
        reporter_icon_image:{
            src:reporterImageURL
        },
        issue_type_image: {
            src: require(`../images/${issueType}.jpeg`)
        },
        priority_image: {
            src: require(`../images/${priority}.jpeg`)
        },
        issue_type_select_field:{
            onChange : (event) => (handleIssueType(event)),
            options: isseTypeOptions,
        },
        priority_select_field:{
            onChange : (event) => (handlePriority(event)),
            options: priorityOptions,
        },
        cancel_button:{
            onClick: (event) => (handleCloseEditTicketClick(event)),
        },
        create_button:{
            onClick: (event) => (handleSaveEditTicketClick(event)),
            isLoading: isLoading
        },
        status_badge:{
            children: ticketStatus,
            variation: ticketStatusColorVariant, 
        },
        status_select_field:{
            onChange : (event) => (handleTicketStatus(event)),
            style:{color:"transparent" , border:"none"},
            options: statusOptions
        },
        epic_link_badge:{
            children: epicLink,
        },
        epic_link_select_field:{
            onChange : (event) => (handleEpicLinkChange(event)),
            style:{color:"transparent",border:"none"},
            options: epicLinkOptions
        },
        story_point_stepper_field:{
            onStepChange : (newValue) => (handleStoryPoints(newValue)),
            min:1,
            max:50,
            step:1,
            value: storyPoint,
        },
        created_date_text: {
            children: new Date(createdDate).toISOString().slice(0, 16).replace('T', ' ')
        },
        updated_date_text: {
            children:  updatedDate === "-" ? "-" : updatedDate.toISOString().slice(0, 16).replace('T', ' ')
        },
        resolved_date_text: {
            children: resolvedDate === "-" ? "-" : resolvedDate.toISOString().slice(0, 16).replace('T', ' ')
        },
        more_options_select_field:{
            onChange : (event) => (handleMoreOptionsChange(event)),
            options: moreOptions
        },
        watch_image:{
            onClick: (event) => (handleAddUserToWatch(event)),
        },
        watch_badge:{
            children: watchedCount,
            variation: watchedAddMeVariant
        },
        assign_to_me_button:{
            onClick: (event) => (handleAssignToMeClick(event)),
        },
        asignee_select_field:{
            onChange : (event) => (handleAsigneeChange(event)),
            style:{color:"transparent", border:"none"},
            options: peopleAssign
        },
        reporter_select_field:{
            onChange : (event) => (handleReporterChange(event)),
            style:{color:"transparent", border:"none"},
            options: peopleAssign
        }
    }   

    return {
        EditTicketOverride
    }
}