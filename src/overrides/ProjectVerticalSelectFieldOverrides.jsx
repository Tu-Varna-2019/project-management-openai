import { ProjectClass } from '../classes/ProjectClass';


export function ProjectVerticalSelectFieldFunc (props) {

    const {
        received_project_name,
        imageProjectURL,
    } = ProjectClass();

    const ProjectVerticalSelectFieldOverride={
        roadmap_button:{
            onClick: (event) => (console.log("yes"))},
        active_sprints_button:{
            onClick: (event) => (console.log("yes2"))},
        project_name_text:{
            children: received_project_name
        },
        project_image_name:{
            src: imageProjectURL,
        },
    }

    return {
        ProjectVerticalSelectFieldOverride
    }
}