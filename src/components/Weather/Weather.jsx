import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Weather.css'
import Villalb4 from './Villalb4/Villalb4'
import DayInfo from './DayInfo/DayInfo'
import Forecast from './Forecast/Forecast'
import { changeDegree } from '../../redux/slices/weather'

function Weather() {
  
  const dispatch = useDispatch()

  const degrees = useSelector(e => e.weather.degree)

  const handleC = () => {
    dispatch(changeDegree("°C"))
  }

  const handleF = () => {
    dispatch(changeDegree("°F"))
  }

  return (
    <div className='Weather'>
      <div className='Weather_top'>
        <div className={degrees === "°C" ? 'Weather_divC active' : 'Weather_divC'} onClick={handleC}>
          <span className='Weather_c'>°C</span>
        </div>
        <div className={degrees === "°F" ? 'Weather_divF active' : 'Weather_divF'} onClick={handleF}>
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