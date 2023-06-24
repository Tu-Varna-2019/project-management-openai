import React, { useContext } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ActivitySlideCollection, AddRemoveUser, Profile, SearchBoxRect, SearchResultMatchCollection, Toolbar, UsersAdminInfoCollection } from "../ui-components";
import { ProfileFunc } from '../overrides/ProfileOverride';
import { ToolbarFunc } from '../overrides/ToolbarOverrides';
import { ActivityFunc } from '../overrides/ActivitySlideOverride';
import { UserContext } from '../contexts/UserContext';
import { ToolbarSelectContext } from '../contexts/ToolbarSelectContext';
import { AddRemoveUserFunc } from '../overrides/AddRemoveUserOverride';
import { Tabs } from '@aws-amplify/ui-react';
import { UsersAdminInfoFunc } from '../overrides/UsersAdminInfoOverride';

export default function ProfilePage(props) {
  const {
    showSearchRect
  } = useContext(ToolbarSelectContext);
  const {
    ToolbarOverride,
    SearchTicketOverride,
    OverrideSearchTicketItems,
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
    refreshAdminUserItems,
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
      <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block'}}>
      <Profile overrides={ProfileOverride}/>
      <div style={{ position: 'absolute',display: 'block', bottom: 820, right: 1095, width:825 }}>
        <Toolbar overrides={ToolbarOverride}/>
        </div>

        {!showSearchRect && (
        <div style={{position: 'absolute', bottom: "825px" , left:"1100px" }}>
          <SearchBoxRect/>
        </div>
        )}
        <div key={refreshAdminUserItems}
          style={{ position: 'absolute' , width:"120px", display: 'block',bottom: "990px",left: "1350px",objectFit: "cover"}}>
          <SearchResultMatchCollection style={{position: 'absolute',bottom:"-150px", left:"-235px" }}
              overrides={SearchTicketOverride}
              overrideItems={OverrideSearchTicketItems}/>
        </div>

      { currentUser.id === selectedUserID &&
      <div style={{ position: 'absolute',display: 'block', bottom: 585, right: 1330 , width:530  }}>
        <FileImageUpload />
      </div>}
      <div style={{ position: 'absolute' , width:"120px", display: 'block',top: "200px",left: "1380px",objectFit: "cover"}}>
        <ActivitySlideCollection style={{position: 'absolute',  bottom: "-650px", left: "-155px" }}
          overrides={ActivityCollectionOverride}
          overrideItems={ActivityOverride}/>
      </div>

      <div style={{ position: 'absolute',display: 'block', bottom: 0, right: 0 }}>
            {addRemoveUserBoolean && (
              <>
            <AddRemoveUser overrides={AddRemoveUserOverride}/>
            <div style={{ position: 'absolute' , width:"350px", display: 'block',top: "900px",left: "800px",objectFit: "cover"}}>
              <UsersAdminInfoCollection style={{position: 'absolute',  bottom: "180px", left: "-50px" }}
              overrides={UsersAdminInfoOverrideCollectionOverride}
              overrideItems={UsersAdminInfoOverride}/>
          </div>
          </>
          )}
          
        </div>
      </div>
      </>)}
