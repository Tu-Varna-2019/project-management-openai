import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ActivitySlideCollection, AddRemoveUser, Profile, UsersAdminInfoCollection } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';
import { ActivityFunc } from '../overrides/ActivitySlideOverride';
import { UserContext } from '../contexts/UserContext';
import { AddRemoveUserFunc } from '../overrides/AddRemoveUserOverride';
import { UsersAdminInfoFunc } from '../overrides/UsersAdminInfoOverride';


export default function ProfilePage(props) {
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
    addRemoveUserBoolean,
  } = React.useContext(UserContext);

  const {
    AddRemoveUserOverride
  } = AddRemoveUserFunc();
  const {
    UsersAdminInfoOverrideCollectionOverride,
    UsersAdminInfoOverride,
  } = UsersAdminInfoFunc();
 
    return(
      <>
      <div className='.amplify-container'
            style={{ position:'relative', display: 'inline-block'}}>
      <Profile overrides={ProfileOverride}/>

      { currentUser.id === selectedUserID &&
      <div style={{ position: 'absolute',display: 'block', bottom: 585, right: 1330 , width:530  }}>
        <FileImageUpload />
      </div>}
      <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "200px",left: "1380px",objectFit: "cover"}}>
        <ActivitySlideCollection style={{position: 'absolute',  bottom: "-650px", left: "-155px" }}
          overrides={ActivityCollectionOverride}
          overrideItems={ActivityOverride}/>
      </div>


      </div>
      </>)}
