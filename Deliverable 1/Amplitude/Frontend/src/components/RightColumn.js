//u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/RightColumn.css';

const RightColumn = ({ songs }) => {
  return (
    <div className="right-column">
      <h2>Songs</h2>
      <div className="song-grid">
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            <img src={song.thumbnail} alt={song.name} />
            <div className="song-info">
              <h3>{song.name}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightColumn;
