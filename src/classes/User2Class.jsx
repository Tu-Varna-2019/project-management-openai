import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { DataStore , Storage } from 'aws-amplify';
import { User } from '../models';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProjectClass } from './ProjectClass';


export function User2Class() {

    const [currentUser,setCurrentUser] = useState("");
    const [authenticatedUser,setAuthenticatedUser] = useState("");
    const [userProfileURL,setUserProfileURL] = useState("");
    const [email,setEmail] = useState("");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // User with image url dicionary
    const [userSubImageURL,setUserSubImageURL] = useState([{}]);
    // Alert
    const [alertVariant,setAlertVariant] = useState("success");
    const [alertVisibility,setAlertVisibility] = useState("none");
    const [alertDescription,setAlertDescription] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    // Get current authenticated user
    useEffect(() => {
        async function fetchUserData() {
            try {
                const currentCredentials = await  Auth.currentAuthenticatedUser({ bypassCache: true });
                setAuthenticatedUser(currentCredentials);
                console.log(`sub: ${currentCredentials.attributes.sub}`);   
                // Get user from DataStore
                    await DataStore.query(User).then(data => {
                        data.filter(item => {
                            if(item.sub === currentCredentials.attributes.sub)
                                setCurrentUser(item)})})
                            }catch(error){console.log(error);}
        }
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
        if (location.state.alert_variant !== undefined) {
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
                        setUserSubImageURL( prevList =>[{
                            sub: item.sub,
                            url: data_url }, ...prevList]);})})
                    }).catch(error => {console.error(error);});}
            fetchUserData();
    },[])

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSaveEmailClick = async (event) => {
        console.log(authenticatedUser.attributes);
        try {
            await Auth.verifyUserAttribute(authenticatedUser, 'email');
            await Auth.updateUserAttributes(authenticatedUser, { 'email': email });
            const verificationCode = prompt(`Message sent ${email} . Please enter the verification code`);
            await Auth.verifyUserAttributeSubmit(authenticatedUser, 'email', verificationCode);
            await Auth.updateUserAttributes(authenticatedUser, { 'email': email });
            const editUserDataStore = await DataStore.query(User, currentUser.id);
            await DataStore.save(User.copyOf(editUserDataStore, item => {
                item.sub = currentUser.sub;
                item.username = email;
                item.ImageProfile = currentUser.ImageProfile;
            }));
            navigate('/profile', { state: { /*project: selectedProject[0].Name,*/ alert_show:'block' , alert_variant: "success", alert_description: `${email} has been successfully edited!` }});
            window.location.reload();
        }catch(error) {
            navigate('/profile', { state: { /*project: selectedProject[0].Name,*/ alert_show:'block' , alert_variant: "error", alert_description: error }});
            window.location.reload();
        }
    };

    const handleSaveImageClick = async (event) => {
        await Storage.put(
            event, 
            'Protected Content', {
            level: 'protected'
        });
        // check if user isn't using the actual default profile image
        if (currentUser.ImageProfile !== "default_user_profile.png")
            await Storage.remove(currentUser.ImageProfile);

        const editUserDataStore = await DataStore.query(User, currentUser.id);
        await DataStore.save(User.copyOf(editUserDataStore, item => {
            item.sub = currentUser.sub;
            item.username = currentUser.username;
            item.ImageProfile = event;
        }));
        navigate('/profile', { state: { alert_show:'block' , alert_variant: "success", alert_description: `${event} successfully uploaded!` }});
        window.location.reload();
    };

    const handleGoToChangePassword = (event) => {
        if (window.confirm(`Are you sure you want to goto change password page?`))
            navigate('/reset-password-kai');
    };
    const handleGoToDeleteAccount = (event) => {
        if (window.confirm(`Are you sure you want to goto delete account page?`))
            navigate('/delete-account-kai');
    };
    const handleGoToMNotes = (event) => {
        if (window.confirm(`Are you sure you want to switch to MNotes app?`))
            navigate('/note');
    };

    return {
        currentUser,
        setCurrentUser,
        authenticatedUser,
        setAuthenticatedUser,
        alertVariant,
        alertVisibility,
        alertDescription,
        userProfileURL,
        userSubImageURL,
        regexEmail,
        email,
        handleEmailChange,
        handleSaveEmailClick,
        handleSaveImageClick,
        handleGoToChangePassword,
        handleGoToDeleteAccount,
        handleGoToMNotes,
    }
}