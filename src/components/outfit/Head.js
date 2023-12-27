import React from 'react';
import { useWeatherState } from '../../context/WeatherState';
import {
  freezing,
  cold,
  mild,
  empty
} from '../../utils/weatherModule';

export default function Head() {
  const { weather } = useWeatherState();

  const isFreezing = freezing(weather.temp)
  const isCold = cold(weather.temp)
  const isMild = mild(weather.temp)
  const isEmpty = empty(weather)

  const headHandler = () => {
    if (isEmpty) {
      return null
    } else if (isFreezing || isCold) {
      return 'beanie'
    } else if (isMild) {
      return 'wool baseball cap'
    } else {
      return 'light baseball cap'
    }
  }

  return (
    <div>
      <h1>{headHandler()}</h1>
    </div>
  )
}