import { Button, Heading , useTheme , Image, Text, View } from '@aws-amplify/ui-react';
import React, { useState,useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { TicketClass } from '../classes/TicketClass';
import { DataStore } from 'aws-amplify';
import { ProjectClass } from '../classes/ProjectClass';
import { Project, User } from '../models';
import { UserClass } from '../classes/UserClass';

export function CreateTicketFunc (props) {

    const{
        handleCreateTicketClick,
        setSwitchCreateTicketPage,
        handlePriority,
        priority,
        handleIssueType,
        issueType,
        issueTypesArray,
        title,
        isTitleEmpty,
        handleTitle,
        handleDescription,
        description,
        setAsignee,
        asignee,
        handleAsigneeChange,
        handleOnClickConfirm,
        isLoading
    } = TicketClass();

    const {
        handleProjectName,
        projectName,
        isProjectEmpty,
    } = ProjectClass();

    const{
        usernames,
        setUsernames
    } = UserClass();

    // Get projects & users
    useEffect(() => {
        //setProjects(DataStore.query(Project));
        //setUsernames(DataStore.query(User));
        console.log(DataStore.query(Project));
        },[]);

    const CreateTicketComponentOverride = {
        project_select_field:{
            onChange : (event) => (handlePriority(event)),
            value: projectName,
           // options: projects
        },
        issue_type_select_field:{
            onChange : (event) => (handleIssueType(event)),
            value: issueType,
            options: issueTypesArray
        },
        priority_select_field:{
            onChange : (event) => (handlePriority(event)),
            value: issueType,
            options: ["Low","Medium","High","Critical"]
        },
        title_text_field:{
            isRequired: true,
            hasError: isTitleEmpty,
            value: title,
            errorMessage: "Title must not be empty !",
            onChange: (event) => (handleTitle(event)),
            },
        description_text_field : {
            onChange: (event) => (handleDescription(event)),
            value: description,
            },
        asignee_select_field:{
            onChange : (event) => (handleAsigneeChange(event)),
            value: asignee,
            options: usernames
            },
        create_button:{
            onClick : (event) => (handleOnClickConfirm(asignee)),
            isDisabled: !isTitleEmpty,
            isLoading: isLoading
            }
    }


    return {
        CreateTicketComponentOverride
    }
}