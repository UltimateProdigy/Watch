import React from "react";
import "./Trending.css"
import trending from "../../Assets/Images/Trending.png"

const Trending = () => {
    return (
       <div className="flex">
        <img src={trending} alt="" />
        <p>Trending</p>
       </div>
    )
}

export default Trending;