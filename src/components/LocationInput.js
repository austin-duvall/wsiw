import React, { useState } from 'react';
import { useLocationState } from '../context/LocationState';
import { useNavigationState } from '../context/NavigationState';
import { fetchLocation } from '../api/fetchLocation';


export default function LocationInput() {
  const [zipcode, setZipcode] = useState('')

  const { setLocationCoord, setLocationCity, setLocationState } = useLocationState();
  const { view, setView } = useNavigationState();

  const handleChange = (e) => {
    setZipcode(e.target.value)
  }

  const isReady = zipcode.length === 5 && /^\d{5}$/.test(zipcode);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLocation(zipcode, setLocationCoord, setLocationCity, setLocationState)
    setView(false)
  }

  return (
    <div className={view ? 'inputBoxOn' : 'inputBoxOff'}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='zipcode'>where are you?</label>
        <p id='disclaimer'>5-digit zipcode, us only</p>
        <input
          type='text'
          name='zipcode'
          id='zipcode'
          value={zipcode}
          onChange={handleChange}
        />
        <button disabled={!isReady} type='submit'>go</button>
      </form>
    </div>
  )
}