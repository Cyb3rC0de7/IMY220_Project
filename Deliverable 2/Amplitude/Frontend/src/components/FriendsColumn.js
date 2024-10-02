//u21669849, Qwinton Knocklein
import React from 'react';

import '../styles/components/FriendsColumn.css';

const FriendsColumn = ({ friends }) => {
  return (
    <div className="friends-column">
      <h2>Friends</h2>
      <div className="friends-grid">
        {(friends === null || friends.length === 0) ? (
          <div className="no-friends">
            <p>No friends found</p>
          </div>
        ) : (
          friends.map((friend) => (
            <div key={friend._id} className="friend-card">
              <img src={friend.profileImage} alt="Profile Photo" className='profile-image' />
              <h3>{friend.username}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FriendsColumn;
