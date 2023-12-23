import React, { useState, useEffect } from 'react';
import { useWeatherState } from '../../../context/WeatherState';
import { freezing, cold, mild, empty } from '../../../utils/weatherModule';
import warmHead from '../../../assets/outfit assets/noBackHead/warmHead.png';
import woolHead from '../../../assets/outfit assets/noBackHead/woolHead.png';
import lightHead from '../../../assets/outfit assets/noBackHead/lightHead.png';

export default function Head() {
  const { weather } = useWeatherState();
  const [headImage, setHeadImage] = useState(null);

  const isFreezing = freezing(weather.temp);
  const isCold = cold(weather.temp);
  const isMild = mild(weather.temp);
  const isEmpty = empty(weather);

  useEffect(() => {
    if (!isEmpty) {
      const timeoutId = setTimeout(() => {
        if (isFreezing || isCold) {
          setHeadImage(warmHead);
        } else if (isMild) {
          setHeadImage(woolHead);
        } else {
          setHeadImage(lightHead);
        }
      }, 3000);

      // Clear the timeout when the component unmounts or when conditions change
      return () => clearTimeout(timeoutId);
    }
  }, [isEmpty, isFreezing, isCold, isMild]);

  return (
    <div>
      {headImage && <img className='headPic' src={headImage} alt="Weather-related headwear" />}
    </div>
  );
}
