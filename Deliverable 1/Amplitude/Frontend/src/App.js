//u21669849, Qwinton Knocklein
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AddSongPage from './pages/AddSongPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import PlaylistPage from './pages/PlaylistPage';
import AddPlaylistPage from './pages/AddPlaylistPage';
import EditPlaylistPage from './pages/EditPlaylistPage';
import ExplorePage from './pages/ExplorePage';
import LibraryPage from './pages/LibraryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home/" element={<HomePage />} />
        <Route path="/addSong" element={<AddSongPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/editProfile/" element={<EditProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/addPlaylist" element={<AddPlaylistPage />} />
        <Route path="/editPlaylist" element={<EditPlaylistPage />} />
      </Routes>
    </Router>
  );
};

export default App;