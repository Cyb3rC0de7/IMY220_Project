// frontend/src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PlaylistColumn from '../components/PlaylistColumn';
import SongColumn from '../components/SongColumn';
import Footer from '../components/Footer';
import placeholder from '../images/placeholder.png';
import '../styles/HomePage.css';

const HomePage = () => {
  const playlists = [
    { id: 1, name: 'Chill Vibes', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 2, name: 'Workout Beats', creator: 'Jane Doe', thumbnail: placeholder, liked: false },
    { id: 3, name: 'Grooves', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 4, name: 'Jams', creator: 'Jane Doe', thumbnail: placeholder, liked: false },
    { id: 5, name: 'Jungle Beats', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 6, name: 'Urban Tunes', creator: 'Jane Doe', thumbnail: placeholder, liked: false },
    { id: 7, name: 'House', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 8, name: 'Hip-hop', creator: 'Jane Doe', thumbnail: placeholder, liked: false },
    { id: 9, name: 'Zen', creator: 'John Doe', thumbnail: placeholder, liked: true },
    { id: 10, name: 'Meditate', creator: 'Jane Doe', thumbnail: placeholder, liked: false },
  ];

  const songs = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', thumbnail: placeholder },
    { id: 2, name: 'Song 2', artist: 'Artist 2', thumbnail: placeholder },
    { id: 3, name: 'Song 3', artist: 'Artist 3', thumbnail: placeholder },
    { id: 4, name: 'Song 4', artist: 'Artist 4', thumbnail: placeholder },
    { id: 1, name: 'Song 5', artist: 'Artist 1', thumbnail: placeholder },
    { id: 2, name: 'Song 6', artist: 'Artist 2', thumbnail: placeholder },
    { id: 3, name: 'Song 7', artist: 'Artist 3', thumbnail: placeholder },
    { id: 4, name: 'Song 8', artist: 'Artist 4', thumbnail: placeholder },
    { id: 1, name: 'Song 9', artist: 'Artist 1', thumbnail: placeholder },
    { id: 2, name: 'Song 10', artist: 'Artist 2', thumbnail: placeholder },
    { id: 3, name: 'Song 11', artist: 'Artist 3', thumbnail: placeholder },
    { id: 4, name: 'Song 12', artist: 'Artist 4', thumbnail: placeholder },
  ];

  return (
    <div className="homepage">
      <div className="content-area">
        <div className='left-column'>
          <NavBar />
          <PlaylistColumn playlists={playlists} />
        </div>
        <div className='right-column'>
          <Header />
          <SongColumn songs={songs} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
