import React from "react";
import "./Nabvar.css";
import dp from "../../Assets/Images/DP.png";
import search from "../../Assets/Images/search.png";
import bell from "../../Assets/Images/bell.png";

const Navbar = () => {
  return (
    <section>
      <div className="container">
        <div className="firstcontainer">
          <ul className="list flex">
            <li>Movies</li>
            <li>Series</li>
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
