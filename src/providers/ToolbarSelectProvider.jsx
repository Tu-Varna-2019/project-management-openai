import React from "react";
import { ToolbarSelectClass } from "../classes/ToolbarSelectbarClass";
import { ToolbarSelectContext } from "../contexts/ToolbarSelectContext";

export function ToolbarSelectProvider({ children }) {
    const toolbarSelectClassValues = ToolbarSelectClass();  // Your custom hook
  
    return (
      <ToolbarSelectContext.Provider value={toolbarSelectClassValues}>
        {children}
      </ToolbarSelectContext.Provider>
    );
  }
  