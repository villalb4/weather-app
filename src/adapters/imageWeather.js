import clear from '../assets/representation/Clear.png'
import heavy_cloud from '../assets/representation/HeavyCloud.png'
import snow from '../assets/representation/Snow.png'
import shower from '../assets/representation/Shower.png'
import thunderstorm from '../assets/representation/Thunderstorm.png'

const imageWeather = (weather) => {
  return (
    weather === "Clear" ? clear :
    weather === "Clouds" ? heavy_cloud : 
    weather === "Snow" ? snow :
    weather === "Thunderstorm" ? thunderstorm :
    shower
    // weather === "hola" ? "si" : "no"
  )
}

export default imageWeather
