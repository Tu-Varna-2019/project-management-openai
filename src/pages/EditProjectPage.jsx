import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { EditProject } from '../ui-components';
import { EditProjectFunc } from '../overrides/EditProjectOverride';
import { CreateProjectFunc } from '../overrides/CreateProjectOverride';


export default function EditProjectPage(props) {
  
    const {
        EditProjectOverride,
    } = EditProjectFunc();
    const {
        FileImageUpload
    } = CreateProjectFunc();
  
    return (
        <>
        <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
        <EditProject overrides={EditProjectOverride}/>
        </div>
        <div style={{ position: 'relative',display: 'block', bottom: 620, right: -660 , width:625 }}>
            <FileImageUpload/>
          </div>
        </>)}