import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Utils/MovieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Memoizing getMovieVideos to prevent re-creation on each render
  const getMovieVideos = useCallback(async () => {
    if (!movieId) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      if (!response.ok) throw new Error("Failed to fetch movie trailers");

      const json = await response.json();
      // console.log("API Response:", json);

      if (json.results.length > 0) {
        const filteredData = json.results.filter(
          (video) => video.type === "Trailer"
        );

        const trailer = filteredData.length ? filteredData[0] : json.results[0];

        // console.log("Trailer Found:", trailer);
        dispatch(addMovieTrailer(trailer));
      } else {
        console.warn("No trailer found for this movie.");
      }
    } catch (error) {
      console.error("Error fetching movie trailers:", error);
    }
  }, [movieId, dispatch]); // Dependencies

  // useEffect now correctly includes getMovieVideos in the dependency array
  useEffect(() => {
    getMovieVideos();
  }, [getMovieVideos]);

  return null; // Custom hooks generally return something, but if not needed, return null
};

export default useMovieTrailer;
