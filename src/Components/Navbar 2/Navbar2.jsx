import React from "react";
import "./Navbar2.css";
import dp from "../../Assets/Images/DP.png";
import search from "../../Assets/Images/search.png";
import bell from "../../Assets/Images/bell.png";

const Navbar2 = () => {
  return (
    <div>
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
  );
};

export default Navbar2;
