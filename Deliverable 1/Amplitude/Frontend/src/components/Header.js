//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import placeholder from '../images/placeholder.png';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="header-right">
          <img src={placeholder} alt="Notifications" className="icon" />
          <NavLink to="/profile" className="nav-link">
            <img src={placeholder} alt="User Profile" className="user-profile" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
