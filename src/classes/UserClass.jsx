import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { useLocation,useNavigate } from 'react-router-dom';


export function UserClass() {

    const UserSettingsMenu = {
        SignOut: "Sign out",
        ChangePassword: "Change password",
        DeleteAccount : "Delete account"
    }
    const initialValues = {
        SuccessMessage: "none",
        SuccessDesc: ""
    };

    const navigate = useNavigate();
    const [user,setUser] = useState();
    const [successMessage,setSuccessMessage] = useState(initialValues.SuccessMessage);
    const [successDescription,setSuccessDescription] = useState(initialValues.SuccessDesc);
    
    const location = useLocation();
    const sub = user?.attributes?.sub;
    const check_email = user?.attributes?.email;
    const email = check_email === undefined ? "Google EXTERNAL" : check_email;
    const welcome_back_text = "Welcome back " + String(email);

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
       setSuccessMessage(location.state ? location.state.success_alert : "none");
       setSuccessDescription(location.state ? location.state.title + " has been " + location.state.action : "");
    },[location.state,setSuccessMessage,setSuccessDescription]);

    const handleSettings = (event) => {
    event.preventDefault();
    switch(event.target.value){
        case UserSettingsMenu.SignOut:
            if (window.confirm("Are you sure you want to leave ?"))
            Auth.signOut();
            break;
        case UserSettingsMenu.ChangePassword:
        if (window.confirm("Are you sure you want to change password,"
        +"we will redirect you to different page?")) 
            navigate('/reset-password'); 
        break;
        case UserSettingsMenu.DeleteAccount:
        if (window.confirm("Are you sure you want to delete account,"
        +"we will redirect you to different page?")) 
            navigate('/delete-account');
        break;
        default: 
        console.log("default");
        break;}};


    return {
        sub,
        email,
        handleSettings,
        welcome_back_text,
        UserSettingsMenu,
        successDescription,
        successMessage,
        setSuccessMessage,
        setSuccessDescription
    }
}