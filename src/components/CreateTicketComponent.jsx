import React from 'react';
import { CreateTicket, CreateTicketScroll } from '../ui-components';
import { EditTicketFunc } from '../overrides/EditTicketOverride';
import { CreateTicketScrollFunc } from '../overrides/CreateTicketScrollOverride';
import { CreateTicketFunc } from '../overrides/CreateTicketOverride';
import '../css/hideScrollbar.css';

const CreateTicketComponent = () => {

    const {
        FileImageTicketUpload
      } = EditTicketFunc();
      const {
        CreateTicketScrollOverride,
      } = CreateTicketScrollFunc();
      const {
        CreateTicketOverride
      }= CreateTicketFunc();

    return (
            <>
            <CreateTicket overrides={CreateTicketOverride}/>
            <div className='hide-scrollbar' 
            style={{ position: 'absolute',display: 'block', bottom: 360, right: -150 , width:1350 ,  overflow: 'auto', maxHeight: '600px'}}>
            <CreateTicketScroll overrides={CreateTicketScrollOverride}/>
            </div>
            <div style={{ position: 'absolute',display: 'block', bottom: 140, right: 680 , width:500 }}>
            <FileImageTicketUpload/>
            </div>
            </>
    );
}

export default CreateTicketComponent;
