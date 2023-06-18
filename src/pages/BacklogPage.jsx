import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Backlog, ProjectVerticalSelectField, TicketToDoCollection, Toolbar } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { BoardFunc } from '../overrides/BoardOverride';

export default function BacklogPage(props) {
  const {
    ToolbarOverride
  } = ToolbarFunc();
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();
  const {
    customOverrideItems
  }= BoardFunc();

    return(
      <>
      <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <Backlog/>
{/* 
      <div
          style={{ position: 'absolute' , width:"120px", display: 'block',top: "1040px",left: "460px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute', bottom: "50px" , left:"-90px" }}
              overrides={BoardTicketToDoOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "1040px",left: "850px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInProgressOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "1040px",left: "1240px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInReviewOverride}
              overrideItems={customOverrideItems}/>
        </div> */}

      <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825  }}>
        <Toolbar overrides={ToolbarOverride}/>
      </div>
      <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
          <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
        </div>
      </div>
      </>)}
