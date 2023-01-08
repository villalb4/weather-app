import React from 'react'
import './Panel.css'
// ------ icons ------ 
import my_location from '../../assets/icons/my_location.png'

function Panel() {
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
      <div className='Panel_mid'>
        <div className='Panel_divWeatherImage'></div>
        <div className='Panel_divTemp'>
          <span className='Panel_Temp'></span>
        </div>
        <div className='Panel_divWeatherDescription'>
          <span className='Panel_weatherDescription'></span>
        </div>
        <div className='Panel_divBackgroundClouds'></div>
      </div>
      {/* ---- bottom panel ---- */}
      <div className='Panel_bottom'>
        <div className='Panel_'></div>
        <div className='Panel_'></div>
      </div>
    </div>
  )
}

export default Panel