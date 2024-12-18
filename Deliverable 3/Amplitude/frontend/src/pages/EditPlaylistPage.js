// u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import '../styles/pages/EditPlaylistPage.css';

const EditPlaylistPage = () => {
  const { playlistId } = useParams(); // Get playlistID from the URL
  const [name, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState([]); // To store selected tags
  const [customTag, setCustomTag] = useState(''); // For custom tag input
  const [genericTags, setGenericTags] = useState([]); // Generic tags
  const navigate = useNavigate(); // To redirect after updating

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`/api/playlists/${playlistId}`);
        const data = await response.json();
        setPlaylistName(data.name);
        setDescription(data.description);
        setThumbnail(data.thumbnail);
        setTags(data.tags || []); // Initialize tags with existing playlist tags if available
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    const fetchGenericTags = async () => {
      try {
        const response = await fetch('/api/tags');
        const data = await response.json();
        setGenericTags(data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchGenericTags();
    fetchPlaylist();
  }, [playlistId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPlaylist = {
      name,
      description,
      thumbnail,
      tags,
    };

    // Update the playlist details
    try {
      const response = await fetch(`/api/playlists/${playlistId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPlaylist),
      });

      if (response.ok) {
        navigate(`/playlist/${playlistId}`); // Redirect to the playlist page after update
      } else {
        console.error('Error updating playlist');
      }
    } catch (error) {
      console.error('Error updating playlist:', error);
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

  // Delete playlist
  const deletePlaylist = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this playlist?');

    if (confirmDelete) {
      try {
        const response = await fetch(`/api/playlists/${playlistId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          navigate('/home');
        } else {
          console.error('Error deleting playlist');
        }
      } catch (error) {
        console.error('Error deleting playlist:', error);
      }
    }
  };

  return (
    <div className="edit-playlist-container">
      <h1>Edit Playlist</h1>
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
          required
        />
        
        <label>Select Tags:</label>
        <select multiple value={tags} onChange={handleTagChange}>
          {genericTags.map((tag) => (
            <option key={tag._id} value={tag.genre}>#{tag.genre}</option>
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
          required
        />
        
        <div className="edit-playlist-btn">
          <button type="button" onClick={() => navigate(`/playlist/${playlistId}`)}>Cancel</button>
          <button type="button" onClick={deletePlaylist}>Delete Playlist</button>
          <button type="submit">Save Changes</button>
        </div>

      </form>
    </div>
  );
};

export default EditPlaylistPage;
