import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Board, ChildTicketShortCollection, CreateIssueTemplate, CreateTicket, CreateTicketScroll, EditIssueTemplate, EditTicket, ProjectVerticalSelectField, SearchBoxRect, SearchResultMatch, SearchResultMatchCollection, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketInfoScroll, TicketToDoCollection, Toolbar } from '../ui-components';
import { BoardFunc } from '../overrides/BoardOverride';
import { CreateTicketFunc } from '../overrides/CreateTicketOverride';
import { EditTicketFunc } from '../overrides/EditTicketOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';
import { SubtaskFunc } from '../overrides/SubtaskOverride';
import { CreateTicketScrollFunc } from '../overrides/CreateTicketScrollOverride';
import { CreateIssueTemplateFunc } from '../overrides/CreateIssueTemplateOverride';
import { EditIssueTemplateFunc } from '../overrides/EditIssueTemplateOverride';
import { ProjectContext } from '../contexts/ProjectContext';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';



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
    EditTicketOverride,
    FileImageTicketUpload
  } = EditTicketFunc();
  const {
    CreateTicketOverride
  }= CreateTicketFunc();
  const {
    ToolbarOverride,
    SearchTicketOverride,
    OverrideSearchTicketItems,
  } = ToolbarFunc();
  const {
    TicketInfoScrollOverride
  } = TicketInfoScrollFunc();
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();
  const {
    ChildTicketShortOverride,
    ChildTicketShortCollectionOverride
  } = SubtaskFunc();
  const {
    CreateIssueTemplateOverride,
  } = CreateIssueTemplateFunc();
const {
  CreateTicketScrollOverride,
} = CreateTicketScrollFunc();
const {
  EditIssueTemplateOverride,
} = EditIssueTemplateFunc();
const {
  location,
} = useContext(ProjectContext);
const {
  showSearchRect
} = useContext(ToolbarSelectContext);


    const editTicketBoolean = location.state ? location.state.edited : false;
    const createTicketBoolean = location.state ? location.state.create : false;
    const createIssueTemplateBoolean = location.state ? location.state.create_it : false;
    const editIssueTemplateBoolean = location.state ? location.state.edited_it : false;
    return(
      <>
        <div className='amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow: "hidden",top: "-50px",left: "0px"}}>
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

        {!showSearchRect && (
        <div style={{position: 'absolute', bottom: "825px" , left:"1100px" }}>
          <SearchBoxRect/>
        </div>
        )}
        <div
          style={{ position: 'absolute' , width:"120px", display: 'block',bottom: "990px",left: "1350px",objectFit: "cover"}}>
          <SearchResultMatchCollection style={{position: 'absolute',bottom:"-150px", left:"-235px" }}
              overrides={SearchTicketOverride}
              overrideItems={OverrideSearchTicketItems}/>
        </div>

        <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
          <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
        </div>
        <div style={{ position: 'absolute',display: 'block', bottom: 0, right: 0 }}>
            {editTicketBoolean && (
              <>
            <EditTicket overrides={EditTicketOverride}/>
            <div style={{ position: 'absolute',display: 'block', bottom: 130, right: 1000 , width:600 }}>
            <FileImageTicketUpload/>
            </div>
            <div style={{ position: 'absolute',display: 'block', bottom: 370, right: -460 , width:1400 ,  overflow: 'auto', maxHeight: '600px' }}>
            <TicketInfoScroll overrides={TicketInfoScrollOverride}/>
            </div>
            <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "700px",left: "1250px",objectFit: "cover"}}>
              <ChildTicketShortCollection style={{position: 'absolute',  bottom: "-220px", left: "-250px" }}
              overrides={ChildTicketShortCollectionOverride}
              overrideItems={ChildTicketShortOverride}/>
          </div>
            </>)}
            {createTicketBoolean && (
            <>
            <CreateTicket overrides={CreateTicketOverride}/>
            <div style={{ position: 'absolute',display: 'block', bottom: 360, right: -150 , width:1350 ,  overflow: 'auto', maxHeight: '600px' }}>
            <CreateTicketScroll overrides={CreateTicketScrollOverride}/>
            </div>
            <div style={{ position: 'absolute',display: 'block', bottom: 140, right: 680 , width:500 }}>
            <FileImageTicketUpload/>
            </div>
            </>)}
            {createIssueTemplateBoolean && (
            <CreateIssueTemplate overrides={CreateIssueTemplateOverride}/>)}
            {editIssueTemplateBoolean && (
            <EditIssueTemplate overrides={EditIssueTemplateOverride}/>)}
      </div>
      </div>
      </>)}
