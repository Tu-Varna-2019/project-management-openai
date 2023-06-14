import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { IssueTemplateContext } from "../contexts/IssueTemplateContext";
import { CreateTicketScrollFunc } from "./CreateTicketScrollOverride";
import { TicketInfoScrollFunc } from "./TicketInfoScrollOverride";
import { CreateIssueTemplateFunc } from "./CreateIssueTemplateOverride";

export function EditIssueTemplateFunc(props) {
    const {
        isITTitleEmpty,
        loadingCreateIT,
        handleClosedEditTicketClick,
        handleSaveITClick,
        handleEditITSelectProjectName,
        ITIDIndex,
    } = useContext(IssueTemplateContext);
    const {
        projectNames,
    } = useContext(ProjectContext);

    const {CreateTicketScrollOverride} = CreateTicketScrollFunc();
    const {CreateIssueTemplateOverride} = CreateIssueTemplateFunc();
    const {TicketInfoScrollOverride} = TicketInfoScrollFunc();
    const {issue_template_select_field} = CreateTicketScrollOverride;
    const {title_text_field,description_text_field,comments_text_field} = CreateIssueTemplateOverride;

    const EditIssueTemplateOverride = {
       // ...TicketInfoScrollOverride,
        project_select_field:{
            onChange : (event) => (handleEditITSelectProjectName(event)),
            options: projectNames,
        },
        save_button:{
            onClick : (event) => (handleSaveITClick(event)),
            isDisabled: isITTitleEmpty,
            isLoading: loadingCreateIT
            },
        cancel_button:{
            onClick: (event) => (handleClosedEditTicketClick(event))},
        issue_template_select_field,
        title_text_field,
    }

    return {
        EditIssueTemplateOverride
    }}