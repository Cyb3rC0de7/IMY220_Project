//u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/song.css';

const Song = ({ title, artist }) => { // A component that displays the title and artist of a song
  return (
    <div className = "song">
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default Song;
