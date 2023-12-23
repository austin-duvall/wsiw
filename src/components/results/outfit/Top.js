import React, { useState, useEffect } from 'react';
import { useWeatherState } from '../../../context/WeatherState';
import {
  freezing,
  coldRainWind,
  cold,
  mildRainWind,
  mild,
  warmRainWind,
  empty
} from '../../../utils/weatherModule';
import warmTop from '../../../assets/outfit assets/noBackTops/warmTop.png';
import lightTop from '../../../assets/outfit assets/noBackTops/lightTop.png';
import sweatTop from '../../../assets/outfit assets/noBackTops/sweatTop.png';
import longTop from '../../../assets/outfit assets/noBackTops/longTop.png';
import shortTop from '../../../assets/outfit assets/noBackTops/shortTop.png';

export default function Top() {
  const { weather } = useWeatherState();
  const [topImage, setTopImage] = useState(null);

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
  const isEmpty = empty(weather);

  useEffect(() => {
    if (!isEmpty) {
      const timeoutId = setTimeout(() => {
        if (isFreezing) {
          setTopImage(warmTop);
        } else if (isColdRainWind || isMildRainWind) {
          setTopImage(lightTop);
        } else if (isCold || isMild) {
          setTopImage(sweatTop);
        } else if (isWarmRainWind) {
          setTopImage(longTop);
        } else {
          setTopImage(shortTop);
        }
      }, 4000);

      // Clear the timeout when the component unmounts or when conditions change
      return () => clearTimeout(timeoutId);
    }
  }, [isEmpty, isFreezing, isColdRainWind, isMildRainWind, isCold, isMild, isWarmRainWind]);

  return (
    <div>
      {topImage && <img className='topPic' src={topImage} alt="Weather-related top" />}
    </div>
  );
}
