const getDay = () => {
  // obteniendo la fecha actual en fomato: "dia, numero, mes"
  const date = new Date()
  return date.toUTCString().slice(0, -18)
}

export default getDay
