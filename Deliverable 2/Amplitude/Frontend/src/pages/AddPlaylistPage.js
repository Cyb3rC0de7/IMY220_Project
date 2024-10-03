//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/pages/AddPlaylistPage.css';

const AddPlaylistPage = () => {
  const [name, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState(sessionStorage.getItem('username'));
  const [thumbnail, setThumbnail] = useState('');
  const [songs, setSongs] = useState([]);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlaylist = {
      name,
      description,
      creator,
      thumbnail,
      songs,
      comments,
  };

    try {
      const response = await fetch('/api/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlaylist),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to add the playlist');
      }
    } catch (error) {
      setError('An error occurred while adding the playlist');
    }

  };

  return (
    <div className="add-playlist-container">
      <h1>Add a New Playlist</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Playlist Name"
          value={name}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <button type="submit">Add Playlist</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddPlaylistPage;
