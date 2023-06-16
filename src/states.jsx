let ProjectNameState = "ProjectNameLocal";
let DragDropTicketState = "DragDropTicketLocal";
let PINumState = "PINameLocal";
let SprintNumState = "PINameLocal";
let notificationsState = "notificationLocal";
let notificationCountState = "notificationCountLocal";


export const getNotificationsState = () => 
   localStorage.getItem(notificationsState);

export const getNotificationCountState = () => 
   localStorage.getItem(notificationCountState);

export const getPINumState = () => 
   localStorage.getItem(PINumState);

export const getSprintNumState = () => 
localStorage.getItem(SprintNumState);

export const getProjectNameState = () => 
   localStorage.getItem(ProjectNameState);

export const getDragDropTicketState = () => localStorage.getItem(DragDropTicketState);

export const setPINumState = (newPINumState) => {
   localStorage.setItem(PINumState,newPINumState);
};

export const setSprintNumState = (newSprintNumState) => {
   localStorage.setItem(SprintNumState,newSprintNumState);
};

export const setProjectNameState = (newProjectNameState) => {
   localStorage.setItem(ProjectNameState,newProjectNameState);
};

export const setDragDropTicketState = (newDragDropTicketState) => {
   localStorage.setItem(DragDropTicketState,newDragDropTicketState);
};

export const setNotificationsState = (newNotificationsState) => {
   localStorage.setItem(notificationsState,newNotificationsState);
};

export const setNotificationCountState = (newNotificationCountState) => {
   localStorage.setItem(notificationCountState,newNotificationCountState);
};