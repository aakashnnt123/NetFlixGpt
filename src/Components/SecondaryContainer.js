import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  // console.log(movies.nowPlayingMovies);
  return (
    <div className=' bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title = {"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
     <MovieList title = {"Top Rated Movies"} movies={movies.TopRatedMovies}/>
     <MovieList title = {"Popular Movies"} movies={movies.PopularMovies}/>
     <MovieList title = {"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      </div>
</div>
  )
}

export default SecondaryContainer