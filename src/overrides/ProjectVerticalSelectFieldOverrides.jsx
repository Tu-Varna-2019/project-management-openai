import { ProjectClass } from '../classes/ProjectClass';
import { getProjectNameState } from '../states';

export function ProjectVerticalSelectFieldFunc (props) {

    const {
        imageProjectURL,
    } = ProjectClass();

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