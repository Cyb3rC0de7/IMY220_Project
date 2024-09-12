//u21669849, Qwinton Knocklein
import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PlaylistColumn from '../components/PlaylistColumn';
import Footer from '../components/Footer';
import FriendsColumn from '../components/FriendsColumn';
import ProfileColumn from '../components/ProfileColumn';

import '../styles/pages/ProfilePage.css';
import placeholder from '../images/placeholder.png'; // Placeholder for profile image

const ProfilePage = () => {
  const user = {
    username: 'johndoe',
    name: 'John Doe',
    pronouns: 'he/him',
    bio: 'Music enthusiast, playlist curator, and lover of all things chill.',
    profileImage: placeholder, // Replace with actual profile image
  };

  const playlists = [
    { id: 1, name: 'Chill Vibes', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 2, name: 'Grooves', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 3, name: 'Jungle Beats', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 4, name: 'House', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 5, name: 'Zen', creator: 'John Doe', thumbnail: placeholder, liked: true },
  ];

  const friends = [
    { id: 1, name: 'Jane Doe', thumbnail: placeholder },
    { id: 2, name: 'Mike Ross', thumbnail: placeholder },
    { id: 3, name: 'Rachel Zane', thumbnail: placeholder },
    // Add more friends as needed
  ];

  return (
    <div className="profile-page">
      <div className="content-area">
        <div className="left-column">
            <NavBar />
            <PlaylistColumn playlists={playlists} />
        </div>
        <div className="right-column">
          <Header />
          <ProfileColumn user={user} />
          <FriendsColumn friends={friends} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
