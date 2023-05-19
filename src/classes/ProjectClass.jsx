import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { useLocation,useNavigate } from 'react-router-dom';
import { API , DataStore , Storage } from 'aws-amplify';
import { Project } from '../models';


export function ProjectClass(props) {
    const [projectName,setProjectName] = useState("");
    const [projectNames,setProjectNames] = useState([]);
    const [projects,setProjects] = useState("");
    const [selectedProject,setSelectedProject] = useState("");

    const [isConfirmButtonLoading,setIsConfirmButtonLoading] = useState(false);
    const [isCancelButtonLoading,setIsCancelButtonLoading] = useState(false);
    const[errorMessageProjectName,setErrorMessageProjectName] = useState("Project name must not be empty !");
    // Object Image name
    const [imageProjectName,setImageProjectName] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const isProjectEmpty =  /^\s*$/.test(projectName);
    const received_project_name = location.state?.project;

    const handleProjectName = (event) => {
        event.preventDefault();
        setProjectName(event.target.value);
        setErrorMessageProjectName("Project name must not be empty !");
    };

    const handleSelectedProject = (event) => {
        event.preventDefault();
        setProjectName(event.target.value);
    };

    const handleConfirmCreateProjectOnClick = async (event) => {
        event.preventDefault();
        setIsConfirmButtonLoading(!isConfirmButtonLoading);
        if (window.confirm(`Are you sure you want to \
           create project with the following name : ${projectName} ?`)) {
            // Check if project with the following name already exists
            let does_project_name_exist = false;
            await DataStore.query(Project)
            .then(data => {
                data.filter(item => { 
                    if (item.Name === projectName)
                        does_project_name_exist = true;
                        console.log(`Name ${projectName} already exists!`);
                        setErrorMessageProjectName(`Name ${projectName} already exists!`);
                    } )
                }).catch(error => {
                console.error(error);
                });
            if (!does_project_name_exist) {
                const credentials = await Auth.currentCredentials();
                let s3_object_url = "";
                await Storage.get(
                    imageProjectName,{
                    level:"protected",
                    identityId: credentials.identityId
                }).then(data => {
                    s3_object_url = data;
                    console.log(`Image URL: ${s3_object_url}`);
                });
                await DataStore.save(
                    new Project({
                        "Name": projectName,
                        "ImageProject": s3_object_url}));
                console.log("Project created!");
                navigate('/');}
        }
        setIsConfirmButtonLoading(false);
    };

    const handleCancelCreateProjectOnClick = (event) => {
        event.preventDefault();
        setIsCancelButtonLoading(!isCancelButtonLoading);
        if (window.confirm("Are you sure you want to leave?"))
            navigate('/');
        setIsCancelButtonLoading(false);
    };

    const handleSafeProjectImageChange = async (event) => {
        await Storage.put(event,{level: 'protected'});
        console.log(`Saving file: ${event} `);
        setImageProjectName(event);
        }

    const handleSelectedProjectOnClick = (event) => {
        event.preventDefault();
        navigate('/board',{ state: { project: selectedProject }});
    };

    const handleSelectedProjectOnChange = (event) => {
        event.preventDefault();
        setSelectedProject(event.target.value);
    };

    const handleSelectedCreateOneProjectOnClick = (event) => {
        event.preventDefault();
        setIsCancelButtonLoading(!isCancelButtonLoading);
        if (window.confirm("Are you sure you want to leave this page?"))
            navigate('/create-project');
        setIsCancelButtonLoading(false);
    };


    return {
        handleProjectName,
        projectName,
        isProjectEmpty,
        projects,
        setProjects,
        setProjectNames,
        projectNames,
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
        received_project_name
    }
}