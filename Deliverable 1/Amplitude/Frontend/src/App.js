//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import AddSongForm from './components/AddSongForm';
import Song from './components/Song';
import PlaylistPreview from './components/PlaylistPreview';
import ProfilePreview from './components/ProfilePreview';

// Placeholder components for other pages
const Home = () => <h2>Welcome to AMPLITUDE</h2>;
const Explore = () => <h2>Explore new music and playlists</h2>;
const Library = () => <h2>Your Library</h2>;
const Profile = () => (
  <ProfilePreview
    name="John Doe"
    username="johnd"
    pronouns="he/him"
    bio="Music lover and playlist curator."
  />
);

const App = () => {
  const [songs, setSongs] = useState([]);
  const [playlists] = useState([
    { id: 1, name: 'Chill Vibes', creator: 'John', tags: ['chill', 'vibes'] },
    { id: 2, name: 'Workout Mix', creator: 'Doe', tags: ['workout'] },
  ]);

  const addSong = (song) => setSongs([...songs, song]);

  return (
    <Router>
      <div>
        <Header />
        <h1>AMPLITUDE</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <AddSongForm addSong={addSong} />
                <div className="song-list">
                  {songs.map((song, index) => (
                    <Song key = {index} title = {song.title} artist = {song.artist} />
                  ))}
                </div>
              </>
            }
          />
          <Route
            path="/explore"
            element={<Explore />}
          />
          <Route
            path="/library"
            element={
              <>
                <Library />
                <h2>Playlists</h2>
                {playlists.map((playlist) => (
                  <PlaylistPreview
                    key = {playlist.id}
                    name = {playlist.name}
                    tags = {playlist.tags}
                    creator = {playlist.creator}
                  />
                ))}
              </>
            }
          />
          <Route
            path="/profile"
            element = {<Profile />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
