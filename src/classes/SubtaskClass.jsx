// import { useEffect, useState } from "react"
// import { DataStore } from "aws-amplify";
// import { Ticket } from "../models";
// import { TicketClass } from "./TicketClass";


// export function Subtasklass(props) {

//     const {
//         ticketID,
//         setSelectedTaskID,
//     } = TicketClass();

//     const [ticketSubtasks,setTicketSubtasks] = useState([]);
//     useEffect(() => {
//         async function fetchUser(){
//             await DataStore.query(Ticket)
//             .then(data => {
//                 data.filter( async item => {
//                     if (item.TicketID === ticketID ) {
//                         const subtasks = await DataStore.query(Ticket, item.id);
//                         //console.log(subtasks);
//                         setTicketSubtasks(prevList => [...prevList, subtasks]);
//                     return item;}})
//         }).catch(error => {console.error(error);});}
//         fetchUser();
//     },[setSelectedTaskID,ticketID]);

//     return {
//         ticketSubtasks
//     }
// }