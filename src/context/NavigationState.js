import React, { useState, useContext, createContext } from 'react';

const NavigationContext = createContext();

export default function NavigationState({ children }) {

  const [view, setView] = useState(true)

  return (
    <NavigationContext.Provider value={{ view, setView }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigationState = () => useContext(NavigationContext)