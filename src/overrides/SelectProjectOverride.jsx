import '@aws-amplify/ui-react/styles.css';
import React,{ useContext, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { UserContext } from '../contexts/UserContext';
import { ProjectContext } from '../contexts/ProjectContext';

export function SelectProjectFunc(props) {

    const {
        currentUser,
        setCurrentUser,
        authenticatedUser,
        setAuthenticatedUser,
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
    // Create user if he doesn't exist in DataStore
    useEffect(() => {
        async function fetchUserData() {
            try {
                let does_user_exist;
                // Query if user exists in sub
                const data = await DataStore.query(User);
                for(let i=0; i<data.length; i++) {
                    if(data[i].username === authenticatedUser.attributes.email 
                        || authenticatedUser.attributes.sub === data[i].sub){
                            does_user_exist = data[i];
                        break;
                    }
                }
                // if flag is NOT raised , create user in DataStore !!!
                if (!does_user_exist) {
                await DataStore.save(
                    new User({
                        "sub": authenticatedUser.attributes.sub,
                        "username": authenticatedUser.attributes.email,
                        "ImageProfile": "ZGVmYXVsdF91c2VyX3Byb2ZpbGUuZGVmYXVsdF91c2VyX3Byb2ZpbGUucG5n.png"
                    })).then(setCurrentUser);}
            }catch(error) {/*do nothing*/}}fetchUserData();
    },[authenticatedUser,setAuthenticatedUser,setCurrentUser]);

    const SelectProjectOverride={
        select_project_select_field:{
            onChange : (event) => (handleSelectProjectName(event)),
            options: projectNames,
            value: projectName
        },
        confirm_button:{
            onClick : (event) => (handleSelectedProjectOnClick(event)),
            isLoading: isConfirmButtonLoading
        },
        welcome_back_text:{
            children: `Welcome back ${currentUser.username}`
        },
        create_one_button:{
            onClick : (event) => (handleSelectedCreateOneProjectOnClick(event)),
            isLoading: isCancelButtonLoading
        }}

    return {
        SelectProjectOverride
    }}