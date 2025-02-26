import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    MovieTrailer : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer:(state , action)=>{
       state.MovieTrailer = action.payload;
    },
    addPopularMovies:(state , action)=>{
      state.PopularMovies = action.payload;
   },
   addTopRatedMovies:(state , action)=>{
    state.TopRatedMovies = action.payload;
 },
 addUpcomingMovies:(state , action)=>{
  state.UpcomingMovies = action.payload;
},
  },
});

export const { addNowPlayingMovies,addMovieTrailer , addPopularMovies,addTopRatedMovies,addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
