import { API_OPTIONS } from '../Utils/Constant'
import {addUpcomingMovies } from '../Utils/MovieSlice';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect } from 'react';

const useUpcomingMovies = ()=>{
  
  const dispatch = useDispatch();

  const upComingMovies =useSelector(store => store.movies.UpcomingMovies);

  const getUpcomingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);

      const json = await data.json();
      // console.log(json.results);
      dispatch(addUpcomingMovies(json.results));
  };

  useEffect(()=>{
     !upComingMovies &&  getUpcomingMovies();
  },[]);
}

export default useUpcomingMovies;