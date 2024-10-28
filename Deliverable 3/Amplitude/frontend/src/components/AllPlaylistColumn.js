//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/components/AllPlaylistColumn.css';

const AllPlaylistColumn = ({ user }) => {
  const [playlists, setPlaylists] = useState([]); // Stores all playlists
  const [likedPlaylists, setLikedPlaylists] = useState([]); // Stores user’s liked playlist IDs
  const navigate = useNavigate();

  // Get the username from session storage
  const username = sessionStorage.getItem('username');

  const fetchPlaylists = async () => {
    try {
      const response = await fetch('/api/playlists');
      const data = await response.json();
      setPlaylists(data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  const fetchLikedPlaylists = async () => {
    try {
      const response = await fetch(`/api/playlists/liked/${username}`);
      const data = await response.json();
      setLikedPlaylists(data.map((playlist) => playlist._id)); // Store only the IDs of liked playlists
    } catch (error) {
      console.error('Error fetching liked playlists:', error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
    fetchLikedPlaylists();
  }, [user]);

  // Toggle like/unlike for playlists
  const handleLikeToggle = async (playlistId) => {
    const isLiked = likedPlaylists.includes(playlistId);
    const url = `/api/playlists/${playlistId}/${isLiked ? 'unlike' : 'like'}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user._id })
      });

      if (response.ok) {
        fetchLikedPlaylists(); // Refresh liked playlists
        console.log('Like toggled successfully');
      } else {
        console.error('Error toggling like');
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <div className="playlist-column">
      <div className="playlistCol-header">
        <h2>All Playlists</h2>
      </div>
      <div className="playlistCol-grid">
        {playlists.map((playlist) => (
          <div
            key={playlist._id}
            className="playlist-item"
            onClick={() => navigate(`/playlist/${playlist._id}`)}
          >
            <img src={playlist.thumbnail || '/images/placeholder.png'} alt={playlist.name} />
            <div className="playlist-info">
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent click event from triggering navigation
                handleLikeToggle(playlist._id);
              }}
            >
              {likedPlaylists.includes(playlist._id) ? 'Unlike' : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlaylistColumn;