import React from "react";
import "./Homepage.css";
import Button from "../../Components/Button/Button";
import Trendingcard from "../../Components/Trending Card/Trendingcard";

const Homepage = () => {
  return (
    <div>
      <div className="homepagebackground">
        <h1>Insider</h1>
        <p>2022 | Comedy Horror | 1 Season</p>
        <Button className="button" name="Watch now" />
      </div>
      <h3>Trending</h3>
      <div className="trending-list">
        <Trendingcard />
      </div>
    </div>
  );
};
export default Homepage;
