import { setWeather, setForecast } from "../slices/weather";
import imageWeather from "../../adapters/imageWeather";
import weatherApiAdapter from "../../adapters/weatherApiResponse";
import getDay from "../../utils/date";

export const getFiveDaysData = (currentCity) => {
  return async (dispatch, state) => {
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    const response = await apiData.json()

    // todo esto para que el array este acomodado a partir de la fecha de hoy
    // const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    // const hoy = new Date().getDay()
    // const forecastDay = week.slice(hoy, week.length).concat(week.slice(0, hoy))

    // 5 days forecast
    const fiveDays = response.list.filter((e, i) => {
      if(e.dt_txt.slice(11, 13) === "12") {
        return e
      } 
    })

    // filtrando array para que me de los datos que necesito
    const filteredArray = fiveDays.map(e => {
      return {
        date: e.dt_txt.slice(0, 10),
        weather: e.weather[0].main,
        temp_max: e.main.temp_max,
        temp_min: e.main.temp_min,
      }
    })

    dispatch(setForecast(filteredArray))
  }
}

export const getData = (location = "Helsinki") => {
  return async (dispatch, getState) => {
    const apiData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&aqi=no`, {
      headers: { "Content-Type": "application/json" }
    })
    const response = await apiData.json()

    const filteredResponse = weatherApiAdapter(response)

    // formas de convertir el objeto en array para iterar
    // const responseArray = [response].map(e => e) <----
    // const responseArray = [0].map(e => response[e]) <----
    // console.log(filteredResponse)
    dispatch(setWeather(filteredResponse))
    dispatch(getFiveDaysData(filteredResponse.name))
  }
}

export const getGeolocationData= (coords) => {
  return async (dispatch, getState) => {
    const apiData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${coords.lat},${coords.lon}&aqi=no`, {
      headers: { "Content-Type": "application/json" }
    })
    const response = await apiData.json()

    const filteredResponse = weatherApiAdapter(response)

    dispatch(setWeather(filteredResponse))
    dispatch(getFiveDaysData(filteredResponse.name))
  }
}
