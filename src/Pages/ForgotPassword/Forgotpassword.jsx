import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = () => {
    // Perform email sending logic here
    // For this example, let's just set the emailSent state to true
    setEmailSent(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-800">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-purple-800">Forgot Password</h1>
        {emailSent ? (
          <p className="text-gray-800">
            An email has been sent to {email} with instructions to reset your password.
          </p>
        ) : (
          <div>
            <label className="block mb-2 text-gray-800">Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={handleSendEmail}
              className="w-full bg-purple-800 text-white py-2 rounded"
            >
              Send Reset Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
