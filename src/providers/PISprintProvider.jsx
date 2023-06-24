import { PISprintClass } from "../classes/PISprintClass";
import { PISprintContext } from "../contexts/PISprintContext";
import React from "react";

export function PISprintProvider({ children }) {
    const PISprintClassValues = PISprintClass();  // Your custom hook
  
    return (
      <PISprintContext.Provider value={PISprintClassValues}>
        {children}
      </PISprintContext.Provider>
    );
  }
  