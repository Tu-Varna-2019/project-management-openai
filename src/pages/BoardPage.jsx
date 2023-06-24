import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Board, CreateIssueTemplate, EditIssueTemplate, ProjectVerticalSelectField, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketToDoCollection, Toolbar } from '../ui-components';
import { BoardFunc } from '../overrides/BoardOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { CreateIssueTemplateFunc } from '../overrides/CreateIssueTemplateOverride';
import { EditIssueTemplateFunc } from '../overrides/EditIssueTemplateOverride';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { Loader  } from '@aws-amplify/ui-react';
import { IssueTemplateContext } from '../contexts/IssueTemplateContext';
import { TicketContext } from '../contexts/TicketContext';
import SearchBoxRectComponent from '../components/ShowSearchRectComponent';
import EditTicketComponent from '../components/EditTicketComponent';
import CreateTicketComponent from '../components/CreateTicketComponent';


export default function BoardPage(props) {
  const {
    BoardComponentOverride,
    BoardTicketToDoOverride,
    BoardTicketInProgressOverride,
    BoardTicketInReviewOverride,
    BoardTicketDoneOverride,
    customOverrideItems,
    isTicketToDoEmptyTop,
    isTicketInProgressEmptyTop,
    isTicketInReviewEmptyTop,
    isTicketDoneEmptyTop,
  }= BoardFunc();
  const {
    ToolbarOverride,
  } = ToolbarFunc();
  const {
    EditIssueTemplateOverride,
  } = EditIssueTemplateFunc();
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();
  const {
    CreateIssueTemplateOverride,
  } = CreateIssueTemplateFunc();
  const {
    showSearchRect
  } = useContext(ToolbarSelectContext);
  const {
    editIssueTemplateBoolean,
    createIssueTemplateBoolean,
    createTicketBoolean,
    editTicketBoolean,
  } = useContext(TicketContext);
  const {
    openaiProgBar
  } = useContext(IssueTemplateContext);
    
    const openAIProgBarBottom = editTicketBoolean === true ? 300 : createTicketBoolean === true ? 120 : createIssueTemplateBoolean === true ? 240 : editIssueTemplateBoolean === true ? 200 : 0;
    const openAIProgBarRight = editTicketBoolean === true ? 1070 : 690 ;

    return(
      <>
        <div className='.amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
          <Board overrides={BoardComponentOverride}/>
        <div
          style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketToDoEmptyTop,left: "460px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute', bottom: "50px" , left:"-90px" }}
              overrides={BoardTicketToDoOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketInProgressEmptyTop,left: "850px",objectFit: "cover"}}>
          <TicketInProgressCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInProgressOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketInReviewEmptyTop,left: "1240px",objectFit: "cover"}}>
          <TicketInReviewCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInReviewOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketDoneEmptyTop,left: "1630px",objectFit: "cover"}}>
          <TicketDoneCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketDoneOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825 }}>
        <Toolbar overrides={ToolbarOverride}/>
        </div>

        {!showSearchRect && (<SearchBoxRectComponent/>)}

        <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
          <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
        </div>

        <div style={{ position: 'absolute',display: 'block', bottom: 0, right: 0 }}>

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
        <Loader />
        <Loader variation="linear" />
        </div>
        )}
      </div>
      </div>
      </>)}