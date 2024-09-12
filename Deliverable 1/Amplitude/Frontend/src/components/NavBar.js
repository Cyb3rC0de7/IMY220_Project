//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/Amplitude.png';
import '../styles/components/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-section">
        <img
          src={logo}
          alt="Amplitude Logo"
          className="logo"
        />
        <h1 className="logo-text">AMPLITUDE</h1>
      </div>

      <nav className="nav-links">
        <div className="nav-item">
          <NavLink to="/home">HOME</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/explore">EXPLORE</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/library">MY LIBRARY</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
