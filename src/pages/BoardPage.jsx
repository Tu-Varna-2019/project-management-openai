import React from 'react'
import { useLocation } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { Board, CreateTicket, EditTicket, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketToDoCollection } from '../ui-components';
import '@aws-amplify/ui-react/styles.css';
import { TicketClass } from '../classes/TicketClass';
import { BoardFunc } from '../overrides/BoardOverride';
import { CreateTicketFunc } from '../overrides/CreateTicketOverride';
import { EditTicketFunc } from '../overrides/EditTicketOverride';

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

    const location = useLocation();
    const editTicketBoolean = location.state ? location.state.edited : false;
    const createTicketBoolean = location.state ? location.state.create : false;

    return(
      <>
        <div className='amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
          <Board overrides={BoardComponentOverride}/>
        </div>

        <div 
          style={{ position: 'relative' , width:"120px", display: 'block',top: "0px",left: "460px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute', top: "-800px" , left:"-90px" }}
              overrides={BoardTicketToDoOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'relative' , width:"120px", display: 'block',top: ticketInProgressStyleTop.toString() + "px",left: "850px",objectFit: "cover"}}>
          <TicketInProgressCollection style={{position: 'absolute', top: "-800px", left: "-90px" }}
              overrides={BoardTicketInProgressOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'relative' , width:"120px", display: 'block',top: ticketInReviewStyleTop.toString() + "px",left: "1240px",objectFit: "cover"}}>
          <TicketInReviewCollection style={{position: 'absolute', top: "-800px", left: "-90px" }}
              overrides={BoardTicketInReviewOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'relative' , width:"120px", display: 'block',top: ticketDoneStyleTop.toString() + "px",left: "1630px",objectFit: "cover"}}>
          <TicketDoneCollection style={{position: 'absolute', top: "-800px", left: "-90px" }}
              overrides={BoardTicketDoneOverride}
              overrideItems={customOverrideItems}/>
        </div>
        
        <div style={{ position: 'relative',display: 'block', bottom: 1277, right: 0 }}>
            {editTicketBoolean &&
           <EditTicket overrides={EditTicketOverride}/>}
            {createTicketBoolean &&
            <CreateTicket overrides={CreateTicketOverride}/>}
      </div>
      </>)}
