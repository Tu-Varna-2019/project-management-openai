import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ResetPasswordKAI } from "../ui-components";
import { ResetPasswordKAIFunc } from '../overrides/ResetPasswordKAIOverride';

export default function ResetPasswordKAIPage(props) {

  const {
    ResetPasswordKAIOverride
  } = ResetPasswordKAIFunc();

    return(
      <>
      <ResetPasswordKAI overrides={ResetPasswordKAIOverride}/></>)}
