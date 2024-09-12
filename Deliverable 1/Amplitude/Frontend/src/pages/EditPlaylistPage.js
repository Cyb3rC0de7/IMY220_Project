//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/EditPlaylistPage.css';

const EditPlaylistPage = () => {
  const [playlistName, setPlaylistName] = useState('Chill Vibes');
  const [description, setDescription] = useState('A collection of relaxing and chill tracks to wind down.');
  const [playlistImage, setPlaylistImage] = useState(null);

  const handleImageChange = (e) => {
    setPlaylistImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Playlist updated:', { playlistName, description, playlistImage });
  };

  return (
    <div className="edit-playlist-container">
      <h1>Edit Playlist</h1>
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
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <NavLink to="/playlist" className="nav-link">
          <button type="submit">Save Changes</button>
        </NavLink>
      </form>
    </div>
  );
};

export default EditPlaylistPage;
