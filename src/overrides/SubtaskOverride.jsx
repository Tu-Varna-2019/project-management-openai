import React, { useContext } from "react";
import { SubtaskContext } from "../contexts/SubtaskContext";
import { UserContext } from "../contexts/UserContext";
import { ProjectContext } from "../contexts/ProjectContext";

export function SubtaskFunc (props) {

    const {
        ticketSubtasks,
        unlinkSubtaskClick
    } = React.useContext(SubtaskContext);
    const {
        userSubImageURL,
    } = React.useContext(UserContext);
    const {
        navigate,
    } = useContext(ProjectContext);

    const ChildTicketShortCollectionOverride={
        ChildTicketShortCollection:{
            items: ticketSubtasks }}
        
    const ChildTicketShortOverride = ({ item, index })  => {
        let asignee_image_url = userSubImageURL.find(data =>
            data.sub === item.Asignee)?.url || "";
        return {
            overrides: {
                title_text:{ children: item.Title },
                story_points_badge:{children: item.StoryPoint },
                ticket_id_text: {children: "KAI-"+item.TicketID},
                issue_type_image: {src: require(`../images/${item.IssueType}.jpeg`)},
                priority_image: {src: require(`../images/${item.Priority}.jpeg`)},
                asignee_icon_image: {src: asignee_image_url },
                "Rectangle 1":{onClick: () => (navigate("/edit-ticket",{state:{selectedTicket:item}}))},
                unlink_task_button:{
                    onClick: () => (
                        unlinkSubtaskClick(item.id))},
        }}}

    return {
        ChildTicketShortCollectionOverride,
        ChildTicketShortOverride,
    }}