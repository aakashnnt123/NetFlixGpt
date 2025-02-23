import { useSelector } from "react-redux";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const TrailerVideo = useSelector((store) => store.movies?.MovieTrailer);
  // const[trailerId , settrailerId] = useState(null);

  // console.log(movieId);

  // Fetch Trailer Video && updating the store with trailer video data.

  useMovieTrailer(movieId);

  return (
    
    <div>
      <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${TrailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${TrailerVideo?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default VideoBackground;
