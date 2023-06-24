import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ChildTicketShortCollection, EditTicketFull, GithubCommit, GithubCommitCollection, ProjectVerticalSelectField, SearchBoxRect, SearchResultMatchCollection, TicketInfoScroll, Toolbar } from "../ui-components";
import { EditTicketFullFunc } from '../overrides/EditTicketFullOverride';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { SubtaskFunc } from '../overrides/SubtaskOverride';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { Button, Expander, ExpanderItem, Icon, Loader } from '@aws-amplify/ui-react';
import { IssueTemplateContext } from '../contexts/IssueTemplateContext';
import { GithubContext } from '../contexts/GithubContext';
import { TicketContext } from '../contexts/TicketContext';
import { GithubCommitFunc } from '../overrides/GithubCommitOverride';

export default function EditTicketFullPage(props) {
  const {
    EditTicketFullOverride,
    FileImageTicketUpload,
  } = EditTicketFullFunc();
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
    showSearchRect
  } = useContext(ToolbarSelectContext);
  const {
    ToolbarOverride,
    SearchTicketOverride,
    OverrideSearchTicketItems,
  } = ToolbarFunc();
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
    editTicket
  } = useContext(TicketContext);
  const {
    GithubCommitOverrideCollectionOverride,
    GithubCommitOverride,
  } = GithubCommitFunc();

    return(
      <>
      <div className='amplify-container'
      style={{ position:'relative', display: 'inline-block',overflow: "hidden",top: "-50px",left: "0px"}}>
      <EditTicketFull overrides={EditTicketFullOverride}/>
      
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

      <div style={{ position: 'absolute',display: 'block', bottom: 50, right: 790 , width:770 }}>
        <FileImageTicketUpload/>
      </div>
      {!showGithubActions && (
      <>
      <div style={{ position: 'absolute',display: 'block', bottom: 230, right: -750 , width:1400 ,  overflow: 'auto', maxHeight: '600px' }}>
        <TicketInfoScroll overrides={TicketInfoScrollOverride}/>
      </div>
      <div style={{ position: 'absolute' , width:"120px", display: 'block',bottom: 230,left: "1500px",objectFit: "cover"}}>
          <ChildTicketShortCollection style={{position: 'absolute',  bottom: "-220px", left: "-250px" }}
          overrides={ChildTicketShortCollectionOverride}
          overrideItems={ChildTicketShortOverride}/>
      </div>
      {openaiProgBar && (
            <div style={{ position: 'absolute',display: 'block', bottom: 220, right: 950 , width:480 }}>
            <Loader />
            <Loader variation="linear" />
            </div>
      )}
      </>
          )}
          {showGithubActions && (
          <>
          <div key={refreshGithubItems} style={{ cursor: 'pointer', position: 'absolute' , width:"120px", display: 'block',top: "1050px",left: "1560px",objectFit: "cover"}}>
          <GithubCommitCollection style={{position: 'absolute',  bottom: "160px", left: "-180px" }}
              overrides={GithubCommitOverrideCollectionOverride}
              overrideItems={GithubCommitOverride}/>
          </div>
          
          <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "1000px",left: "1620px",objectFit: "cover"}}>
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

          <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "1000px",left: "1500px",objectFit: "cover"}}>
          <Button 
          onClick={(event) => handleBackGitActions(event)}
          size='large' style={{fontSize: '22px' }} >🚀Back
          </Button>
          </div>
          
          <div style={{ cursor: 'pointer', position: 'absolute' , width:"225px", display: 'block',top: "930px",left: "1500px",objectFit: "cover"}}>
          <Expander type="single" isCollapsible={true}>
          <ExpanderItem title="Added commits" value="ok">
          {selectedSha.map((sha, index) => (
            <div key={index}>{sha}</div>))}
          </ExpanderItem>
            </Expander>
          </div>
          </>
          )}

      </div>
      </>)}