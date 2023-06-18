import { useContext, useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { DataStore , Storage } from 'aws-amplify';
import { User } from '../models';
import { ProjectContext } from '../contexts/ProjectContext';


export function User2Class() {

    const {
        location,
        navigate,
    } = useContext(ProjectContext);

    const [currentUser,setCurrentUser] = useState("");
    const [authenticatedUser,setAuthenticatedUser] = useState("");
    const [userProfileURL,setUserProfileURL] = useState("");
    const [email,setEmail] = useState("");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // User with image url dicionary
    const [userSubImageURL,setUserSubImageURL] = useState([{}]);
    const [userIDName,setUserIDName] = useState([{}]);
    // Alert
    const [alertVariant,setAlertVariant] = useState("success");
    const [alertVisibility,setAlertVisibility] = useState("none");
    const [alertDescription,setAlertDescription] = useState("");

    let selectedUserID = "";
    let selectedUsername = "";
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
                    await DataStore.query(User).then(data => {
                        data.filter(item => {
                            if(item.sub === currentCredentials.attributes.sub)
                                setCurrentUser(item);
                                return item;})})
                            }catch(error){console.log(error);}}
        fetchUserData();},[])
    useEffect(() => {
        async function fetchUserData() {
            const credentials = await Auth.currentCredentials();
            await Storage.vault.get(
                currentUser.ImageProfile,{
                level:"protected",
                identityId: credentials.identityId
            }).then(data => {
                setUserProfileURL(data);})}
    fetchUserData();
    },[setCurrentUser,currentUser.ImageProfile]);

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
                    item.ImageProfile,{
                    level:"protected"
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
            await Storage.remove(currentUser.ImageProfile);
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
    const handleGoToMNotes = (event) => {
        if (window.confirm(`Are you sure you want to switch to MNotes app?`))
            navigate('/note');};

    return {
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