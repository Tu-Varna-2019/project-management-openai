import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Profile, ResetPassword } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';

export default function ProfilePage(props) {

  const {
    ProfileOverride,
    FileImageUpload
  } = ProfileFunc();

    return(
      <>
      <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <Profile overrides={ProfileOverride}/>
      </div>
      <div style={{ position: 'relative',display: 'block', bottom: 735, right: -150 , width:530  }}>
        <FileImageUpload />
      </div>
      </>)}
