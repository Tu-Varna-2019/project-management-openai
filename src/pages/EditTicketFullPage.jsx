import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ChildTicketShortCollection, EditTicketFull, ProjectVerticalSelectField, TicketInfoScroll, Toolbar } from "../ui-components";
import { EditTicketFullFunc } from '../overrides/EditTicketFullOverride';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { SubtaskFunc } from '../overrides/SubtaskOverride';

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
  const {
    ChildTicketShortOverride,
    ChildTicketShortCollectionOverride
  } = SubtaskFunc();

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
      <div style={{ position: 'absolute',display: 'block', bottom: 230, right: -750 , width:1400 ,  overflow: 'auto', maxHeight: '600px' }}>
        <TicketInfoScroll overrides={TicketInfoScrollOverride}/>
      </div>
      <div style={{ position: 'absolute' , width:"120px", display: 'block',bottom: 230,left: "1500px",objectFit: "cover"}}>
          <ChildTicketShortCollection style={{position: 'absolute',  bottom: "-220px", left: "-250px" }}
          overrides={ChildTicketShortCollectionOverride}
          overrideItems={ChildTicketShortOverride}/>
      </div>
      </div>
      </>)}