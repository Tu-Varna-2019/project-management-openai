import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { DataStore , Storage } from 'aws-amplify';
import { User } from '../models';
import { useLocation } from 'react-router-dom';


export function User2Class() {

    const [currentUser,setCurrentUser] = useState("");
    const [authenticatedUser,setAuthenticatedUser] = useState("");
    const [userProfileURL,setUserProfileURL] = useState("");
    // User with image url dicionary
    const [userSubImageURL,setUserSubImageURL] = useState([{}]);
    // Alert
    const [alertVariant,setAlertVariant] = useState("success");
    const [alertVisibility,setAlertVisibility] = useState("none");
    const [alertDescription,setAlertDescription] = useState("");
    const location = useLocation();

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
    },[setCurrentUser,currentUser.ImageProfile]);

    // Send success alert if ticket is created/deleted
    useEffect(() => {
        try {
        if (location.state.alert_variant != undefined) {
        setAlertVariant(location.state.alert_variant);
        setAlertVisibility(location.state?.alert_show);
        setAlertDescription(location.state?.alert_description);
        }
        } catch(error) {/*do nothing */}
    },[location.state]);

    // Get user sub & image URL to [{}] object
    useEffect(() => {
        async function fetchUserData() {
            await DataStore.query(User)
            .then(data => {
                    data.filter(item => { 
                     Storage.get(
                        item.ImageProfile,{
                        level:"public"
                    }).then(data_url => {
                        setUserSubImageURL([{
                            sub: item.sub,
                            url: data_url }]);})})
                    }).catch(error => {console.error(error);});
        }
            fetchUserData();
    },[])


    return {
        currentUser,
        setCurrentUser,
        authenticatedUser,
        setAuthenticatedUser,
        alertVariant,
        alertVisibility,
        alertDescription,
        userProfileURL,
        userSubImageURL
    }
}