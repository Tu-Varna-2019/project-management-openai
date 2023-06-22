import '@aws-amplify/ui-react/styles.css';
import React,{ useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import { ProjectContext } from '../contexts/ProjectContext';
import { EditIssueTemplateFunc } from './EditIssueTemplateOverride';

export function AddRemoveUserFunc(props) {

    const {
        isLoading,
        handleSaveAddRemoveUser,
    } = React.useContext(UserContext);
    const {
        navigate
    } = useContext(ProjectContext);

    const { EditIssueTemplateOverride} = EditIssueTemplateFunc()
    const {project_select_field} = EditIssueTemplateOverride;

    const AddRemoveUserOverride={
        project_select_field,
        confirm_button:{
            onClick : (event) => (handleSaveAddRemoveUser(event)),
            isLoading: isLoading,
            //isDisabled: projectName === ""
        },
        cancel_button:{
            onClick : (event) => (navigate('/profile',{state:{add_remove_user:false}})),
        }}

    return {
        AddRemoveUserOverride
    }}