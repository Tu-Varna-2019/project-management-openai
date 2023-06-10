import { ProjectClass } from "../classes/ProjectClass";
import { ProjectContext } from "../contexts/ProjectContext";
import React from "react";

export function ProjectProvider({ children }) {
    const projectClassValues = ProjectClass();  // Your custom hook
  
    return (
      <ProjectContext.Provider value={projectClassValues}>
        {children}
      </ProjectContext.Provider>
    );
  }
  