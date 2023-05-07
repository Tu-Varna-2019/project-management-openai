import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { NoteremindercardCollection, Reminder } from "../ui-components";
import { ReminderFunc } from '../overrides/ReminderOverride';

export default function ReminderPage(props) {
  
  const {
    ReminderOverride,
    ReminderNoteCollectionOverride,
    customOverrideItems
  } = ReminderFunc();

  return (  
      <>
      <div className='reminderpages' 
        style={{position: 'relative',display: 'inline-block',overflow: "hidden"}}>
        <Reminder overrides={ReminderOverride}/>
      </div><div style={{ position: 'relative' , display: 'block',top: "-10px",left: "100px",objectFit: "cover"}}>
      <NoteremindercardCollection
        style={{position: 'absolute', bottom: 160, right: 130 }}
        overrides={ReminderNoteCollectionOverride}
        overrideItems={customOverrideItems}/></div></>
        );}