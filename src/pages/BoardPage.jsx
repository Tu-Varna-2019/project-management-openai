import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Board, ProjectVerticalSelectField, TicketDoneCollection, TicketInProgressCollection, TicketInReviewCollection, TicketToDoCollection } from '../ui-components';
import { BoardFunc } from '../overrides/BoardOverride';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';


export default function BoardPage(props) {
  const {
    BoardComponentOverride,
    BoardTicketToDoOverride,
    BoardTicketInProgressOverride,
    BoardTicketInReviewOverride,
    BoardTicketDoneOverride,
    customOverrideItems,
    isTicketToDoEmptyTop,
    isTicketInProgressEmptyTop,
    isTicketInReviewEmptyTop,
    isTicketDoneEmptyTop,
  }= BoardFunc();
  const {
    ProjectVerticalSelectFieldOverride
  } = ProjectVerticalSelectFieldFunc();

    return(
      <>
        <div className='.amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow:"hidden"}}>
          <Board overrides={BoardComponentOverride}/>
        <div 
          style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketToDoEmptyTop,left: "460px",objectFit: "cover"}}>
          <TicketToDoCollection style={{position: 'absolute', bottom: "50px" , left:"-90px" }}
              overrides={BoardTicketToDoOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketInProgressEmptyTop,left: "850px",objectFit: "cover"}}>
          <TicketInProgressCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInProgressOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketInReviewEmptyTop,left: "1240px",objectFit: "cover"}}>
          <TicketInReviewCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketInReviewOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute' , width:"120px", display: 'block',top: isTicketDoneEmptyTop,left: "1630px",objectFit: "cover"}}>
          <TicketDoneCollection style={{position: 'absolute',  bottom: "50px", left: "-90px" }}
              overrides={BoardTicketDoneOverride}
              overrideItems={customOverrideItems}/>
        </div>

        <div style={{ position: 'absolute',display: 'block', bottom: -10, right: 1600 , width:300 }}>
          <ProjectVerticalSelectField overrides={ProjectVerticalSelectFieldOverride}/>
        </div>
      </div>
      </>)}