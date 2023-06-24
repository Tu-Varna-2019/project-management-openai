import React, { useContext } from 'react';
import { EditTicket } from '../ui-components';
import { EditTicketFunc } from '../overrides/EditTicketOverride';
import ShowGithubActionsComponent from './ShowGithubActionsComponent';
import { GithubContext } from '../contexts/GithubContext';
import TicketInfoScrollComponent from './TicketInfoScrollComponent';

const EditTicketComponent = () => {
    const {
        showGithubActions,
      } = useContext(GithubContext);
    const {
        EditTicketOverride,
        FileImageTicketUpload
      } = EditTicketFunc();
   
    return (
        <>
        <EditTicket overrides={EditTicketOverride}/>
        <div style={{ position: 'absolute',display: 'block', bottom: 130, right: 1000 , width:600 }}>
        <FileImageTicketUpload/>
        </div>
        { !showGithubActions && (
        <TicketInfoScrollComponent
        ticketinfoscroll_div={{
          bottom: 370,
          right: -460
        }}
        childticketshort_div={{
          bottom: 300,
          left: 1250
        }}
        />)}
        { showGithubActions && (
        <ShowGithubActionsComponent
        githubcommitcollection_div={{
          top: 970,
          left: 1260,
          bottom: 220
        }}
        save_button_div={{
          top: 870,
          left: 1320
        }}
        back_button_div={{
          top: 870,
          left: 1200
        }}
        expander_div={{
          top: 800,
          left: 1200
        }}
        />)}
       </>
    );
}

export default EditTicketComponent;
