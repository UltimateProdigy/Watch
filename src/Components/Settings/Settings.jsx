import React from "react";
import "./Settings.css";
import sliders from "../../Assets/Images/sliders.png"

const Settings = () => {
    return (
       <div className="flex">
        <img src={sliders} alt="" />
        <p>Settings</p>
       </div>
    )
}

export default Settings;