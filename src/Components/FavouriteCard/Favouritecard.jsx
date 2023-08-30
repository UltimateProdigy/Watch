import React from "react";
import "./FavouriteCard.css";
import Likebutton from "../Like Button/Likebutton";


const Favouritecard = ({ fimg, ftitle, fyear, fmovietype }) => {
  return (
    <div className="favouritecard" style={{ backgroundImage: `url(${fimg})` }}>
      <div className="flike">
        <Likebutton />
      </div>
      <div className="favouritebottomcard">
        <p className="favouritemoviename">{ftitle}</p>
        <p>
          {fyear} | {fmovietype}
        </p>
      </div>
    </div>
  );
};

export default Favouritecard;
