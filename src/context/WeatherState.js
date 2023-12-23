import React, { useState, useContext, createContext } from 'react';

const WeatherContext = createContext({ weather: {} });

export default function WeatherState({ children }) {

  const [weather, setWeather] = useState({
    temp: '',
    windSpeed: '',
    windGusts: '',
    clouds: '',
    probOfPrecip: '',
    snow: '',
    rain: '',
  })

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  )
}

export const useWeatherState = () => useContext(WeatherContext)