import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Backlog, Toolbar } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';

export default function BacklogPage(props) {
  const {
    ToolbarOverride
  } = ToolbarFunc();
  // const {
  //   ProfileOverride,
  // } = ProfileFunc();

    return(
      <>
      <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <Backlog/>
      <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825  }}>
        <Toolbar overrides={ToolbarOverride}/>
      </div>
      </div>
      </>)}
