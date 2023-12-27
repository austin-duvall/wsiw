import React from 'react';
import { useWeatherState } from '../../context/WeatherState';
import {
  freezing,
  coldRainWind,
  cold,
  mildRainWind,
  mild,
  warmRainWind,
  hotRainWind,
  empty
} from '../../utils/weatherModule';

export default function Feet() {

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
  const isHotRainWind = hotRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  )
  const isEmpty = empty(weather)

  const feetHandler = () => {
    if (isEmpty) {
      return null
    } else if (isFreezing || isColdRainWind) {
      return 'boots'
    } else if (isCold || isMildRainWind){
      return 'hokas'
    } else if (isMild || isWarmRainWind || isHotRainWind) {
      return 'sk8-hi'
    } else {
      return 'vans slip on'
    }
  }


  return (
    <div>
      <h1>{feetHandler()}</h1>
    </div>
  )


}