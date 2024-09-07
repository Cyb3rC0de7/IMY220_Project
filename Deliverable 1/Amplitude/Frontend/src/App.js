//u21669849, Qwinton Knocklein
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LibraryPage from './pages/LibraryPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Splash Page (Default Route) */}
        <Route path="/" element={<SplashPage />} />
        
        {/* Authentication Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Main Pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
