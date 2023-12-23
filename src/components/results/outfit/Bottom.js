import React, { useState, useEffect } from 'react';
import { useWeatherState } from '../../../context/WeatherState';
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
} from '../../../utils/weatherModule';
import cordBottoms from '../../../assets/outfit assets/noBackBottoms/cordBottoms.png';
import sweatBottoms from '../../../assets/outfit assets/noBackBottoms/sweatBottoms.png';
import techBottoms from '../../../assets/outfit assets/noBackBottoms/techBottoms.png';
import sweatShortBottoms from '../../../assets/outfit assets/noBackBottoms/sweatShortBottoms.png';
import lightShortBottoms from '../../../assets/outfit assets/noBackBottoms/lightShortBottoms.png';

export default function Bottom() {
  const { weather } = useWeatherState();
  const [bottomImage, setBottomImage] = useState(null);

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
  const isWarm = warm(weather.temp);
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
          setBottomImage(cordBottoms);
        } else if (isCold || isMildRainWind) {
          setBottomImage(sweatBottoms);
        } else if (isMild || isWarmRainWind) {
          setBottomImage(techBottoms);
        } else if (isWarm || isHotRainWind) {
          setBottomImage(sweatShortBottoms);
        } else {
          setBottomImage(lightShortBottoms);
        }
      }, 5000);

      // Clear the timeout when the component unmounts or when conditions change
      return () => clearTimeout(timeoutId);
    }
  }, [isEmpty, isFreezing, isColdRainWind, isCold, isMildRainWind, isMild, isWarmRainWind, isWarm, isHotRainWind]);

  return (
    <div>
      {bottomImage && <img className='bottomPic' src={bottomImage} alt="Weather-related bottoms" />}
    </div>
  );
}