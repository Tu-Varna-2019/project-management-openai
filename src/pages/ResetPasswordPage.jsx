import React from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ResetPassword } from "../ui-components";
import { ResetPasswordFunc } from '../overrides/ResetPasswordOverride';

export default function ResetPasswordPage(props) {

  const {
    ResetPasswordOverride
  } = ResetPasswordFunc();

    return(
      <>
      <ResetPassword overrides={ResetPasswordOverride}/></>)}
