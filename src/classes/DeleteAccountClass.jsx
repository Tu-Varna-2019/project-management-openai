import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Swal from 'sweetalert2';

export function DeleteAccountClass() {

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
    };

    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
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
                navigate(url);
            }})
            };

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
            setErrorDescription("Password must contain at least 8 characters, including at least one uppercase letter,"
            +"one lowercase letter, one number, and one special symbol (@ $ ! % * ? &)");
        } else {
            try {
                await Auth.currentAuthenticatedUser({ bypassCache: true })
                .then((user) => {
                return Auth.changePassword(user, password, "dummy");
                }).then((data) => console.log(data))
            } catch (e) {
                if (e.name === "InvalidPasswordException") {
                Swal.fire({
                title: 'Are you sure?',
                text: "Are you sure you want to delete your account ? This change cannot be reverted",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
                }).then(async (result) => {
                if (result.isConfirmed) {

                    await Auth.deleteUser();
                    navigate('/');
                }})
                }
                else {
                setIsLoading(false);
                setErrorMessage("block");
                setErrorDescription(e.message);
        }}}};

    return {
        password,
        confirmPassword,
        errorMessage,
        errorDescription,
        checkBox,
        errorCheckBox,
        isLoading,
        handleCheckBox,
        handlePassword,
        handleConfirmPassword,
        handleCancelPassword,
        handleDeleteAccount
    }
}