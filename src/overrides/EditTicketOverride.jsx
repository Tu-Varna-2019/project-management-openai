import { getProjectNameState } from '../states';
import React, { useContext } from 'react';
import { TicketContext } from '../contexts/TicketContext';
import { ProjectContext } from '../contexts/ProjectContext';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { IssueTemplateContext } from '../contexts/IssueTemplateContext';

export function EditTicketFunc (props) {

    const {
        ticketID,
        title,
        description,
        comment,
        handleDescription,
        handleComment,
        handleCloseEditTicketClick,
        handleSaveEditTicketClick,
        isTitleEmpty,
        handleTitle,
        handleMoreOptionsChange,
        handleAddUserToWatch,
        handleSafeTicketImageChange,
        moreOptions,
        watchedCount,
        watchedAddMeVariant,
        isLoading,
        editTicket,
    } = React.useContext(TicketContext);

    const {
        imageProjectURL,
        navigate,
    } = React.useContext(ProjectContext);
    const {
        openaiProgBar
    } = useContext(IssueTemplateContext);

    const EditTicketOverride={
        project_name_text:{
            children: getProjectNameState()
        },
        ticket_id_text: {
            children: "KAI-"+ticketID,
            onClick: (event) => (navigate("/edit-ticket",{state:{selectedTicket:editTicket}})),
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
            isDisabled : openaiProgBar
        },
        create_button:{
            onClick: (event) => (handleSaveEditTicketClick(event)),
            isLoading: isLoading
        },
        more_options_select_field:{
            onChange : (event) => (handleMoreOptionsChange(event)),
            options: moreOptions
        },
        watch_image:{
            onClick: (event) => (handleAddUserToWatch(event)),
        },
        watch_badge:{
            children: watchedCount,
            variation: watchedAddMeVariant
        }}

        function FileImageTicketUpload () {
        return (
            <StorageManager
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png']}
            accessLevel="public"
            maxFileCount={10}
            processFile={handleSafeTicketImageChange}
          />)} 

    return {
        EditTicketOverride,
        FileImageTicketUpload
    }}