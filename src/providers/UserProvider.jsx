import { User2Class } from "../classes/User2Class";
import { UserContext } from "../contexts/UserContext";
import React from "react";


export function UserProvider({ children }) {
    const userClassValues = User2Class();  // Your custom hook
  
    return (
      <UserContext.Provider value={userClassValues}>
        {children}
      </UserContext.Provider>
    );
  }
  