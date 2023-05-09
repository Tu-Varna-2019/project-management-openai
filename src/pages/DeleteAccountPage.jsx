import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { DeleteAccount} from "../ui-components";
import { DeleteAccountFunc } from '../overrides/DeleteAccountOverride';

export default function DeleteAccountPage(props) {

  const {
    DeleteAccountOverride
  } = DeleteAccountFunc();

    return(
      <>
      <DeleteAccount overrides={DeleteAccountOverride}/>
       </>)}
