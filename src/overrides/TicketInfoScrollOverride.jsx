import { TicketClass } from '../classes/TicketClass';

export function TicketInfoScrollFunc () {

    const {
        issueType,
        priority,
        storyPoint,
        ticketStatus,
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
        handleStoryPoints,
        handleAssignToMeClick,
        handleEpicLinkChange,
        isseTypeOptions,
        priorityOptions,
        statusOptions,
        epicLinkOptions,
        peopleAssign,
        handleAsigneeChange,
        handleReporterChange,
        ticketStatusColorVariant,
    } = TicketClass();

    const TicketInfoScrollOverride={
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
        },
        "Rectangle 1":{
            style:{overflow: 'auto',maxHeight: '500px'}
        }
    }

    return {
        TicketInfoScrollOverride,
    }}