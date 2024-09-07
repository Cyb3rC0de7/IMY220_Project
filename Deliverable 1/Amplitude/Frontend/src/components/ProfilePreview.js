//u21669849, Qwinton Knocklein
import React from 'react';
import '../styles/ProfilePreview.css';

const ProfilePreview = ({ name, username, pronouns, bio }) => { // A component that displays the name, username, pronouns, and bio of a user
  return (
    <div className = "profile-preview">
      <h2>{name} ({username})</h2>
      <p>Pronouns: {pronouns}</p>
      <p>{bio}</p>
    </div>
  );
};

export default ProfilePreview;
