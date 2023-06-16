import React,{ useEffect, useState } from "react"
import { TicketContext } from "../contexts/TicketContext";
import { DataStore } from "aws-amplify";
import { Ticket } from "../models";

export function SubtaskClass(props) {
    const {
        subtasks,
        setSubtasks,
        setDeletedTaskID
    } = React.useContext(TicketContext);

    const [ticketSubtasks,setTicketSubtasks] = useState([]);
    useEffect(() => {
        if (subtasks && Array.isArray(subtasks)) {
          Promise.all(subtasks.map(sub => DataStore.query(Ticket, sub)))
            .then(newTicketSubs => {
              const validSubs = newTicketSubs.filter(item => item !== undefined);
              setTicketSubtasks(validSubs);
            });
        } else setTicketSubtasks([]);
      }, [subtasks]);
      

    const unlinkSubtaskClick = (sub_id) => {
        const removedSubtask = subtasks.filter(item => item !== sub_id);
        setSubtasks(removedSubtask);
        setDeletedTaskID(prevState => [...prevState,sub_id]);
    };

    return {
        ticketSubtasks,
        unlinkSubtaskClick
    }
}