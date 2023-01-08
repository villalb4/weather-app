import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: []
}

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState: initialState,
  reducers: {
    setWeather: function(state, action) {
      state.weather = action.payload
    }
  }
})

export const { setWeather } = weatherSlice.actions
export default weatherSlice.reducer
