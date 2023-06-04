import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Profile, Toolbar } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';

export default function ProfilePage(props) {
  const {
    ToolbarOverride
  } = ToolbarFunc();
  const {
    ProfileOverride,
    FileImageUpload
  } = ProfileFunc();

    return(
      <>
      <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <Profile overrides={ProfileOverride}/>

      <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825  }}>
        <Toolbar overrides={ToolbarOverride}/>
      </div>
      <div style={{ position: 'absolute',display: 'block', bottom: 550, right: 1250 , width:530  }}>
        <FileImageUpload />
      </div>
      </div>
      </>)}
