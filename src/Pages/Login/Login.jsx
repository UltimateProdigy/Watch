import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // You would typically perform actual authentication here
    // For this example, let's just set the loggedIn state to true
    setLoggedIn(true);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    alert("Forgot Password clicked!");
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    alert("Sign Up clicked!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {loggedIn ? (
          <p className="text-purple-800">Welcome, {username}!</p>
        ) : (
          <div>
            <label className="block mb-2 text-purple-800">Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block mb-2 text-purple-800">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-purple-800 text-white py-2 rounded mb-2"
            >
              Login
            </button>
            <button
              onClick={handleForgotPassword}
              className="w-full text-purple-800 mb-2"
            >
              Forgot Password?
            </button>
            <button
              onClick={handleSignUp}
              className="w-full text-purple-800 mb-2"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
