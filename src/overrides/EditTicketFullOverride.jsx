import { TicketClass } from '../classes/TicketClass';
import { ProjectClass } from '../classes/ProjectClass';
import { FileUploader } from '@aws-amplify/ui-react';
import React from 'react';
import { User2Class } from '../classes/User2Class';
import { ToolbarSelectClass } from '../classes/ToolbarSelectbarClass';

export function EditTicketFullFunc () {

    const {
        ticketID,
        title,
        description,
        handleSafeTicketImageChange,
        comment,
        handleDescription,
        handleComment,
        handleCloseEditTicketClick,
        handleSaveEditTicketClick,
        isTitleEmpty,
        handleTitle,
        handleMoreOptionsChange,
        handleAddUserToWatch,
        handleGoToCreateTicketClick,
        moreOptions,
        watchedCount,
        watchedAddMeVariant,
        isLoading,
    } = TicketClass();

    const {
        alertDescription,
        alertVariant,
        alertVisibility,
        currentUser,
    } = User2Class();

    const {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        assignedToMe,
    } = ToolbarSelectClass();

    const {
        received_project_name,
        imageProjectURL,
    } = ProjectClass();

    const EditTicketFullOverride={
        project_name_text:{
            children: received_project_name
        },
        ticket_id_text: {
            children: "KAI-"+ticketID
        },
        title_text_field:{
            isRequired: true,
            hasError: isTitleEmpty,
            value: title,
            errorMessage: "Title must not be empty!",
            onChange: (event) => (handleTitle(event)),
        },
        description_text_field:{
            value: description,
            onChange: (event) => (handleDescription(event)),
        },
        comments_text_field:{
            value: comment,
            onChange: (event) => (handleComment(event)),
        },
        project_image_name:{
            src: imageProjectURL
        },
        cancel_button:{
            onClick: (event) => (handleCloseEditTicketClick(event)),
        },
        create_button:{
            onClick: (event) => (handleSaveEditTicketClick(event)),
            isLoading: isLoading
        },
        more_options_select_field:{
            onChange : (event) => (handleMoreOptionsChange(event)),
            options: moreOptions
        },
        watch_issue_button:{
            onClick: (event) => (handleAddUserToWatch(event)),
        },
        watch_badge:{
            children: watchedCount,
            variation: watchedAddMeVariant
        },
        success_alert : { 
            style:{"display": alertVisibility },
            children: alertDescription,
            variant: alertVariant,
        },
        projects_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleProjectsSelectChange(event)),
            options:["","switch project"],
        },
        your_work_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleYourWorkSelectChange(event)),
            options: assignedToMe ,
        },
        issue_templates_select_field:{
            style:{color:"transparent"},
            //onChange : (event) => (handleSelectedProjectOnChange(event)),
            options:["","all templates","project templates"],
        },
        profile_select_field: {
            style:{color:"transparent"},
            onChange : (event) => (handleProfileSelectChange(event)),
            options:["",currentUser.username,"Manage account","Log out"],
        },
        teams_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleTeamsSelectChange(event)),
            options:["","all users"],
        },
        create_ticket_button:{
            onClick: (event) => (handleGoToCreateTicketClick(event))},
    }

    function FileImageTicketUpload () {
        return (
            <FileUploader
            shouldAutoProceed={false}
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png']}
            accessLevel="public"
            maxFileCount={1}
            //maxSize={300000}
            isResumable={true}
            showImages={true}
            onSuccess={(event) =>{handleSafeTicketImageChange(event.key);}}/>)}

    return {
        EditTicketFullOverride,
        FileImageTicketUpload
    }}