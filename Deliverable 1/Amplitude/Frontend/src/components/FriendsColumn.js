// frontend/src/components/FriendsColumn.js
import React from 'react';
import '../styles/FriendsColumn.css';

const FriendsColumn = ({ friends }) => {
  return (
    <div className="friends-column">
      <h2>Friends</h2>
      <div className="friends-grid">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-item">
            <img src={friend.thumbnail} alt={friend.name} />
            <div className="friend-info">
              <h3>{friend.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsColumn;
