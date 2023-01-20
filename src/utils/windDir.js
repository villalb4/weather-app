const windDir = (wind) => {
  return (
    wind === "N" ? 0 :
    wind === "NNE" ? 22.5 :
    wind === "NE" ? 45 :
    wind === "ENE" ? 67.5 :
    wind === "E" ? 90 :
    wind === "ESE" ? 112.5 :
    wind === "SE" ? 135 :
    wind === "SSE" ? 157.5 :
    wind === "S" ? 180 :
    wind === "SSW" ? 202.5 :
    wind === "SW" ? 225 :
    wind === "WSW" ? 247.5 :
    wind === "W" ? 270 :
    wind === "WNW" ? 292.5 :
    wind === "NW" ? 315 : 337.5
  )
}

export default windDir