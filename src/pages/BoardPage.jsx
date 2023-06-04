import React from 'react'
import { useLocation } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { Board, CreateTicket, EditTicket, ProjectVerticalSelectField, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketToDoCollection, Toolbar } from '../ui-components';
import '@aws-amplify/ui-react/styles.css';
import { TicketClass } from '../classes/TicketClass';
import { BoardFunc } from '../overrides/BoardOverride';
import { CreateTicketFunc } from '../overrides/CreateTicketOverride';
import { EditTicketFunc } from '../overrides/EditTicketOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';

export default function BoardPage(props) {

  const {
    ticketInProgressStyleTop,
    ticketInReviewStyleTop,
    ticketDoneStyleTop,
  } = TicketClass();
  const {
    BoardComponentOverride,
    BoardTicketToDoOverride,
    BoardTicketInProgressOverride,
    BoardTicketInReviewOverride,
    BoardTicketDoneOverride,
    customOverrideItems
  }= BoardFunc();
  const {
    EditTicketOverride
  } = EditTicketFunc();
  const {
    CreateTicketOverride
  }= CreateTicketFunc();
  const {
    ToolbarOverride
  } = ToolbarFunc();
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();

    const location = useLocation();
    const editTicketBoolean = location.state ? location.state.edited : false;
    const createTicketBoolean = location.state ? location.state.create : false;

    return(
      <>
        <div className='amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow: "hidden",top: "-50px",left: "0px"}}>
          <Board overrides={BoardComponentOverride}/>
        
        <div 
          style={{ position: 'absolute' , width:"120px", display: 'block',top: "1040px",left: "460px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute', bottom: "50px" , left:"-90px" }}
              overrides={BoardTicketToDoOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "1040px",left: "850px",objectFit: "cover"}}>
          <TicketInProgressCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInProgressOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "1040px",left: "1240px",objectFit: "cover"}}>
          <TicketInReviewCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInReviewOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "1040px",left: "1630px",objectFit: "cover"}}>
          <TicketDoneCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketDoneOverride}
              overrideItems={customOverrideItems}/>
        </div>
        
        <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825 }}>
        <Toolbar overrides={ToolbarOverride}/>
        </div>
        <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
          <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
        </div>
        <div style={{ position: 'absolute',display: 'block', bottom: 0, right: 0 }}>
            {editTicketBoolean &&
            <EditTicket overrides={EditTicketOverride}/>}
            {createTicketBoolean &&
            <CreateTicket overrides={CreateTicketOverride}/>}
      </div>
      </div>
      </>)}
