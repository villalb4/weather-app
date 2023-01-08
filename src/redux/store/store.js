import { configureStore } from "@reduxjs/toolkit";
import weather from "../slices/weather";

export const store = configureStore({
  reducer: {
    weather,
  }
})
