import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Board, CreateTicket, EditTicket, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketToDoCollection, TicketshortCollection } from '../ui-components';
import '@aws-amplify/ui-react/styles.css';
import { TicketClass } from '../classes/TicketClass';
import { BoardFunc } from '../overrides/BoardOverride';
import { useRef } from 'react';
import { CreateTicketFunc } from '../overrides/CreateTicketOverride';

export default function BoardPage(props) {

  const {
    switchCreateTicketPage,
    switchEditTicketPage,
    setSwitchCreateTicketPage,
    handleCreateTicketClick
  } = TicketClass();
  
  const {
    BoardComponentOverride,
    BoardTicketCollectionOverride,
    customOverrideItems
  }= BoardFunc();

  const {
    CreateTicketComponentOverride
  }= CreateTicketFunc();

  const { roadmap_button,active_sprints_button} = BoardComponentOverride;
  const { 
    project_select_field,
    issue_type_select_field,
    priority_select_field,
    title_text_field,
    description_text_field,
    asignee_select_field,
    create_button} = CreateTicketComponentOverride

    return(
      <>
        <div className='amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
          <Board overrides={{
            roadmap_button ,
            active_sprints_button,
            create_ticket_button:{
              onClick: (event) => (handleCreateTicketClick(event))},
          }}/>
        </div>
        
        <div style={{ position: 'relative' , display: 'block',top: "-5px",left: "-430px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute', top: "-800px", left: "800px" }}
              overrides={BoardTicketCollectionOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'relative' , display: 'block',top: "-20px",left: "-42px",objectFit: "cover"}}>
          <TicketInProgressCollection style={{position: 'absolute', top: "-810px", left: "800px" }}
              overrides={BoardTicketCollectionOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'relative' , display: 'block',top: "-85px",left: "320px",objectFit: "cover"}}>
          <TicketInReviewCollection style={{position: 'absolute', top: "-800px", left: "800px" }}
              overrides={BoardTicketCollectionOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'relative' , display: 'block',top: "-85px",left: "920px",objectFit: "cover"}}>
          <TicketDoneCollection style={{position: 'absolute', top: "-800px", left: "800px" }}
              overrides={BoardTicketCollectionOverride}
              overrideItems={customOverrideItems}/>
        </div>
        
        <div style={{ position: 'relative',display: 'block', bottom: 1080, right: 0 }}>
          {switchEditTicketPage &&<EditTicket/>}
          {switchCreateTicketPage &&
            <CreateTicket overrides={{
              cancel_button:{
                onClick: (event) => (handleCreateTicketClick(event))},
                // project_select_field,
                // issue_type_select_field,
                // priority_select_field,
                // title_text_field,
                // description_text_field,
                // asignee_select_field,
          }}/>}
      </div>
      </>)}
