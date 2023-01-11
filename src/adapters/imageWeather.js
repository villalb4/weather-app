import clear from '../assets/representation/Clear.png'
import heavy_cloud from '../assets/representation/HeavyCloud.png'
import snow from '../assets/representation/Snow.png'
import thunderstorm from '../assets/representation/Thunderstorm.png'
import light_rain from '../assets/representation/LightRain.png'
import heavy_rain from '../assets/representation/HeavyRain.png'
import sleet from '../assets/representation/Sleet.png'
import hail from '../assets/representation/Hail.png'
import shower from '../assets/representation/Shower.png'

const imageWeather = (weather) => {
  return (
    weather === "Clear" ? clear :
    weather === "Sunny" ? clear :
    weather === "Cloudy" ? heavy_cloud :
    weather === "Partly cloudy" ? heavy_cloud :
    weather === "Overcast" ? heavy_cloud :
    weather === "Mist" ? heavy_cloud :
    weather === "Fog" ? heavy_cloud :
    weather === "Patchy rain possible" ? light_rain :
    weather === "Patchy light drizzle" ? light_rain :
    weather === "Light drizzle" ? light_rain :
    weather === "Patchy light rain" ? light_rain :
    weather === "Light rain" ? light_rain :
    weather === "Moderate rain at times" ? light_rain :
    weather === "Moderate rain" ? light_rain :
    weather === "Heavy rain at times" ? heavy_rain :
    weather === "Heavy rain" ? heavy_rain :
    weather === "Patchy snow possible" ? snow :
    weather === "Blowing snow" ? snow :
    weather === "Blizzard" ? snow :
    weather === "Freezing fog" ? snow :
    weather === "Light snow" ? snow :
    weather === "Patchy moderate snow" ? snow :
    weather === "moderate snow" ? snow :
    weather === "Patchy heavy snow" ? snow :
    weather === "Heavy snow" ? snow :
    weather === "Patchy sleet possible" ? sleet :
    weather === "Patchy freezing drizzle possible" ? sleet :
    weather === "Freezing drizzle" ? sleet :
    weather === "Light freezing rain" ? sleet :
    weather === "Moderate or heavy freezing rain" ? sleet :
    weather === "Light sleet" ? sleet :
    weather === "Moderate or heavy sleet" ? sleet :
    weather === "Patchy light snow" ? sleet :
    weather === "Light sleet showers" ? sleet :
    weather === "Moderate or heavy sleet showers" ? sleet :
    weather === "Loght snow showers" ? sleet :
    weather === "Moderate or heavy snow showers" ? sleet :
    weather === "Ice pellets" ? hail :
    weather === "Moderate or heavy showers of ice pellets" ? hail :
    weather === "Light rain shower" ? shower :
    weather === "Moderate or heavy rain shower" ? shower :
    weather === "Torrentail rain shower" ? shower :
    weather === "Thundery outbreaks possible" ? thunderstorm :
    weather === "Patchy light rain with thunder" ? thunderstorm :
    weather === "Moderate or heavy rain with thunder" ? thunderstorm :
    weather === "Patchy light snow with thunder" ? thunderstorm :
    weather === "Moderate or heavy snow with thunder" ? thunderstorm : clear
  )
}

export default imageWeather
