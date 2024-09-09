//u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="homepage-footer">
      <div className="footer-left">
        <div className="song-info">
          <h3>Current Song</h3>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="footer-center">
        <button>⏮️</button>
        <button>⏯️</button>
        <button>⏭️</button>
      </div>
      <div className="footer-right">
        <input type="range" min="0" max="100" className="volume-slider" />
      </div>
    </footer>
  );
};

export default Footer;
