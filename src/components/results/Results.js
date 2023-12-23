import React from 'react';
import { useNavigationState } from '../../context/NavigationState';
import Summary from '../../components/results/Summary';
import Head from '../../components/results/outfit/Head';
import Top from '../../components/results/outfit/Top';
import Bottom from '../../components/results/outfit/Bottom'
import Feet from '../../components/results/outfit/Feet'



export default function Results() {

  return (
    <div className='results'>
      <Summary />
      <div className='outfit'>
        <Head />
        <Top />
        <Bottom />
        <Feet />
      </div>
    </div>
    )
}