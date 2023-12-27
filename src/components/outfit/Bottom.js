import React from 'react';
import { useWeatherState } from '../../context/WeatherState';
import {
  freezing,
  coldRainWind,
  cold,
  mildRainWind,
  mild,
  warmRainWind,
  warm,
  hotRainWind,
  empty
} from '../../utils/weatherModule';

export default function Bottom() {

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
  const isWarm = warm(weather.temp)
  const isHotRainWind = hotRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  )
  const isEmpty = empty(weather)

  const bottomHandler = () => {
    if (isEmpty) {
      return null
    } else if (isFreezing || isColdRainWind) {
      return 'warm trousers'
    } else if (isCold || isMildRainWind) {
      return 'sweatpants'
    } else if (isMild || isWarmRainWind) {
      return 'track pants'
    } else if (isWarm || isHotRainWind) {
      return 'sweatshorts'
    } else {
      return 'cotton shorts'
    }
  }

  return (
    <div>
      <h1>{bottomHandler()}</h1>
    </div>
  )


}