import { DataStore } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { PI, Sprint } from "../models";
import { ProjectContext } from "../contexts/ProjectContext";
import { getPINumState, getSprintNumState, setPINumState, setSprintNumState } from "../states";

export function PISprintClass() {
    const {
        getProjectID,
        navigate,
    } = useContext(ProjectContext);

    const [PIID,setPIID] = useState("");
    const [PINum,setPINum] = useState( 0 );
    const [PINumbers,setPINumbers] = useState(["","create one"]);
    const [getBiggestPINum,setGetBiggestPINum] = useState(0);
    const [getBiggestSprintNum,setGetBiggestSprintNum] = useState(0);

    const [sprintID,setSprintID] = useState("");
    const [sprintNum,setSprintNum] = useState(0);
    const [sprintNumbers,setSprintNumbers] = useState(["","create one"]);

    useEffect(() => {
        setPINum(getPINumState());
        if (getPINumState() !== 0)
        setSprintNum(getSprintNumState());
        async function fetchPIData(){
        await DataStore.query(Sprint)
                .then(data => { data.filter(item => {
                    if (item.Number === +getSprintNumState()) {
                    setSprintID(item.id);}
                })
                });}
            fetchPIData();
    },[]);

    useEffect(() => {
        setPINumbers(["","create one"]);
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
    },[getProjectID]);
    useEffect(() => {
        setSprintNumbers(["","create one"]);
        async function fetchSprintData(){
            await DataStore.query(Sprint)
            .then(data => {
            data.filter(item => {
                if (item.piID === PIID)
                setSprintNumbers(prevItems => [...prevItems, item.Number]);
                return item.Number;})}).catch(error => {
            console.error(error);});
        }
        fetchSprintData()
    },[setPINumbers,setPINum,PIID]);
    // Get the largest PID ID by project
    useEffect(() => {
        async function fetchUserData() {
            let tempBigPINum = 1;
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