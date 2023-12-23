import React, { useState, useEffect } from 'react';
import { useWeatherState } from '../../../context/WeatherState';
import {
  freezing,
  coldRainWind,
  cold,
  mildRainWind,
  mild,
  warmRainWind,
  hotRainWind,
  empty
} from '../../../utils/weatherModule';
import waterShoes from '../../../assets/outfit assets/noBackShoes/waterShoes.png';
import hikingShoes from '../../../assets/outfit assets/noBackShoes/hikingShoes.png';
import highShoes from '../../../assets/outfit assets/noBackShoes/highShoes.png';
import lowShoes from '../../../assets/outfit assets/noBackShoes/lowShoes.png';

export default function Feet() {
  const { weather } = useWeatherState();
  const [feetImage, setFeetImage] = useState(null);

  const isFreezing = freezing(weather.temp);
  const isColdRainWind = coldRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  );
  const isCold = cold(weather.temp);
  const isMildRainWind = mildRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  );
  const isMild = mild(weather.temp);
  const isWarmRainWind = warmRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  );
  const isHotRainWind = hotRainWind(
    weather.temp,
    weather.windSpeed,
    weather.windGusts,
    weather.probOfPrecip
  );
  const isEmpty = empty(weather);

  useEffect(() => {
    if (!isEmpty) {
      const timeoutId = setTimeout(() => {
        if (isFreezing || isColdRainWind) {
          setFeetImage(waterShoes);
        } else if (isCold || isMildRainWind) {
          setFeetImage(hikingShoes);
        } else if (isMild || isWarmRainWind || isHotRainWind) {
          setFeetImage(highShoes);
        } else {
          setFeetImage(lowShoes);
        }
      }, 6000);

      // Clear the timeout when the component unmounts or when conditions change
      return () => clearTimeout(timeoutId);
    }
  }, [isEmpty, isFreezing, isColdRainWind, isCold, isMildRainWind, isMild, isWarmRainWind, isHotRainWind]);

  return (
    <div>
      {feetImage && <img className='feetPic' src={feetImage} alt="Weather-related footwear" />}
    </div>
  );
}
