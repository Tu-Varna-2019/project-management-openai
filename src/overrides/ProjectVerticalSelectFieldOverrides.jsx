import React from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { getProjectNameState } from '../states';
import { PISprintContext } from '../contexts/PISprintContext';

export function ProjectVerticalSelectFieldFunc (props) {
    const {
        imageProjectURL,
        navigate,
    } = React.useContext(ProjectContext);
    const {
        startDate,
        endDate,
        PINum,
        sprintNum,
        PINumbers,
        sprintNumbers,
        handleSelectPINumberChange,
        handleSelectSprintNumberChange,
    } = React.useContext(PISprintContext);

    const ProjectVerticalSelectFieldOverride={
        start_date_text:{
            children: startDate === "-" ? "-" : new Date(startDate).toISOString().slice(0, 16).replace('T', ' ')
        },
        end_date_text:{
            children: endDate === "-" ? "-" : new Date(endDate).toISOString().slice(0, 16).replace('T', ' ')
        },
        PI_text: {
            children: `PI ${PINum}`
        },
        Sprint_text: {
            children: `Sprint ${sprintNum}`
        },
        select_pi_select_field:{
            onChange : (event) => (handleSelectPINumberChange(event)),
            options:PINumbers,
            value: PINum
        },
        select_sprint_select_field:{
             onChange : (event) => (handleSelectSprintNumberChange(event)),
             options: PINum === 0 ? [] : sprintNumbers,
             value: sprintNum
        },
        backlog_button:{
            onClick: (event) => (navigate("/backlog"))},
        active_sprints_button:{
            onClick: (event) => (navigate("/board"))},
        project_name_text:{
            children: getProjectNameState()
        },
        project_image_name:{
            src: imageProjectURL,
        }}

    return {
        ProjectVerticalSelectFieldOverride
    }}