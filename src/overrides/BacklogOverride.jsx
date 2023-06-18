export function BacklogFunc (props) {


    const BoardTicketToDoOverride={
        TicketToDoCollection:{
            items: ticketToDo}}
    const BoardTicketInProgressOverride={
        TicketInProgressCollection:{
            items:ticketInProgress}}
    const BoardTicketInReviewOverride={
        TicketInReviewCollection:{
            items: ticketInReview}}
    const BoardTicketDoneOverride={
        TicketDoneCollection:{
            items:ticketDone}}
            
    const BacklogOverride = {

    }

    return {
        BacklogOverride,
    }
}