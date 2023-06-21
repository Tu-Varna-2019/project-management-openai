import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { TicketContext } from "../contexts/TicketContext";
import { ProjectContext } from "../contexts/ProjectContext";
import { getProjectNameState } from "../states";
import { DataStore } from "aws-amplify";
import { Ticket } from "../models";

export function GithubClass() {

  const {
    editTicket
  } = useContext(TicketContext);
  const {
    location,
    navigate,
  } = useContext(ProjectContext);

  const showGithubActions = location.state ? location.state.show_git : false;
  const viewGithubCommits = location.state ? location.state.view_mode : false;
  const repoOwner = process.env.REACT_APP_GITHUB_REPO_OWNER;
  const repoName = process.env.REACT_APP_GITHUB_REPO_NAME;
  const [shaTicket,setShaTicket] = useState([]);
  const [selectedSha,setSelectedSha] = useState(shaTicket);
  const gitActions = ["","Add&Remove","View current"];
  const [refreshGithubItems, setRefreshGithubItems] = useState(0);

  const [gitOptionsState,setGitOptionsState] = useState("");
  const [commits, setCommits] = useState([{
    "Name" : "",
    "AvatarURL": "",
    "Message":"",
    "CommitURL":"",
    "Date":"",
    "SHA":""
  }]);
  const [commitsSelected,setCommitsSelected] = useState([{}]);

  // Get all Sha from selected edited ticket
  useEffect(() => {
    setShaTicket([]);
    if (editTicket !== undefined && editTicket.GitCommit !== null ){
      setShaTicket(editTicket.GitCommit);
    }
  },[location.state,editTicket]);

  useEffect(() => {
    if (viewGithubCommits)
    setCommitsSelected(
      commits.filter(item => selectedSha.includes(item.SHA)))  
    
  },[location.state,editTicket,viewGithubCommits,commits,selectedSha]);

  useEffect(() => {
    setCommits([]);
    axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`, {
      headers: {
        'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`}
    })
    .then(response => {
      response.data.forEach(commit => {
        setCommits(prevList => [...prevList,{
          "Name" : commit.author.login,
          "AvatarURL": commit.author ? commit.author.avatar_url : "Not available",
          "Message":commit.commit.message,
          "CommitURL":commit.html_url,
          "Date":commit.commit.committer.date,
          "SHA":commit.sha
        }])});})
    .catch(error => {
      console.error('Error fetching data: ', error);});
  }, [repoOwner, repoName]);

  const handleGitActionsOptions = (event) => {
    setSelectedSha(shaTicket);
    switch(event.target.value){
      // Add&Remove
      case gitActions[1]:
        setGitOptionsState("Add&Remove");
        navigate("/board",{state:{selectedTicket:editTicket,edited:true,show_git:true,project: getProjectNameState()}});
        break;
      // View current
      case gitActions[2]:
        setGitOptionsState("View current");
        navigate("/board",{state:{selectedTicket:editTicket,edited:true,show_git:true,view_mode:true,project: getProjectNameState()}});
        break;
      default:
        console.log("default");
      break;
    }

  };

  const handleBackGitActions = (event) => {
    navigate("/board",{state:{selectedTicket:editTicket,edited:true,show_git:false,project: getProjectNameState()}});
  };

  const handleSaveGitActions = async (event) => {
    let editTicketDataStore = await DataStore.query(Ticket, editTicket.id);
      switch(gitOptionsState) {
      case "Add&Remove":
        await DataStore.save(Ticket.copyOf(editTicketDataStore, item => {
          item.GitCommit = selectedSha}));
     editTicketDataStore = await DataStore.query(Ticket, editTicket.id);
      navigate("/board",{state:{selectedTicket:editTicketDataStore,edited:true,show_git:false,project: getProjectNameState()}});
      break;
    default:
      console.log("default");
    break;
    }
    
  };

  const handleGithubItemClick = (git_url,git_sha) => {
    if ( gitOptionsState === "View current" )
      window.open(git_url, '_blank');
    else {
      setRefreshGithubItems(refreshItem => refreshItem +1);
      if (!selectedSha.includes(git_sha))
      setSelectedSha(prev=> [...prev,git_sha]);
      else
      setSelectedSha(selectedSha.filter(item => item !== git_sha));
    }
  }


  return {
      viewGithubCommits,
      commitsSelected,
      refreshGithubItems,
      selectedSha,
      commits,
      shaTicket,
      handleGitActionsOptions,
      gitActions,
      showGithubActions,
      handleBackGitActions,
      handleSaveGitActions,
      handleGithubItemClick,
  }}