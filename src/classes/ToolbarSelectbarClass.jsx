import { useNavigate } from "react-router-dom";

export function ToolbarSelectClass() {
    const navigate = useNavigate();

    const handleProjectsSelectChange = (event) => {
        switch(event.target.value){
            case "switch project":
                if (window.confirm("Are you sure you want to switch to different project"
                +"we will redirect you to different page?")) 
                    navigate('/'); 
            break;
            default: 
                console.log("default");
            break;}};

    const handleYourWorkSelectChange = (event) => {
        switch(event.target.value){
            case "assigned to me":
                if (window.confirm("Are you sure you want to view all assigned tickets"
                +"we will redirect you to different page?")) 
                    navigate('/'); 
            break;
            case "boards":
                if (window.confirm("Are you sure you want to switch to all boards"
                +"we will redirect you to different page?")) 
                    navigate('/'); 
            break;
            default: 
                console.log("default");
            break;}};

    const handleTeamsSelectChange = (event) => {
        switch(event.target.value){
            case "switch project":
                if (window.confirm("Are you sure you want to switch to different project"
                +"we will redirect you to different page?")) 
                    navigate('/'); 
            break;
            default: 
            console.log("default");
            break;}};

    return {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
    }
}