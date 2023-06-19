import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { IssueTemplateContext } from "../contexts/IssueTemplateContext";
import { CreateIssueTemplateFunc } from "./CreateIssueTemplateOverride";

export function EditIssueTemplateFunc(props) {
    const {
        isITTitleEmpty,
        loadingCreateIT,
        handleClosedEditTicketClick,
        handleSaveITClick,
        handleEditITSelectProjectName,
        ITNames,
        handleSelectEditITChange,
        ITIDIndex,
        openaiProgBar
    } = useContext(IssueTemplateContext);
    const {
        projectNames,
    } = useContext(ProjectContext);

    const {CreateIssueTemplateOverride} = CreateIssueTemplateFunc();
    const {title_text_field,
        description_text_field,
        comments_text_field,
        story_point_stepper_field,
        issue_type_image,
        issue_type_select_field,
        ai_options_select_field
    } = CreateIssueTemplateOverride;

    const EditIssueTemplateOverride = {
        title_text_field,
        description_text_field,
        comments_text_field,
        story_point_stepper_field,
        issue_type_image,
        issue_type_select_field,
        ai_options_select_field,
        issue_template_select_field:{
            options: ITNames,
            onChange: (event) => (handleSelectEditITChange(event)),
        },
        project_select_field:{
            onChange : (event) => (handleEditITSelectProjectName(event)),
            options: projectNames,
        },
        save_button:{
            onClick : (event) => (handleSaveITClick(event)),
            isDisabled: isITTitleEmpty ||ITIDIndex === -1 ,
            isLoading: loadingCreateIT
            },
        cancel_button:{
            onClick: (event) => (handleClosedEditTicketClick(event)),
            isDisabled : openaiProgBar
        },
        }

    return {
        EditIssueTemplateOverride
    }}