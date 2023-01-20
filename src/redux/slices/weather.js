import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: {},
  forecast: [],
  degree: "°C",
  search: false,
  searchLocation: {}
}

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState: initialState,
  reducers: {
    setWeather: function(state, action) {
      state.weather = action.payload
    },
    setForecast: function(state, action) {
      // console.log(action.payload)
      state.forecast = action.payload
    },
    changeDegree: function(state, action) {
      if(action.payload === "°C") {
        state.degree = action.payload
      } else {
        state.degree = action.payload
      }
    },
    openSearch: function(state, action) {
      state.search = action.payload
    },
    setSearchLocation: function(state, action) {
      state.searchLocation = action.payload
    }
  }
})

export const { setWeather, setForecast, changeDegree, openSearch, setSearchLocation } = weatherSlice.actions
export default weatherSlice.reducer
