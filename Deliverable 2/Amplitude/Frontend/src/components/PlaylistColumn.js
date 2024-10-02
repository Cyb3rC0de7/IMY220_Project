//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/PlaylistColumn.css';

const PlaylistColumn = ({ playlists }) => {
  return (
    <div className="playlist-column">
      <div className="playlist-header">
        <h2 className="playlist-title">My Playlists</h2>
        <NavLink to="/addPlaylist" className="nav-link">
          <button type="button">+ Add</button>
        </NavLink>
      </div>
      {(playlists === null || playlists.length === 0) ? (
        <p>No playlists found</p>
      ) : (
        <ul className="playlist-list">
          {playlists.map((playlist) => (
            <li key={playlist._id} className="playlist-item">
              <img src={playlist.thumbnail} alt={playlist.name} />
              <div className="playlist-info">
                <NavLink to={`/playlist/${playlist._id}`} className="nav-link">
                  <h3>{playlist.name}</h3>
                </NavLink>
                <p>{playlist.creator}</p>
              </div>
              <span className="heart-icon">{playlist.liked ? '❤️' : '♡'}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistColumn;