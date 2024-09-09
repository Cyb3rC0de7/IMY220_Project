// frontend/src/components/NavBar.js
import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-section">
        <img
          src="https://via.placeholder.com/75"
          alt="Amplitude Logo"
          className="logo"
        />
        <h1 className="logo-text">AMPLITUDE</h1>
      </div>

      <nav className="nav-links">
        <a href="#">HOME</a>
        <a href="#">EXPLORE</a>
      </nav>
    </div>
  );
};

export default NavBar;
