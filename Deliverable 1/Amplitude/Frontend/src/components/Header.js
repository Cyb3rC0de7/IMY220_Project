// frontend/src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="header-right">
          <img src="https://via.placeholder.com/30" alt="Notifications" className="icon" />
          <img src="https://via.placeholder.com/40" alt="User Profile" className="user-profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
