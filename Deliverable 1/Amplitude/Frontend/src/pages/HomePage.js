// frontend/src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

const HomePage = () => {
  const playlists = [
    { id: 1, name: 'Chill Vibes', creator: 'John Doe', thumbnail: 'https://via.placeholder.com/100', liked: true },
    { id: 2, name: 'Workout Beats', creator: 'Jane Doe', thumbnail: 'https://via.placeholder.com/100', liked: false },
  ];

  const songs = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', thumbnail: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', thumbnail: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', thumbnail: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Song 4', artist: 'Artist 4', thumbnail: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="homepage">
      <div className="content-area">
        <div className='left-column'>
          <NavBar />
          <LeftColumn playlists={playlists} />
        </div>
        <div className='right-column'>
          <Header />
          <RightColumn songs={songs} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
