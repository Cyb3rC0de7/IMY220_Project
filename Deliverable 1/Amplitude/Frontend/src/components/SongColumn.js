//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/SongColumn.css';

const RightColumn = ({ songs }) => {
  return (
    <div className="song-column">
      <div className="songCol-header">
        <h2 className="songCol-title">Songs</h2>
        <NavLink to="/addSong" className="nav-link">
          <button type="button">+ Add Song</button>
        </NavLink>
      </div>
      <div className="songCol-grid">
        {songs.map((song) => (
          <div key={song.id} className="songCol-item">
            <img src={song.thumbnail} alt={song.name} />
            <div className="songCol-info">
              <h3>{song.name}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightColumn;
