import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Auth, DataStore , Storage } from 'aws-amplify';
import { Project, User } from '../models';
import { getProjectNameState , setPINumState, setProjectNameState, setSprintNumState } from '../states';
import { UserContext } from '../contexts/UserContext';


export function ProjectClass(props) {

    const {
        selectedAdminUser,
        setSelectedAdminUser,
        isLoading,
        setIsLoading,
        setAllUsers,
        radioAdminUserMode,
        setIsUserAdmin,
        currentUser,
    } = useContext(UserContext);

    const [projectName,setProjectName] = useState("");
    const [initialProjectName,setInitialProjectName] = useState("");
    const [getProjectID,setGetProjectID] = useState("");
    const [getProjectImageName,setGetProjectImageName] = useState("");
    const [projectNames,setProjectNames] = useState([""]);
    const [projectIDs,setProjectIDs] = useState([]);
    const [selectedProjectID,setSelectedProjectID] = useState("");
    const [selectedProject,setSelectedProject] = useState("");

    const [isConfirmButtonLoading,setIsConfirmButtonLoading] = useState(false);
    const [isCancelButtonLoading,setIsCancelButtonLoading] = useState(false);
    const[errorMessageProjectName,setErrorMessageProjectName] = useState("Project name must not be empty !");
    // Object Image name
    const [imageProjectName,setImageProjectName] = useState("");
    const [imageProjectURL,setImageProjectURL] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const isProjectEmpty =  /^\s*$/.test(projectName);

    useEffect(() => {
        // Check if IndexedDB is available
        if (!window.indexedDB)
          // If not, redirect to your error page
          navigate("/error-private-mode");
      }, []);

      useEffect(() => {
        async function fetchAdminData() {
            if (getProjectID !== "") {
            const projectDS = await DataStore.query(Project,getProjectID);
            if (projectDS.Admin.includes(currentUser.id))
            setIsUserAdmin(true);
            }}
        fetchAdminData();
    },[getProjectID,setIsUserAdmin,selectedProjectID,currentUser.id]);

    // Set User&Admin panel
    useEffect(() => {
        setAllUsers([]);
        setSelectedAdminUser([]);
        async function fetchUserData() {
            if (selectedProjectID !== "") {
            const projectDS = await DataStore.query(Project,selectedProjectID);
            const user = await DataStore.query(User);
            // Check if user is admin or not
            if (projectDS.Admin.includes(currentUser.id)) {
                user.map(item => {
                if (item.sub !== "00000000" && item.id !== currentUser.id ) {
                // User mode
                if (!radioAdminUserMode)
                setSelectedAdminUser(projectDS.Users);
                if (!radioAdminUserMode && !projectDS.Admin.includes(item.id)) 
                setAllUsers(prevList=> [...prevList,item]);
                
                else {
                    if (radioAdminUserMode)
                    setSelectedAdminUser(projectDS.Admin);
                    if ( radioAdminUserMode && !projectDS.Users.includes(item.id)) 
                    setAllUsers(prevList=> [...prevList,item]); 
                }}
                return item;})}}
                }fetchUserData();},
                [currentUser,selectedProjectID,setAllUsers,radioAdminUserMode,setSelectedAdminUser]);

    const handleProjectName = (event) => {
        event.preventDefault();
        setProjectName(event.target.value);
        setErrorMessageProjectName("Project name must not be empty !");};

    const handleSelectProjectName = async (event) => {
        event.preventDefault();
        if (event.target.value !== "") {
        setProjectName(event.target.value);
        setInitialProjectName(event.target.value);
        setSelectedProjectID(projectIDs[event.target.selectedIndex-1]);
        const selProject = await DataStore.query(Project,projectIDs[event.target.selectedIndex-1]);
        setIsUserAdmin(selProject.Admin.includes(currentUser.id));
        }
    };

    const handleConfirmCreateProjectOnClick = async (event) => {
        event.preventDefault();
        setIsConfirmButtonLoading(!isConfirmButtonLoading);
        if (window.confirm(`Are you sure you want to create project with the following name : ${projectName} ?`)) {
            // Check if project with the following name already exists
            let does_project_name_exist = false;
            await DataStore.query(Project)
            .then(data => {
                data.filter(item => { 
                    if (item.Name === projectName)
                        does_project_name_exist = true;
                        //console.log(`Name ${projectName} already exists!`);
                        setErrorMessageProjectName(`Name ${projectName} already exists!`);
                        return item;})
                }).catch(error => {
                console.error(error);
                });
            if (!does_project_name_exist) {
                await DataStore.save(
                    new Project({
                        "Name": projectName,
                        "ImageProject": imageProjectName,
                        "Admin": [currentUser.id],
                        "Users": []
                     }));
                //console.log("Project created!");
                navigate('/');
                window.location.reload();
            }}
        setIsConfirmButtonLoading(false);
    };

    const handleSaveEditProjectClick = async (event) => {
        event.preventDefault();
        setIsConfirmButtonLoading(!isConfirmButtonLoading);
            // Check if project with the following name already exists
            let does_project_name_exist = false;
            await DataStore.query(Project)
            .then(data => {
                data.filter(item => {
                    if (item.Name === projectName 
                        && item.Name !== initialProjectName) {
                        does_project_name_exist = true;
                        setErrorMessageProjectName(`Name ${projectName} already exists!`);}
                        return item;})
                }).catch(error => {console.error(error);});

            if (!does_project_name_exist) {
                const editProjectDataStore = await DataStore.query(Project,selectedProjectID);
                await DataStore.save(Project.copyOf(editProjectDataStore, item => {
                    item.Name = projectName;
                    if (imageProjectName !== "")
                    item.ImageProject = imageProjectName;
                }));
                navigate('/');
                window.location.reload();
            }
        setIsConfirmButtonLoading(false);
    };

    const handleDeleteProjectClick = async (event) => {
        event.preventDefault();
        setIsConfirmButtonLoading(!isConfirmButtonLoading);
            if (window.confirm(`Are you sure you want to delete the selected project: ${projectName}`)) {
            const modelToDelete = await DataStore.query(Project, selectedProjectID);
            await DataStore.delete(modelToDelete);
            navigate('/');
            window.location.reload();
            }
        setIsConfirmButtonLoading(false);
    };

    // Get project
    useEffect(() => {
        const dts_query = DataStore.query(Project)
        dts_query.then(data => {
        setSelectedProject(data.filter(item => item.Name === getProjectNameState()));
        }).catch(error => {
        console.error(error);
        });
    },[setSelectedProject]);
    // Get project ID from selectedProject
    useEffect(() => {
        Object.keys(selectedProject)
            .forEach(key => {
                const value = JSON.stringify(selectedProject[key]);
                const value_json_parse = JSON.parse(value);
                setGetProjectID(value_json_parse.id);
                setGetProjectImageName(value_json_parse.ImageProject);
            });
        },[selectedProject,setSelectedProject])
    // Get all project names for combo box
    useEffect(() => {
        async function fetchUserData() {
            await DataStore.query(Project)
            .then(data => {
            data.filter(item => {
                if (item.Admin.includes(currentUser.id) 
                    || item.Users.includes(currentUser.id)) {
                setProjectNames(prevItems => [...prevItems, item.Name]);
                setProjectIDs(prevItems => [...prevItems, item.id]);
                return item.Name;
                }})}).catch(error => {
            console.error(error);});
        }
        fetchUserData();
    },[currentUser.id]);
    // Get Image URL
    useEffect(() => {
        async function fetchUserData() {
            const credentials = await Auth.currentCredentials();
            await Storage.vault.get(
                "shared/"+getProjectImageName, {
                level: "public",
                identityId: credentials.identityId
                }).then(data => {
                    setImageProjectURL(data);})}
            fetchUserData();
    },[setImageProjectURL,getProjectImageName])

    const handleCancelCreateProjectOnClick = (event) => {
        event.preventDefault();
        setIsCancelButtonLoading(!isCancelButtonLoading);
        if (window.confirm("Are you sure you want to leave?"))
            navigate('/');
        setIsCancelButtonLoading(false);};

    const handleSafeProjectImageChange = async ({ file }) => {
        const fileExtension = file.name.split('.').pop();
        return file
          .arrayBuffer()
          .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer))
          .then(async (hashBuffer) => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map((a) => a.toString(16).padStart(2, '0')).join('');
            let randomString = Math.random().toString(36).substring(2, 15);

      setImageProjectName(`${hashHex}${randomString}.${fileExtension}`);
      return { file, key: `${hashHex}${randomString}.${fileExtension}`};});
    }

    const handleSelectedProjectOnClick = async (event) => {
        event.preventDefault();
        setPINumState(0);
        setSprintNumState(0);
        if (projectName.length === 0) {
            const default_project_name = Object.values(projectNames);
            setProjectNameState(default_project_name[0]);}
        else
            setProjectNameState(projectName);

            const getProjectByID = await DataStore.query(Project,selectedProjectID);
            let isUserAdminMessage = "You are logged in as a";
            if (getProjectByID.Admin.includes(currentUser.id))
            isUserAdminMessage += "n administrator!";
            else
            isUserAdminMessage += " user!";
            navigate('/board',{ state: { alert_show:'block' , alert_variant: "success", alert_description: isUserAdminMessage }});
            window.location.reload();
    };

    const handleSelectedProjectOnChange = async (event) => {
        event.preventDefault();
        setSelectedProject(event.target.value);
    };
    
    const handleSelectedCreateOneProjectOnClick = (event) => {
        event.preventDefault();
        setIsCancelButtonLoading(!isCancelButtonLoading);
        if (window.confirm("Are you sure you want to leave this page?"))
            navigate('/create-project');
        setIsCancelButtonLoading(false);};

        const handleSaveAddRemoveUser = async (event) => {
            setIsLoading(!isLoading);
            let customMessate = "";
            const getProject = await DataStore.query(Project,selectedProjectID);
            // if User is in User mode
            if (!radioAdminUserMode) {
                await DataStore.save(Project.copyOf(getProject, item => {
                    item.Users = selectedAdminUser;
                    }));
            customMessate = "User added/removed !";
            } else {
                // if User is in Admin
                if (radioAdminUserMode) {
                    await DataStore.save(Project.copyOf(getProject, item => {
                        item.Admin = selectedAdminUser;
                        }));
                    customMessate = "Admin added/removed !";
            }}
            setIsLoading(false);
            navigate('/profile', { state: { alert_show:'block' ,add_remove_user:false, alert_variant: "success",selectedUserID:currentUser.id, alert_description: customMessate }});
            window.location.reload();
        };


    return {
        handleSaveAddRemoveUser,
        navigate,
        location,
        handleProjectName,
        projectName,
        initialProjectName,
        isProjectEmpty,
        setProjectNames,
        projectNames,
        projectIDs,
        isConfirmButtonLoading,
        isCancelButtonLoading,
        handleSelectedProjectOnChange,
        handleConfirmCreateProjectOnClick,
        handleCancelCreateProjectOnClick,
        handleSafeProjectImageChange,
        handleSelectedProjectOnClick,
        handleSelectedCreateOneProjectOnClick,
        errorMessageProjectName,
        selectedProject,
        setSelectedProject,
        setImageProjectName,
        imageProjectName,
        imageProjectURL,
        getProjectID,
        handleSelectProjectName,
        handleSaveEditProjectClick,
        handleDeleteProjectClick,
    }}