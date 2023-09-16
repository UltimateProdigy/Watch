import React, { useEffect, useState } from "react";
import "./Series.css";
import axios from "axios";
import Likebutton from "../../Components/Like Button/Likebutton";
import Spinner from "../../Components/Spinner/Spinner";

const Series = () => {
  const TMBD_BASE_URL = "https://api.themoviedb.org/3/tv";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGI1YzJlYWEyZWMzYjg2OTc3MzFkZTQ0YTYwZmYyMiIsInN1YiI6IjY0ZjA2ZmU0ZTBjYTdmMDEyZWIyNTgyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HRtG11lsk1mewElnHiLDoU8JgXGT_5VdkC9nmPGREyc";
  const IMAGE_BASE_URL_PREFIX =
    "https://www.themoviedb.org/t/p/w220_and_h330_face";

  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSeries = async (path, params) => {
    await axios
      .get(`${TMBD_BASE_URL}/${path}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
        params: params,
      })
      .then((response) => {
        const result = response.data.results;
        setSeries(result);
        console.log("Series", result);
        setLoading(true);
      })
      .catch((err) => {
        console.log("There was an error getting series", err);
      });
  };

  useEffect(() => {
    getSeries("popular", {});
  }, []);

  return (
    <>
      {loading ? (
        <div className="series">
          {series.map((serie) => (
            <div className="series-list">
              <Likebutton />
              <img
                src={`${IMAGE_BASE_URL_PREFIX}${serie.poster_path}`}
                alt=""
              />
              <h3 className="seriename">{serie.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
};

export default Series;
