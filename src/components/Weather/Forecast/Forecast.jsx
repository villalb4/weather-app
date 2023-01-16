import React from 'react'
import { useSelector } from 'react-redux'
import './Forecast.css'

function Forecast() {

  const forecast = useSelector(e => e.weather.forecast)

  return (
    <div className='Forecast'>
      {
        forecast.map((e, i) => {
          return (
            <div key={i} className="Forecast_divForecast">
              <span className='Forecast_forecastDay'>{i === 0 ? "Tomorrow" : e.date}</span>
              <div className='Forecast_forecastDivImg'>
                <img className='Forecast_forecastImg' src={e.weather} alt="" />
              </div>
               <div className='Forecast_forecastDivMinMax'>
                <span className='Forecast_forecasMax'>{`${e.temp_max}°C`}</span>
                <span className='Forecast_forecasMin'>{`${e.temp_min}°C`}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Forecast