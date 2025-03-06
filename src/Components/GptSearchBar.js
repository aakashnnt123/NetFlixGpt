import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/OpenAi";
import { API_OPTIONS } from "../Utils/Constant";
import addTMDBResult from "../Utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang_value = useSelector((store) => store.language.lang);
  const GptSearchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(GptSearchText.current.value);

    // Make an Api call and get Movie from ChatGpt..
    const gptQuery =
      "Act as a Movie Recommendation System and Suggest some movie for the query" +
      GptSearchText.current.value +
      "only give me name of 5 movies , comma seprated like the example result given ahead.Example Result : Gadar, Sholay, Don, Golmaal,Koi Mil Gay ";
    const GptResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    //This return a data with Comma seprated format..
    console.log(GptResponse.choices[0].message.content);

    //This Convert the above data in Array form..
    const gptMovies = GptResponse.choices[0].message.content.split(", ");

    // eslint-disable-next-line
    const PromiseArray = gptMovies.map((movies,index) => { 
      searchMovieTMDB(movies);
    });

    const tmdbResult = await Promise.all(PromiseArray);
    dispatch(addTMDBResult({ moviesNames: gptMovies, tmdbResult: tmdbResult }));
  };

  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={GptSearchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[lang_value].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-500 hover:bg-red-700 transition text-white rounded-md col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[lang_value].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
