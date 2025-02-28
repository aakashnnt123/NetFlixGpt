import React from 'react'
import lang from '../Utils/languageConstants';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
  const lang_value = useSelector(store => store.language.lang)
  return (
    <div className=' pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[lang_value].gptSearchPlaceholder}/>
        <button className='py-2 px-4 m-4 bg-red-500 hover:bg-red-700 transition text-white rounded-md col-span-3'>{lang[lang_value].search}</button>
      </form>
      </div>
  )
}

export default GptSearchBar;