const changeDegreeUtil = (temp) => {
  const change = (temp * 1.8) + 32 
  return Math.floor(change)
}

export default changeDegreeUtil