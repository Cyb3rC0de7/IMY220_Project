//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/SongColumn.css';

const SongColumn = ({ addSongToPlaylist, removeSongFromPlaylist, isHomePage }) => {
  const [songs, setSongs] = useState([]); // State to store the list of songs
  const [isRemoveMode, setIsRemoveMode] = useState(false); // State to toggle between adding and removing songs

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('/api/songs');
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, [isRemoveMode]);

  const removeSongFromDatabase = async (song) => {
    try {
      const response = await fetch(`/api/songs/${song._id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Remove song from state after deleting from database
        
      } else {
        console.error('Error removing song from database');
      }
    } catch (error) {
      console.error('Error removing song from database:', error);
    }

    setIsRemoveMode(false); // Exit Remove mode after removing a song
    fetchSongs();
  };
  
  // Function to toggle between Add and Remove modes
  const toggleRemoveMode = () => {
    setIsRemoveMode(!isRemoveMode);
  };

  return (
    <div className="song-column">
      <div className="songCol-header">
        <h1 className="songCol-title">Songs</h1>
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
                if (isHomePage) {
                  removeSongFromDatabase(song); // Handle song removal in Remove mode
                } else {
                  removeSongFromPlaylist && removeSongFromPlaylist(song); // Handle song removal in Remove mode
                }
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
