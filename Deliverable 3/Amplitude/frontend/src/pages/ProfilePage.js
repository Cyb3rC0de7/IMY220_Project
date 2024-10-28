//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PlaylistColumn from '../components/PlaylistColumn';
import Footer from '../components/Footer';
import FriendsColumn from '../components/FriendsColumn';
import ProfileColumn from '../components/ProfileColumn';

import '../styles/pages/ProfilePage.css';

const ProfilePage = () => {
  const { username } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [Owner, setOwner] = useState(null); // Owner is the currently logged-in user
  const [user, setUser] = useState(null); // User is the profile being viewed
  const [friends, setFriends] = useState([]);
  const [isFriend, setIsFriend] = useState(false); // Check if the profile is a friend
  const navigate = useNavigate();

  const fetchOwner = async () => {
    try {
      const response = await fetch(`/api/users/${sessionStorage.getItem('username')}`);
      const data = await response.json();
      setOwner(data);
      setIsFriend(data.friends.includes(username)); // Check if the profile being viewed is a friend
    } catch (error) {
      console.error('Error fetching owner:', error);
    }
  };

  useEffect(() => {
    fetchOwner();
  }, [username]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${username}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    const fetchFriends = async () => {
      try {
        const response = await fetch(`/api/friends/${username}`);
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    const fetchPlaylists = async () => {
      try {
        const response = await fetch('/api/playlists');
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchUser();
    fetchFriends();
    fetchPlaylists();
  }, [username]);

  if (!user) {
    return <h2>User not found</h2>;
  }

  const viewFriendProfile = (friendUsername) => {
    navigate(`/profile/${friendUsername}`);
  };

  const addFriend = async () => {
    try {
      const response = await fetch(`/api/friends/${Owner.username}/addFriend/${user.username}`, {
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
      const response = await fetch(`/api/friends/${Owner.username}/removeFriend/${user.username}`, {
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

  return (
    <div className="profile-page">
      <div className="content-area">
        <div className="left-column">
          <NavBar />
          <PlaylistColumn playlists={playlists} />
        </div>
        <div className="right-column">
          <Header user={Owner} />
          <ProfileColumn 
            user={user} 
            isEditable={user.username === Owner?.username} 
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