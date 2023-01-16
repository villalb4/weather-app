import './Weather.css'
import { useSelector } from 'react-redux'
import Villalb4 from '../Villalb4/Villalb4'
import wind_dir from '../../assets/icons/wind_dir.svg'

function Weather() {

  const weather = useSelector(e => e.weather.weather)
  const forecast = useSelector(e => e.weather.forecast)

  return (
    <div className='Weather'>
      {/* ------ top ------ */}
      <div className='Weather_top'>
        <div className='Weather_divC'>
          <span className='Weather_c'>°C</span>
        </div>
        <div className='Weather_divF'>
          <span className='Weather_f'>°F</span>
        </div>
      </div>
      {/* ------ mid ------ */}
      <div className='Weather_mid'>
        {
          forecast.map((e, i) => {
            return (
              <div key={i} className="Weather_divForecast">
                <span className='Weather_forecastDay'>{i === 0 ? "Tomorrow" : e.date}</span>
                <div className='Weather_forecastDivImg'>
                  <img className='Weather_forecastImg' src={e.weather} alt="" />
                </div>
                <div className='Weather_forecastDivMinMax'>
                  <span className='Weather_forecasMax'>{`${e.temp_max}°C`}</span>
                  <span className='Weather_forecasMin'>{`${e.temp_min}°C`}</span>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* ------ bottom ------ */}
      <div className='Weather_bottom'>
        <h2>Today's Hightlights</h2>
        <div className='Weather_divInfo'>
          {/* -- wind -- */}
          <div className='Weather_windInfo'>
            <span className='Weather_infoTitle'>Wind status</span>
            <div className='Weather_divInfoData'>
              <span className='Weather_data'>{weather.wind}</span>
              <span className='Weather_extent'>mph</span>
            </div>
            <div className='Weather_divWindDirection'>
              <div className='Weather_divWindIcon'>
                <img src={wind_dir} alt="" />
              </div>
              <span className='Weather_windDir'>{weather.wind_dir}</span>
            </div>
          </div>
          {/* -- Humidity -- */}
          <div className='Weather_humidityInfo'>
            <span className='Weather_infoTitle humidity'>Humidity</span>
            <div className='Weather_divInfoData humidity'>
              <span className='Weather_data'>{weather.humidity}</span>
              <span className='Weather_extent'>%</span>
            </div>
            <div className='Weather_divHumidityLevel'>
              <div className='Weather_divExtent'>
                <span className='Weather_humidityExtent'>0</span>
                <span className='Weather_humidityExtent cincuenta'>50</span>
                <span className='Weather_humidityExtent'>100</span>
              </div>
              <div className='Weather_humidityBackLevel'>
                <div className='Weather_humidityLevel' style={{width: `${weather.humidity}%`}}></div>
              </div>
              <span className='Weather_humidityFianl'>%</span>
            </div>
          </div>
          {/* -- visibility -- */}
          <div className='Weather_visibilityInfo'>
            <span className='Weather_infoTitle'>Visibility</span>
            <div className='Weather_divInfoData gap'>
              <span className='Weather_data'>{weather.visibility}</span>
              <span className='Weather_extent'>miles</span>
            </div>
          </div>
          {/* -- air pressure -- */}
          <div className='Weather_visibilityInfo'>
            <span className='Weather_infoTitle'>Air Pressure</span>
            <div className='Weather_divInfoData gap'>
              <span className='Weather_data'>{weather.pressure}</span>
              <span className='Weather_extent'>mb</span>
            </div>
          </div>
        </div>
      </div>
      <Villalb4 />
    </div>
  )
}

export default Weather