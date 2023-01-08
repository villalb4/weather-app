import React from 'react'
import './Panel.css'
import { useSelector } from 'react-redux'
// ------ icons/images ------ 
import my_location from '../../assets/icons/my_location.png'
import pint_drop from '../../assets/icons/pin_drop.png'
import cloud_background from '../../assets/representation/Cloud-background.png'

function Panel() {

  const weather = useSelector(e => e.weather.weather)

  return (
    <div className='Panel'>
      {/* ---- top panel ---- */}
      <div className='Panel_top'>
        <div className="Panel_divSearchButton">
          <button className='Panel_searchButton'>Search for places</button>
        </div>
        <div className='Panel_divMyLocation'>
          <button className='Panel_myLocation'>
            <img src={my_location} alt="" />
          </button>
        </div>
      </div>
      {/* ---- mid panel ---- */}
      <div 
        className='Panel_mid'
      >
        <div className='Panel_divWeatherImage'></div>
        <div className='Panel_divTemp'>
          <span className='Panel_temp'>{weather.temp}</span>
        </div>
        <div className='Panel_divWeatherDescription'>
          <span className='Panel_weatherDescription'>{weather.weather}</span>
        </div>
        <div className='Panel_midBackground'>
          <img src={cloud_background} alt="" />
        </div>
      </div>
      {/* ---- bottom panel ---- */}
      <div className='Panel_bottom'>
        <div className='Panel_divDate'>
          <span className='Panel_today'>Today</span>
          <span>•</span>
          <span className='Panel_date'>{weather.toDay}</span>
        </div>
        <div className='Panel_divLocation'>
          <div>
            <img src={pint_drop} alt="" />
          </div>
          <span className='Panel_location'>{weather.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Panel