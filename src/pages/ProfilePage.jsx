import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ActivitySlideCollection, Profile } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';
import { ActivityFunc } from '../overrides/ActivitySlideOverride';
import { UserContext } from '../contexts/UserContext';


export default function ProfilePage(props) {
  const {
    ProfileOverride,
    FileImageUpload
  } = ProfileFunc();

  const {
    ActivityCollectionOverride,
    ActivityOverride,
    isActivityEmptyTop,
  } = ActivityFunc();

  const {
    currentUser,
    selectedUserID,
  } = React.useContext(UserContext);

    return(
      <>
      <div className='.amplify-container'
            style={{ position:'relative', display: 'inline-block'}}>
      <Profile overrides={ProfileOverride}/>

      { currentUser.id === selectedUserID &&
      <div style={{ position: 'absolute',display: 'block', bottom: 585, right: 1330 , width:530  }}>
        <FileImageUpload />
      </div>}
      <div style={{ position: 'absolute' , width:"120px", display: 'block',top: isActivityEmptyTop,left: "1420px",objectFit: "cover"}}>
        <ActivitySlideCollection style={{position: 'absolute',  bottom: "60px", left: "-205px" }}
          overrides={ActivityCollectionOverride}
          overrideItems={ActivityOverride}/>
      </div>
      </div>
      </>)}
