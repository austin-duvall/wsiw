import React, { useEffect } from 'react';
import { useWeatherState } from '../../context/WeatherState';
import {
  freezing,
  coldRainWind,
  cold,
  mildRainWind,
  mild,
  warmRainWind,
  empty
} from '../../utils/weatherModule';

export default function Top() {
  const { weather } = useWeatherState();

  const isFreezing = freezing(weather.temp)
  const isColdRainWind = coldRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  )
  const isCold = cold(weather.temp)
  const isMildRainWind = mildRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  )
  const isMild = mild(weather.temp)
  const isWarmRainWind = warmRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  )
  const isEmpty = empty(weather)

  const topHandler = () => {
    if (isEmpty) {
      return null
    } else if (isFreezing) {
      return 'big coat'
    } else if (isColdRainWind || isMildRainWind) {
      return 'light jacket'
    } else if (isCold || isMild) {
      return 'sweatshirt'
    } else if (isWarmRainWind) {
      return 'long sleeve t shirt'
    } else {
      return 't shirt'
    }
  }

  return (
    <div>
      <h1>{topHandler()}</h1>
    </div>
  )


}