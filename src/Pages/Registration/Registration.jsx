import React, { useState } from 'react';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleRegistration = () => {
    // Perform registration logic here
    console.log({
      username,
      name,
      email,
      password,
      profilePicture,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">Registration</h1>
        <label className="block mb-2 text-purple-800">Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block mb-2 text-purple-800">Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block mb-2 text-purple-800">Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block mb-2 text-purple-800">Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 border rounded mb-2"
        />
        <label className="block mb-2 text-purple-800">Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleRegistration}
          className="w-full bg-purple-800 text-white py-2 rounded-xl"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
