import forecastImageWeather from "./forecastImageWeather"

const forecastAdapter = (data) => {
  return data.map((e, i) => {
    // Obtengo la fecha a partir de mañana en formato UTC.
    // La api a me da la fecha pero en otro formato, por eso
    // este codigo
    const hoy = new Date()

    // esta funcion me la fecha de mañana
    const formatoFecha = (fecha, formato) => {
      return formato.replace('mm', fecha.getMonth() + 1)
        .replace('yy', fecha.getFullYear())
        .replace('dd', fecha.getDate() + i + 1)
    }

    const capoo = formatoFecha(hoy, 'mm/dd/yy')
    const finalDate = new Date(capoo).toUTCString().slice(0, 11)

    return {
      date: finalDate,
      weather: forecastImageWeather(e.weather[0].main),
      temp_max: Math.round(e.main.temp_max),
      temp_min: Math.round(e.main.temp_min),
    }
  })
}

export default forecastAdapter
