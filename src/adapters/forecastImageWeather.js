import clear from '../assets/representation/Clear.png'
import heavy_cloud from '../assets/representation/HeavyCloud.png'
import snow from '../assets/representation/Snow.png'
import thunderstorm from '../assets/representation/Thunderstorm.png'
import light_rain from '../assets/representation/LightRain.png'
import heavy_rain from '../assets/representation/HeavyRain.png'

const forecastImageWeather = (weather) => {
  return (
    weather === "Clear" ? clear :
    weather === "Clouds" ? heavy_cloud :
    weather === "Snow" ? snow :
    weather === "Drizzle" ? light_rain :
    weather === "Rain" ? heavy_rain :
    weather === "Snow" ? heavy_cloud :
    weather === "Mist" ? heavy_cloud :
    weather === "Smoke" ? heavy_cloud :
    weather === "Haze" ? heavy_cloud :
    weather === "Dust" ? heavy_cloud :
    weather === "Fog" ? heavy_cloud :
    weather === "Sand" ? heavy_cloud :
    weather === "Ash" ? heavy_cloud :
    weather === "Squall" ? heavy_cloud :
    weather === "Tornado" ? heavy_cloud :
    weather === "Thunderstorm" ? thunderstorm : clear
  )
}

export default forecastImageWeather
