import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ChildTicketShortCollection, EditTicketFull, ProjectVerticalSelectField, SearchBoxRect, SearchResultMatchCollection, TicketInfoScroll, Toolbar } from "../ui-components";
import { EditTicketFullFunc } from '../overrides/EditTicketFullOverride';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ProjectVerticalSelectFieldFunc } from '../overrides/ProjectVerticalSelectFieldOverrides';
import { SubtaskFunc } from '../overrides/SubtaskOverride';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';

export default function EditTicketFullPage(props) {
  const {
    EditTicketFullOverride,
    FileImageTicketUpload,
  } = EditTicketFullFunc();
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
  const {
    showSearchRect
  } = useContext(ToolbarSelectContext);
  const {
    ToolbarOverride,
    SearchTicketOverride,
    OverrideSearchTicketItems,
  } = ToolbarFunc();

    return(
      <>
      <div className='amplify-container'
      style={{ position:'relative', display: 'inline-block',overflow: "hidden",top: "-50px",left: "0px"}}>
      <EditTicketFull overrides={EditTicketFullOverride}/>
      
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