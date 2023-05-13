import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2 } from "../ui-components";
import { Lambda } from 'aws-sdk';
import { CreateNoteFunc } from '../overrides/CreateNoteOverride';


export default function CreateNotePage(props) {
  
    const {
      CreateNoteOverride,
      FileImageUpload
    } = CreateNoteFunc();

    return (  
      <>
      <div className='amplify-container'
          style={{ position:'relative', display: 'inline-block',overflow: "hidden"}}>
        <CreateNotev2 overrides={CreateNoteOverride} />
        </div>
        <div style={{ position: 'relative',display: 'block', bottom: 90, right: 0 }}>
          <FileImageUpload/>
        </div></>
      )}
