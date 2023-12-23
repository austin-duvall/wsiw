import React from 'react';
import Header from './components/Header';
import LocationState from './context/LocationState';
import WeatherState from './context/WeatherState';
import FetchWeather from './api/FetchWeather';
import Home from './components/Home';
import './App.css';
import NavigationState from './context/NavigationState';




export default function App() {
  return (
    <>
      <Header />
      <LocationState>
        <WeatherState>
          <FetchWeather />
          <NavigationState>
            <Home />
          </NavigationState>
        </WeatherState>
      </LocationState>
    </>
  )
}