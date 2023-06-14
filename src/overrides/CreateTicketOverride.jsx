import React from 'react';
import { TicketContext } from '../contexts/TicketContext';


export function CreateTicketFunc (props) {

    const {
        isTitleEmpty,
        isLoading,
        getBiggestTicketID,
        handleCreateTicketClick,
        handleCloseCreateTicketClick,
    } = React.useContext(TicketContext);
    
    const CreateTicketOverride = {
        create_ticket_text:{
            children: "Create ticket KAI-"+getBiggestTicketID
        },
        ai_options_select_field:{
            
        },
        create_button:{
            onClick : (event) => (handleCreateTicketClick(event)),
            isDisabled: isTitleEmpty,
            isLoading: isLoading
            },
        cancel_button:{
            onClick: (event) => (handleCloseCreateTicketClick(event))},
    }


    return {
        CreateTicketOverride
    }
}