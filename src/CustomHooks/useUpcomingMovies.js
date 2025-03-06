import { API_OPTIONS } from '../Utils/Constant';
import { addUpcomingMovies } from '../Utils/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector(store => store.movies.UpcomingMovies);

  useEffect(() => {
    if (upComingMovies) return; // Avoid redundant API calls

    const fetchUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };

    fetchUpcomingMovies();
  }, [dispatch, upComingMovies]); // ✅ Correct dependencies

};

export default useUpcomingMovies;
