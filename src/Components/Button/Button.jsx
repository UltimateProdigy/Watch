import React from "react";
import "./Button.css";


const Button = ({name, className}) => {
    return (
        <div>
            <button className={className}>
              {name}
            </button>
        </div>

    )
}

export default Button;