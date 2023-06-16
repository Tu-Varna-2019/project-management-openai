import React, { useContext } from 'react';
import { TicketContext } from '../contexts/TicketContext';
import { UserContext } from '../contexts/UserContext';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { PISprintContext } from '../contexts/PISprintContext';

export function ToolbarFunc (props) {

    const {
        handleGoToCreateTicketClick,
        notificationCount,
        notifications,
        handleResetNotificationClick,
    } = React.useContext(TicketContext);

    const {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        handleIssueTemplateSelectChange,
        assignedToMe,
        allUsers,
    } = React.useContext(ToolbarSelectContext);

    const {
        userProfileURL,
        alertVariant,
        alertVisibility,
        alertDescription,
        currentUser,
        setAlertVisibility,
    } = useContext(UserContext);

    const {
        sprintID,
    } = useContext(PISprintContext);

    const ToolbarOverride={
        profile_icon_image:{
            src: userProfileURL
        },
        success_alert : { 
            style:{"display": alertVisibility },
            children: alertDescription,
            variant: alertVariant,
            onDismiss : (event) => (setAlertVisibility("none")),
        },
        notify_count_badge:{
            children: notificationCount
        },
        notify_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleResetNotificationClick(event)),
            options:notifications
        },
        projects_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleProjectsSelectChange(event)),
            options:["","switch project"],
        },
        your_work_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleYourWorkSelectChange(event)),
            options: assignedToMe ,
        },
        issue_templates_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleIssueTemplateSelectChange(event)),
            options:["","create one","project templates"],
        },
        profile_select_field: {
            style:{color:"transparent"},
            onChange : (event) => (handleProfileSelectChange(event)),
            options:["",currentUser.username,"Manage account","Log out"],
        },
        teams_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleTeamsSelectChange(event)),
            options:allUsers,
        },
        create_ticket_button:{
            onClick: (event) => (handleGoToCreateTicketClick(event)),
            isDisabled: sprintID === 0
        },
        }

    return {
        ToolbarOverride
    }}