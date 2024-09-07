// frontend/src/pages/HomePage.js
import React, { useState } from 'react';
import Song from '../components/Song';
import PlaylistPreview from '../components/PlaylistPreview';
import '../styles/HomePage.css';

const HomePage = () => {
  const [songs] = useState([
    { title: 'Song 1', artist: 'Artist 1' },
    { title: 'Song 2', artist: 'Artist 2' },
  ]);

  const [playlists] = useState([
    { id: 1, name: 'Chill Vibes', creator: 'John', tags: ['chill', 'vibes'] },
    { id: 2, name: 'Workout Mix', creator: 'Doe', tags: ['workout'] },
  ]);

  return (
    <div className="home-container">
      <h1>Welcome to AMPLITUDE</h1>
      
      <section className="feed-section">
        <h2>Your Feed</h2>

        <div className="song-feed">
          <h3>Songs</h3>
          <div className="song-list">
            {songs.map((song, index) => (
              <Song key={index} title={song.title} artist={song.artist} />
            ))}
          </div>
        </div>

        <div className="playlist-feed">
          <h3>Playlists</h3>
          <div className="playlist-list">
            {playlists.map((playlist) => (
              <PlaylistPreview
                key={playlist.id}
                name={playlist.name}
                tags={playlist.tags}
                creator={playlist.creator}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
