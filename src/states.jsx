let ProjectNameState = "ProjectNameLocal";
let DragDropTicketState = "DragDropTicketLocal";


export const getProjectNameState = () => 
   localStorage.getItem(ProjectNameState);

export const getDragDropTicketState = () => localStorage.getItem(DragDropTicketState);

export const setProjectNameState = (newProjectNameState) => {
   localStorage.setItem(ProjectNameState,newProjectNameState);
};
export const setDragDropTicketState = (newDragDropTicketState) => {
   localStorage.setItem(DragDropTicketState,newDragDropTicketState);
};