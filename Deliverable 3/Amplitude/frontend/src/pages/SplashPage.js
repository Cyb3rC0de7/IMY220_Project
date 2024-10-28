//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/SplashPage.css';

const SplashPage = () => {
  return (
    <div className="splash-container">
      <header className="splash-header">
        <h1>Welcome to AMPLITUDE</h1>
        <p>Amplify Your Music Experience</p>
      </header>

      <div className="splash-content">
        <section className="intro-section">
          <h2>Discover, Create, and Share Playlists</h2>
          <p>
            AMPLITUDE is your personal space to curate your favorite tunes, connect with fellow music lovers, 
            and explore a universe of sounds.
          </p>
        </section>

        <section className="cta-section">
          <h2>Why AMPLITUDE?</h2>
          <ul>
            <li>Create unique playlists</li>
            <li>Connect with friends</li>
            <li>Stay updated with real-time music trends</li>
          </ul>
          <div className="auth-buttons">
            <NavLink to="/login" className="nav-link">
              <button className="login-button">Log In</button>
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              <button className="signup-button">Sign Up</button>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SplashPage;
