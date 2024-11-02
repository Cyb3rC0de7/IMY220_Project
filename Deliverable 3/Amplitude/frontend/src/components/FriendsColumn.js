//u21669849, Qwinton Knocklein
import React from 'react';

import '../styles/components/FriendsColumn.css';

const FriendsColumn = ({ isEditable, isFriend, friends, onFriendClick }) => {
  return (
    <div className="friends-column">
      <h2>Friends</h2>
      <div> 
        <h4 className="songCol-subtitle">Total friends: {friends.length}</h4>
      </div>
      <div className="friends-grid">
        { isFriend || isEditable ? (
          (friends === null || friends.length === 0) ? (
            <div className="no-friends">
              <p>No friends found</p>
            </div>
          ) : (
            friends.map((friend) => (
              <div key={friend._id} className="friend-card" onClick={() => onFriendClick(friend.username)}>
                <img src={friend.profileImage} alt="Profile Photo" className='profile-image' />
                <h3>{friend.username}</h3>
              </div>
            ))
          )) : (
          <div className="no-friends">
            <p>Not friends with this user</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsColumn;
