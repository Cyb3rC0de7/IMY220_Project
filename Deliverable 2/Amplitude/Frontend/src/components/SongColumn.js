//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/SongColumn.css';

const SongColumn = ({ songs, addSongToPlaylist, removeSongFromPlaylist, isHomePage }) => {
  const [isRemoveMode, setIsRemoveMode] = useState(false); // State to toggle between adding and removing songs

  // Function to toggle between Add and Remove modes
  const toggleRemoveMode = () => {
    setIsRemoveMode(!isRemoveMode);
  };

  return (
    <div className="song-column">
      <div className="songCol-header">
        <h2 className="songCol-title">Songs</h2>
        {isHomePage ? (
          <div className='songCol-btn'>
            <NavLink to="/addNewSong" className="nav-link">
              <button type="button">+ Add Song</button>
            </NavLink>
            <button type="button" onClick={toggleRemoveMode}>
              {isRemoveMode ? 'Cancel Remove' : 'Remove Song'}
            </button>
          </div>
        ) : null}
      </div>
      <div className="songCol-grid">
        {songs.map((song) => (
          <div 
            key={song._id} 
            className="songCol-item" 
            onClick={() => {
              if (isRemoveMode) {
                removeSongFromPlaylist && removeSongFromPlaylist(song); // Handle song removal in Remove mode
              } else {
                addSongToPlaylist && addSongToPlaylist(song); // Handle song addition in Add mode
              }
            }}
          >
            <img src={song.thumbnail} alt={song.title} />
            <div className="songCol-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongColumn;
