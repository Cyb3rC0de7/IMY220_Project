//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/PlaylistDetailsColumn.css';

const PlaylistDetailsColumn = ({ playlist }) => {
  return (
    <div className="playlist-details">
      <img src={playlist.thumbnail} alt={playlist.name} className="playlist-thumbnail" />
      <div className="playlist-info">
        <h2>{playlist.name}</h2>
        <h3>Created by: {playlist.creator}</h3>
        <p>{playlist.tags}</p>
        <p>{playlist.description}</p>
      </div>
      <NavLink to={{pathname: `/editPlaylist/${playlist._id}`}} className="nav-link">
        <button>Edit</button>
      </NavLink>
    </div>
  );
};

export default PlaylistDetailsColumn;
