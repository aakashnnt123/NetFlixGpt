import Header from './Header';
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import useTopRatedMovies from '../CustomHooks/useTopRatedMovies';
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies';

const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();

  return (
    <div>
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
      </div>
  )
}

export default Browse