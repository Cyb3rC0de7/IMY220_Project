//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/ProfileColumn.css';

const ProfileColumn = ( {user} ) => {

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
