import { API_OPTIONS } from '../Utils/Constant'
import {addTopRatedMovies } from '../Utils/MovieSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';

const useTopRatedMovies = ()=>{
  
  const dispatch = useDispatch();
  const topRatedMovies =useSelector(store => store.movies.TopRatedMovies);

  const getTopRatedMovies = async()=>{
    const data = await fetch( 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' , API_OPTIONS);

      const json = await data.json();
      // console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
  };

  useEffect(()=>{
     !topRatedMovies &&  getTopRatedMovies();
  },[]);
}

export default useTopRatedMovies;