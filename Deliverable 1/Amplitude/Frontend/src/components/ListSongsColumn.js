//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/ListSongsColumn.css';

const ListSongsColumn = ({ songs }) => {
  return (
    <div className="list-songs">
        <div className="songList-header">
        <h2 className="songList-title">Songs</h2>
        <NavLink to="/addSong" className="nav-link">
          <button type="button">+ Add Song</button>
        </NavLink>
      </div>
      {songs.map((song, index) => (
        <div key={song.id} className={`song-item ${index % 2 === 0 ? 'dark' : 'darker'}`}>
          <img src={song.thumbnail} alt={song.name} className="song-thumbnail" />
          <div className="song-info">
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="song-duration">
            <p>{song.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSongsColumn;
