import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: {},
  forecast: []
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
    }
  }
})

export const { setWeather, setForecast } = weatherSlice.actions
export default weatherSlice.reducer
