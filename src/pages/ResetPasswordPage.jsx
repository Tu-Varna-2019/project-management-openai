import React, { useState} from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ResetPassword } from "../ui-components";
import { Auth } from 'aws-amplify';
import { useNavigate  } from 'react-router-dom';
import { ResetPasswordFunc } from '../overrides/ResetPasswordOverride';

export default function ResetPasswordPage(props) {

  const {
    ResetPasswordOverride
  } = ResetPasswordFunc();

    return(
      <>
      <ResetPassword overrides={ResetPasswordOverride}/></>)}
