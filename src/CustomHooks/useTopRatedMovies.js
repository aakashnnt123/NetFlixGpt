import { API_OPTIONS } from '../Utils/Constant';
import { addTopRatedMovies } from '../Utils/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store => store.movies.TopRatedMovies);

  useEffect(() => {
    if (topRatedMovies) return; // Avoid unnecessary API calls

    const fetchTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };

    fetchTopRatedMovies();
  }, [dispatch, topRatedMovies]); // ✅ Correct dependencies

};

export default useTopRatedMovies;
