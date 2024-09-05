//u21669849, Qwinton Knocklein
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => { // A component that displays the navigation bar using the Link component from react-router-dom
  return (
    <nav>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/explore">Explore</Link></li>
        <li><Link to = "/library">My Library</Link></li>
        <li><Link to = "/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
