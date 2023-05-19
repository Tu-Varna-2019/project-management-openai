import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Project, User } from '../models';
import { ProjectClass } from '../classes/ProjectClass';
import { User2Class } from '../classes/User2Class';

export function SelectProjectFunc(props) {

    const {
        currentUser,
        setCurrentUser,
        authenticatedUser,
        setAuthenticatedUser,
        defaultUserProfileURL
    } = User2Class();

    const {
        projectNames,
        setProjectNames,
        handleSelectedProjectOnChange,
        isConfirmButtonLoading,
        handleSelectedProjectOnClick,
        isCancelButtonLoading,
        handleSelectedCreateOneProjectOnClick
    }= ProjectClass();

    // Get User credentials
    useEffect(() => {
        async function fetchUserData() {
            try {
                const currentCredentials = await  Auth.currentAuthenticatedUser({ bypassCache: true });
                setAuthenticatedUser(currentCredentials);
            } catch (error){
                console.log('Error fetching user data:', error);}}
        fetchUserData();
    },[setAuthenticatedUser]);

    // Create user if he doesn't exist in DataStore
    useEffect(() => {
        async function fetchUserData() {
            try {
                console.log(authenticatedUser.attributes.sub);   
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
                            "ImageProfile": defaultUserProfileURL
                        })).then(setCurrentUser);
                    console.log(`User created!`);}
            }catch(error) {console.log(`Ouch ${error}`)}
    }
    fetchUserData();
    },[authenticatedUser!==""]);

    // Select project
    useEffect(() => {
        const dts_query = DataStore.query(Project)
        dts_query.then(data => {
        data.filter(item => { 
            setProjectNames(prevItems => [...prevItems, item.Name]);
            } )
        }).catch(error => {
        console.error(error);
        });
        console.log(dts_query);
    },[setProjectNames]);

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