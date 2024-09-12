// frontend/src/pages/AddPlaylistPage.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/AddPlaylistPage.css';

const AddPlaylistPage = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [playlistImage, setPlaylistImage] = useState(null);

  const handleImageChange = (e) => {
    setPlaylistImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding playlist:', { playlistName, description, tags, playlistImage });
  };

  return (
    <div className="add-playlist-container">
      <h1>Add a New Playlist</h1>
      <form onSubmit={handleSubmit}>
        <div className="playlist-image-section">
          <label htmlFor="playlistImage">
            {playlistImage ? (
              <img src={playlistImage} alt="Playlist" className="playlist-image" />
            ) : (
              <div className="placeholder">Upload Playlist Image</div>
            )}
          </label>
          <input
            type="file"
            id="playlistImage"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <input
          type="text"
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="#Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <NavLink to="/home" className="nav-link">
          <button type="submit">Add Playlist</button>
        </NavLink>
      </form>
    </div>
  );
};

export default AddPlaylistPage;
