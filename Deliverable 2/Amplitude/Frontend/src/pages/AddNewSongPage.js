//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for redirect after adding a song
import '../styles/pages/AddNewSongPage.css';

const AddSongPage = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState(null); // Handle errors
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSong = {
      title,
      artist,
      album,
      thumbnail,
      genre,
      duration,
    };

    try {
      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSong),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to add the song');
      }
    } catch (error) {
      console.error('Error adding song:', error);
      setError('An error occurred while adding the song');
    }
  };

  return (
    <div className="add-song-container">
      <h1>Add a New Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <textarea
          placeholder="Thumbnail URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />

        <button type="submit">Add Song</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddSongPage;