import { Button, Heading , useTheme , Image, Text, View } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { TicketClass } from '../classes/TicketClass';
import { ProjectClass } from '../classes/ProjectClass';
import { DataStore } from 'aws-amplify';
import { Project, Ticket } from '../models';
import { useLocation } from 'react-router-dom';

export function BoardFunc (props) {

    const {
            handleSelectedTicket,
            setSwitchCreateTicketPage,
            tickets,
            setTickets,
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
        projectID,
        setProjectID
    } = ProjectClass();

     // Get project
    useEffect(() => {
        console.log(`Selected project: ${received_project_name}`);
        const dts_query = DataStore.query(Project)
        dts_query.then(data => {
        setSelectedProject(data.filter(item => item.Name === received_project_name));
        }).catch(error => {
        console.error(error);
        });
    },[setSelectedProject,received_project_name]);
    console.log(selectedProject);

    // Get tickets by project
    useEffect(() => {
        let project_id = "";
        Object.keys(selectedProject).forEach(key => {
            const value = JSON.stringify(selectedProject[key]);
            const value_json_parse = JSON.parse(value);
            project_id = value_json_parse.id;
          });
        const dts_query = DataStore.query(Ticket)
        dts_query.then(data => {
        setTickets(data.filter(item => item.projectID === project_id));
        }).catch(error => {
        console.error(error);
        });
    },[selectedProject]);
    console.log(tickets);
    
    const customOverrideItems = ({ item, index }) => ({
        
        overrides: { Button:{ children: item.Title , style:({color: "white" ,fontSize:"18px" }),
        backgroundColor: item.Priority === "High" ? "rgba(203, 53, 9, 1)" : item.Priority === "Medium" ? "rgba(220, 137, 13, 1)" : 
        item.Priority === "Low" ? "rgba(88, 188, 9, 1)" :"white"}},
        onClick: () => (console.log(item.Title))
    });

    const BoardTicketCollectionOverride={
        NotetitlebuttonCollection:{
            items: tickets,
            isSearchable: false}
    }

    const BoardComponentOverride = {
        roadmap_button:{
            onClick: (event) => (console.log("yes"))},
        active_sprints_button:{
            onClick: (event) => (console.log("yes2"))},
        }
        
    return {
        BoardComponentOverride,
        BoardTicketCollectionOverride,
        customOverrideItems
    }
}