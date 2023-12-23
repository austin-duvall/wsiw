import React, { useState, createContext, useContext } from 'react';

const LocationContext = createContext({ location: {} });

export default function LocationState({ children }) {

  const [locationCoord, setLocationCoord] = useState({})
  const [locationCity, setLocationCity] = useState(null)
  const [locationState, setLocationState] = useState(null)

  return (
    <LocationContext.Provider value={{ locationCoord, setLocationCoord, locationCity, setLocationCity, locationState, setLocationState }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocationState = () => useContext(LocationContext);