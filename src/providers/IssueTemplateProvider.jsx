import React from "react";
import { IssueTemplateClass } from "../classes/IssueTemplateClass";
import { IssueTemplateContext } from "../contexts/IssueTemplateContext";

export function IssueTemplateProvider({ children }) {
    const issueTemplateClassValues = IssueTemplateClass();  // Your custom hook
  
    return (
      <IssueTemplateContext.Provider value={issueTemplateClassValues}>
        {children}
      </IssueTemplateContext.Provider>
    );
  }
  