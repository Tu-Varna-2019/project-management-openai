import { TicketClass } from "../classes/TicketClass";
import { User2Class } from "../classes/User2Class";

export function SubtaskFunc (props) {

    // const {
    //     ticketSubtasks
    // } = TicketClass();
    const {
        userSubImageURL,
    } = User2Class();

    const ChildTicketShortCollectionOverride={
        ChildTicketShortCollection:{
            items: []}}
            
    const ChildTicketShortOverride= ({ item, index })  => {
        let asignee_image_url = "";
        userSubImageURL.map((data, index) => {
            if (data.sub === item.Asignee) 
            asignee_image_url = data.url;
           return asignee_image_url;
        });
        
        return {
            overrides: {
                title_text:{ children: item.Title },
                story_points_badge:{children: item.StoryPoint },
                ticket_id_text: {children: "KAI-"+item.TicketID},
                issue_type_image: {src: require(`../images/${item.IssueType}.jpeg`)},
                priority_image: {src: require(`../images/${item.Priority}.jpeg`)},
                asignee_icon_image: {src: asignee_image_url },
           // onClick: () => (
               // navigate("/board",{state:{edited:true,selectedTicket:item}}))}
    }}}

    return {
        ChildTicketShortCollectionOverride,
        ChildTicketShortOverride
    }
}