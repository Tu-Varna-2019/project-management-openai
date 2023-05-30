import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { DeleteAccountKAI} from "../ui-components";
import { DeleteAccountKAIFunc } from '../overrides/DeleteAccountKAIOverride';


export default function DeleteAccountKAIPage(props) {

  const {
    DeleteAccountKAIOverride
  } = DeleteAccountKAIFunc();

    return(
      <>
      <DeleteAccountKAI overrides={DeleteAccountKAIOverride}/>
       </>)}
