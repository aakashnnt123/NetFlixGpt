import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
       <h1 className='text-5xl font-bold'>{title}</h1>
       <p className='py-6 text-lg w-1/3'>{overview}</p>
       <div className=''>
       <button className='bg-red-600 text-white  rounded-md hover:bg-red-700 transition p-3 px-10 text-xl '>▶Play</button>
       <button className='bg-black text-white hover:bg-black transition p-3 px-10 text-xl ml-4 bg-opacity-75'>More Info...</button>
       </div>
       
    </div>
  )
}

export default VideoTitle;