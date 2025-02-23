import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
       <h1 className='text-5xl font-bold'>{title}</h1>
       <p className='py-6 text-lg w-1/3'>{overview}</p>
       <div className=''>
       <button className='bg-red-600 text-white  rounded-md hover:bg-red-700 transition p-3 px-10 text-xl font-bold'>▶Play</button>
       <button className='bg-slate-500 text-black rounded-md  hover:bg-slate-700 transition p-3 px-10 text-xl ml-4 font-bold'>More Info...</button>
       </div>
       
    </div>
  )
}

export default VideoTitle;