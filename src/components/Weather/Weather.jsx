import './Weather.css'
import Villalb4 from './Villalb4/Villalb4'
import DayInfo from './DayInfo/DayInfo'
import Forecast from './Forecast/Forecast'

function Weather() {
  return (
    <div className='Weather'>
      <div className='Weather_top'>
        <div className='Weather_divC'>
          <span className='Weather_c'>°C</span>
        </div>
        <div className='Weather_divF'>
          <span className='Weather_f'>°F</span>
        </div>
      </div>
      <Forecast />
      <DayInfo />
      <Villalb4 />
    </div>
  )
}

export default Weather