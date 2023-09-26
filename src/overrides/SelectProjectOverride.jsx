import '@aws-amplify/ui-react/styles.css';
import React,{ useContext, useEffect} from 'react';
import { UserContext } from '../contexts/UserContext';
import { ProjectContext } from '../contexts/ProjectContext';

export function SelectProjectFunc(props) {

    const {
        currentUser,
    } = React.useContext(UserContext);
    const {
        projectName,
        projectNames,
        handleSelectProjectName,
        isConfirmButtonLoading,
        handleSelectedProjectOnClick,
        isCancelButtonLoading,
        handleSelectedCreateOneProjectOnClick,
    }= useContext(ProjectContext);

    // Reload page if username is undefined
    // useEffect(() => {
    //     if (currentUser.username === undefined) {
    //         const timer = setTimeout(() => {
    //             window.location.reload();
    //         }, 1700);
    //         return () => clearTimeout(timer);
    //     }
    // }, [currentUser.username]);

    const SelectProjectOverride={
        select_project_select_field:{
            onChange : (event) => (handleSelectProjectName(event)),
            options: projectNames,
            value: projectName
        },
        confirm_button:{
            onClick : (event) => (handleSelectedProjectOnClick(event)),
            isLoading: isConfirmButtonLoading,
            isDisabled: projectName === ""
        },
        welcome_back_text:{
            children: `Welcome back ${currentUser.username === undefined ? '' : currentUser.username}`
        },
        create_one_button:{
            onClick : (event) => (handleSelectedCreateOneProjectOnClick(event)),
            isLoading: isCancelButtonLoading
        }}

    return {
        SelectProjectOverride
    }}