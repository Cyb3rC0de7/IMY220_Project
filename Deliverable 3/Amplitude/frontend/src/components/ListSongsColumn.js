//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';

import SongColumn from '../components/SongColumn';

import '../styles/components/ListSongsColumn.css';

const ListSongsColumn = ({ playlistId, isCreator }) => { 
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [showSongColumn, setShowSongColumn] = useState(false);
  const [isRemoveMode, setIsRemoveMode] = useState(false); // To toggle between Add and Remove modes

  // Fetch the songs for the playlist when playlistId changes
  useEffect(() => {

    const fetchPlaylistSongs = async () => {
      try {
        const response = await fetch(`/api/playlists/${playlistId}/songs`);
        const data = await response.json();
        setPlaylistSongs(data);
      } catch (error) {
        console.error('Error fetching playlist songs:', error);
      }
    };

    fetchPlaylistSongs(); // Fetch songs when playlistId changes
  }, [playlistId]);

  const addSongToPlaylist = async (selectedSong) => { 
    try {
      const response = await fetch(`/api/playlists/${playlistId}/addSong/${selectedSong._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Fetch updated list of playlist songs after adding the song
        const updatedResponse = await fetch(`/api/playlists/${playlistId}/songs`);
        const updatedSongs = await updatedResponse.json();
        setPlaylistSongs(updatedSongs);
      } else {
        console.error('Error adding song to playlist');
      }
    } catch (error) {
      console.error('Error adding song to playlist:', error);
    }

    setShowSongColumn(false); // Hide the song column after adding a song
  };

  const removeSongFromPlaylist = async (song) => {
    try {
      const response = await fetch(`/api/playlists/${playlistId}/removeSong/${song._id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Fetch the updated list of playlist songs after removing the song
        const updatedResponse = await fetch(`/api/playlists/${playlistId}/songs`);
        const updatedSongs = await updatedResponse.json();
        setPlaylistSongs(updatedSongs);
      } else {
        console.error('Error removing song from playlist');
      }
    } catch (error) {
      console.error('Error removing song from playlist:', error);
    }

    setIsRemoveMode(false); // Exit Remove mode after removing a song
  };

  const toggleShowSongColumn = () => setShowSongColumn(!showSongColumn); // Toggle song column visibility
  const toggleRemoveMode = () => setIsRemoveMode(!isRemoveMode); // Toggle between Add and Remove modes

  return (
    <div className="list-songs">
      <div className="songList-header">
        <h2 className="songList-title">Songs in Playlist</h2>
        {isCreator ? (<div className="songList-btn">
          <button type="button" onClick={toggleShowSongColumn}>
            {showSongColumn ? 'Close' : '+ Add Song'}
          </button>
          <button type="button" onClick={toggleRemoveMode}>
            {isRemoveMode ? 'Cancel Remove' : 'Remove Song'}
          </button>
        </div>): null}
      </div>

      {playlistSongs.map((song, index) => (
        <div 
          key={song._id} 
          className={`song-item ${index % 2 === 0 ? 'dark' : 'darker'}`}
          onClick={() => {
            if (isRemoveMode) {
              removeSongFromPlaylist(song); // Remove song in Remove mode
            }
          }}
        >
          <img src={song.thumbnail} alt={song.name} className="song-thumbnail" />
          <div className="song-info">
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="song-duration">
            <p>{song.duration}</p>
          </div>
        </div>
      ))}

      {showSongColumn && (
        <SongColumn 
          addSongToPlaylist={addSongToPlaylist} 
          removeSongFromPlaylist={removeSongFromPlaylist} 
          isHomePage={false} 
        />
      )}
    </div>
  );
};

export default ListSongsColumn;