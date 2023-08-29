import React, { useState } from "react";
import "./Likebutton.css";
import filledheart from "../../Assets/Images/filledheart.png";
import unfilledheart from "../../Assets/Images/unfilledheart.png";

const Likebutton = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
       setToggle(!toggle)
  }


  return (
    <div>
      <div onClick={handleClick} className="likebtn">
        <img style={{display: toggle ? "none" : "block"}} className="filled" src={filledheart} alt="" />
        <img style={{display: toggle ? "block" : "none"}} className="unfilled" src={unfilledheart} alt="" />
      </div>
    </div>
  );
};

export default Likebutton;
