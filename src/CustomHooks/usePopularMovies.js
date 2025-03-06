import { API_OPTIONS } from '../Utils/Constant';
import { addPopularMovies } from '../Utils/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies);

  useEffect(() => {
    if (popularMovies) return;

    const fetchMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };

    fetchMovies();
  }, [dispatch, popularMovies]); // ✅ Correct dependencies

};

export default usePopularMovies;
