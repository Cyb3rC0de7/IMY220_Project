//u21669849, Qwinton Knocklein
import React from 'react';

const Song = ({ title, artist }) => {
  return (
    <div className = "song">
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default Song;
