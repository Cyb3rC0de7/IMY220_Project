// frontend/src/components/Header.js
import React from 'react';
import placeholder from '../images/placeholder.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="header-right">
          <img src={placeholder} alt="Notifications" className="icon" />
          <img src={placeholder} alt="User Profile" className="user-profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
