import React from "react";
import Film from '../../Assets/Images/Film.png'
import "./Home.css"

const Home = () => {
  return (
       <div className="flex">
        <img src={Film} alt="film" />
        <p>Home</p>
       </div>
  )
};

export default Home;
