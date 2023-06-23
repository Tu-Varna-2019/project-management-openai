import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { DataStore , Storage } from 'aws-amplify';
import { User } from '../models';
import { useLocation, useNavigate } from 'react-router-dom';


export function User2Class() {

    const navigate = useNavigate();
    const location = useLocation();

    const [currentUser,setCurrentUser] = useState("");
    const [authenticatedUser,setAuthenticatedUser] = useState("");
    const [userProfileURL,setUserProfileURL] = useState("");
    const [email,setEmail] = useState("");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // User with image url dicionary
    const [allUsers,setAllUsers] = useState([]);
    const [userSubImageURL,setUserSubImageURL] = useState([{}]);
    const [userIDName,setUserIDName] = useState([{}]);
    // Alert
    const [alertVariant,setAlertVariant] = useState("success");
    const [alertVisibility,setAlertVisibility] = useState("none");
    const [alertDescription,setAlertDescription] = useState("");

    const [isUserAdmin,setIsUserAdmin] = useState(false);
    const [radioAdminUserMode,setRadioAdminUserMode] = useState(false);

    const [isLoading,setIsLoading] = useState(false);
    const [selectedAdminUser,setSelectedAdminUser] = useState([]);
    const [refreshAdminUserItems, setRefreshAdminUserItems] = useState(0);

    const [viewedUserProfileURL,setViewedUserProfileURL] = useState("");

    let selectedUserID = "";
    let selectedUsername = "";
    const addRemoveUserBoolean = location.state ? location.state.add_remove_user : false;
    try {
    selectedUserID = location.state.selectedUserID;
    selectedUsername = location.state.selectedUserName;
    }catch(err)
    { selectedUserID = currentUser.id ; selectedUsername = currentUser.username;}

    // Get current authenticated user
    useEffect(() => {
        async function fetchUserData() {
            try {
                const currentCredentials = await  Auth.currentAuthenticatedUser({ bypassCache: true });
                setAuthenticatedUser(currentCredentials);
                // Get user from DataStore
                    const user = await DataStore.query(User);
                    const isUserFound = user.find(item => item.sub === currentCredentials.attributes.sub);

                    if (isUserFound){
                    setCurrentUser(isUserFound);}
                    else {
                        if (currentCredentials.attributes.sub !== undefined) {
                        await DataStore.save(
                        new User({
                            "sub": authenticatedUser.attributes.sub,
                            "username": authenticatedUser.attributes.email,
                            "ImageProfile": "ZGVmYXVsdF91c2VyX3Byb2ZpbGUuZGVmYXVsdF91c2VyX3Byb2ZpbGUucG5n.png"
                        })).then(setCurrentUser);}}
                            }catch(error){console.log(error);}}
        fetchUserData();},[]);

    useEffect(() => {
        async function fetchUserData() {
            const credentials = await Auth.currentCredentials();
            await Storage.vault.get(
                "shared/"+currentUser.ImageProfile,{
                level:"public",
                identityId: credentials.identityId
            }).then(data => {
                setUserProfileURL(data);})}
    fetchUserData();
    },[setCurrentUser,currentUser.ImageProfile]);

    useEffect(() => {
        async function fetchUserData() {
            if (selectedUserID !== currentUser.id) {
            const viewedUser = await DataStore.query(User,selectedUserID);
            await Storage.vault.get(
                "shared/"+viewedUser.ImageProfile,{
                level:"public",
            }).then(data => {
                setViewedUserProfileURL(data);})}
            else
                setViewedUserProfileURL(userProfileURL)
            }
    fetchUserData();
    },[location.state,currentUser.id,selectedUserID,userProfileURL]);

    // Send success alert if ticket is created/deleted
    useEffect(() => {
        try {
            if (location.state.alert_variant !== undefined) {
            setAlertVariant(location.state.alert_variant);
            setAlertVisibility(location.state? location.state.alert_show : "none");
            setAlertDescription(location.state?.alert_description);}
        } catch(error) {/*do nothing */}
    },[location.state]);
    // Get user sub & image URL to [{}] object
    useEffect(() => {
        async function fetchUserData() {
            await DataStore.query(User)
            .then(data => {
                data.filter(item => { 
                    Storage.get(
                    "shared/"+item.ImageProfile,{
                    level:"public"
                }).then(data_url => {
                    setUserIDName(prevList => 
                        prevList.some(obj => obj.sub === item.sub 
                            || item.sub === "00000000") ?
                        prevList : [{ id: item.id, name: item.username}, ...prevList]);
                    setUserSubImageURL(prevList => 
                        prevList.some(obj => obj.sub === item.sub) ?
                        prevList : [{ sub: item.sub, url: data_url }, ...prevList]);
                    });
                        return item;})})}
            fetchUserData();},[])

    const handleEmailChange = (event) => {
        setEmail(event.target.value);};

    const handleSaveEmailClick = async (event) => {
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
            navigate('/profile', { state: { alert_show:'block' , alert_variant: "success", alert_description: `${email} has been successfully edited!` }});
            window.location.reload();
        }catch(error) {
            navigate('/profile', { state: { alert_show:'block' , alert_variant: "error", alert_description: error }});
            window.location.reload();}};

    const handleSaveImageClick = async ({ file }) => {
            const fileExtension = file.name.split('.').pop();
            if (currentUser.ImageProfile !== "ZGVmYXVsdF91c2VyX3Byb2ZpbGUuZGVmYXVsdF91c2VyX3Byb2ZpbGUucG5n.png")
            await Storage.remove("shared/"+currentUser.ImageProfile);
            const editUserDataStore = await DataStore.query(User, currentUser.id);
            return file
              .arrayBuffer()
              .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer))
              .then(async (hashBuffer) => {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map((a) => a.toString(16).padStart(2, '0')).join('');
                let randomString = Math.random().toString(36).substring(2, 15);
        // check if user isn't using the actual default profile image
            await DataStore.save(User.copyOf(editUserDataStore, item => {
                item.ImageProfile = `${hashHex}${randomString}.${fileExtension}`;}));

          return { file, key: `${hashHex}${randomString}.${fileExtension}` };
        });
  }

  const handleReloadUploadSuccImage = () =>{
    navigate('/profile', { state: { alert_show:'block' , alert_variant: "success",selectedUserID:currentUser.id, alert_description: `Image successfully uploaded!` }});
    window.location.reload();
  };
    const handleGoToChangePassword = (event) => {
        if (window.confirm(`Are you sure you want to goto change password page?`))
            navigate('/reset-password-kai');};
    const handleGoToDeleteAccount = (event) => {
        if (window.confirm(`Are you sure you want to goto delete account page?`))
            navigate('/delete-account-kai');};

    // Aka get to user page
    const handleGoToMNotes = (event) => {
        navigate('/profile',{state:{add_remove_user:true,selectedUserID:currentUser.id}});
    };

    const handleAdminUserModeChange = (boolvalue) => {
        setRadioAdminUserMode(boolvalue);};

        const handleAdminUserItemClick = (user_id) => {
              setRefreshAdminUserItems(refreshItem => refreshItem +1);
              if (!selectedAdminUser.includes(user_id))
              setSelectedAdminUser(prev=> [...prev,user_id]);
              else
              setSelectedAdminUser(selectedAdminUser.filter(item => item !== user_id));
            }

    return {
        viewedUserProfileURL,
        setIsLoading,
        selectedAdminUser,
        setSelectedAdminUser,
        refreshAdminUserItems,
        handleAdminUserItemClick,
        handleAdminUserModeChange,
        radioAdminUserMode,
        allUsers,
        setAllUsers,
        isLoading,
        addRemoveUserBoolean,
        setIsUserAdmin,
        isUserAdmin,
        userIDName,
        selectedUsername,
        selectedUserID,
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
        setAlertVisibility,
        handleReloadUploadSuccImage,
    }}