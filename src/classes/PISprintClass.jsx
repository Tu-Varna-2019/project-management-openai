import { DataStore } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { PI, Sprint } from "../models";
import { ProjectContext } from "../contexts/ProjectContext";
import { getPINumState, getSprintNumState, setPINumState, setSprintNumState } from "../states";
import { UserContext } from "../contexts/UserContext";
import Swal from "sweetalert2";

export function PISprintClass() {
    const {
        getProjectID,
        navigate,
    } = useContext(ProjectContext);

    const {
        isUserAdmin
    } = useContext(UserContext);

    const [PIID,setPIID] = useState("");
    const [startDate,setStartDate] = useState("-");
    const [endDate,setEndDate] = useState("-");
    const [PINum,setPINum] = useState( 0 );
    const [PINumbers,setPINumbers] = useState(["","create one"]);
    const [getBiggestPINum,setGetBiggestPINum] = useState(0);
    const [getBiggestSprintNum,setGetBiggestSprintNum] = useState(0);

    const [sprintID,setSprintID] = useState("");
    const [sprintNum,setSprintNum] = useState(0);
    const [sprintNumbers,setSprintNumbers] = useState(["","create one"]);

    useEffect(() => {
        if (getPINumState() !== "0") {
        setPINum(getPINumState());
        if (getSprintNumState() !== "0"){
        setSprintNum(getSprintNumState());
        }
        }
    },[]);

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
                if (item.piID === PIID) {
                setSprintNumbers(prevItems => [...prevItems, item.Number]);}
                return item.Number;})}).catch(error => {
            console.error(error);});
        }
        fetchSprintData()
    },[setPINumbers,setPINum,PIID,isUserAdmin]);

    // Get PIID by PINumber
    useEffect(() => {
        async function fetchSprintData(){
            await DataStore.query(PI)
            .then(data => {
            data.filter(item => {
                if (item.Number === parseInt(PINum) 
                && item.projectID === getProjectID)
                setPIID(item.id);
                return item.Number;})}).catch(error => {
            console.error(error);});
        }
        fetchSprintData()
    },[setPINumbers,setPINum,PIID,isUserAdmin,PINum,getProjectID]);
    // Get SprintID by SprintNum
    useEffect(() => {
        async function fetchSprintData(){
            await DataStore.query(Sprint)
            .then(data => {
            data.filter(item => {
                if (item.Number === parseInt(sprintNum) && item.piID === PIID) {
                setSprintID(item.id);
                setStartDate(item.StartDate);
                setEndDate(item.EndDate);
            }
                return item.Number;})}).catch(error => {
            console.error(error);});
        }
        fetchSprintData()
    },[setPINumbers,setPINum,PIID,isUserAdmin,PINum,sprintNum]);

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
    },[setGetBiggestSprintNum,PIID,getBiggestSprintNum]);

    const handleCreatePI = async (newPInum) => {
        await DataStore.save(
            new PI({
                "Number": newPInum,
                "projectID": getProjectID,
                "Sprints": []
            }));
        setPINum(newPInum);
        setPINumState(newPInum);
        
        Swal.fire({
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        setTimeout(() => {
            navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `PI ${newPInum} created!` }});
            window.location.reload();
          }, 1200);
    };
    const handleCreateSprint = async (newSprintnum) => {
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const newCreatedDate = new Date(new Date().getTime() - timezoneOffset);
        const newCreatedDateISO = newCreatedDate.toISOString();
        const futureDate =  new Date((new Date().getTime() + 14 * 24 * 60 * 60 * 1000) - timezoneOffset);
        const newFutureDateISO = futureDate.toISOString();
        await DataStore.save(
            new Sprint({
                "StartDate": newCreatedDateISO,
                "EndDate": newFutureDateISO,
                "Number": newSprintnum,
                "piID": PIID,
                "Tickets": []
            }));
        setSprintNum(newSprintnum);
        setSprintNumState(newSprintnum);

        Swal.fire({
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        setTimeout(() => {
            navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `Sprint ${newSprintnum} created!` }});
            window.location.reload();
          }, 1200);
    };

    const handleSelectPINumberChange = async (event) => {
        switch(event.target.value) {
            case "create one":
                    Swal.fire({
                    title: 'Are you sure?',
                    text: `Are you sure you want to create another PI ${getBiggestPINum+1}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        handleCreatePI(getBiggestPINum+1);
                    }})
                break;
            case "delete selected":
                if (PINum !== 0) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: `Are you sure you want to delete selected PI ${PINum} ?`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                      }).then(async (result) => {
                        if (result.isConfirmed) {

                   const modelToDelete = await DataStore.query(PI, PIID);
                   const modelVals = await modelToDelete.Sprints.values;
                    if(modelVals.length !== 0){
                        Swal.fire({
                            allowOutsideClick: false,
                            didOpen: () => {
                                Swal.showLoading();
                            }
                        });
                        setTimeout(() => {
                        navigate('/board', { state: { alert_show:'block' , alert_variant: "error", alert_description: `Please first remove all the sprints from PI ${PINum}!` }});
                        window.location.reload();
                    }, 1200);
                    } else {
                  DataStore.delete(modelToDelete);
                  setPINum(0);
                  setPINumState(0);
                  Swal.fire({
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                    });
                    setTimeout(() => {
                  navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `PI ${PINum} deleted!` }});
                  window.location.reload();
                }, 1200);
                }
                }})
            }
                break;
            default:
                if (event.target.value !== ""){
                    setPINum(event.target.value);
                    setPINumState(event.target.value);}
                break;}
    };

    const handleSelectSprintNumberChange = async (event) => {
        switch(event.target.value) {
            case "create one":          
                Swal.fire({
                    title: 'Are you sure?',
                    text: `Are you sure you want to create another sprint ${getBiggestSprintNum+1}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        handleCreateSprint(getBiggestSprintNum+1);
                    }})
                break;
                case "delete selected":
                    if (parseInt(sprintNum) !== 0 ) {
                            Swal.fire({
                                title: 'Are you sure?',
                                text: `Are you sure you want to delete selected Sprint ${sprintNum} ?`,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes'
                              }).then(async (result) => {
                                if (result.isConfirmed) {
        
                            const modelToDelete = await DataStore.query(Sprint, sprintID);
                            const modelVals = await modelToDelete.Tickets.values;
                            if(modelVals.length !== 0){
                                Swal.fire({
                                    allowOutsideClick: false,
                                    didOpen: () => {
                                        Swal.showLoading();
                                    }
                                });
                                setTimeout(() => {
                                navigate('/board', { state: { alert_show:'block' , alert_variant: "error", alert_description: `Please first remove all the tickets from Sprint ${sprintNum}!` }});
                                window.location.reload();
                            }, 1200);
                            } else {
                           await DataStore.delete(modelToDelete);
                            setSprintNum(0);
                            setSprintNumState(0);
                            Swal.fire({
                                allowOutsideClick: false,
                                didOpen: () => {
                                    Swal.showLoading();
                                }
                            });
                            setTimeout(() => {
                            navigate('/board', { state: { alert_show:'block' , alert_variant: "success", alert_description: `Sprint ${sprintNum} deleted!` }});
                            window.location.reload();
                            }, 1200);
                        }
                    }})
                    }
                    break;
            default:
                if (event.target.value !== ""){
                setSprintNum(event.target.value);
                setSprintNumState(event.target.value);}
                break;}};

    return {
        startDate,
        endDate,
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