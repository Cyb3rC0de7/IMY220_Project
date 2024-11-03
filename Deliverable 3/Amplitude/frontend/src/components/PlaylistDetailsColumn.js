// u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import likedIcon from '../images/heart.png';
import unlikedIcon from '../images/heart-no.png';
import '../styles/components/PlaylistDetailsColumn.css';

const PlaylistDetailsColumn = ({ playlist, user, isLiked, onLikeToggle, onTagClick }) => {
  const navigate = useNavigate();

  // Check if the logged-in user is the creator of the playlist
  const isCreator = playlist.creator === user?.username;

  return (
    <div className="playlist-details">
      <img src={playlist.thumbnail} alt={playlist.name} className="playlist-thumbnail" />
      <div className="playlist-info">
        <h2>{playlist.name}</h2>
        <h3>Created by: <NavLink to={`/profile/${playlist.creator}`}>{playlist.creator}</NavLink></h3>
        <div className="playlist-tags">
          {playlist.tags?.map((tag, index) => (
            <span 
              key={index} 
              className="tag-item"
              onClick={(e) => {
                e.stopPropagation();
                onTagClick(tag);
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <p>{playlist.description}</p>
      </div>

      {isCreator || user?.isAdmin ? (
        <NavLink to={`/editPlaylist/${playlist._id}`} className="nav-link">
          <button>Edit</button>
        </NavLink>
      ) : (
        <img
          src={isLiked ? likedIcon : unlikedIcon}
          alt={isLiked ? 'Unlike' : 'Like'}
          className="heart-icon"
          onClick={(e) => {
            e.stopPropagation();
            onLikeToggle(playlist._id);
          }}
        />
      )}
    </div>
  );
};

export default PlaylistDetailsColumn;