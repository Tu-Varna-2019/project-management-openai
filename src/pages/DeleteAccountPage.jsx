import React, { useEffect, useState,MyApp, useRef } from 'react'
import '@aws-amplify/ui-react/styles.css';
import { Createnote, DeleteAccount, Home, ResetPassword } from "../ui-components";
import { Button, TextField , Authenticator , Image,View,Heading } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Alert,Card , Text } from '@aws-amplify/ui-react';
import { Note, NoteV2 } from '../models';
import { useTheme } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import HomePage from './HomePage';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate  } from 'react-router-dom';

export default function DeleteAccountPage(props) {

  const navigate = useNavigate();
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const [errorMessage,setErrorMessage] = useState("none");
  const [errorDescription,setErrorDescription] = useState("");
  const [checkBox,setCheckBox] = useState(false);
  const [errorCheckBox,setErrorCheckBox] = useState(true);
  const [isLoading,setIsLoading] = useState(false);

  const handleCheckBox = (event) => {
    event.preventDefault();
    setCheckBox(!checkBox);
    setErrorCheckBox(!errorCheckBox);
    if (props.onChange) 
    props.onChange(event);
  };

  const handlePassword = (event) => {
      event.preventDefault();
      setPassword(event.target.value);
      if (props.onChange) 
         props.onChange(event);};

  const handleConfirmPassword = (event) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
    if (props.onChange) 
       props.onChange(event);};

const handleCancelPassword = (event) => {
  if (window.confirm("Are you sure you want to leave?"))
      window.location.href = 'http://localhost:3000/note';};

const handleDeleteAccount = async (event) => {
  event.preventDefault();
  setIsLoading(!isLoading);
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (checkBox === false) {
    setIsLoading(false);
    setErrorMessage("block");
    setErrorDescription("You must agree to the terms in service , before deleting your account");
  } else if (!pattern.test(password) || !pattern.test(confirmPassword)) {
        setIsLoading(false);
        setErrorMessage("block");
        setErrorDescription("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special symbol (@ $ ! % * ? &)");
  } else {
  try {
      await Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((user) => {
        return Auth.changePassword(user, password, "dummy");
      }).then((data) => console.log(data))
  } catch (e) {
      if (e.name === "InvalidPasswordException") {
        if (window.confirm("Are you sure you want to delete your account ? "+
          "This change cannot be reverted")) {
            await Auth.deleteUser();
            navigate('/');}
      }
      else {
      setIsLoading(false);
      setErrorMessage("block");
      setErrorDescription(e.message);
}}}};

    return(
      <>
      <DeleteAccount overrides={{
        password_field : {
          onChange : (event) => (handlePassword(event)),
          value: password,
          isRequired: true},
        confirm_password_field : {
          onChange : (event) => (handleConfirmPassword(event)),
          value: confirmPassword,
          hasError: password !== confirmPassword,
          errorMessage: "Passwords are not the same !",
          isRequired: true},
          delete_account_button: {
          onClick : (event) => (handleDeleteAccount(event)),
          type: "submit",
          isLoading: isLoading,},
        cancel_button: {
          onClick : (event) => (handleCancelPassword(event)),},
        agreement_checkbox: {
          hasError: errorCheckBox,
          errorMessage: "You must agree to the terms in service , before deleting your account",
          onChange: (event) => (handleCheckBox(event)),
          isRequired: true,
          labelHidden : true,
          value: checkBox,
        },
        error_alert: {
          style:{ "display": errorMessage },
          isDismissible: false,
          children: errorDescription,}
      }}/>
    </>)}
