import { API_OPTIONS } from '../Utils/Constant';
import { addNowPlayingMovies } from '../Utils/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  useEffect(() => {
    if (nowPlayingMovies) return;

    const fetchMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };

    fetchMovies();
  }, [nowPlayingMovies, dispatch]); // ✅ Only dependencies needed

};

export default useNowPlayingMovies;
