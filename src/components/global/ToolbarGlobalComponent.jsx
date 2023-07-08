import React, { useContext } from "react"
import { TicketContext } from "../../contexts/TicketContext";
import { CreateIssueTemplateFunc } from "../../overrides/CreateIssueTemplateOverride";
import { AddRemoveUser, CreateIssueTemplate, EditIssueTemplate, Toolbar, UsersAdminInfoCollection } from "../../ui-components";
import { EditIssueTemplateFunc } from "../../overrides/EditIssueTemplateOverride";
import { IssueTemplateContext } from "../../contexts/IssueTemplateContext";
import { Loader } from "@aws-amplify/ui-react";
import EditTicketComponent from "../EditTicketComponent";
import CreateTicketComponent from "../CreateTicketComponent";
import { ToolbarSelectContext } from "../../contexts/ToolbarSelectContext";
import SearchBoxRectComponent from "../ShowSearchRectComponent";
import { ToolbarFunc } from "../../overrides/ToolbarOverrides";
import { ProjectContext } from "../../contexts/ProjectContext";
import { AddRemoveUserFunc } from "../../overrides/AddRemoveUserOverride";
import { UserContext } from "../../contexts/UserContext";
import { UsersAdminInfoFunc } from "../../overrides/UsersAdminInfoOverride";

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
      const {
        showSearchRect
      } = useContext(ToolbarSelectContext);
      const {
        ToolbarOverride,
      } = ToolbarFunc();
      const {
        location
      } = useContext(ProjectContext);
      const {
        AddRemoveUserOverride
      } = AddRemoveUserFunc();
      const {
        addRemoveUserBoolean,
      } = useContext(UserContext);
      const {
        UsersAdminInfoOverrideCollectionOverride,
        UsersAdminInfoOverride,
      } = UsersAdminInfoFunc();

    const openAIProgBarBottom = editTicketBoolean === true ? 300 : createTicketBoolean === true ? 120 : createIssueTemplateBoolean === true ? 240 : editIssueTemplateBoolean === true ? 200 : 0;
    const openAIProgBarRight = editTicketBoolean === true ? 1070 : 690 ;
    
    return (
        <>
        <div className='.amplify-container'
          style={{ position:'relative', display: 'inline-block'}}>
        {(location.pathname === "/board" ||
        location.pathname === "/backlog" ||
        location.pathname === "/profile" ||
        location.pathname === "/edit-ticket" ||
        location.pathname === "*") 
        && (
        <div style={{ position: 'absolute',display: 'block', bottom: 828, left: 0, width:825 }}>
        <Toolbar overrides={ToolbarOverride}/>
        </div>
        )}

        {!showSearchRect && (<SearchBoxRectComponent/>)}

      <div style={{ position: 'absolute',display: 'block', bottom: 0, left: 0 }}>

        {addRemoveUserBoolean && (
            <>
            <AddRemoveUser overrides={AddRemoveUserOverride}/>
            <div style={{ position: 'absolute' , width:"350px", display: 'block',top: "900px",left: "800px",objectFit: "cover"}}>
              <UsersAdminInfoCollection style={{position: 'absolute',  bottom: "180px", left: "-50px" }}
              overrides={UsersAdminInfoOverrideCollectionOverride}
              overrideItems={UsersAdminInfoOverride}/>
          </div>
          </>
          )}

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
      </div>
      </>
    )
}