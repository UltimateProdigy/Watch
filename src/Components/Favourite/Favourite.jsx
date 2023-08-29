import React from "react";
import "./Favourite.css"
import Heart from "../../Assets/Images/Heart.png"

const Favourite = () => {
    return (
       <div className="flex">
        <img src={Heart} alt="heart" />
        <p>Favourite</p>
       </div>
    )
};

export default Favourite;