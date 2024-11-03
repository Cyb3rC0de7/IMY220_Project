// u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/components/SongDetailsColumn.css';

const SongDetailsColumn = ({ song, user, isLiked, onLikeToggle, onTagClick }) => {
  return (
    <div className="song-details">
      <img src={song.thumbnail} alt={song.title} className="song-thumbnail" />
      <div className="song-info">
        <h2>{song.title}</h2>
        <h3>Artist: {song.artist}</h3>
        <h4 onClick={() => onTagClick(song.genre)}>Genre: {song.genre}</h4>
        <h4>Duration: {song.duration}</h4>
        <h4>Date: {song.date}</h4>
        <p>{song.description}</p>
      </div>
    </div>
  );
};

export default SongDetailsColumn;
