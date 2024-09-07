//u21669849, Qwinton Knocklein
import React from 'react';
import './PlaylistViewPage.css';

const PlaylistViewPage = () => {
  const songs = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', duration: '3:45' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', duration: '4:00' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', duration: '2:50' },
    // Add more songs here
  ];

  return (
    <div className="playlist-view-container">
      <header className="playlist-header">
        <h1>Playlist Name</h1>
        <p>Created by Creator</p>
        <p>#Tags</p>
        <p className="description">This is a description of the playlist, explaining the vibe and why it was created.</p>
      </header>

      <div className="song-list">
        <h2>Songs</h2>
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            <p>{song.name} - {song.artist}</p>
            <span>{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistViewPage;
