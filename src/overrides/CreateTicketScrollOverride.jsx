import { useContext } from "react";
import { TicketInfoScrollFunc } from "./TicketInfoScrollOverride"
import { IssueTemplateContext } from "../contexts/IssueTemplateContext";
import { EditTicketFunc } from './EditTicketOverride';


export function CreateTicketScrollFunc(props) {
    const {
        ITNames,
        handleSelectITChange,
    } = useContext(IssueTemplateContext);

   const {TicketInfoScrollOverride} = TicketInfoScrollFunc();
   const {EditTicketOverride} = EditTicketFunc();
   const {title_text_field,description_text_field,comments_text_field} = EditTicketOverride;

    const CreateTicketScrollOverride = {
        issue_template_select_field:{
            options: ITNames,
            onChange: (event) => (handleSelectITChange(event))
        },
        title_text_field,
        description_text_field,
        comments_text_field,
        ...TicketInfoScrollOverride,
    }

    return {
        CreateTicketScrollOverride
    }}