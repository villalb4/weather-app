import './Weather.css'
import { useSelector } from 'react-redux'
import Villalb4 from '../Villalb4/Villalb4'
import wind_dir from '../../assets/icons/wind_dir.svg'

function Weather() {

  const weather = useSelector(e => e.weather.weather)

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
        <span>cards mapeado</span>
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
            <span className='Weather_infoTitle'>Humidity</span>
            <div className='Weather_divInfoData'>
              <span className='Weather_data'>{weather.humidity}</span>
              <span className='Weather_extent'>%</span>
            </div>
            <div className='Weather_divHumidityLevel'>
              <div className='Weather_divExtent'>
                <span className='Weather_humidityExtent'>0</span>
                <span className='Weather_humidityExtent'>50</span>
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