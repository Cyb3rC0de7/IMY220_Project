// frontend/src/components/SongColumn.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SongColumn.css';

const RightColumn = ({ songs }) => {
  return (
    <div className="song-column">
      <div className="song-header">
        <h2 className="song-title">Songs</h2>
        <NavLink to="/addSong" className="add-song-button">+ Add Song</NavLink>
      </div>
      <div className="song-grid">
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            <img src={song.thumbnail} alt={song.name} />
            <div className="song-info">
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
