import React from "react";
import { GithubContext } from "../contexts/GithubContext";
import { GithubClass } from "../classes/GithubClass";

export function GithubProvider({ children }) {
    const GithubClassValues = GithubClass();  // Your custom hook
  
    return (
      <GithubContext.Provider value={GithubClassValues}>
        {children}
      </GithubContext.Provider>
    );
  }
  