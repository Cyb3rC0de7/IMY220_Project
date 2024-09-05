//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import Song from './components/Song';
import AddSongForm from './components/AddSongForm';
import PlaylistPreview from './components/PlaylistPreview';
import ProfilePreview from './components/ProfilePreview';
import Header from './components/Header';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [playlists] = useState([
    { id: 1, name: 'Chill Vibes', creator: 'John', tags: ['chill', 'vibes'] },
    { id: 2, name: 'Workout Mix', creator: 'Doe', tags: ['workout'] },
  ]);

  const addSong = (song) => setSongs([...songs, song]);

  return (
    <div>
      <Header />
      <h1>AMPLITUDE</h1>
      <AddSongForm addSong = {addSong} />
      <div className = "song-list">
        {songs.map((song, index) => (
          <Song key = {index} title = {song.title} artist = {song.artist} />
        ))}
      </div>
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <PlaylistPreview
          key = {playlist.id}
          name = {playlist.name}
          tags = {playlist.tags}
          creator = {playlist.creator}
        />
      ))}
      <h2>User Profile</h2>
      <ProfilePreview
        name = "John Doe"
        username = "johnd"
        pronouns = "he/him"
        bio = "Music lover and playlist curator."
      />
    </div>
  );
};

export default App;
