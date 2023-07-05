import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { EditTicketFull, ProjectVerticalSelectField } from "../ui-components";
import { EditTicketFullFunc } from '../overrides/EditTicketFullOverride';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { Loader } from '@aws-amplify/ui-react';
import { IssueTemplateContext } from '../contexts/IssueTemplateContext';
import { GithubContext } from '../contexts/GithubContext';
import TicketInfoScrollComponent from '../components/TicketInfoScrollComponent';
import ShowGithubActionsComponent from '../components/ShowGithubActionsComponent';

export default function EditTicketFullPage(props) {
  const {
    EditTicketFullOverride,
    FileImageTicketUpload,
  } = EditTicketFullFunc();
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();
  const {
    openaiProgBar
  } = useContext(IssueTemplateContext);
  const {
    showGithubActions,
  } = useContext(GithubContext);

    return(
      <>
      <div className='amplify-container'
      style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <EditTicketFull overrides={EditTicketFullOverride}/>
      
      <div style={{ position: 'absolute',display: 'block', bottom: 50, right: 790 , width:770 }}>
        <FileImageTicketUpload/>
      </div>

      <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
        <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
      </div>
      {!showGithubActions && (
        <>
      <TicketInfoScrollComponent 
      ticketinfoscroll_div={{
        bottom: 230,
        right: -750
      }}
      childticketshort_div={{
        bottom: 230,
        left: 1500}}/></>)}
      {showGithubActions && (
          <>
          <ShowGithubActionsComponent
          githubcommitcollection_div={{
            top: 1050,
            left: 1560,
            bottom: 160
          }}
          save_button_div={{
            top: 1000,
            left: 1620
          }}
          back_button_div={{
            top: 1000,
            left: 1500
          }}
          expander_div={{
            top: 930,
            left: 1500
          }}/></>)}
      {openaiProgBar && (
            <div style={{ position: 'absolute',display: 'block', bottom: 220, right: 950 , width:480 }}>
            <Loader />
            <Loader variation="linear" />
            </div>
      )}
      </div>
      </>)}