//u21669849, Qwinton Knocklein
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PlaylistColumn from '../components/PlaylistColumn';
import Footer from '../components/Footer';
import FriendsColumn from '../components/FriendsColumn';
import ProfileColumn from '../components/ProfileColumn';

import '../styles/pages/ProfilePage.css';
import profilePic from '../images/profile-pic.png'; // Placeholder for profile image
import placeholder from '../images/placeholder.png'; // Placeholder for images

const ProfilePage = () => {
  const { username } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('/api/playlists');
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

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
        const response = await fetch(`/api/users/${username}/friends`);
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchUser();
    fetchPlaylists();
    fetchFriends();

  }, []);

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="profile-page">
      <div className="content-area">
        <div className="left-column">
            <NavBar />
            <PlaylistColumn playlists={playlists}/>
        </div>
        <div className="right-column">
          <Header user={user} />
          <ProfileColumn user={user} />
          <FriendsColumn friends={friends} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;