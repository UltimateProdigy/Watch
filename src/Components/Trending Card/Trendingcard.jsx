import React from "react";
import "./Trendingcard.css";
import Likebutton from "../Like Button/Likebutton";

const Trendingcard = ({ img, title, year, movietype }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <div className="like">
        <Likebutton />
      </div>
      <div className="bottomcard">
        <p className="moviename">{title}</p>
        <p>
          {year} | {movietype}
        </p>
      </div>
    </div>
  );
};

export default Trendingcard;
