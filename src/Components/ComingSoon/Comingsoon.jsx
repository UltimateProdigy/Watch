import React from "react";
import "./Comingsoon.css";
import calendar from "../../Assets/Images/calendar.png"

const Comingsoon = () => {
    return (
        <div className="flex">
            <img src={calendar} alt="" />
            <p>Coming soon</p>
        </div>
    )
};

export default Comingsoon;