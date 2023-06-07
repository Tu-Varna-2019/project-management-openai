import { TicketClass } from '../classes/TicketClass';
import { FileUploader } from '@aws-amplify/ui-react';
import React from 'react';

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
        moreOptions,
        watchedCount,
        watchedAddMeVariant,
        isLoading,
    } = TicketClass();

    const EditTicketFullOverride={
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
        }}

    function FileImageTicketUpload () {
        return (
            <FileUploader
            shouldAutoProceed={true}
            acceptedFileTypes={['image/*','.gif', '.bmp', '.doc', '.jpeg', '.jpg','.png']}
            accessLevel="protected"
            maxFileCount={10}
            isResumable={true}
            showImages={false}
            onSuccess={(event) =>{handleSafeTicketImageChange(event.key);}}/>)}

    return {
        EditTicketFullOverride,
        FileImageTicketUpload
    }}