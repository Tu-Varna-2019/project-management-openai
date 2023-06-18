import '@aws-amplify/ui-react/styles.css';
import React from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { StorageManager } from '@aws-amplify/ui-react-storage';

export function CreateProjectFunc(props) {

    const {
        isProjectEmpty,
        projectName,
        handleProjectName,
        handleConfirmCreateProjectOnClick,
        handleCancelCreateProjectOnClick,
        isConfirmButtonLoading,
        isCancelButtonLoading,
        handleSafeProjectImageChange,
        errorMessageProjectName
    } = React.useContext(ProjectContext);

    const CreateProjectOverride= {
        project_name_text_field:{
            isRequired: true,
            hasError: isProjectEmpty || errorMessageProjectName.includes("Name"),
            value: projectName,
            errorMessage: errorMessageProjectName,
            onChange: (event) => (handleProjectName(event)),
        },
        create_button: {
            onClick : (event) => (handleConfirmCreateProjectOnClick(event)),
            isDisabled: isProjectEmpty,
            isLoading: isConfirmButtonLoading
        },
        cancel_button: {
            onClick : (event) => (handleCancelCreateProjectOnClick(event)),
            isLoading: isCancelButtonLoading
        }
    }

      function FileImageUpload () {
        return (
            <StorageManager
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png','.svg']}
            accessLevel="protected"
            maxFileCount={1}
            processFile={handleSafeProjectImageChange}
          />
        )}

        
        return {
            CreateProjectOverride,
            FileImageUpload
        }}