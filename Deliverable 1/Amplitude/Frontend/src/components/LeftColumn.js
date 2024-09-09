//u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/LeftColumn.css';

const LeftColumn = ({ playlists }) => {
  return (
    <div className="left-column">
      <h2>Playlists</h2>
      <ul className="playlist-list">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="playlist-item">
            <img src={playlist.thumbnail} alt={playlist.name} />
            <div className="playlist-info">
              <h3>{playlist.name}</h3>
              <p>{playlist.creator}</p>
            </div>
            <span className="heart-icon">{playlist.liked ? '❤️' : '♡'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftColumn;