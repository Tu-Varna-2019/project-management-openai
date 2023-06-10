let ProjectNameState = "ProjectNameLocal";
let DragDropTicketState = "DragDropTicketLocal";
let EditTicketIDState = 0;

export const getEditTicketIDState = () => 
   localStorage.getItem(EditTicketIDState);
   export const setEditTicketIDState = (newEditTicketIDState) => {
      localStorage.setItem(EditTicketIDState,newEditTicketIDState);
   };

export const getProjectNameState = () => 
   localStorage.getItem(ProjectNameState);

export const getDragDropTicketState = () => localStorage.getItem(DragDropTicketState);

export const setProjectNameState = (newProjectNameState) => {
   localStorage.setItem(ProjectNameState,newProjectNameState);
};
export const setDragDropTicketState = (newDragDropTicketState) => {
   localStorage.setItem(DragDropTicketState,newDragDropTicketState);
};