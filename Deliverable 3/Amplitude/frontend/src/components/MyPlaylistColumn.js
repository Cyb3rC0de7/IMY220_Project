// u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import likedIcon from '../images/heart.png';
import unlikedIcon from '../images/heart-no.png';
import '../styles/components/MyPlaylistColumn.css';

const MyPlaylistColumn = ({ user, likedPlaylists, onLikeToggle }) => {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [viewMode, setViewMode] = useState('created'); // State to track the current view
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');

  // Function to fetch playlists based on the current view mode
  const fetchPlaylists = async () => {
    try {
      const url = (viewMode === 'created' ? 
        `/api/playlists/user/${user ? user.username : username}`
        : `/api/playlists/liked/${user ? user.username : username}`);
      const response = await fetch(url);
      const data = await response.json();
      setUserPlaylists(data.reverse());
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, [user, viewMode]); // Refetch when the user or viewMode changes

  // Toggle between created and liked playlists
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'created' ? 'liked' : 'created'));
  };

  return (
    <div className="playlist-column">
      <div className="playlistCol-header">
        <button onClick={toggleViewMode} className="nav-arrow">
          {'<'}
        </button>
        <h2 className="playlist-title">
          {viewMode === 'created'
            ? `${user ? (user.username !== username ? `${user.name}'s` : 'My') : 'My'} Created Playlists`
            : `${user ? (user.username !== username ? `${user.name}'s` : 'My') : 'My'} Liked Playlists`}
        </h2>
        <button onClick={toggleViewMode} className="nav-arrow">
          {'>'}
        </button>
        {username === user?.username && (
          <button onClick={() => navigate('/addPlaylist')} className="add-playlist-btn">
            +
          </button>
        )}
      </div>
      <div className="playlistCol-grid">
        {userPlaylists.length === 0 ? (
          <div className="no-playlists">
            <h2>No playlists found</h2>
          </div>
        ) : (
          userPlaylists.map((playlist) => (
            <div
              key={playlist._id}
              className="playlist-item"
              onClick={() => navigate(`/playlist/${playlist._id}`)}
            >
              <img src={playlist.thumbnail || '/images/placeholder.png'} alt={playlist.name} />
              <div className="playlist-info">
                <h2>{playlist.name}</h2>
                <p>{playlist.description}</p>
                <h4>{playlist.songs.length} songs</h4>
              </div>
              <img
                src={likedPlaylists.includes(playlist._id) ? likedIcon : unlikedIcon}
                alt={likedPlaylists.includes(playlist._id) ? 'Unlike' : 'Like'}
                className="heart-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  onLikeToggle(playlist._id);
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyPlaylistColumn;
