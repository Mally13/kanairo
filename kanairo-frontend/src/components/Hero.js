import React from 'react'
import FlightSearch from './FlightSearch'
import ReveiwBox from './ReveiwBox'
import '../assets/styles/hero.css'

function Hero() {
  return (
    <div>
      <div className='hero-wrapper'>
          <FlightSearch/>
          <ReveiwBox/>
      </div>
    </div>
  )
}

export default Hero