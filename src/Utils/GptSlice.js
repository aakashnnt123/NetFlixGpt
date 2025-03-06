import { createSlice } from "@reduxjs/toolkit"

const GptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptSearch:false,
    gptMovies:null,
    TMDBMovies:null
  },
  reducers:{
    toggleGptSearchView : (state)=>{
      state.showGptSearch = !state.showGptSearch;
    },
    addTMDBResult : (state, action)=> {
      const {moviesNames, tmdbResult} = action.payload;
      state.gptMovies= moviesNames;
      state.TMDBMovies = tmdbResult;

    },
  }
})

export const{toggleGptSearchView,addTMDBResult}=GptSlice.actions;
export default GptSlice.reducer