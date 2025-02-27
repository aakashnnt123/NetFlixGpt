import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MovieSlice"; 
import gptReducer from "./GptSlice"

const appStore = configureStore({
  reducer: { 
    user: userReducer,
    movies: moviesReducer,
    gpt : gptReducer
  },
});

export default appStore;
