import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import React,{ useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Project, User } from '../models';
import { ProjectClass } from '../classes/ProjectClass';
import { User2Class } from '../classes/User2Class';
import { FileUploader } from '@aws-amplify/ui-react';

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
    } = ProjectClass();

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
            <FileUploader
            shouldAutoProceed={false}
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png']}
            accessLevel="public"
            maxFileCount={1}
            maxSize={300000}
            isResumable={true}
            showImages={true}
            onSuccess={(event) =>{handleSafeProjectImageChange(event.key);}}
        />
        )}

        return {
            CreateProjectOverride,
            FileImageUpload
        }
  
}