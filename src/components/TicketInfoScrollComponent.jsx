import React from 'react';
import { ChildTicketShortCollection, TicketInfoScroll } from '../ui-components';
import { TicketInfoScrollFunc } from '../overrides/TicketInfoScrollOverride';
import { SubtaskFunc } from '../overrides/SubtaskOverride';

const TicketInfoScrollComponent = ({ticketinfoscroll_div,childticketshort_div}) => {
    const {
        TicketInfoScrollOverride
      } = TicketInfoScrollFunc();
      const {
        ChildTicketShortOverride,
        ChildTicketShortCollectionOverride
      } = SubtaskFunc();

    return (
        <>
        <div style={{ position: 'absolute',display: 'block',
         bottom: ticketinfoscroll_div.bottom,
        right: ticketinfoscroll_div.right ,
        width:1400 ,  overflow: 'auto', maxHeight: '600px' }}>
         <TicketInfoScroll overrides={TicketInfoScrollOverride}/>
         </div>
         <div style={{ position: 'absolute' , width:"120px", display: 'block',
         bottom: childticketshort_div.bottom,
         left:childticketshort_div.left,
         objectFit: "cover"}}>
           <ChildTicketShortCollection style={{position: 'absolute',  bottom: "-220px", left: "-250px" }}
           overrides={ChildTicketShortCollectionOverride}
           overrideItems={ChildTicketShortOverride}/>
       </div>
       </>
    );}

export default TicketInfoScrollComponent;
