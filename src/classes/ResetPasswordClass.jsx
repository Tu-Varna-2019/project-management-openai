import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Swal from 'sweetalert2';

export function ResetPasswordClass() {

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
    };
  const handleNewPassword = (event) => {
    event.preventDefault();
    setNewPassword(event.target.value);
    };

const handleConfirmPassword = (event) => {
  event.preventDefault();
  setConfirmPassword(event.target.value);
  };

const handleCancelPassword = (event,url) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "Are you sure you want to leave?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {

       navigate(url);}})
      };

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
      Swal.fire(
        'Changed!',
        "Password changed! Now we will sign you out!",
        'success'
      )
        Auth.signOut().then(() => {
          navigate('/');})
      } catch (e) {
        console.error(e.message,"elser");
        setIsLoading(false);
        setErrorMessage("block");
        setErrorDescription(e.message);}}};

        return {
            oldPassword,
            newPassword,
            confirmPassword,
            errorMessage,
            errorDescription,
            isLoading,
            handleOldPassword,
            handleNewPassword,
            handleConfirmPassword,
            handleCancelPassword,
            handleResetPassword
        }
}