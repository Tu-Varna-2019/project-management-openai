import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Board, ChildTicketShortCollection, CreateIssueTemplate, CreateTicket, CreateTicketScroll, EditIssueTemplate, EditTicket, GithubCommitCollection, ProjectVerticalSelectField, SearchBoxRect, SearchResultMatchCollection, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketInfoScroll, TicketToDoCollection, Toolbar } from '../ui-components';
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
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { Loader , Button, Icon , Expander, ExpanderItem } from '@aws-amplify/ui-react';
import { IssueTemplateContext } from '../contexts/IssueTemplateContext';
import { GithubContext } from '../contexts/GithubContext';
import { GithubCommitFunc } from '../overrides/GithubCommitOverride';
import { TicketContext } from '../contexts/TicketContext';


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
  GithubCommitOverrideCollectionOverride,
  GithubCommitOverride,
} = GithubCommitFunc();
const {
  showSearchRect
} = useContext(ToolbarSelectContext);
const {
  openaiProgBar
} = useContext(IssueTemplateContext);
const {
  refreshGithubItems,
  showGithubActions,
  handleBackGitActions,
  handleSaveGitActions,
  selectedSha,
  shaTicket,
} = useContext(GithubContext);
const {
  editTicket,
  editIssueTemplateBoolean,
  createIssueTemplateBoolean,
  createTicketBoolean,
  editTicketBoolean,
} = useContext(TicketContext);
    
    const openAIProgBarBottom = editTicketBoolean === true ? 300 : createTicketBoolean === true ? 120 : createIssueTemplateBoolean === true ? 240 : editIssueTemplateBoolean === true ? 200 : 0;
    const openAIProgBarRight = editTicketBoolean === true ? 1070 : 690 ;

    return(
      <>
        <div className='.amplify-container'
          style={{ position:'relative', display: 'inline-block'}}>
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
            {!showGithubActions && (
              <>
            <div style={{ position: 'absolute',display: 'block', bottom: 370, right: -460 , width:1400 ,  overflow: 'auto', maxHeight: '600px' }}>
            <TicketInfoScroll overrides={TicketInfoScrollOverride}/>
            </div>
            <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "700px",left: "1250px",objectFit: "cover"}}>
              <ChildTicketShortCollection style={{position: 'absolute',  bottom: "-220px", left: "-250px" }}
              overrides={ChildTicketShortCollectionOverride}
              overrideItems={ChildTicketShortOverride}/>
          </div>
          </>
          )}
          {showGithubActions && (
          <>
          <div key={refreshGithubItems} style={{ cursor: 'pointer', position: 'absolute' , width:"120px", display: 'block',top: "970px",left: "1260px",objectFit: "cover"}}>
          <GithubCommitCollection style={{position: 'absolute',  bottom: "220px", left: "-180px" }}
              overrides={GithubCommitOverrideCollectionOverride}
              overrideItems={GithubCommitOverride}/>
          </div>
          
          <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "870px",left: "1320px",objectFit: "cover"}}>
          <Button
          isDisabled={
            shaTicket.length === 0 ? false : editTicket.GitCommit.sort().every((value, index) => value === selectedSha.sort()[index])}
          onClick={(event) => handleSaveGitActions(event)}
          size='default' style={{fontSize: '22px' }}>Save  
          <Icon
          ariaLabel=""
          pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"/>
          </Button>
          </div>

          <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "870px",left: "1200px",objectFit: "cover"}}>
          <Button 
          onClick={(event) => handleBackGitActions(event)}
          size='large' style={{fontSize: '22px' }} >🚀Back
          </Button>
          </div>
          
          <div style={{ cursor: 'pointer', position: 'absolute' , width:"225px", display: 'block',top: "800px",left: "1200px",objectFit: "cover"}}>
          <Expander type="single" isCollapsible={true}>
          <ExpanderItem title="Added commits" value="ok">
          {selectedSha.map((sha, index) => (
            <div key={index}>{sha}</div>))}
          </ExpanderItem>
            </Expander>
          </div>
          </>
          )}
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
