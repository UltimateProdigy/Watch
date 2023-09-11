import React from "react";
import { useEffect, useState } from "react";
import "./Toprated.css";
import axios from "axios";
import Likebutton from "../Like Button/Likebutton";
import Spinner from "../Spinner/Spinner";

const Toprated = () => {
  const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI1YzJlYWEyZWMzYjg2OTc3MzFkZTQ0YTYwZmYyMiIsInN1YiI6IjY0ZjA2ZmU0ZTBjYTdmMDEyZWIyNTgyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtG11lsk1mewElnHiLDoU8JgXGT_5VdkC9nmPGREyc";
  const MOVIE_IMAGE_BASE_URL_PREFIX =
    "https://www.themoviedb.org/t/p/w220_and_h330_face";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTopRated = async (path, params) => {
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
        setLoading(true);
      })
      .catch((err) => {
        console.log("There was an error getting movie", err);
      });
  };

  useEffect(() => {
    getTopRated("top_rated", {});
  }, []);

  return (
    <>
      {loading ? (
        <div className="toprated">
          {movies.map((movie) => (
            <div className="topratedmovielist">
              <Likebutton />
              <img
                src={`${MOVIE_IMAGE_BASE_URL_PREFIX}${movie.backdrop_path}`}
                alt=""
              />
              <h3 className="movieTitle">{movie.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default Toprated;
