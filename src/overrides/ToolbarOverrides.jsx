import React, { useContext } from 'react';
import { TicketContext } from '../contexts/TicketContext';
import { UserContext } from '../contexts/UserContext';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { PISprintContext } from '../contexts/PISprintContext';
import { ProjectContext } from '../contexts/ProjectContext';
import { getProjectNameState } from '../states';

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
        searchTicket,
        handleClearSearchTicket,
        handleSearchTicketChange,
        matchedTickets,
    } = React.useContext(ToolbarSelectContext);

    const {
        userProfileURL,
        alertVariant,
        alertVisibility,
        alertDescription,
        currentUser,
        setAlertVisibility,
        isUserAdmin,
    } = useContext(UserContext);

    const {
        sprintID,
    } = useContext(PISprintContext);
    const {
        navigate
    } = useContext(ProjectContext);

    const ToolbarOverride={
        admin_user_badge:{
            backgroundColor:  isUserAdmin === true ? "rgba(245, 188, 188, 1)" : "rgba(54, 94, 61, 1)" ,
        },
        profile_icon_image:{
            src: userProfileURL
        },
        search_ticket_select_field:{
            onChange : (event) => (handleSearchTicketChange(event)),
            onClear : (event) => (handleClearSearchTicket(event)),
            value: searchTicket
        },
        success_alert : { 
            style:{"display": alertVisibility },
            children: alertDescription,
            variation: alertVariant,
            onDismiss : (event) => (setAlertVisibility("none")),
        },
        notify_count_badge:{
            children: notificationCount
        },
        notify_select_field:{
            style:{ borderBottom:"none",color:"transparent"},
            onChange : (event) => (handleResetNotificationClick(event)),
            options:notifications
        },
        projects_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleProjectsSelectChange(event)),
            options:["","switch project","edit project"],
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
            style:{borderBottom:"none",color:"transparent"},
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
            isDisabled: sprintID === "" || sprintID === 0
        },
        }
        
        const SearchTicketOverride={
            SearchResultMatchCollection:{
                items: matchedTickets }}

        const OverrideSearchTicketItems = ({ item, index })  => {
            return {
                overrides: {
                    title_text:{ children: item.Title },
                    ticket_id_text: {children: "KAI-"+item.TicketID},
                    issue_type_image: {src: require(`../images/${item.IssueType}.jpeg`)},
                    },
                onClick: () => (
                    navigate("/edit-ticket",
                            {state:{selectedTicket:item,project: getProjectNameState()}}))};}

    return {
        ToolbarOverride,
        SearchTicketOverride,
        OverrideSearchTicketItems,
    }}