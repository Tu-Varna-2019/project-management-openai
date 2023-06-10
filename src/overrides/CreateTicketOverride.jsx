import React from 'react';
import { TicketContext } from '../contexts/TicketContext';

export function CreateTicketFunc (props) {

    const {
        title,
        description,
        issueType,
        priority,
        storyPoint,
        handleDescription,
        isTitleEmpty,
        handleTitle,
        asigneeImageURL,
        epicLink,
        handleIssueType,
        handlePriority,
        handleStoryPoints,
        handleAddUserToWatch,
        handleEpicLinkChange,
        isseTypeOptions,
        priorityOptions,
        watchedCount,
        watchedAddMeVariant,
        epicLinkOptions,
        isLoading,
        peopleAssign,
        getBiggestTicketID,
        handleAsigneeChange,
        handleCreateTicketClick,
        handleCloseCreateTicketClick,
    } = React.useContext(TicketContext);
    
    const CreateTicketOverride = {
        create_ticket_text:{
            children: "Create ticket KAI-"+getBiggestTicketID
        },
        story_point_stepper_field:{
            onStepChange : (newValue) => (handleStoryPoints(newValue)),
            min:1,
            max:50,
            step:1,
            value: storyPoint,
        },
        issue_type_select_field:{
            onChange : (event) => (handleIssueType(event)),
            options: isseTypeOptions,
        },
        issue_type_image: {
            src: require(`../images/${issueType}.jpeg`)
        },
        priority_select_field:{
            onChange : (event) => (handlePriority(event)),
            options: priorityOptions,
        },
        priority_image: {
            src: require(`../images/${priority}.jpeg`)
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
        watch_image:{
            onClick: (event) => (handleAddUserToWatch(event)),
        },
        watch_badge:{
            children: watchedCount,
            variation: watchedAddMeVariant
        },
        asignee_select_field:{
            onChange : (event) => (handleAsigneeChange(event)),
            options: peopleAssign,
        },
        asignee_icon_image:{
            src: asigneeImageURL,
            top: asigneeImageURL === "" ? "-1000px":"784px",
        },
        epic_link_select_field:{
            onChange : (event) => (handleEpicLinkChange(event)),
            style:{color:"transparent", border:"none"},
            options: epicLinkOptions
        },
        epic_link_badge:{
            children: epicLink,
        },
        create_button:{
            onClick : (event) => (handleCreateTicketClick(event)),
            isDisabled: isTitleEmpty,
            isLoading: isLoading
            },
            cancel_button:{
                onClick: (event) => (handleCloseCreateTicketClick(event))},
    }


    return {
        CreateTicketOverride
    }
}