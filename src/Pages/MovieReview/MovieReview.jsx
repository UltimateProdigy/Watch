import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./MovieReview.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom";

const MovieReview = () => {
  const MOVIE_IMAGE_URL_PREFIX =
    "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI1YzJlYWEyZWMzYjg2OTc3MzFkZTQ0YTYwZmYyMiIsInN1YiI6IjY0ZjA2ZmU0ZTBjYTdmMDEyZWIyNTgyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtG11lsk1mewElnHiLDoU8JgXGT_5VdkC9nmPGREyc";
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const callGetTMDBAPI = async (path, params) =>
    await axios
      .get(`${TMDB_BASE_URL}/${path}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
        params: params,
      })
      .then((response) => {
        console.log("This is your response", response);
        return response;
      })
      .catch((err) => {
        console.log("There was an error in getting movie review...", err);
        return err;
      });

  const getMovieDetail = async (movieId) => {
    try {
      const movieDetailResponse = await callGetTMDBAPI(`movie/${movieId}`, {});
      const movieObject = movieDetailResponse.data;
      setMovie(movieObject);
      console.log("Movie details received:", movieObject);
      // Do something with movieObject here
    } catch (error) {
      console.error("Error fetching movie details:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  useEffect(() => {
    getMovieDetail(id); // Call the async function immediately
  }, [id]);

  return (
    <div>
      <Sidebar />
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieReview;
