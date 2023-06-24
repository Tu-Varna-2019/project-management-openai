import React, { useContext } from 'react';
import { GithubCommitCollection } from '../ui-components';
import { Button, Expander, ExpanderItem, Icon } from '@aws-amplify/ui-react';
import { GithubContext } from '../contexts/GithubContext';
import { TicketContext } from '../contexts/TicketContext';
import { GithubCommitFunc } from '../overrides/GithubCommitOverride';

const ShowGithubActionsComponent = ({githubcommitcollection_div,save_button_div,back_button_div,expander_div}) => {
    const {
        refreshGithubItems,
        handleBackGitActions,
        handleSaveGitActions,
        selectedSha,
        shaTicket,
      } = useContext(GithubContext);
      const {
        editTicket,
      } = useContext(TicketContext);

      const {
        GithubCommitOverrideCollectionOverride,
        GithubCommitOverride,
      } = GithubCommitFunc();

    return (
       <>
       <div key={refreshGithubItems} style={{ cursor: 'pointer', position: 'absolute' , width:"120px", display: 'block',top: githubcommitcollection_div.top,left: githubcommitcollection_div.left,objectFit: "cover"}}>
          <GithubCommitCollection style={{position: 'absolute',  bottom: githubcommitcollection_div.bottom, left: "-180px" }}
              overrides={GithubCommitOverrideCollectionOverride}
              overrideItems={GithubCommitOverride}/>
        </div>

      <div style={{ position: 'absolute' , width:"120px", display: 'block',top: save_button_div.top,left: save_button_div.left,objectFit: "cover"}}>
          <Button
          isDisabled={
            shaTicket.length === 0 ? false : editTicket.GitCommit.sort().every((value, index) => value === selectedSha.sort()[index])}
          onClick={(event) => handleSaveGitActions(event)}
          size='default' style={{fontSize: '22px' }}>Save  
          <Icon
          ariaLabel=""
          pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"/>
          </Button>
          </div>

          <div style={{ position: 'absolute' , width:"120px", display: 'block',top: back_button_div.top,left: back_button_div.left,objectFit: "cover"}}>
          <Button 
          onClick={(event) => handleBackGitActions(event)}
          size='large' style={{fontSize: '22px' }} >🚀Back
          </Button>
          </div>
          
          <div style={{ cursor: 'pointer', position: 'absolute' , width:"225px", display: 'block',top: expander_div.top,left: expander_div.left,objectFit: "cover"}}>
          <Expander type="single" isCollapsible={true}>
          <ExpanderItem title="Added commits" value="ok">
          {selectedSha.map((sha, index) => (
            <div key={index}>{sha}</div>))}
          </ExpanderItem>
            </Expander>
          </div>
      </>
    );
}

export default ShowGithubActionsComponent;
