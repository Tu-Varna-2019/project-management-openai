import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Auth, DataStore , Storage } from 'aws-amplify';
import { Project } from '../models';
import { getProjectNameState , setPINumState, setProjectNameState, setSprintNumState } from '../states';


export function ProjectClass(props) {

    const [projectName,setProjectName] = useState("");
    const [initialProjectName,setInitialProjectName] = useState("");
    const [getProjectID,setGetProjectID] = useState("");
    const [getProjectImageName,setGetProjectImageName] = useState("");
    const [projectNames,setProjectNames] = useState([]);
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

    const handleProjectName = (event) => {
        event.preventDefault();
        setProjectName(event.target.value);
        setErrorMessageProjectName("Project name must not be empty !");};

    const handleSelectProjectName = (event) => {
        event.preventDefault();
        setProjectName(event.target.value);
        setInitialProjectName(event.target.value);
        setSelectedProjectID(projectIDs[event.target.selectedIndex]);
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
                        console.log(`Name ${projectName} already exists!`);
                        setErrorMessageProjectName(`Name ${projectName} already exists!`);
                        return item;})
                }).catch(error => {
                console.error(error);
                });
            if (!does_project_name_exist) {
                await DataStore.save(
                    new Project({
                        "Name": projectName,
                        "ImageProject": imageProjectName }));
                console.log("Project created!");
                navigate('/');}}
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
                setProjectNames(prevItems => [...prevItems, item.Name]);
                setProjectIDs(prevItems => [...prevItems, item.id]);
                return item.Name;
                })}).catch(error => {
            console.error(error);});
        }
        fetchUserData();
    },[]);
    // Get Image URL
    useEffect(() => {
        async function fetchUserData() {
            const credentials = await Auth.currentCredentials();
            await Storage.vault.get(
                getProjectImageName, {
                level: "protected",
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

    const handleSelectedProjectOnClick = (event) => {
        event.preventDefault();
        setPINumState(0);
        setSprintNumState(0);
        if (projectName.length === 0) {
            const default_project_name = Object.values(projectNames);
            setProjectNameState(default_project_name[0]);}
        else
            setProjectNameState(projectName);
            navigate('/board');
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


    return {
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