import React from "react";
import "./Homepage.css";
import Button from "../../Components/Button/Button";
import Trendingcard from "../../Components/Trending Card/Trendingcard";
import Toprated from "../../Components/TopRated/Toprated";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Homepage = () => {
  
  return (
    <div>
      <div className="homepagebackground">
        <h1>John Wick: Chapter 3</h1>
        <p className="moviegenre">2019 | Action | Adventure | Crime</p>
        <Link to={{ pathname: "https://dl1.starazi.com/movie/john-wick-chapter-3-parabellum/"}} target= "_blank" >
          <Button className="button" name="Watch now" />
        </Link>
      </div>
      <h3>Trending</h3>
      <div className="trending-list">
        <Trendingcard />
      </div>
      <h3>Top-Rated</h3>
      <div className="toprated-list">
        <Toprated />
      </div>
    </div>
  );
};
export default Homepage;
