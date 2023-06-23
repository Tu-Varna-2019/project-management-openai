import { DataStore } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { PI, Sprint } from "../models";
import { ProjectContext } from "../contexts/ProjectContext";
import { getPINumState, getSprintNumState, setPINumState, setSprintNumState } from "../states";
import { UserContext } from "../contexts/UserContext";

export function PISprintClass() {
    const {
        getProjectID,
        navigate,
    } = useContext(ProjectContext);

    const {
        isUserAdmin
    } = useContext(UserContext);

    const [PIID,setPIID] = useState("");
    const [PINum,setPINum] = useState( 0 );
    const [PINumbers,setPINumbers] = useState(["","create one"]);
    const [getBiggestPINum,setGetBiggestPINum] = useState(0);
    const [getBiggestSprintNum,setGetBiggestSprintNum] = useState(0);

    const [sprintID,setSprintID] = useState("");
    const [sprintNum,setSprintNum] = useState(0);
    const [sprintNumbers,setSprintNumbers] = useState(["","create one"]);

    useEffect(() => {
        if (getPINumState() !== "0") {
        setSprintNum(getSprintNumState());
        setPINum(getPINumState());
        }
        async function fetchPIData(){
        let currPIID = "";
        const PIObj = await DataStore.query(PI)
        PIObj.filter(item => {
            if (item.projectID === getProjectID && item.Number === parseInt(getSprintNumState())) {
            setPIID(item.id);
            currPIID = item.id;
            }})
        await DataStore.query(Sprint)
                .then(data => { data.filter(item => {
                    if ( item.piID === currPIID && item.piID !== "" && item.Number === parseInt(getSprintNumState())) {     
                    setSprintID(item.id);}})});}
            fetchPIData();
    },[getProjectID]);

    useEffect(() => {
        setPINumbers(isUserAdmin ?["","create one","delete selected"] : [""]);
        async function fetchPIData(){
            await DataStore.query(PI)
            .then(data => {
            data.filter(item => {
                if ( item.projectID === getProjectID)
                setPINumbers(prevItems => [...prevItems, item.Number]);
                return item.Number;
                })}).catch(error => {
            console.error(error);});
        }
        fetchPIData()
    },[getProjectID,isUserAdmin]);
    useEffect(() => {
        setSprintNumbers(isUserAdmin ?["","create one","delete selected"] : [""]);
        async function fetchSprintData(){
            await DataStore.query(Sprint)
            .then(data => {
            data.filter(item => {
                if (item.piID === PIID && item.piID !== "") {
                setSprintNumbers(prevItems => [...prevItems, item.Number]);}
                return item.Number;})}).catch(error => {
            console.error(error);});
        }
        fetchSprintData()
    },[setPINumbers,setPINum,PIID,isUserAdmin]);
    // Get the largest PID ID by project
    useEffect(() => {
        async function fetchUserData() {
            let tempBigPINum = 0;
            await DataStore.query(PI)
            .then(data => {
                data.filter(item => {
                if( item.projectID ===  getProjectID 
                    && tempBigPINum < item.Number) {
                        tempBigPINum = item.Number;
                    } return item;})})
            setGetBiggestPINum(tempBigPINum);
                }
        fetchUserData();
    },[getBiggestPINum,getProjectID]);
    // Get the largest Sprint ID by project
    useEffect(() => {
        async function fetchUserData() {
            let tempBigSprintNum = 0;
            await DataStore.query(Sprint)
            .then(data => {
                data.filter(item => {
                if( item.piID ===  PIID 
                    && tempBigSprintNum < item.Number) {
                       tempBigSprintNum = item.Number;
                    } return item;})})
                    setGetBiggestSprintNum(tempBigSprintNum);
                }
        fetchUserData();
    },[setGetBiggestSprintNum,setGetBiggestSprintNum,PIID,getBiggestSprintNum]);

    const handleCreatePI = async (newPInum) => {
        await DataStore.save(
            new PI({
                "Number": newPInum,
                "projectID": getProjectID,
                "Sprints": []
            }));
        setPINum(newPInum);
        setPINumState(newPInum);
        navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `PI ${newPInum} created!` }});
        window.location.reload();
    };
    const handleCreateSprint = async (newSprintnum) => {

        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newCreatedDate = new Date(new Date().getTime() - timezoneOffset);
        const newCreatedDateISO = newCreatedDate.toISOString();
        await DataStore.save(
            new Sprint({
                "StartDate": newCreatedDateISO,
               // "EndDate": "1970-01-01T12:30:23.999Z",
                "Number": newSprintnum,
                "piID": PIID,
                "Tickets": []
            }));
        setSprintNum(newSprintnum);
        setSprintNumState(newSprintnum);
       navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `Sprint ${newSprintnum} created!` }});
       window.location.reload();
    };

    const handleSelectPINumberChange = async (event) => {
        switch(event.target.value) {
            case "create one":
                if (window.confirm(`Are you sure you want to create another PI ${getBiggestPINum+1}`)) {
                    handleCreatePI(getBiggestPINum+1);
                }
                break;
            case "delete selected":
                if (PINum !== 0) {
                if (window.confirm(`Are you sure you want to delete selected PI ${PINum}`)) {
                    const selectPI = await DataStore.query(PI);
                    let deleted_PIID = "";
                    selectPI.filter(data=> {
                        if (data.projectID === getProjectID && data.Number ===parseInt(PINum)) {
                            deleted_PIID = data.id;
                        }
                    })
                    const modelToDelete = await DataStore.query(PI, deleted_PIID);
                   DataStore.delete(modelToDelete);
                   setPINum(0);
                   setPINumState(0);
                   navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `PI ${PINum} deleted!` }});
                    window.location.reload();
                }}
                break;
            default:
                if (event.target.value !== ""){
                    setPINum(event.target.value);
                    setPINumState(event.target.value);
                await DataStore.query(PI)
                .then(data => { data.filter(item => {
                    if (item.Number === parseInt(event.target.value)) {
                    setPIID(item.id);
                    setSprintID(0);
                    setSprintNum("");
                }
                })
                });}
                break;}
    };

    const handleSelectSprintNumberChange = async (event) => {
        switch(event.target.value) {
            case "create one":
                if (window.confirm(`Are you sure you want to create another sprint ${getBiggestSprintNum+1}`)) 
                    handleCreateSprint(getBiggestSprintNum+1);
                break;
                case "delete selected":
                    if (sprintID !== 0 && sprintID !== "") {
                        if (window.confirm(`Are you sure you want to delete selected Sprint ${sprintNum}`)) {
                            const modelToDelete = await DataStore.query(Sprint, sprintID);
                            DataStore.delete(modelToDelete);
                           setSprintNum(0);
                           setSprintNumState(0);
                           navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `Sprint ${PINum} deleted!` }});
                            window.location.reload();
                        }}
                    break;
            default:
                if (event.target.value !== ""){
                setSprintNum(event.target.value);
                setSprintNumState(event.target.value);
                await DataStore.query(Sprint)
                .then(data => { data.filter(item => {
                    if (item.Number === parseInt(event.target.value)) {
                    setSprintID(item.id);}})
                });}
                break;}
    };
    return {
        PIID,
        PINum,
        PINumbers,
        sprintNumbers,
        sprintNum,
        sprintID,
        setSprintID,
        setPIID,
        setSprintNum,
        handleCreatePI,
        handleSelectPINumberChange,
        handleSelectSprintNumberChange,
    }}