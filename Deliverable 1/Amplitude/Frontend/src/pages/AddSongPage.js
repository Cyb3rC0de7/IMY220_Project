//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/AddSongPage.css';

const AddSongPage = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding song:', { title, artist, album, genre });
  };

  return (
    <div className="add-song-container">
      <h1>Add a New Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <NavLink to="/home" className="nav-link">
          <button type="submit">Add Song</button>
        </NavLink>
      </form>
    </div>
  );
};

export default AddSongPage;
