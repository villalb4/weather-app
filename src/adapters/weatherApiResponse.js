import getDay from "../utils/date"
import imageWeather from "./imageWeather"

const weatherApiAdapter = (response) => {
  return  {
    weather: response.current.condition.text,
    country: response.location.country,
    humidity: response.current.humidity,
    id: response.location.tz_id,
    lat: response.location.lat,
    lon: response.location.lon,
    name: response.location.name,
    pressure: response.current.pressure_mb,
    temp_f: Math.floor(response.current.temp_f),
    temp_c: Math.floor(response.current.temp_c),
    visibility: response.current.vis_miles,
    wind: response.current.wind_mph,
    wind_dir: response.current.wind_dir,
    toDay: getDay(),
    weatherImage: imageWeather(response.current.condition.text)
  }
}

export default weatherApiAdapter
