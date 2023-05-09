import { useEffect, useState , useRef } from 'react'
import { Auth } from 'aws-amplify';
import { useLocation,useNavigate } from 'react-router-dom';
import { API } from 'aws-amplify';

export function UserClass() {

    const UserSettingsMenu = {
        SignOut: "Sign out",
        ChangePassword: "Change password",
        DeleteAccount : "Delete account"
    }
    const initialValues = {
        SuccessMessage: "none",
        SuccessDesc: "",
        SuccessVariant: "success"
    };

    const navigate = useNavigate();
    const [user,setUser] = useState();
    // Success Alert
    const [successMessage,setSuccessMessage] = useState(initialValues.SuccessMessage);
    const [successDescription,setSuccessDescription] = useState(initialValues.SuccessDesc);
    // Info Alert Share email
    const [successVariant,setSuccessVariant] = useState(initialValues.SuccessVariant);
    const [infoMessage,setInfoMessage] = useState(initialValues.SuccessMessage);
    const [infoDescription,setInfoDescription] = useState(initialValues.SuccessDesc);
    // Confirm/Cancel button hide/show
    const [hideConfCanButton,setHideConfCanButton] = useState(initialValues.SuccessMessage);
    //Email share text box
    const [shareEmail,setShareEmail] = useState("");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shareEmail);

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

    const shareNoteThrottle = useRef(300);
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (shareNoteThrottle.current > 0) {
    //         shareNoteThrottle.current--;
    //         console.log("Share note throttle: "+shareNoteThrottle.current);
    //     }
    //   }, 1000);
    //   return () => clearInterval(interval);
    // },[]);

    const handleOnClickShare = (event) => {
        event.preventDefault();
        setSuccessVariant("info");
        setInfoMessage("block");
        setHideConfCanButton("block");
        setInfoDescription("Enter your collaborator's email to share the selected note:");
        };

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

    const postShareNote = async (event) => {
        const response = await API.post('apiopenai','/sns/sharenote',
        { body: JSON.stringify({event}) });
        console.log(response);
        return response;
    }

    const handleOnclickConfirm = async (title,description,priority,reminder) => {

        if (shareNoteThrottle > 0){
            setSuccessVariant("error");
            setInfoDescription("You are allowed to send messages every 5 minutes!");
       }else {
            shareNoteThrottle.current = 300;
            const email_response = await postShareNote({
                "receipt_email": shareEmail,
                "sub": sub,
                "Title": title,
                "Description": description,
                "Priority": priority,
                "Reminder": reminder
            });
            setSuccessVariant(initialValues.SuccessVariant);
            if (email_response.startsWith("Email verified! Note sent")) {
                navigate('/note', { state: { alert_success:'block' , title: shareEmail , action: "sent an email for note: "+title+" !" } });
                window.location.reload();
            }
            else setInfoDescription(email_response);
        }
    }

    const handleOnclickCancel = (event) => {
        event.preventDefault();
        setInfoMessage("none");
        setHideConfCanButton("none");
    };
    const handleShareEmailChange = (event) => {
        event.preventDefault();
        setShareEmail(event.target.value);
    };


    return {
        sub,
        email,
        handleSettings,
        welcome_back_text,
        UserSettingsMenu,
        successDescription,
        successMessage,
        successVariant,
        setSuccessMessage,
        setSuccessDescription,
        setSuccessVariant,
        handleOnClickShare,
        hideConfCanButton,
        handleShareEmailChange,
        handleOnclickCancel,
        handleOnclickConfirm,
        regexEmail,
        shareEmail,
        infoMessage,
        infoDescription
    }
}