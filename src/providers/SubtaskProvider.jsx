import React from "react";
import { SubtaskClass } from "../classes/SubtaskClass";
import { SubtaskContext } from "../contexts/SubtaskContext";

export function SubtaskProvider({ children }) {
    const SubtaskClassValues = SubtaskClass();  // Your custom hook
  
    return (
      <SubtaskContext.Provider value={SubtaskClassValues}>
        {children}
      </SubtaskContext.Provider>
    );
  }
  