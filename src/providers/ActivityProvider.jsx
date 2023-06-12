import { ActivityClass } from "../classes/ActivityClass";
import { ActivityContext } from "../contexts/ActivityContext";
import React from "react";

export function ActivityProvider({ children }) {
    const activityClassValues = ActivityClass();  // Your custom hook
  
    return (
      <ActivityContext.Provider value={activityClassValues}>
        {children}
      </ActivityContext.Provider>
    );
  }
  