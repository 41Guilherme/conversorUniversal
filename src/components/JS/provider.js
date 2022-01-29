import React, { createContext, useContext, useState } from "react";

const StatesContext = createContext()

export const StatesProvider = ({children}) => {
    
   
    return(
        <StatesContext.Provider value={{}}>
            {children}
        </StatesContext.Provider>
    )
} 

export const useStates = () => useContext(StatesContext)