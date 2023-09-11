import React from "react";
import "./Sidebar.css";
import Logo from "../Logo/Logo";
import Home from "../Home/Home";
import Favourite from "../Favourite/Favourite";
import Trending from "../Trending/Trending";
import Comingsoon from "../ComingSoon/Comingsoon";
import Community from "../Community/Community";
import Social from "../Social/Social";
import Settings from "../Settings/Settings";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <div className="navlogo">
        <Logo className="flex" />
      </div>
      <div className="navitem">
        <ul className="nav1">
          <li>
            <Link to="/"><Home /></Link>
            
          </li>
          <li>
            <Favourite />
          </li>
          <li>
            <Trending />
          </li>
          <li>
            <Comingsoon />
          </li>
        </ul>
        <ul className="nav2">
          <li>
            <Community />
          </li>
          <li>
            <Social />
          </li>
        </ul>
        <ul className="nav3">
          <li>
            <Settings />
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
