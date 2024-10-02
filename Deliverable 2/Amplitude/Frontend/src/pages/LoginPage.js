//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/pages/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle errors

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the user from the API
      const response = await fetch(`/api/users/${username}/${password}`);
      if (response.ok) {
        const data = await response.json();

        if (data) {
          // If login is successful, redirect to the home page
          // Create a session for the user ID
          sessionStorage.setItem('username', data.username);
          navigate('/home');
        } else {
          // If the user is not found, show an error
          setError('Invalid username or password.');
        }
      } else {
        // Handle non-200 responses
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>} {/* Display error if exists */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;