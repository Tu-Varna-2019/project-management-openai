import React, { useContext } from 'react';
import { getDragDropTicketState } from '../states';
import { TicketContext } from '../contexts/TicketContext';
import { UserContext } from '../contexts/UserContext';
import { ProjectContext } from '../contexts/ProjectContext';


export function BoardFunc (props) {
    const {
        userSubImageURL,
    } = React.useContext(UserContext);
    const {
        ticketToDo,
        ticketInProgress,
        ticketInReview,
        ticketDone,
        handleGoToCreateTicketClick,
        handleHoldMoveTicket,
        handleReleaseMoveTicket,
    } = React.useContext(TicketContext);

    const {
        navigate
    } = useContext(ProjectContext);
    
    const customOverrideItems = ({ item, index })  => {
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
                Card: {
                    draggable: "true",
                    onDragStart: () => (handleHoldMoveTicket(item.id))}},
            onClick: () => (
                navigate("/board",{state:{edited:true,selectedTicket:item}}))};}

    const isTicketToDoEmptyTop = ticketToDo.length === 0 ? "950px" : "1040px";
    const isTicketInProgressEmptyTop = ticketInProgress.length === 0 ? "950px" : "1040px";
    const isTicketInReviewEmptyTop = ticketInReview.length === 0 ? "950px" : "1040px";
    const isTicketDoneEmptyTop = ticketDone.length === 0 ? "950px" : "1040px";

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

    const BoardComponentOverride = {
        todo_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"ToDo")),
            // implment when able to change color for todo card color onDragOver: () => (console.log("drag over")),
        },
        in_progress_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"InProgress"))
        },
        in_review_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"InReview"))
        },
        done_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"Done"))
        },
        create_ticket_button:{
            onClick: (event) => (handleGoToCreateTicketClick(event))},
        }
        
    return {
        isTicketToDoEmptyTop,
        isTicketInProgressEmptyTop,
        isTicketInReviewEmptyTop,
        isTicketDoneEmptyTop,
        BoardComponentOverride,
        BoardTicketToDoOverride,
        BoardTicketInProgressOverride,
        BoardTicketInReviewOverride,
        BoardTicketDoneOverride,
        customOverrideItems}}