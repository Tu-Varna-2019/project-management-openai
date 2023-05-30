import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ResetPasswordKAI } from "../ui-components";
import { EditTicketFullFunc } from '../overrides/EditTicketFullOverride';

export default function EditTicketFullPage(props) {

  const {
    EditTicketFullOverride
  } = EditTicketFullFunc();

    return(
      <>
      <ResetPasswordKAI overrides={EditTicketFullOverride}/></>)}