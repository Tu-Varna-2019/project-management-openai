import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { EditTicketFull, ProjectVerticalSelectField, TicketInfoScroll, Toolbar } from "../ui-components";
import { EditTicketFullFunc } from '../overrides/EditTicketFullOverride';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';

export default function EditTicketFullPage(props) {
  const {
    EditTicketFullOverride,
    FileImageTicketUpload,
  } = EditTicketFullFunc();
  const {
    ToolbarOverride
  } = ToolbarFunc();
  const {
    TicketInfoScrollOverride
  } = TicketInfoScrollFunc();
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();

    return(
      <>
       <div className='amplify-container'
      style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <EditTicketFull overrides={EditTicketFullOverride}/>
      
      <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825}}>
        <Toolbar overrides={ToolbarOverride}/>
      </div>
      <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
        <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
      </div>
      <div style={{ position: 'absolute',display: 'block', bottom: 50, right: 790 , width:770 }}>
        <FileImageTicketUpload/>
      </div>
      <div style={{ position: 'absolute',display: 'block', bottom: 20, right: -800 , width:1400 ,  overflow: 'auto', maxHeight: '800px' }}>
        <TicketInfoScroll overrides={TicketInfoScrollOverride}/>
      </div>
      </div>
      </>)}