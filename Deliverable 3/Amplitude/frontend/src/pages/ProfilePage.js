// u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MyPlaylistColumn from '../components/MyPlaylistColumn';
import Footer from '../components/Footer';
import FriendsColumn from '../components/FriendsColumn';
import ProfileColumn from '../components/ProfileColumn';

import '../styles/pages/ProfilePage.css';

const ProfilePage = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const [playlists, setPlaylists] = useState([]);
  const [likedPlaylists, setLikedPlaylists] = useState([]);
  const [owner, setOwner] = useState(null); // Owner is the currently logged-in user
  const [user, setUser] = useState(null); // User is the profile being viewed
  const [friends, setFriends] = useState([]);
  const [isFriend, setIsFriend] = useState(false); // Check if the profile is a friend

  // Fetch logged-in user data
  useEffect(() => {
    const fetchOwner = async () => {
      const loggedUsername = sessionStorage.getItem('username');
      if (!loggedUsername) return;

      try {
        const response = await fetch(`/api/users/${loggedUsername}`);
        const data = await response.json();
        setOwner(data);
      } catch (error) {
        console.error('Error fetching owner:', error);
      }
    };

    fetchOwner();
  }, []);

  // Fetch the profile user data and playlists whenever the `username` changes
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`/api/users/${username}`);
        const userData = await userResponse.json();
        setUser(userData);

        const friendResponse = await fetch(`/api/friends/${username}`);
        const friendData = await friendResponse.json();
        setFriends(friendData);

        const playlistResponse = await fetch(`/api/playlists/user/${username}`);
        const playlistData = await playlistResponse.json();
        setPlaylists(playlistData);
        console.log(playlistData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  // Fetch liked playlists for the logged-in user when the profile user changes
  const fetchLikedPlaylists = async () => {
    if (owner) {
      try {
        const response = await fetch(`/api/playlists/liked/${owner.username}`);
        const data = await response.json();
        setLikedPlaylists(data.map((playlist) => playlist._id)); // Store only the IDs of liked playlists
      } catch (error) {
        console.error('Error fetching liked playlists:', error);
      }
    }
  };
  
  useEffect(() => {
    fetchLikedPlaylists();
  }, [owner]);

  // Check if the profile is a friend of the logged-in user
  useEffect(() => {
    if (owner) {
      setIsFriend(owner.friends.includes(username));
    }
  }, [owner, username]);

  if (!user) {
    return <h2>User not found</h2>;
  }

  const viewFriendProfile = (friendUsername) => {
    navigate(`/profile/${friendUsername}`);
  };

  const addFriend = async () => {
    try {
      const response = await fetch(`/api/friends/${owner.username}/addFriend/${user.username}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setIsFriend(true);
        alert('Friend added successfully');
      } else {
        console.error('Failed to add friend');
      }
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  const removeFriend = async () => {
    try {
      const response = await fetch(`/api/friends/${owner.username}/removeFriend/${user.username}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setIsFriend(false);
        alert('Friend removed successfully');
      } else {
        console.error('Failed to remove friend');
      }
    } catch (error) {
      console.error('Error removing friend:', error);
    }
  };

  const handleLikeToggle = async (playlistId) => {
    const isLiked = likedPlaylists.includes(playlistId);
    const url = `/api/playlists/${playlistId}/${isLiked ? 'unlike' : 'like'}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: owner._id }),
      });

      if (response.ok) {
        // Refresh liked playlists after toggling like
        setLikedPlaylists((prevLikedPlaylists) =>
          isLiked
            ? prevLikedPlaylists.filter((id) => id !== playlistId)
            : [...prevLikedPlaylists, playlistId]
        );
      } else {
        console.error('Error toggling like');
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <div className="profile-page">
      <div className="content-area">
        <div className="left-column">
          <NavBar />
          <MyPlaylistColumn
            user={user}
            likedPlaylists={likedPlaylists}
            onLikeToggle={handleLikeToggle}
          />
        </div>
        <div className="right-column">
          <Header user={owner} />
          <ProfileColumn
            user={user}
            isEditable={user.username === owner?.username}
            isFriend={isFriend}
            onAddFriend={addFriend}
            onRemoveFriend={removeFriend}
          />
          <FriendsColumn friends={friends} onFriendClick={viewFriendProfile} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
