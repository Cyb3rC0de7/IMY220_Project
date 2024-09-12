//u21669849, Qwinton Knocklein
import React, { useState } from 'react';

import SongColumn from '../components/SongColumn';

import '../styles/components/ListSongsColumn.css';

const ListSongsColumn = ({ songs, allSongs }) => {
  const [playlistSongs, setPlaylistSongs] = useState(songs);
  const [showSongColumn, setShowSongColumn] = useState(false);

  const addSongToPlaylist = (selectedSong) => { // Add song to playlist
    if (!playlistSongs.some(song => song.id === selectedSong.id)) { // Check if song is already in playlist
      setPlaylistSongs([...playlistSongs, selectedSong]); // Add song to playlist
    }
    setShowSongColumn(false); // Hide song column after adding song
  };

  const toggleShowSongColumn = () => setShowSongColumn(!showSongColumn); // Toggle song column visibility

  return (
    <div className="list-songs">
      <div className="songList-header">
        <h2 className="songList-title">Songs in Playlist</h2>
        <button type="button" onClick={toggleShowSongColumn}>{showSongColumn ? 'Close' : '+ Add Song'}</button>
      </div>
      {playlistSongs.map((song, index) => (
        <div key={song.id} className={`song-item ${index % 2 === 0 ? 'dark' : 'darker'}`}>
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
        <SongColumn songs={allSongs} addSongToPlaylist={addSongToPlaylist} isHomePage={false} />
      )}
    </div>
  );
};

export default ListSongsColumn;
