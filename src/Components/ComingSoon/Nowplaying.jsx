import React from "react";
import './Nowplaying.css'
import calendar from "../../Assets/Images/calendar.png"

const Nowplaying = () => {
    return (
        <div className="flex">
            <img src={calendar} alt="" />
            <p>Now Playing</p>
        </div>
    )
};

export default Nowplaying;