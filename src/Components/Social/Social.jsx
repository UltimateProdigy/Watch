import React from "react";
import "./Social.css";
import message from "../../Assets/Images/message.png"

const Social = () => {
    return (
       <div className="flex">
        <img src={message} alt="" />
        <p>Social</p>
       </div>
    )
};

export default Social;