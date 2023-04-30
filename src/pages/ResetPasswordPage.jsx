import React, { useState} from 'react'
import '@aws-amplify/ui-react/styles.css';
import { ResetPassword } from "../ui-components";
import { Auth } from 'aws-amplify';
import { useNavigate  } from 'react-router-dom';

export default function ResetPasswordPage(props) {

  const navigate = useNavigate();
  const [oldPassword,setOldPassword] = useState('');
  const [newPassword,setNewPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const [errorMessage,setErrorMessage] = useState("none");
  const [errorDescription,setErrorDescription] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  const handleOldPassword = (event) => {
      event.preventDefault();
      setOldPassword(event.target.value);
      if (props.onChange) 
         props.onChange(event);};
  const handleNewPassword = (event) => {
    event.preventDefault();
    setNewPassword(event.target.value);
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

const handleResetPassword = async (event) => {
  event.preventDefault();
  setIsLoading(!isLoading);
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!pattern.test(oldPassword) || !pattern.test(newPassword)) {
        setIsLoading(false);
        setErrorMessage("block");
        setErrorDescription("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special symbol (@ $ ! % * ? &)");}
  else {
    try {
      await Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((user) => {
        return Auth.changePassword(user, oldPassword, newPassword);
      }).then((data) => console.log(data))
      //.catch((err) => console.log(err));
        window.alert("Password changed! Now we will sign you out!");
        Auth.signOut().then(() => {
          // Redirect user to main page
          navigate('/');
        })
      } catch (e) {
        console.error(e.message,"elser");
        setIsLoading(false);
        setErrorMessage("block");
        setErrorDescription(e.message);}}};

    return(
      <>
      <ResetPassword overrides={{
        old_password_field : {
          onChange : (event) => (handleOldPassword(event)),
          value: oldPassword,
          isRequired: true},
        new_password_field : {
          onChange : (event) => (handleNewPassword(event)),
          value: newPassword,
          hasError: oldPassword === newPassword,
          errorMessage: "Old and new passwords should not be the same !",
          isRequired: true},
        confirm_password_field : {
          onChange : (event) => (handleConfirmPassword(event)),
          value: confirmPassword,
          hasError: newPassword !== confirmPassword,
          errorMessage: "Passwords are not the same !",
          isRequired: true},
        confirm_button: {
          onClick : (event) => (handleResetPassword(event)),
          type: "submit",
          isLoading: isLoading,},
        cancel_button: {
          onClick : (event) => (handleCancelPassword(event)),},
        error_alert: {
          style:{ "display": errorMessage },
          isDismissible: false,
          children: errorDescription,}
      }}/></>)}
