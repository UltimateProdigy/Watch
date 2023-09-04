import React, { useState } from "react";
import "./Likebutton.css";
import filledheart from "../../Assets/Images/filledheart.png";
import unfilledheart from "../../Assets/Images/unfilledheart.png";

const Likebutton = ({className}) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
       setToggle(!toggle)
  }


  return (
    <div className={className}>
      <div onClick={handleClick} className="likebtn">
        <img style={{display: toggle ? "block" : "none"}} className="filled" src={filledheart} alt="" />
        <img style={{display: toggle ? "none" : "block"}} className="unfilled" src={unfilledheart} alt="" />
      </div>
    </div>
  );
};

export default Likebutton;
