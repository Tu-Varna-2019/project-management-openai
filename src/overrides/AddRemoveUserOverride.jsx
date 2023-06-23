import '@aws-amplify/ui-react/styles.css';
import React,{ useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import { ProjectContext } from '../contexts/ProjectContext';
import { SelectProjectFunc } from './SelectProjectOverride';

export function AddRemoveUserFunc(props) {

    const {
        radioAdminUserMode,
        currentUser,
        isLoading,
        handleAdminUserModeChange,
    } = React.useContext(UserContext);
    const {
        navigate,
        handleSaveAddRemoveUser,
    } = useContext(ProjectContext);

    const { SelectProjectOverride} = SelectProjectFunc()
    const {select_project_select_field} = SelectProjectOverride;

    const AddRemoveUserOverride={
        admin_radio:{
            onClick : (event) => (handleAdminUserModeChange(true)),
            value: radioAdminUserMode,
            //checked: radioAdminUserMode,
            isRequired: true,
        },
        user_radio:{
            onClick : (event) => (handleAdminUserModeChange(false)),
            value: !radioAdminUserMode,
            //checked: !radioAdminUserMode,
            isRequired: true,
        },
        select_project_select_field,
        confirm_button:{
            onClick : (event) => (handleSaveAddRemoveUser(event)),
            isLoading: isLoading,
            //isDisabled: projectName === ""
        },
        cancel_button:{
            onClick : (event) => (navigate('/profile',{state:{add_remove_user:false,selectedUserID:currentUser.id}})),
        }}

    return {
        AddRemoveUserOverride
    }}