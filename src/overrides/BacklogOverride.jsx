import { useContext } from "react"
import { TicketContext } from "../contexts/TicketContext"
import { UserContext } from "../contexts/UserContext";
import { ProjectContext } from "../contexts/ProjectContext";

export function BacklogFunc (props) {

    const {
        sprint1,
        sprint2,
        sprint3,
        sprint4,
    } = useContext(TicketContext);
    const {
        userSubImageURL,
    } = useContext(UserContext);
    const {
        navigate
    } = useContext(ProjectContext);

    const Sprint1TicketOverride={
        TicketToDoCollection:{
            items: sprint1}}
    const Sprint2TicketOverride={
        TicketToDoCollection:{
            items:sprint2}}
    const Sprint3TicketOverride={
        TicketToDoCollection:{
            items: sprint3}}
    const Sprint4TicketOverride={
        TicketToDoCollection:{
            items:sprint4}}

            const BacklogOverrideItems = ({ item, index })  => {
                let asignee_image_url = "";
                userSubImageURL.map((data, index) => {
                    if (data.sub === item.Asignee) 
                    asignee_image_url = data.url;
                   return asignee_image_url;
                });
                return {
                    overrides: {
                        title_ticket_text:{ children: item.Title },
                        epic_link_badge:{ children: item.EpicLink },
                        story_points_badge:{children: item.StoryPoint },
                        ticket_id_text: {children: "KAI-"+item.TicketID},
                        issue_type_image: {src: require(`../images/${item.IssueType}.jpeg`)},
                        priority_image: {src: require(`../images/${item.Priority}.jpeg`)},
                        asignee_icon_image: {src: asignee_image_url },
                        },
                    onClick: () => (
                        navigate("/backlog",{state:{edited_bg:true,selectedTicket:item}}))};}

    return {
        BacklogOverrideItems,
        Sprint1TicketOverride,
        Sprint2TicketOverride,
        Sprint3TicketOverride,
        Sprint4TicketOverride,
    }}