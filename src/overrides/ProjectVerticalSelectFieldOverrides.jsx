import React from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { getProjectNameState } from '../states';

export function ProjectVerticalSelectFieldFunc (props) {

    const {
        imageProjectURL,
    } = React.useContext(ProjectContext);

    const ProjectVerticalSelectFieldOverride={
        roadmap_button:{
            onClick: (event) => (console.log("yes"))},
        active_sprints_button:{
            onClick: (event) => (console.log("yes2"))},
        project_name_text:{
            children: getProjectNameState()
        },
        project_image_name:{
            src: imageProjectURL,
        },
    }

    return {
        ProjectVerticalSelectFieldOverride
    }
}