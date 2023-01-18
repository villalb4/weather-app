import './Panel.css'
import { useSelector, useDispatch } from 'react-redux'
import { getGeolocationData } from '../../redux/thunks/getData'
import { openSearch } from '../../redux/slices/weather'
// ------ icons/images ------ 
import pint_drop from '../../assets/icons/pint_drop.svg'
import geolocation from '../../assets/icons/geolocation.svg'
import cloud_background from '../../assets/representation/Cloud-background.png'

function Panel() {

  const dispatch = useDispatch()

  const weather = useSelector(e => e.weather.weather)

  const degrees = useSelector(e => e.weather.degree)

  const handleLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const myCoords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
        dispatch(getGeolocationData(myCoords))
      })
    } else {
      alert('your browser does not support geolocation')
    } 
  }

  const handleOpen = () => {
    dispatch(openSearch(true))
  }

  return (
    <div className='Panel'>
      {/* ---- top panel ---- */}
      <div className='Panel_top'>
        <div className="Panel_divSearchButton">
          <button onClick={handleOpen} className='Panel_searchButton'>Seach for places</button>
        </div>
        <div className='Panel_divMyLocation'>
          <button className='Panel_myLocation' onClick={handleLocation}>
            <img className='Panel_myLocationIcon' src={geolocation} alt="" />
          </button>
        </div>
      </div>
      {/* ---- mid panel ---- */}
      <div className='Panel_mid'>
        <div className='Panel_divWeatherImage'>
          <img className='Panel_weatherImage' src={weather.weatherImage} alt="" />
        </div>
        <div className='Panel_divTemp'>
          <span className='Panel_temp'>{degrees === "°C" ? weather.temp_c : weather.temp_f}</span>
          <span className='Panel_tempGrados'>{degrees}</span>
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
            <img className='Panel_pintDropIcon' src={pint_drop} alt="" />
          </div>
          <span className='Panel_location'>{weather.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Panel