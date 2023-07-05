import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Backlog, ProjectVerticalSelectField, TicketToDoCollection, Toolbar } from "../ui-components";
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { BacklogFunc } from '../overrides/BacklogOverride';
import SearchBoxRectComponent from '../components/ShowSearchRectComponent';
import EditTicketComponent from '../components/EditTicketComponent';
import { TicketContext } from '../contexts/TicketContext';

export default function BacklogPage(props) {
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();
  const {
    showSearchRect
  } = useContext(ToolbarSelectContext);
  const {
    ToolbarOverride,
  } = ToolbarFunc();
  const {
    BacklogOverrideItems,
    Sprint1TicketOverride,
    Sprint2TicketOverride,
    Sprint3TicketOverride,
    Sprint4TicketOverride,
  } = BacklogFunc();
  const {
    backlogTicketBoolean,
  } = useContext(TicketContext);


    return(
      <>
      <div className='.amplify-container'
        style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
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

        <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1100, width:825 }}>
        <Toolbar overrides={ToolbarOverride}/>
        </div>

        {!showSearchRect && (<SearchBoxRectComponent/>)}
   
      <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
          <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
      </div>
        
      <div style={{ position: 'absolute',display: 'block', bottom: 0, right: 0 }}>
      { backlogTicketBoolean && (<EditTicketComponent/>)}
      </div>
      </div></>)}
