//u21669849, Qwinton Knocklein
import React from 'react';
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
  
  const users = [
    {
      username: 'johndoe',
      name: 'John Doe',
      pronouns: 'he/him',
      bio: 'Music enthusiast, playlist curator, and lover of all things chill.',
      profileImage: profilePic,
      friends: [
        { id: 1, name: 'Jane Doe', thumbnail: placeholder },
        { id: 2, name: 'Mike Ross', thumbnail: placeholder },
      ],
    },
    {
      username: 'janedoe',
      name: 'Jane Doe',
      pronouns: 'she/her',
      bio: 'Pop music addict and playlist guru.',
      profileImage: placeholder,
      friends: [
        { id: 1, name: 'John Doe', thumbnail: placeholder },
        { id: 2, name: 'Rachel Zane', thumbnail: placeholder },
      ],
    },
  ];

  const playlists = [
    { id: 1, name: 'Chill Vibes', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 2, name: 'Grooves', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 3, name: 'Jungle Beats', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 4, name: 'House', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 5, name: 'Zen', creator: 'John Doe', thumbnail: placeholder, liked: true },
  ];

  const user = users.find((user) => user.username === username);

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
          <FriendsColumn friends={user.friends} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
