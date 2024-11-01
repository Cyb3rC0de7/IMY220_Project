//u21669849, Qwinton Knocklein
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AddNewSongPage from './pages/AddNewSongPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import PlaylistPage from './pages/PlaylistPage';
import AddPlaylistPage from './pages/AddPlaylistPage';
import AddCommentPage from './pages/AddCommentPage';
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
        <Route path="/addNewSong" element={<AddNewSongPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/editProfile/:username" element={<EditProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/playlist/:playlistId" element={<PlaylistPage />} />
        <Route path="/addPlaylist" element={<AddPlaylistPage />} />
        <Route path="/editPlaylist/:playlistId" element={<EditPlaylistPage />} />
        <Route path="/playlist/:playlistId/addComment" element={<AddCommentPage />} />
      </Routes>
    </Router>
  );
};

export default App;