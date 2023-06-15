import React, { useContext } from 'react';
import { TicketContext } from '../contexts/TicketContext';
import { IssueTemplateContext } from '../contexts/IssueTemplateContext';


export function CreateTicketFunc (props) {

    const {
        isTitleEmpty,
        isLoading,
        getBiggestTicketID,
        handleCreateTicketClick,
        handleCloseCreateTicketClick,
    } = React.useContext(TicketContext);
    const {
        aiOptions,
        handleCreateTicketAIOptionsChange,
    } = useContext(IssueTemplateContext);
    
    const CreateTicketOverride = {
        create_ticket_text:{
            children: "Create ticket KAI-"+getBiggestTicketID
        },
        ai_options_select_field:{
            options: aiOptions,
            onChange: (event) => (handleCreateTicketAIOptionsChange(event,"ticket")),
            style:{color:"transparent"},
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