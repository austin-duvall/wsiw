import React from 'react';
import { useWeatherState } from '../../context/WeatherState';
import {
  precip,
  cold,
  freezing,
  empty
} from '../../utils/weatherModule';

export default function Accessories() {
  const { weather } = useWeatherState();

  const isPrecip = precip(weather.probOfPrecip)
  const isCold = cold(weather.temp)
  const isFreezing = freezing(weather.temp)
  const isEmpty = empty(weather)

  const accessoryHandler = () => {
    if (isEmpty) {
      return null
    } else if (isPrecip && (isCold || isFreezing)) {
      return 'gloves and umbrella'
    } else if (isCold || isFreezing) {
      return 'gloves'
    } else if (isPrecip) {
      return 'umbrella'
    }
  }

  return (
    <div>
      <h1>{accessoryHandler()}</h1>
    </div>
  )
}