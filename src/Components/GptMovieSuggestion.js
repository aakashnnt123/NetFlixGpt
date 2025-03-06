import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'
const GptMovieSuggestion = () => {

  const {gptMovies,TMDBMovies} = useSelector(store => store.gpt);

  if(!gptMovies) return null;


   
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {gptMovies.map((movie,index) => <MovieList key={movie} title = {movie} movies={TMDBMovies[index]}/>)}
          
      </div>
    </div>
  )
}

export default GptMovieSuggestion;