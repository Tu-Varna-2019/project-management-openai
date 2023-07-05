import React, { useContext } from "react"
import { TicketContext } from "../../contexts/TicketContext";
import { CreateIssueTemplateFunc } from "../../overrides/CreateIssueTemplateOverride";
import { CreateIssueTemplate, EditIssueTemplate } from "../../ui-components";
import { EditIssueTemplateFunc } from "../../overrides/EditIssueTemplateOverride";
import { IssueTemplateContext } from "../../contexts/IssueTemplateContext";
import { Loader } from "@aws-amplify/ui-react";
import EditTicketComponent from "../EditTicketComponent";
import CreateTicketComponent from "../CreateTicketComponent";

export default function ToolbarGlobalComponent () {

    const {
        editIssueTemplateBoolean,
        createIssueTemplateBoolean,
        createTicketBoolean,
        editTicketBoolean,
      } = useContext(TicketContext);
      const {
        CreateIssueTemplateOverride,
      } = CreateIssueTemplateFunc();
      const {
        EditIssueTemplateOverride,
      } = EditIssueTemplateFunc();
      const {
        openaiProgBar
      } = useContext(IssueTemplateContext);

    const openAIProgBarBottom = editTicketBoolean === true ? 300 : createTicketBoolean === true ? 120 : createIssueTemplateBoolean === true ? 240 : editIssueTemplateBoolean === true ? 200 : 0;
    const openAIProgBarRight = editTicketBoolean === true ? 1070 : 690 ;  
    return (
        <>
        <div style={{ position: 'absolute',display: 'block', bottom: 150, right: 0 }}>

        { editTicketBoolean && (<EditTicketComponent/>)}
        { createTicketBoolean && (<CreateTicketComponent/>)}

        {createIssueTemplateBoolean && (
        <CreateIssueTemplate overrides={CreateIssueTemplateOverride}/>)}
        
        {editIssueTemplateBoolean && (
        <>
        <EditIssueTemplate overrides={EditIssueTemplateOverride}/>
        </>
        )}
        {openaiProgBar && (
        <div style={{ position: 'absolute',display: 'block', bottom: openAIProgBarBottom, right: openAIProgBarRight , width:480 }}>
        <Loader/>
        <Loader variation="linear" />
        </div>
        )}
      </div>
      </>
    )
}