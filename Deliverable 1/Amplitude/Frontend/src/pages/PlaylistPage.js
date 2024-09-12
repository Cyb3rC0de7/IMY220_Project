//u21669849, Qwinton Knocklein
import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PlaylistColumn from '../components/PlaylistColumn';
import PlaylistDetails from '../components/PlaylistDetailsColumn';
import ListSongs from '../components/ListSongsColumn';
import Footer from '../components/Footer';

import profilePic from '../images/profile-pic.png'; // Placeholder for user profile images
import placeholder from '../images/placeholder.png'; // Placeholder for song thumbnails
import '../styles/pages/PlaylistPage.css';

const PlaylistPage = () => {
  const { id } = useParams();

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
    {
      id: 1,
      name: 'Chill Vibes',
      description: 'A collection of relaxing and chill tracks to wind down.',
      creator: 'John Doe',
      thumbnail: placeholder,
      songs: [
        { id: 1, name: 'Song 1', artist: 'Artist 1', duration: '3:45', thumbnail: placeholder },
        { id: 2, name: 'Song 2', artist: 'Artist 2', duration: '4:02', thumbnail: placeholder },
        { id: 3, name: 'Song 3', artist: 'Artist 3', duration: '2:58', thumbnail: placeholder },
        // Add more songs
      ]
    },
    {
      id: 2,
      name: 'Workout Beats',
      description: 'Pump up your workout with these energetic tunes.',
      creator: 'Jane Doe',
      thumbnail: placeholder,
      songs: [
        { id: 4, name: 'Song 4', artist: 'Artist 4', duration: '3:15', thumbnail: placeholder },
        { id: 5, name: 'Song 5', artist: 'Artist 5', duration: '3:30', thumbnail: placeholder },
        { id: 6, name: 'Song 6', artist: 'Artist 6', duration: '3:55', thumbnail: placeholder },
        // Add more songs
      ]
    }
  ];

  const user = users.find((user) => user.username === 'johndoe');

  const playlist = playlists.find((playlist) => playlist.id === parseInt(id));

  if (!playlist) {
    return <h2>Playlist not found</h2>;
  }

  const { songs } = playlist;

  return (
    <div className="playlist-page">
      <div className="content-area">
        <div className="left-column">
            <NavBar />
            <PlaylistColumn playlists={playlists}/>
        </div>
        <div className="right-column">
          <Header user={user} />
          <PlaylistDetails playlist={playlist} />
          <ListSongs songs={songs} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaylistPage;
