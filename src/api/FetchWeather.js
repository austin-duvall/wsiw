import { useEffect } from 'react';
import { useLocationState } from '../context/LocationState';
import { useWeatherState } from '../context/WeatherState';

const REACT_APP_WEA_KEY = process.env.REACT_APP_WEA_KEY

export default function PullWeather() {

  const { locationCoord } = useLocationState();
  const { weather, setWeather } = useWeatherState();

  const grabWeather = () => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${locationCoord.lat}&lon=${locationCoord.lng}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${REACT_APP_WEA_KEY}`)
    .then(response => response.json())
    .then(data => {

      const { temp, wind_speed, wind_gust, clouds, pop, snow, rain } = data.daily[0]

      setWeather({
        temp: (temp.max + temp.min) / 2,
        windSpeed: wind_speed,
        windGusts: wind_gust ? wind_gust : 0,
        clouds: clouds,
        probOfPrecip: pop,
        snow: snow ? snow : 0,
        rain: rain ? rain : 0,
      })
    })
    .catch(error => console.error('Error fetching weather', error))
  }

  useEffect(() => {
    if (locationCoord.lat !== undefined && locationCoord.lng !== undefined) {
      grabWeather()
    }
  }, [locationCoord])

  return null

}