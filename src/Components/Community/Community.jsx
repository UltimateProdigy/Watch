import React from "react";
import "./Community.css";
import Users from "../../Assets/Images/users.png"

const Community = () => {
    return(
       <div className="flex">
        <img src={Users} alt="" />
        <p>Community</p>
       </div>
    )
}

export default Community;