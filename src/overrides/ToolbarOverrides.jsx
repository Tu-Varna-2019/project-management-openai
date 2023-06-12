import React from 'react';
import { TicketContext } from '../contexts/TicketContext';
import { UserContext } from '../contexts/UserContext';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';

export function ToolbarFunc (props) {

    const {
        handleGoToCreateTicketClick,
    } = React.useContext(TicketContext);

    const {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        assignedToMe,
        allUsers,
    } = React.useContext(ToolbarSelectContext);

    const {
        userProfileURL,
        alertVariant,
        alertVisibility,
        alertDescription,
        currentUser,
    } = React.useContext(UserContext);

    const ToolbarOverride={
        profile_icon_image:{
            src: userProfileURL
        },
        success_alert : { 
            style:{"display": alertVisibility },
            children: alertDescription,
            variant: alertVariant,
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
            //onChange : (event) => (handleSelectedProjectOnChange(event)),
            options:["","all templates","project templates"],
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
            onClick: (event) => (handleGoToCreateTicketClick(event))},
        }

    return {
        ToolbarOverride
    }
}