import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Backlog, ChildTicketShortCollection, EditTicket, ProjectVerticalSelectField, SearchBoxRect, SearchResultMatchCollection, TicketInfoScroll, TicketToDoCollection, Toolbar } from "../ui-components";
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { BacklogFunc } from '../overrides/BacklogOverride';
import { ProjectContext } from '../contexts/ProjectContext';
import { EditTicketFunc } from '../overrides/EditTicketOverride';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';
import { SubtaskFunc } from '../overrides/SubtaskOverride';

export default function BacklogPage(props) {
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();
  const {
    showSearchRect
  } = useContext(ToolbarSelectContext);
  const {
    ToolbarOverride,
    SearchTicketOverride,
    OverrideSearchTicketItems,
  } = ToolbarFunc();
  const {
    BacklogOverrideItems,
    Sprint1TicketOverride,
    Sprint2TicketOverride,
    Sprint3TicketOverride,
    Sprint4TicketOverride,
  } = BacklogFunc();
  const {
    location,
  } = useContext(ProjectContext);
  const {
    EditTicketOverride,
    FileImageTicketUpload
  } = EditTicketFunc();
  const {
    TicketInfoScrollOverride
  } = TicketInfoScrollFunc();
  const {
    ChildTicketShortOverride,
    ChildTicketShortCollectionOverride
  } = SubtaskFunc();

  const editTicketBoolean = location.state ? location.state.edited_bg : false;
    return(
      <>
      <div className='amplify-container'
        style={{ position:'relative', display: 'inline-block',overflow: "hidden",top: "-50px",left: "0px"}}>
      <Backlog/>

      <div
          style={{ position: 'absolute' , width:"120px", display: 'block',bottom:"15px", left: "460px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute', bottom: "40px" , left:"-90px" }}
              overrides={Sprint1TicketOverride}
              overrideItems={BacklogOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',bottom:"15px",left: "850px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute',  bottom: "40px", left: "-90px" }}
              overrides={Sprint2TicketOverride}
              overrideItems={BacklogOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',bottom:"15px",left: "1240px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute',  bottom: "40px", left: "-90px" }}
              overrides={Sprint3TicketOverride}
              overrideItems={BacklogOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',bottom:"15px",left: "1630px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute',  bottom: "40px", left: "-90px" }}
              overrides={Sprint4TicketOverride}
              overrideItems={BacklogOverrideItems}/>
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
          </div></>)}
          </div>
          </div>

      </>)}
