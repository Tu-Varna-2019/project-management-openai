import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ActivitySlideCollection, Profile, Toolbar } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ActivityFunc } from '../overrides/ActivitySlideOverride';
import { UserContext } from '../contexts/UserContext';

export default function ProfilePage(props) {
  const {
    ToolbarOverride
  } = ToolbarFunc();
  const {
    ProfileOverride,
    FileImageUpload
  } = ProfileFunc();

  const {
    ActivityCollectionOverride,
    ActivityOverride,
  } = ActivityFunc();

  const {
    currentUser,
    selectedUserID,
  } = React.useContext(UserContext);

    return(
      <>
      <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
      <Profile overrides={ProfileOverride}/>
      <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825  }}>
        <Toolbar overrides={ToolbarOverride}/>
      </div>
      { currentUser.id === selectedUserID &&
      <div style={{ position: 'absolute',display: 'block', bottom: 585, right: 1330 , width:530  }}>
        <FileImageUpload />
      </div>
      }
      <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "200px",left: "1350px",objectFit: "cover"}}>
        <ActivitySlideCollection style={{position: 'absolute',  bottom: "-650px", left: "-155px" }}
          overrides={ActivityCollectionOverride}
          overrideItems={ActivityOverride}/>
      </div>
      </div>
      </>)}
