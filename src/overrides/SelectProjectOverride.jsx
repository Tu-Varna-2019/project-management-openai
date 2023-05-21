import '@aws-amplify/ui-react/styles.css';
import { useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { ProjectClass } from '../classes/ProjectClass';
import { User2Class } from '../classes/User2Class';

export function SelectProjectFunc(props) {

    const {
        currentUser,
        setCurrentUser,
        authenticatedUser,
    } = User2Class();

    const {
        projectNames,
        handleSelectedProjectOnChange,
        isConfirmButtonLoading,
        handleSelectedProjectOnClick,
        isCancelButtonLoading,
        handleSelectedCreateOneProjectOnClick
    }= ProjectClass();

    // Create user if he doesn't exist in DataStore
    useEffect(() => {
        async function fetchUserData() {
            try {
                let does_user_exist = false;
                // Query if user exists in sub
                await DataStore.query(User)
                .then(data => {
                    data.filter(item => {
                        if(item.sub === authenticatedUser.attributes.sub){
                            does_user_exist = true;
                            setCurrentUser(item);
                            console.log(`User already exists! ${item.sub}`);
                        }})}).catch(error => {console.error(error);});
                // if flag is NOT raised , create user in DataStore !!!
                if (!does_user_exist) {
                    await DataStore.save(
                        new User({
                           "sub": authenticatedUser.attributes.sub,
                            "username": authenticatedUser.attributes.email,
                           "ImageProfile": "default_user_profile.png"
                       })).then(setCurrentUser);
                    console.log(`User created!`);}
            }catch(error) {console.log(`Ouch ${error}`)}
    }
    fetchUserData();
    },[authenticatedUser.attributes,setCurrentUser]);

    const SelectProjectOverride={
        select_project_select_field:{
            onChange : (event) => (handleSelectedProjectOnChange(event)),
            options: projectNames
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
        },
    }

    
    return {
        SelectProjectOverride
    }
}