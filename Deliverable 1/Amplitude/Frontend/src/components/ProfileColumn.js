//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import placeholder from '../images/placeholder.png'; // Placeholder for profile image
import '../styles/components/ProfileColumn.css';

const ProfileColumn = () => {
  const user = {
    username: 'johndoe',
    name: 'John Doe',
    pronouns: 'he/him',
    bio: 'Music enthusiast, playlist curator, and lover of all things chill.',
    profileImage: placeholder, // Replace with actual profile image
  };

  return (
    <div className="user-details">
      <img src={user.profileImage} alt={user.name} className="profile-image" />
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Pronouns: {user.pronouns}</p>
        <p>Bio: {user.bio}</p>
      </div>
        <NavLink to="/editProfile" className="nav-link">
            <button>Edit</button>
        </NavLink>
    </div>
  );
};

export default ProfileColumn;
