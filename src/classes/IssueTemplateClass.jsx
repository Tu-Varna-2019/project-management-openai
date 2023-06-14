import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { IssueTemplate } from "../models";
import { DataStore } from "aws-amplify";
import { TicketContext } from "../contexts/TicketContext";
import { UserContext } from "../contexts/UserContext";
import { getProjectNameState } from "../states";

export function IssueTemplateClass(props) {

    const {
        getProjectID,
        projectIDs,
    } = useContext(ProjectContext);
    const {
        location,
        setTitle,
        setDescription,
        setComment,
        setIssueType,
        setStoryPoint,
    } = useContext(TicketContext);
    const {
        navigate,
    } = useContext(UserContext);

    const [ITTitle,setITTitle] = useState("");
    const [ITDescription,setITDescription] = useState("");
    const [ITIssueType,setITIssueType] = useState("Task");
    const [ITStoryPoint,setITStoryPoint] = useState(0);
    const [ITComment,setITComment] = useState("");
    const [loadingCreateIT,setLoadingCreateIT] = useState(false);
    const [ITNames,setITNames] = useState([""]);
    const [ITIDs,setITIDs] = useState([]);
    const [ITIDIndex,setITIDIndex] = useState(-1);
    const isITTitleEmpty =  /^\s*$/.test(ITTitle);
    const editIssueTemplate = location.state ? location.state.edited_it : false;
    // Get issue templates by project
    useEffect(() => {
        setITNames([""]);
        setITIDs([""]);
        async function fetchUserData() {
            if (!editIssueTemplate) {
                await DataStore.query(IssueTemplate)
                .then(data => {data.filter(item =>{
                if (item.projectID === getProjectID) {
                    setITNames(prevList => [...prevList,`${item.Title} : ${item.IssueType}`]);
                    setITIDs(prevList => [...prevList,item.id]);
                }});
            }).catch(error => {console.error(error);});}}
        fetchUserData();
    },[getProjectID,editIssueTemplate]);

    const handleITTitle = (event) => {
        event.preventDefault();
        setITTitle(event.target.value);
    };
    const handleITDescription = (event) => {
        event.preventDefault();
        setITDescription(event.target.value);
    };
    const handleITComment = (event) => {
        event.preventDefault();
        setITComment(event.target.value);
    };
    const handleITIssueType = (event) => {
        event.preventDefault();
        setITIssueType(event.target.value);
    };
    const handleITStoryPoints = (newValue) => {
        setITStoryPoint(newValue);
    };
    // Close CreateIssueTemplate component
    const handleClosedCreateITClick = (event) => {
        event.preventDefault();
        navigate("/board",{state:{create_it:false,project: getProjectNameState()}})
    };
    const handleCreateITClick = async  (event) => {
        event.preventDefault();
        setLoadingCreateIT(!loadingCreateIT);
        try {
            await DataStore.save(
                new IssueTemplate({
                    "Title": ITTitle,
                    "Description": ITDescription,
                    "Comment": ITComment,
                    "StoryPoint": ITStoryPoint,
                    "IssueType": ITIssueType,
                    "projectID": getProjectID
                }));
           navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${ITTitle} has been successfully created!` }});
           window.location.reload();
        } catch (error) {
            setLoadingCreateIT(false);
            console.log(error);
            navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
            window.location.reload();
    }};
    // Close EditIssueTemplate component
    const handleClosedEditTicketClick = (event) => {
            event.preventDefault();
            navigate("/board",{state:{edited_it:false,project: getProjectNameState()}})
    };
    const handleSaveITClick = async  (event) => {
        event.preventDefault();
        setLoadingCreateIT(!loadingCreateIT);
        try {
            const editITDataStore = await DataStore.query(IssueTemplate,ITIDs[ITIDIndex]);
            await DataStore.save(IssueTemplate.copyOf(editITDataStore, item => {
                item.Title = ITTitle;
                item.Description = ITDescription;
                item.Comment = ITComment;
                item.StoryPoint = ITStoryPoint;
                item.IssueType = ITIssueType;
            }));
           navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "success", alert_description: `${ITTitle} has been successfully edited!` }});
           window.location.reload();
        } catch (error) {
            setLoadingCreateIT(false);
            console.log(error);
            navigate('/board', { state: { project:  getProjectNameState(), alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
            window.location.reload();
    }};

    const handleSelectITChange = async (event) => {
        if (event.target.value !== "") {
        const selectedTemplate = await DataStore.query(IssueTemplate,ITIDs[event.target.selectedIndex]);
        setITIDIndex(event.target.selectedIndex);
        setTitle(selectedTemplate.Title);
        setDescription(selectedTemplate.Description);
        setComment(selectedTemplate.Comment);
        setIssueType(selectedTemplate.IssueType);
        setStoryPoint(selectedTemplate.StoryPoint);
        }
    };

    const handleEditITSelectProjectName = async (event) => {
        setITNames([""]);
        setITIDs([""]);
        await DataStore.query(IssueTemplate)
        .then((data => data.filter(item => {
        if ( item.projectID === projectIDs[event.target.selectedIndex]) {
           setITNames(prevList => [...prevList,`${item.Title} : ${item.IssueType}`]);
           setITIDs(prevList => [...prevList,item.id]);}
        })));};

    return {
        ITIDIndex,
        isITTitleEmpty,
        ITNames,
        ITTitle,
        ITDescription,
        ITIssueType,
        ITStoryPoint,
        ITComment,
        ITIDs,
        loadingCreateIT,
        handleSelectITChange,
        handleITTitle,
        handleITDescription,
        handleITComment,
        handleITIssueType,
        handleITStoryPoints,
        handleClosedCreateITClick,
        handleCreateITClick,
        handleClosedEditTicketClick,
        handleSaveITClick,
        handleEditITSelectProjectName,
    }}