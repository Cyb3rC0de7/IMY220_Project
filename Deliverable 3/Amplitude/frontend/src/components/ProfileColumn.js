//u21669849, Qwinton Knocklein
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/ProfileColumn.css';

const ProfileColumn = ({ owner, user, isEditable, isFriend, onAddFriend, onRemoveFriend}) => {

  return (
    <div className="user-details">
      <img src={user.profileImage} alt={user.name} className="profile-image" />
      {isFriend || isEditable || user?.isAdmin ? (
        <div className="user-info">
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Pronouns: {user.pronouns}</p>
        <p>Bio: {user.bio}</p>
        </div>) : (
          <div className="user-info">
          <h2>{user.name}</h2>
          </div>
        )}
      
      {isEditable || owner?.isAdmin ? (
        <NavLink to={`/editProfile/${user.username}`} className="nav-link">
          <button>Edit</button>
        </NavLink>
      ) : null}
      {
        owner?.username !== user.username ? (
          isFriend ? (
            <button onClick={onRemoveFriend}>Remove Friend</button>
          ) : (
            <button onClick={onAddFriend}>Add Friend</button>
          )
        ):(null)
      }
    </div>
  );
};

export default ProfileColumn;
