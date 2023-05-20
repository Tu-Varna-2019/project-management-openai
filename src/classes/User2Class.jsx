import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { DataStore , Storage } from 'aws-amplify';
import { User } from '../models';


export function User2Class() {

    const [currentUser,setCurrentUser] = useState("");
    const [authenticatedUser,setAuthenticatedUser] = useState("");
    const [userProfileURL,setUserProfileURL] = useState("");
    // Alert
    const [alertVariant,setAlertVariant] = useState("success");
    const [alertVisibility,setAlertVisibility] = useState("none");
    const [alertDescription,setAlertDescription] = useState("");

    // Get current authenticated user
    useEffect(() => {
        async function fetchUserData() {
            const currentCredentials = await  Auth.currentAuthenticatedUser({ bypassCache: true });
            setAuthenticatedUser(currentCredentials);
            console.log(`sub: ${currentCredentials.attributes.sub}`);   
            // Get user from DataStore
                await DataStore.query(User).then(data => {
                    data.filter(item => {
                        if(item.sub === currentCredentials.attributes.sub)
                            setCurrentUser(item)})})}
                        fetchUserData();
    },[])

    useEffect(() => {
        async function fetchUserData() {
            await Storage.get(
                currentUser.ImageProfile,{
                level:"public"
            }).then(data => {
                setUserProfileURL(data);
            })
        }
            fetchUserData();
    },[setCurrentUser,currentUser.ImageProfile])

    return {
        currentUser,
        setCurrentUser,
        authenticatedUser,
        setAuthenticatedUser,
        alertVariant,
        alertVisibility,
        alertDescription,
        userProfileURL,
    }
}