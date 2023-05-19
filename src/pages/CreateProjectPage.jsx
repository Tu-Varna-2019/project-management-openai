import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateProject } from '../ui-components';
import { CreateProjectFunc } from '../overrides/CreateProjectOverride';

export default function CreateProjectPage(props) {
  
    const {
        CreateProjectOverride,
        FileImageUpload
    } = CreateProjectFunc();
  
    return (  
        <>
        <div className='amplify-container'
            style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
          <CreateProject overrides={CreateProjectOverride} />
          </div>
          <div style={{ position: 'relative',display: 'block', bottom: 630, right: 0 }}>
            <FileImageUpload/>
          </div></>
    )
    }