import { setWeather } from "../slices/weather";
import imageWeather from "../../adapters/imageWeather";
import getDay from "../../utils/date";

export const getData = (location = "Helsinki") => {
  return async (dispatch, getState) => {
    // Obetiendo la data de una locacion 
    const apiData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&aqi=no`, {
      headers: { "Content-Type": "application/json" }
    })
    const response = await apiData.json()

    // formateando la respuesta para filtrar los datos que necesito
    const filteredResponse = {
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

    // formas de convertir el objeto en array para iterar
    // const responseArray = [response].map(e => e) <----
    // const responseArray = [0].map(e => response[e]) <----

    dispatch(setWeather(filteredResponse))
  }
}

export const getFiveDaysData = () => {
  return async (dispatch, state) => {
    // const apiData = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=helsinki&appid=a426f3247ba44fff7480f8827c8fd1ca')
    // const response = await apiData.json()
  }
}

export const getGeolocationData= (coords) => {
  return async (dispatch, getState) => {
    // Obetiendo la data de mi geolocalizacion
    const apiData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${coords.lat},${coords.lon}&aqi=no`, {
      headers: { "Content-Type": "application/json" }
    })
    const response = await apiData.json()

    // formateando la respuesta para filtrar los datos que necesito
    const filteredResponse = {
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

    dispatch(setWeather(filteredResponse))
  }
}
