import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import likedIcon from '../images/heart.png';
import unlikedIcon from '../images/heart-no.png';
import listIcon from '../images/grid-icon.png';
import gridIcon from '../images/list-icon.png';
import '../styles/components/AllPlaylistColumn.css';

const AllPlaylistColumn = ({ user, likedPlaylists, onLikeToggle }) => {
  const [playlists, setPlaylists] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // Toggle state for grid or list view
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('/api/playlists');
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, [user]);

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="allPlaylist-column">
      <div className="allPlaylistCol-header">
        <h1>All Playlists</h1>
        <img
          src={viewMode === 'grid' ? listIcon : gridIcon}
          alt="Toggle view"
          className="view-toggle-icon"
          onClick={toggleViewMode}
        />
      </div>
      <div className={`allPlaylistCol-grid ${viewMode}`}>
        {playlists.map((playlist) => (
          <div
            key={playlist._id}
            className={`allPlaylist-item ${viewMode}`}
          >
            <img src={playlist.thumbnail || '/images/placeholder.png'} alt={playlist.name} onClick={() => navigate(`/playlist/${playlist._id}`)}/>
            <div className="allPlaylist-info">
              <h2>{playlist.name}</h2>
              <h3>Created by: {<NavLink to={`/profile/${playlist.creator}`}>{playlist.creator}</NavLink>}</h3>
              <p>{playlist.tags}</p>
              <p>{playlist.description}</p>
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
        ))}
      </div>
    </div>
  );
};

export default AllPlaylistColumn;