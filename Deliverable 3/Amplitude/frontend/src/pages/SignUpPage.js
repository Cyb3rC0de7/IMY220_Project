//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/pages/SignUpPage.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle errors
  const [success, setSuccess] = useState(false); // To track successful registration

  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the signup data to the backend API
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, passwordHash: password, isAdmin: false }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(true); // Set success state if signup is successful
        sessionStorage.setItem('username', data.username);
        navigate('/home'); // Redirect to homepage
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error signing up'); // Display error message from server
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>} {/* Display error message if any */}
        {success && <p className="success">Signup successful!</p>} {/* Optional: Show success message */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;