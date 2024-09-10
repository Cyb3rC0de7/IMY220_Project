// frontend/src/components/Footer.js
import React from 'react';
import placeholder from '../images/placeholder.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="homepage-footer">
      <div className="footer-left">
        <button>⏮️</button>
        <button>⏯️</button>
        <button>⏭️</button>
      </div>

      <div className="footer-center">
        <img
          src={placeholder}
          alt="Current Song"
          className="song-thumbnail"
        />
        <div className="song-info">
          <h3>Current Song</h3>
          <p>Artist Name</p>
        </div>
      </div>

      <div className="footer-right">
        <input type="range" min="0" max="100" className="volume-slider" />
        <button>🔀</button>
        <button>🔁</button>
      </div>
    </footer>
  );
};

export default Footer;
