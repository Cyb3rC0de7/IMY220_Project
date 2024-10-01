//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', { username, password });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
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
        <NavLink to={`/home`} className="nav-link">
          <button type="submit">Login</button>
        </NavLink>
      </form>
    </div>
  );
};

export default LoginPage;
