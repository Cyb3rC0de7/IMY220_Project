//u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/song.css';

const Song = ({ id, title, artist, image }) => { // A component that displays the title and artist of a song
  return (
    <div key={id} className="song-card">
      <img src={image} alt={title} />
      <div className="song-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default Song;
