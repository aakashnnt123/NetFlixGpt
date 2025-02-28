import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MovieSlice"; 
import gptReducer from "./GptSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
  reducer: { 
    user: userReducer,
    movies: moviesReducer,
    gpt : gptReducer,
    language : languageReducer,
  },
});

export default appStore;
