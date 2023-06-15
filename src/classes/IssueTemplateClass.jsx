import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { IssueTemplate } from "../models";
import { DataStore,API} from "aws-amplify";
import { TicketContext } from "../contexts/TicketContext";
import { UserContext } from "../contexts/UserContext";
import { getProjectNameState } from "../states";
import {
    Predictions,
  } from '@aws-amplify/predictions';

export function IssueTemplateClass(props) {

    const {
        getProjectID,
        projectIDs,
    } = useContext(ProjectContext);
    const {
        title,
        description,
        comment,
        issueType,
        priority,
        storyPoint,
        asigneeName,
        reporterName,
        epicLink,
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
    const [aiOptions,setAiOptions] = useState(["","Summarize","Generate template","Text to speech"]);
    const [audioTSpeech,setAudioTSpeech] = useState();
    // Get issue templates by project
    useEffect(() => {
        setITNames([""]);
        setITIDs([""]);
        setITTitle("");
        setITDescription("");
        setITComment("");
        setITStoryPoint("");
        setITIssueType("Task");
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

    useEffect(() => {
        if (audioTSpeech && audioTSpeech.paused ) 
            audioTSpeech.play();
    },[setAudioTSpeech,audioTSpeech])

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
        }};

    const handleSelectEditITChange = async (event) => {
        if (event.target.value !== "") {
        const selectedTemplate = await DataStore.query(IssueTemplate,ITIDs[event.target.selectedIndex]);
        setITIDIndex(event.target.selectedIndex);
        setITTitle(selectedTemplate.Title);
        setITDescription(selectedTemplate.Description);
        setITComment(selectedTemplate.Comment);
        setITIssueType(selectedTemplate.IssueType);
        setITStoryPoint(selectedTemplate.StoryPoint);
        }};

    const handleEditITSelectProjectName = async (event) => {
        setITNames([""]);
        setITIDs([""]);
        await DataStore.query(IssueTemplate)
        .then((data => data.filter(item => {
        if ( item.projectID === projectIDs[event.target.selectedIndex]) {
           setITNames(prevList => [...prevList,`${item.Title} : ${item.IssueType}`]);
           setITIDs(prevList => [...prevList,item.id]);}
        })));};

    const handleCreateTicketAIOptionsChange = async (event,templateType) => {
        event.preventDefault();
        let openai_response = "";
        const issueTypeChoice = templateType === "ticket" ?
        issueType : ITIssueType;
        try {
        switch(event.target.value) {
            case "Summarize":

                break;
            case "Generate template":
                if (issueTypeChoice !== "") {
                openai_response = await postGenerateTemplate({
                    IssueType: issueTypeChoice,
                    TicketFields: "Title,Description,Comment"
                });
                const openaiTitle = openai_response.match(/(?<=Title:).*(?=Description:)/s)?.[0]?.trim();
                const openaiDescription = openai_response.match(/(?<=Description:).*(?=Comment:)/s)?.[0]?.trim();
                const openaiComment = openai_response.match(/(?<=Comment:).*/s)?.[0]?.trim();
                if (openaiTitle === undefined || openaiDescription === undefined || openaiComment === undefined){
                    console.log("undefined!");
                    return handleCreateTicketAIOptionsChange(event,templateType);
                }else{
                if (templateType === "ticket") {
                    setTitle(openaiTitle);
                    setDescription(openaiDescription);
                    setComment(openaiComment);}
                else {
                    setITTitle(openaiTitle);
                    setITDescription(openaiDescription);
                    setITComment(openaiComment);}
                }}
                break;
            case "Stop audio":
                if (audioTSpeech) {
                    if (!audioTSpeech.paused) 
                    audioTSpeech.pause();
                }
                setAiOptions(["","Summarize","Generate template","Text to speech"])
                break;
            case "Text to speech":
                if (templateType === "ticket") {
                Predictions.convert({
                    textToSpeech: {
                      source: {
                        text: 
                        `Title: ${title} .
                        Description: ${description} .
                        Comment: ${comment} .
                        Priority: ${priority} .
                        IssueType: ${issueType} .
                        StoryPoint: ${storyPoint} .
                        Asignee: ${asigneeName} .
                        Reporter: ${reporterName} .
                        EpicLink: ${epicLink} .`
                      },
                    //  voiceId: "Amy" // default configured on aws-exports.js 
                    // list of different options are here https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
                    }}).then(result => { 
                    const audio = new Audio(result.speech.url);
                    audio.play();}).catch(err => console.log({ err }));
                }else {
                    Predictions.convert({
                        textToSpeech: {
                          source: {
                            text: 
                            `Title: ${ITTitle} .
                            Description: ${ITDescription} .
                            Comment: ${ITComment} .
                            IssueType: ${ITIssueType} .
                            StoryPoint: ${ITStoryPoint} .`
                          }}}).then(result => {
                        const audio = new Audio(result.speech.url);
                        setAudioTSpeech(audio);
                        setAiOptions(["","Summarize","Generate template","Text to speech","Stop audio"])
                    }).catch(err => console.log({ err }));}
                break;
            default:
                console.log("default");
                break;}
        }catch(err){console.log(err)}};

    const postGenerateTemplate = async (event) => {
        const response = await API.post('apiopenai','/openai/ticketTemplateCreate',
        { body: JSON.stringify({event}) });
        console.log(response);
        return response;}

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
        handleSelectEditITChange,
        handleCreateTicketAIOptionsChange,
        aiOptions,
    }}