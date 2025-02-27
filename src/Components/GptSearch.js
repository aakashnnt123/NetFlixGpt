import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../Utils/Constant'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div className=''>
      <div className='absolute -z-10 '>
        <img src={BG_URL} alt='background-img' />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
      </div>
  )
}

export default GptSearch