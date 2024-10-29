import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import likedIcon from '../images/heart.png';
import unlikedIcon from '../images/heart-no.png';
import '../styles/components/MyPlaylistColumn.css';

const MyPlaylistColumn = ({ user, likedPlaylists, onLikeToggle }) => {
  const [userPlaylists, setUserPlaylists] = useState([]);
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const response = await fetch(`/api/playlists/user/${ user ? user.username : username }`);
        const data = await response.json();
        setUserPlaylists(data);
      } catch (error) {
        console.error('Error fetching user playlists:', error);
      }
    };

    fetchUserPlaylists();
  }, [user]);

  return (
    <div className="playlist-column">
      <div className="playlistCol-header">
        <h2>{user.username != username ? `${user.name}'s` : 'My'} Playlists</h2>
      </div>
      <div className="playlistCol-grid">
        {userPlaylists.map((playlist) => (
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

export default MyPlaylistColumn;
