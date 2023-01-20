import React from 'react'
import { useSelector } from 'react-redux'
import windDir from '../../../utils/windDir'
import './DayInfo.css'
import wind_dir from '../../../assets/icons/wind_dir.svg'

function DayInfo() {

  const weather = useSelector(e => e.weather.weather)

  return (
    <div className='DayInfo'>
      <h2>Today's Hightlights</h2>
      <div className='DayInfo_divInfo'>
        {/* -- wind -- */}
        <div className='DayInfo_windInfo'>
          <span className='DayInfo_infoTitle'>Wind status</span>
          <div className='DayInfo_divInfoData'>
            <span className='DayInfo_data'>{weather.wind}</span>
            <span className='DayInfo_extent'>mph</span>
          </div>
          <div className='DayInfo_divWindDirection'>
            <div 
              className='DayInfo_divWindIcon' 
              style={{transform:`rotate(${windDir(weather.wind_dir)}deg`}}
            >
              <img src={wind_dir} alt="" />
            </div>
            <span className='DayInfo_windDir'>{weather.wind_dir}</span>
          </div>
        </div>
        {/* -- Humidity -- */}
        <div className='DayInfo_humidityInfo'>
          <span className='DayInfo_infoTitle humidity'>Humidity</span>
          <div className='DayInfo_divInfoData humidity'>
            <span className='DayInfo_data'>{weather.humidity}</span>
            <span className='DayInfo_extent'>%</span>
          </div>
          <div className='DayInfo_divHumidityLevel'>
            <div className='DayInfo_divExtent'>
              <span className='DayInfo_humidityExtent'>0</span>
              <span className='DayInfo_humidityExtent cincuenta'>50</span>
              <span className='DayInfo_humidityExtent'>100</span>
            </div>
            <div className='DayInfo_humidityBackLevel'>
              <div className='DayInfo_humidityLevel' style={{width: `${weather.humidity}%`}}></div>
            </div>
            <span className='DayInfo_humidityFianl'>%</span>
          </div>
        </div>
        {/* -- visibility -- */}
        <div className='DayInfo_visibilityInfo'>
          <span className='DayInfo_infoTitle'>Visibility</span>
          <div className='DayInfo_divInfoData gap'>
            <span className='DayInfo_data'>{weather.visibility}</span>
            <span className='DayInfo_extent'>miles</span>
          </div>
        </div>
        {/* -- air pressure -- */}
        <div className='DayInfo_visibilityInfo'>
          <span className='DayInfo_infoTitle'>Air Pressure</span>
          <div className='DayInfo_divInfoData gap'>
            <span className='DayInfo_data'>{weather.pressure}</span>
            <span className='DayInfo_extent'>mb</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayInfo