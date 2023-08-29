import React from "react";
import "./FavouriteCard.css";
import Likebutton from "../Like Button/Likebutton";

const Favouritecard = ({ img, title, year, movietype }) => {
  return (
    <div className="favouritecard" style={{ backgroundImage: `url(${img})` }}>
      <div className="flike">
        <Likebutton />
      </div>
      <div className="favouritebottomcard">
        <p className="favouritemoviename">{title}</p>
        <p>
          {year} | {movietype}
        </p>
      </div>
    </div>
  );
};

export default Favouritecard;
