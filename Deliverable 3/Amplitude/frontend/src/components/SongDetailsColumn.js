// u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/SongDetailsColumn.css';

const SongDetailsColumn = ({ song, onTagClick }) => {
  return (
    <div className="song-details">
      <img src={song.thumbnail} alt={song.title} className="song-image" />
      <div className="song-information">
        <h1>{song.title}</h1>
        <h2>Artist: {song.artist}</h2>
        <h3 onClick={() => onTagClick(song.genre)}>Genre: #{song.genre}</h3>
        <h3>Duration: {song.duration}</h3>
        <h3>Date: {song.date}</h3>
        <h4>{song.description}</h4>
      </div>
      <NavLink to={`/editSong/${song._id}`} className="nav-link">
        <button>Edit</button>
      </NavLink>
    </div>
  );
};

export default SongDetailsColumn;