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
        handleDeleteImageChange,
        attachmentUrls,
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
        attachment_1:{
            src: attachmentUrls[0],
            onClick: (event) => (handleDeleteImageChange(0)),
            alt: attachmentUrls[0] === undefined ? " " : ""
        },
        attachment_2:{
            src: attachmentUrls[1],
            onClick: (event) => (handleDeleteImageChange(1)),
            alt: attachmentUrls[1] === undefined ? " " : ""
        },
        attachment_3:{
            src: attachmentUrls[2],
            onClick: (event) => (handleDeleteImageChange(2)),
            alt: attachmentUrls[2] === undefined ? " " : ""
        },
        attachment_4:{
            src: attachmentUrls[3],
            onClick: (event) => (handleDeleteImageChange(3)),
            alt: attachmentUrls[3] === undefined ? " " : ""
        },
        attachment_5:{
            src: attachmentUrls[4],
            onClick: (event) => (handleDeleteImageChange(4)),
            alt: attachmentUrls[4] === undefined ? " " : ""
        },
        attachment_6:{
            src: attachmentUrls[5],
            onClick: (event) => (handleDeleteImageChange(5)),
            alt: attachmentUrls[5] === undefined ? " " : ""
        },
        attachment_7:{
            src: attachmentUrls[6],
            onClick: (event) => (handleDeleteImageChange(6)),
            alt: attachmentUrls[6] === undefined ? " " : ""
        },
        attachment_8:{
            src: attachmentUrls[7],
            onClick: (event) => (handleDeleteImageChange(7)),
            alt: attachmentUrls[7] === undefined ? " " : ""
        },
        attachment_9:{
            src: attachmentUrls[8],
            onClick: (event) => (handleDeleteImageChange(8)),
            alt: attachmentUrls[8] === undefined ? " " : ""
        },
        attachment_10:{
            src: attachmentUrls[9],
            onClick: (event) => (handleDeleteImageChange(9)),
            alt: attachmentUrls[9] === undefined ? " " : ""
        },
        "Rectangle 1":{
            style:{overflow: 'auto',maxHeight: '500px'}
        }
    }

    return {
        TicketInfoScrollOverride,
    }}