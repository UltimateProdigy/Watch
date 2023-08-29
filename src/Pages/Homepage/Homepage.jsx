import React from "react";
import "./Homepage.css";
import Button from "../../Components/Button/Button";
import Trendingcard from "../../Components/Trending Card/Trendingcard";
import Tokyo from "../../Assets/Images/Tokyo.png";
import Moonfall from "../../Assets/Images/Moonfall.png";
import LifeInParis from "../../Assets/Images/LifeInParis.png"
import HouseOfGucci from "../../Assets/Images/HouseOfGucci.png"

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
        <Trendingcard img={Tokyo} title="Tokyo Train" year="2022" movietype="Action Comedy" />
        <Trendingcard img={Moonfall} title="Moonfall" year="2022" movietype="Sci-fi" />
        <Trendingcard img={LifeInParis} title="Life in Paris" year="2023" movietype="Documentary" />
        <Trendingcard img={HouseOfGucci} title="House of Gucci" year="2021" movietype="Drama" />
      </div>
    </div>
  );
};
export default Homepage;
