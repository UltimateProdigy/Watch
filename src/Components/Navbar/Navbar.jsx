import React from "react";
import "./Nabvar.css";
import dp from "../../Assets/Images/DP.png";
import search from "../../Assets/Images/search.png";
import bell from "../../Assets/Images/bell.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(scrolled);

  return (
    <section className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="firstcontainer">
          <ul className="list flex">
            <Link to="movies">
              <li>Movies</li>
            </Link>
            <Link to="/series">
              <li>TV Series</li>
            </Link>
            <li>Documentaries</li>
          </ul>
        </div>
        <div className="secondcontainer">
          <ul className="flex">
            <li className="navbar2">
              <img src={search} alt="" />
            </li>
            <li className="navbar2">
              <img src={bell} alt="" />
            </li>
            <li className="profile">
              <img src={dp} alt="" />
            </li>
            <li>
              <p>Tetiana</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
