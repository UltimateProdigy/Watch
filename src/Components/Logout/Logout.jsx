import React from "react";
import "./Logout.css";
import logout from "../../Assets/Images/log-out.png"

const Logout = () => {
    return (
        <div className="flex">
            <img src={logout} alt="" />
            <p>Logout</p>
        </div>
    )
}

export default Logout;