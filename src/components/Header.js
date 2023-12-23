import React from 'react';
import wsiw from '../assets/icons/wsiw.png'

export default function Header() {
  const handleRefresh = () => {
    window.location.reload();
  };
  
  return (
    <header>
      <img onClick={handleRefresh} src={wsiw}/>
    </header>
  )
}