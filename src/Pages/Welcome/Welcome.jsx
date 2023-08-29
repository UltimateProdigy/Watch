import React from "react";
import "./Welcome.css";
import Logo from "../../Components/Logo/Logo";
import Button from "../../Components/Button/Button";

const Welcome = () => {
  return (
    <div className="welcome">
      <Logo className="flex items-center justify-center" />
      <p className="enjoy">Enjoy the newest movies</p>
      <Button name="Log in" />
      <p className="noacc">
        No account <span>Sign up?</span>
      </p>
    </div>
  );
};

export default Welcome;
