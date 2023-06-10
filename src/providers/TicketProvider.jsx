import { TicketContext } from "../contexts/TicketContext";
import { TicketClass } from "../classes/TicketClass";
import React from "react";

export function TicketProvider({ children }) {
    const ticketClassValues = TicketClass();  // Your custom hook
  
    return (
      <TicketContext.Provider value={ticketClassValues}>
        {children}
      </TicketContext.Provider>
    );
  }
  