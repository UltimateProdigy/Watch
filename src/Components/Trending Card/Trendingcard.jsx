import React, { useEffect, useState } from "react";
import "./Trendingcard.css";
import Likebutton from "../Like Button/Likebutton";
import axios from "axios";

const Trendingcard = () => {
  const MOVIE_IMAGE_URL_PREFIX =
    "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI1YzJlYWEyZWMzYjg2OTc3MzFkZTQ0YTYwZmYyMiIsInN1YiI6IjY0ZjA2ZmU0ZTBjYTdmMDEyZWIyNTgyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtG11lsk1mewElnHiLDoU8JgXGT_5VdkC9nmPGREyc";
  const [movies, setMovies] = useState([]);

  const getMovies = async (path, params) => {
    await axios
      .get(`${TMDB_BASE_URL}/${path}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
        params: params,
      })
      .then((response) => {
        const result = response.data.results;
        setMovies(result);
        console.log("Movies", result);
      })
      .catch((err) => {
        console.log("There was an error while in getting movies...", err);
      });
  };

  useEffect(() => {
    getMovies("popular", {});
  }, []);

  return (
    <div className="trendingmovies" id="style-1">
      {movies.map((movie) => (
        <div className="movielist">
          <img className="movieimages" src={`${MOVIE_IMAGE_URL_PREFIX}${movie.backdrop_path}`} />
          <p className="movietitle">{movie.title ? movie.title : movie.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Trendingcard;
