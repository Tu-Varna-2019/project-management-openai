import React from "react";
import { UserContext } from "../contexts/UserContext";
import { ActivityContext } from "../contexts/ActivityContext";

export function ActivityFunc (props) {
    const {
        activityUser,
        activity,
        activityPriorityImage,
        activityTicketID,
        activityissueType,
        activityTicket,
    } = React.useContext(ActivityContext);
    const {
        navigate,
    } = React.useContext(UserContext);

    const ActivityCollectionOverride={
        ActivitySlideCollection:{
            items: activity }}

    const ActivityOverride = ({ item, index })  => {
        const modifiedDate = new Date(item.ModifiedDate);
        return {
            overrides: {
                asignee_name_text:{ children: activityUser.Name },
                ticket_id_text: {children: "KAI-"+activityTicketID[index]},
                issue_type_image: {src: require(`../images/${activityissueType[index]}.jpeg`)},
                priority_image: {src: require(`../images/${activityPriorityImage[index]}.jpeg`)},
                asignee_icon_image: {src: activityUser.ImageURL },
                "Rectangle 1":{onClick: () => (navigate("/edit-ticket",{state:{selectedTicket:activityTicket[index]}}))},
                date_text: { children: modifiedDate.toISOString().slice(0, 16).replace('T', ' ')},
                activity_text_field:{value: item.Changes}
        }}}

    return {
        ActivityCollectionOverride,
        ActivityOverride,
    }}