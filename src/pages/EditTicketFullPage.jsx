import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { EditTicketFull, TicketInfoScroll } from "../ui-components";
import { EditTicketFullFunc } from '../overrides/EditTicketFullOverride';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';

export default function EditTicketFullPage(props) {

  const {
    EditTicketFullOverride,
    FileImageTicketUpload,
  } = EditTicketFullFunc();

  const {
    TicketInfoScrollOverride
  } = TicketInfoScrollFunc();

    return(
      <>
       <div className='amplify-container'
      style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <EditTicketFull overrides={EditTicketFullOverride}/>
      </div>
      <div style={{ position: 'relative',display: 'block', bottom: 185, right: -373 , width:770 }}>
        <FileImageTicketUpload/>
      </div>
      <div style={{ position: 'relative',display: 'block', bottom: 980, right: -1250 , width:825 ,  overflow: 'auto', maxHeight: '800px' }}>
        <TicketInfoScroll overrides={TicketInfoScrollOverride}/>
      </div>
      </>)}