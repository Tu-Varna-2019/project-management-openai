import React from "react";
import { ActivityContext } from "../contexts/ActivityContext";
import { ProjectContext } from "../contexts/ProjectContext";

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
    } = React.useContext(ProjectContext);

    const ActivityCollectionOverride={
        ActivitySlideCollection:{
            items: activity }}

    const isActivityEmptyTop = activity.length === 0 ? "820px" : "880px";

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
        isActivityEmptyTop,
    }}