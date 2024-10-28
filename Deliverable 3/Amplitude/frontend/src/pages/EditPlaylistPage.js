//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/pages/EditPlaylistPage.css';

const EditPlaylistPage = () => {
  const { playlistId } = useParams(); // Get playlistID from the URL
  const [name, setPlaylistName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const navigate = useNavigate(); // To redirect after updating

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`/api/playlists/${playlistId}`);
        const data = await response.json();
        setPlaylistName(data.name);
        setDescription(data.description);
        setThumbnail(data.thumbnail);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    fetchPlaylist(); // Fetch playlist data
  }, [playlistId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPlaylist = {
      name,
      description,
      thumbnail,
    };

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
        <textarea
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPlaylistPage;
