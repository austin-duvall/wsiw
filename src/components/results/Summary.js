import React, { useState, useEffect } from 'react';
import { useLocationState } from '../../context/LocationState';
import { useNavigationState } from '../../context/NavigationState';


export default function Summary() {

  const { locationCity } = useLocationState();
  const { view } = useNavigationState();

  const [loadingText, setLoadingText] = useState('Loading...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingText(':(')
    }, 5000);

    return () => clearTimeout(timer)
  }, [loadingText])

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={view ? 'summaryModOff' : 'summaryModOn'}>
      {locationCity ? (
        <h2>{locationCity.long_name}</h2>
      ) : (
        <h2>{loadingText}</h2>
      )}
      <button type='button' onClick={handleRefresh} id='redo'>try again</button>
    </div>
  )
}