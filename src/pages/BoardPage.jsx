import React from 'react'
import { useLocation } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { Board, CreateTicket, EditTicket, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketToDoCollection } from '../ui-components';
import '@aws-amplify/ui-react/styles.css';
import { TicketClass } from '../classes/TicketClass';
import { BoardFunc } from '../overrides/BoardOverride';
import { CreateTicketFunc } from '../overrides/CreateTicketOverride';

export default function BoardPage(props) {

  const {
    switchCreateTicketPage,
    switchEditTicketPage,
    handleCreateTicketClick,
    ticketInProgressStyleTop,
    ticketInReviewStyleTop,
    ticketDoneStyleTop,
    handleCancelEditTicketClick,
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
    CreateTicketComponentOverride
  }= CreateTicketFunc();

  const { 
    roadmap_button,
    active_sprints_button,
    project_name_text,
    project_image_name,
    profile_icon_image,
    success_alert,
    projects_select_field,
    your_work_select_field,
    issue_templates_select_field,
    teams_select_field,
  } = BoardComponentOverride;
  const { 
    project_select_field,
    issue_type_select_field,
    priority_select_field,
    title_text_field,
    description_text_field,
    asignee_select_field,
    } = CreateTicketComponentOverride

    const location = useLocation();
    const editTicketBoolean = location.state ? location.state.edited : false;

    return(
      <>
        <div className='amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
          <Board overrides={{
            roadmap_button ,
            active_sprints_button,
            project_name_text,
            project_image_name,
            profile_icon_image,
            success_alert,
            projects_select_field,
            your_work_select_field,
            issue_templates_select_field,
            teams_select_field,
            create_ticket_button:{
              onClick: (event) => (handleCreateTicketClick(event))},
          }}/>
        </div>

        <div style={{ position: 'relative' , width:"120px", display: 'block',top: "0px",left: "460px",objectFit: "cover"}}>
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
        
        <div style={{ position: 'relative',display: 'block', bottom: 1080, right: 0 }}>
          {editTicketBoolean &&
           <EditTicket overrides={{
            cancel_button:{
              onClick: (event) => (handleCancelEditTicketClick(event))
            }
           }}/>}
          {switchCreateTicketPage &&
            <CreateTicket overrides={{
              cancel_button:{
                onClick: (event) => (handleCreateTicketClick(event))},
                project_select_field,
                issue_type_select_field,
                priority_select_field,
                title_text_field,
                description_text_field,
                asignee_select_field,
          }}/>}
      </div>
      </>)}
