import { useContext } from "react";
import { IssueTemplateContext } from "../contexts/IssueTemplateContext";
import { ProjectContext } from "../contexts/ProjectContext";
import { TicketContext } from "../contexts/TicketContext";


export function CreateIssueTemplateFunc(props) {
    const {
        ITTitle,
        ITDescription,
        ITComment,
        ITStoryPoint,
        ITIssueType,
        isITTitleEmpty,
        loadingCreateIT,
        handleITTitle,
        handleITDescription,
        handleITComment,
        handleITIssueType,
        handleITStoryPoints,
        handleClosedCreateITClick,
        handleCreateITClick,
    } = useContext(IssueTemplateContext);
    const {
        imageProjectURL,
    } = useContext(ProjectContext);
    const {
        isseTypeOptions
    } = useContext(TicketContext);

    const CreateIssueTemplateOverride = {
        title_text_field:{
            isRequired: true,
            hasError: isITTitleEmpty,
            value: ITTitle,
            errorMessage: "Title must not be empty!",
            onChange: (event) => (handleITTitle(event)),
        },
        description_text_field:{
            value: ITDescription,
            onChange: (event) => (handleITDescription(event)),
        },
        comments_text_field:{
            value: ITComment,
            onChange: (event) => (handleITComment(event)),
        },
        issue_type_select_field:{
            onChange : (event) => (handleITIssueType(event)),
            options: isseTypeOptions,
        },
        issue_type_image: {
            src: require(`../images/${ITIssueType}.jpeg`)
        },
        story_point_stepper_field:{
            onStepChange : (newValue) => (handleITStoryPoints(newValue)),
            min:1,
            max:50,
            step:1,
            value: ITStoryPoint,
        },
        project_image_name:{
            src: imageProjectURL
        },
        create_button:{
            onClick : (event) => (handleCreateITClick(event)),
            isDisabled: isITTitleEmpty,
            isLoading: loadingCreateIT
            },
        cancel_button:{
            onClick: (event) => (handleClosedCreateITClick(event))},
    }

    return {
        CreateIssueTemplateOverride
    }
}