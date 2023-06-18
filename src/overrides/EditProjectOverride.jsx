import '@aws-amplify/ui-react/styles.css';
import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { SelectProjectFunc } from './SelectProjectOverride';
import { CreateProjectFunc } from './CreateProjectOverride';

export function EditProjectFunc(props) {

    const {
        isConfirmButtonLoading,
        handleSaveEditProjectClick,
        handleDeleteProjectClick,
        isProjectEmpty,
    }= useContext(ProjectContext);

   const {SelectProjectOverride} = SelectProjectFunc();
   const {select_project_select_field} = SelectProjectOverride;
   const {CreateProjectOverride} = CreateProjectFunc();
   const {project_name_text_field,cancel_button} = CreateProjectOverride;

    const EditProjectOverride={
        select_project_select_field,
        project_name_text_field,
        cancel_button,
        save_button:{
            onClick : (event) => (handleSaveEditProjectClick(event)),
            isLoading: isConfirmButtonLoading,
            isDisabled : isProjectEmpty
        },
        delete_project_image:{
            onClick : (event) => (handleDeleteProjectClick(event)),
        },
    }

    return {
        EditProjectOverride
    }}