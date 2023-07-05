import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { IssueTemplate } from "../models";
import { DataStore,API} from "aws-amplify";
import { TicketContext } from "../contexts/TicketContext";
import { getProjectNameState } from "../states";
import {
    Predictions,
  } from '@aws-amplify/predictions';
import { UserContext } from "../contexts/UserContext";

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
        setTitle,
        setDescription,
        setComment,
        setIssueType,
        setStoryPoint,
    } = useContext(TicketContext);
    const {
        location,
        navigate,
    } = useContext(ProjectContext);
    
    const {
        currentUser,
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
    const [aiOptions,setAiOptions] = useState(["","Translate to Bulgarian","Summarize","Generate template","Text to speech"]);
    const [audioTSpeech,setAudioTSpeech] = useState();
    const [openaiProgBar,setOpenaiProgBar] = useState(false);
    // Get issue templates by project
    useEffect(() => {
        setITNames([""]);
        setITIDs([""]);
        setITTitle("");
        setITDescription("");
        setITComment("");
        setITStoryPoint(0);
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
    },[setAudioTSpeech,audioTSpeech]);

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
        navigate(location.pathname,{state:{create_it:false,project: getProjectNameState(),selectedUserID:currentUser.id}})
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
           navigate(location.pathname, { state: { project:  getProjectNameState(),selectedUserID:currentUser.id, alert_show:'block' , alert_variant: "success", alert_description: `${ITTitle} has been successfully created!` }});
           window.location.reload();
        } catch (error) {
            setLoadingCreateIT(false);
            console.log(error);
            navigate(location.pathname, { state: { project:  getProjectNameState(),selectedUserID:currentUser.id, alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
            window.location.reload();
    }};
    // Close EditIssueTemplate component
    const handleClosedEditTicketClick = (event) => {
            event.preventDefault();   
            navigate(location.pathname,{state:{edited_it:false,project: getProjectNameState(),selectedUserID:currentUser.id}})
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
          navigate(location.pathname, { state: { project:  getProjectNameState(),selectedUserID:currentUser.id, alert_show:'block' , alert_variant: "success", alert_description: `${ITTitle} has been successfully edited!` }});
          window.location.reload();
        } catch (error) {
            setLoadingCreateIT(false);
            console.log(error);
            navigate(location.pathname, { state: { project:  getProjectNameState(),selectedUserID:currentUser.id, alert_show:'block' , alert_variant: "error", alert_description: "App is not supported in this browser's private mode! Please enable cookies!"}});
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
        if ( item.projectID === projectIDs[event.target.selectedIndex-1]) {
           setITNames(prevList => [...prevList,`${item.Title} : ${item.IssueType}`]);
           setITIDs(prevList => [...prevList,item.id]);}
        })));};

    const handleCreateTicketAIOptionsChange = async (event,templateType) => {
        event.preventDefault();
        setOpenaiProgBar(!openaiProgBar);
        let openai_response = "";
        const issueTypeChoice = templateType === "ticket" ?
        issueType : ITIssueType;
        try {
        switch(event.target.value) {
            case "Translate to Bulgarian":
                if (issueTypeChoice !== "") {
                    const title_summarize = templateType === "ticket" ? title : ITTitle;
                    const description_summarize = templateType === "ticket" ? description : ITDescription;
                    const comment_summarize = templateType === "ticket" ? comment : ITComment;
                    
                    if (title_summarize.trim() !== "" && description_summarize.trim() !== "" && comment_summarize.trim() !== "") {
                    openai_response = await postTranslate({
                        Title: title_summarize,
                        Description: description_summarize,
                        Comment: comment_summarize,
                        TicketFields: "Title,Description,Comment"
                    });
                    try {
                    openai_response = JSON.parse(openai_response);}catch(err){/* */}
                    
                    const openaiTitle = openai_response.Title;
                    const openaiDescription = openai_response.Description;
                    const openaiComment = openai_response.Comment;
    
                    if (openaiTitle === undefined || openaiDescription === undefined || openaiComment === undefined
                        || openaiTitle.trim() === "" || openaiDescription.trim() === "" || openaiComment.trim() === ""){
                        //console.log("undefined!");
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
                    }}}
                setOpenaiProgBar(false);
                break;
            case "Summarize":
                if (issueTypeChoice !== "") {
                    const title_summarize = templateType === "ticket" ? title : ITTitle;
                    const description_summarize = templateType === "ticket" ? description : ITDescription;
                    const comment_summarize = templateType === "ticket" ? comment : ITComment;
                    if (title_summarize.trim() !== "" && description_summarize.trim() !== "" && comment_summarize.trim() !== "") {
                    openai_response = await postSummarize({
                        Title: title_summarize,
                        Description: description_summarize,
                        Comment: comment_summarize,
                        TicketFields: "Title,Description,Comment"
                    });
                    try {
                    openai_response = JSON.parse(openai_response);}catch(err){/* */}
                    
                    const openaiTitle = openai_response.Title;
                    const openaiDescription = openai_response.Description;
                    const openaiComment = openai_response.Comment;
    
                    if (openaiTitle === undefined || openaiDescription === undefined || openaiComment === undefined
                        || openaiTitle.trim() === "" || openaiDescription.trim() === "" || openaiComment.trim() === ""){
                        //console.log("undefined!");
                        return handleCreateTicketAIOptionsChange(event,templateType);
                    }else{
                        setOpenaiProgBar(false);
                    if (templateType === "ticket") {
                        setTitle(openaiTitle);
                        setDescription(openaiDescription);
                        setComment(openaiComment);}
                    else {
                        setITTitle(openaiTitle);
                        setITDescription(openaiDescription);
                        setITComment(openaiComment);}
                    }}}
                setOpenaiProgBar(false);
                break;
            case "Generate template":
                if (issueTypeChoice !== "") {
                openai_response = await postGenerateTemplate({
                    IssueType: issueTypeChoice,
                    TicketFields: "Title,Description,Comment"
                });
                try {
                openai_response = JSON.parse(openai_response);}catch(err){/** */}

                const openaiTitle = openai_response.Title;
                const openaiDescription = openai_response.Description;
                const openaiComment = openai_response.Comment;

                if (openaiTitle === undefined || openaiDescription === undefined || openaiComment === undefined
                    || openaiTitle.trim() === "" || openaiDescription.trim() === "" || openaiComment.trim() === ""){
                    //console.log("undefined!");
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
                setOpenaiProgBar(false);
                break;
            case "Stop audio":
                setOpenaiProgBar(false);
                if (audioTSpeech) {
                    if (!audioTSpeech.paused) 
                    audioTSpeech.pause();
                }
                setAiOptions(["","Translate to Bulgarian","Summarize","Generate template","Text to speech"])
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
                    setAudioTSpeech(audio);
                    setAiOptions(["","Translate to Bulgarian","Summarize","Generate template","Text to speech","Stop audio"])
                }).catch(err => console.log({ err }));
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
                        setAiOptions(["","Translate to Bulgarian","Summarize","Generate template","Text to speech","Stop audio"])
                    }).catch(err => console.log({ err }));}
                setOpenaiProgBar(false);
                break;
            default:
                //console.log("default");
                setOpenaiProgBar(false);
                break;}
        }catch(err){console.log(err)}};

    const postGenerateTemplate = async (event) => {
        let response ="";
        try {
        response = await API.post('apiopenai','/openai/ticketTemplateCreate',
        { body: JSON.stringify({event}) });
        //console.log(response);
        }catch(err){console.log(err);}
        return response;}

    const postSummarize = async (event) => {
        let response ="";
        try {
        response = await API.post('apiopenai','/openai/ticketSummarize',
        { body: JSON.stringify({event}) });
        //console.log(response);
        }catch(err){console.log(err);}
        return response;}

    const postTranslate = async (event) => {
        let response ="";
        try {
        response = await API.post('apiopenai','/openai/ticketTranslate',
        { body: JSON.stringify({event}) });
        //console.log(response);
        }catch(err){console.log(err);}
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
        openaiProgBar,
    }}