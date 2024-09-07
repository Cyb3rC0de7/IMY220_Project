//u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/PlaylistPreview.css';

const PlaylistPreview = ({ name, tags, creator }) => { // A component that displays the name, tags, and creator of a playlist
  return (
    <div className = "playlist-preview">
      <h3>{name}</h3>
      <p>{tags.join(', ')}</p>
      <p>Created by: {creator}</p>
    </div>
  );
};

export default PlaylistPreview;
