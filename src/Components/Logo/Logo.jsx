import React from "react";
import Coffee from "../../Assets/Images/coffee.png";
import "./Logo.css";

const Logo = ({className}) => {
    return (
      <div className={className}>
        <img src={Coffee} alt="coffee" />
        <p>WATCH</p>
      </div>
    )
}

export default Logo;