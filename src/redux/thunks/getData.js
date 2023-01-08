import { setWeather } from "../slices/weather";

export const getData = () => {
  return async (dispatch, getState) => {

    const apiData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=a426f3247ba44fff7480f8827c8fd1ca&units=metric')
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
            toDay: hoy
          }
        })

    dispatch(setWeather(formatResponse[0]))
  }
}
