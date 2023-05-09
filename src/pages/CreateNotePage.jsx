import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { CreateNotev2 } from "../ui-components";
import { Lambda } from 'aws-sdk';
import { CreateNoteFunc } from '../overrides/CreateNoteOverride';

export default function CreateNotePage(props) {
  
    const {
      CreateNoteOverride
    } = CreateNoteFunc();

    return (  
      <>
        <CreateNotev2
        overrides={CreateNoteOverride}/>
      </>
      )}
