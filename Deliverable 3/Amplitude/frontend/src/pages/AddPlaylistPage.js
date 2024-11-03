//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/pages/AddPlaylistPage.css';

const AddPlaylistPage = () => {
  const [name, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [creator] = useState(sessionStorage.getItem('username'));
  const [thumbnail, setThumbnail] = useState('');
  const [songs, setSongs] = useState([]);
  const [comments, setComments] = useState([]);
  const [tags, setTags] = useState([]);
  const [customTag, setCustomTag] = useState('');
  const [genericTags] = useState(["Pop", "Rock", "EDM", "Hiphop", "RnB", "Country", "Jazz"]);
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
      tags,
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

  // Add selected tags from dropdown
  const handleTagChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(selectedOptions);
  };

  // Add custom tag
  const addCustomTag = () => {
    if (customTag && !tags.includes(customTag)) {
      setTags([...tags, customTag]);
      setCustomTag('');
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
        
        <label>Select Genres:</label>
        <select className='genre-selector' multiple value={tags} onChange={handleTagChange}>
          {genericTags.map((tag) => (
            <option className='genre-option' key={tag} value={tag}>
              #{tag}
            </option>
          ))}
        </select>

        <div className="custom-tag-input">
          <input
            type="text"
            placeholder="Enter a custom tag"
            value={customTag}
            onChange={(e) => setCustomTag(e.target.value)}
          />
          <button type="button" onClick={addCustomTag}>
            Add Tag
          </button>
        </div>

        <div className="selected-tags">
          <p>Selected Tags:</p>
          {tags.map((tag, index) => (
            <ul key={index} className="tag-item">#{tag}</ul>
          ))}
        </div>

        <textarea
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <div className="add-playlist-btn">
          <button type="button" onClick={() => navigate('/home')}>Cancel</button>
          <button type="submit">Add Playlist</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddPlaylistPage;