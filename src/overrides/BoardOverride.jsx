import { Button, Heading , useTheme , Image, Text, View } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { TicketClass } from '../classes/TicketClass';
import { ProjectClass } from '../classes/ProjectClass';
import { DataStore , Storage } from 'aws-amplify';
import { Project, Ticket } from '../models';
import { useLocation } from 'react-router-dom';
import { User2Class } from '../classes/User2Class';
import { ToolbarSelectClass } from '../classes/ToolbarSelectbarClass';

export function BoardFunc (props) {

    const {
        userProfileURL,
        alertVariant,
        alertVisibility,
        alertDescription,
    } = User2Class();

    const {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,

    } = ToolbarSelectClass();

    const {
        handleSelectedTicket,
        setSwitchCreateTicketPage,
        tickets,
        setTickets,
        ticketToDo,
        ticketInProgress,
        ticketInReview,
        ticketDone
    } = TicketClass();

    const {
        handleProjectName,
        projectName,
        isProjectEmpty,
        projects,
        setProjects,
        setProjectNames,
        projectNames,
        isConfirmButtonLoading,
        isCancelButtonLoading,
        handleSelectedProjectOnChange,
        handleConfirmCreateProjectOnClick,
        handleCancelCreateProjectOnClick,
        handleSafeProjectImageChange,
        handleSelectedProjectOnClick,
        handleSelectedCreateOneProjectOnClick,
        errorMessageProjectName,
        selectedProject,
        setSelectedProject,
        received_project_name,
        getProjectID,
        imageProjectName,
        setImageProjectName,
        imageProjectURL,
    } = ProjectClass();

    const customOverrideItems = ({ item, index }) => ({
        
        overrides: { Button:{ children: item.Title , style:({color: "white" ,fontSize:"18px" }),
        backgroundColor: item.Priority === "High" ? "rgba(203, 53, 9, 1)" : item.Priority === "Medium" ? "rgba(220, 137, 13, 1)" : 
        item.Priority === "Low" ? "rgba(88, 188, 9, 1)" :"white"}},
        onClick: () => (console.log(item.Title))
    });

    const BoardTicketToDoOverride={
        TicketToDoCollection:{
            items: ticketToDo}
    }
    const BoardTicketInProgressOverride={
        TicketInProgressCollection:{
            items:ticketInProgress }
    }
    const BoardTicketInReviewOverride={
        TicketInReviewCollection:{
            items: ticketInReview}
    }
    const BoardTicketDoneOverride={
        TicketDoneCollection:{
            items:ticketDone }
    }

    const BoardComponentOverride = {
        roadmap_button:{
            onClick: (event) => (console.log("yes"))},
        active_sprints_button:{
            onClick: (event) => (console.log("yes2"))},
        project_name_text:{
            children: received_project_name
        },
        project_image_name:{
            src: imageProjectURL,
        },
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
            options:["switch project",""],
        },
        your_work_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleYourWorkSelectChange(event)),
            options:["assigned to me","boards"],
        },
        issue_templates_select_field:{
            style:{color:"transparent"},
            //onChange : (event) => (handleSelectedProjectOnChange(event)),
            options:["all templates","project templates"],
        },
        teams_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleTeamsSelectChange(event)),
            options:["all users"],
        },
        }
        
    return {
        BoardComponentOverride,
        BoardTicketToDoOverride,
        BoardTicketInProgressOverride,
        BoardTicketInReviewOverride,
        BoardTicketDoneOverride,
        customOverrideItems
    }
}