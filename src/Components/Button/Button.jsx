import React from "react";
import "./Button.css";


const Button = ({name}) => {
    return (
        <div>
            <button className="button">
              {name}
            </button>
        </div>

    )
}

export default Button;