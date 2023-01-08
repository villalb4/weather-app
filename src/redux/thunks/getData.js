import { setWeather } from "../slices/weather";

export const getData = () => {
  return async (dispatch, getState) => {

    const apiData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=dd92ce734aa29b1a02b020a8160483a7&units=metric')
    const response = await apiData.json()

    const responseArray = [{}].map(e => response)

    const formatResponse = responseArray.map(e => {
      return {
            country: e.sys.country,
            humidity: e.main.humidity,
            id: e.id,
            lat: e.coord.lat,
            lon: e.coord.lon,
            name: e.name,
            pressure: e.main.pressure,
            temp: e.main.temp,
            visibility:e.visibility,
            wind: e.wind.speed,
          }
    })
    
    dispatch(setWeather(formatResponse))
  }
}
