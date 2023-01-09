import { setWeather } from "../slices/weather";
import imageWeather from "../../adapters/imageWeather";

export const getData = () => {
  return async (dispatch, getState) => {
    // Obetiendo la data de una locacion 
    const apiData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=madrid&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
    const response = await apiData.json()

    // obteniendo la fecha actual en fomato: "dia, numero, mes"
    const date = new Date()
    const hoy = date.toUTCString().slice(0, -18)

    // como la respuesta es un objeto, la convierto en array para
    // formatear los datos (filtrar solo los que necesito)
    const responseArray = [0].map(e => response)

    const formatResponse = responseArray.map(e => {
      return {
            weather: e.weather[0].main,
            description: e.weather[0].description,
            country: e.sys.country,
            humidity: e.main.humidity,
            id: e.id,
            lat: e.coord.lat,
            lon: e.coord.lon,
            name: e.name,
            pressure: e.main.pressure,
            temp: Math.floor(e.main.temp),
            visibility:e.visibility,
            wind: e.wind.speed,
            toDay: hoy,
            weatherImage: imageWeather(e.weather[0].main)
          }
        })

        // console.log(formatResponse[0])

    dispatch(setWeather(formatResponse[0]))
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
    // console.log(coords)

    // Obetiendo la data de mi geolocalizacion
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}.15&cnt=3&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    const response = await apiData.json()

    console.log(response)

    // obteniendo la fecha actual en fomato: "dia, numero, mes"
    // const date = new Date()
    // const hoy = date.toUTCString().slice(0, -18)

    // como la respuesta es un objeto, la convierto en array para
    // formatear los datos (filtrar solo los que necesito)
    // const responseArray = [0].map(e => response)

    // const formatResponse = responseArray.map(e => {
      // return {
    //         weather: e.weather[0].main,
    //         description: e.weather[0].description,
    //         country: e.sys.country,
    //         humidity: e.main.humidity,
    //         id: e.id,
    //         lat: e.coord.lat,
    //         lon: e.coord.lon,
    //         name: e.name,
    //         pressure: e.main.pressure,
    //         temp: Math.floor(e.main.temp),
    //         visibility:e.visibility,
    //         wind: e.wind.speed,
    //         toDay: hoy,
    //         weatherImage: imageWeather(e.weather[0].main)
    //       }
    //     })

        // console.log(formatResponse[0])

    // dispatch(setWeather(formatResponse[0]))
  }
}
