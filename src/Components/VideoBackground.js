import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/Constant';

const VideoBackground = ({movieId}) => {

  console.log(movieId);
  const getMovieVideos = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/939243/videos?language=en-US', API_OPTIONS)
     const json = await data.json();
     console.log(json);

     const filterdata = json.results.filter((video) => video.type === "Trailer");
     const Trailer = filterdata.length? filterdata[0]:json.results[0];
     console.log(Trailer);
  };
  useEffect(()=>{
    getMovieVideos();
  },[]);
  return (
   
    <div>
      
    </div>
  )
}

export default VideoBackground;