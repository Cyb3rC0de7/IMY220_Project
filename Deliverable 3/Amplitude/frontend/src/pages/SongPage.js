// u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MyPlaylistColumn from '../components/MyPlaylistColumn';
import SongDetails from '../components/SongDetailsColumn';
import Footer from '../components/Footer';

import '../styles/pages/SongPage.css';

const SongPage = () => {
  const { songId } = useParams();
  const [user, setUser] = useState(null);
  const [song, setSong] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [likedPlaylists, setLikedPlaylists] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // Get the username from session storage
  const username = sessionStorage.getItem('username') || '';

  const fetchLikedPlaylists = async () => {
    try {
      const response = await fetch(`/api/playlists/liked/${username}`);
      const data = await response.json();
      setLikedPlaylists(data.reverse().map((playlist) => playlist._id)); // Store only the IDs of liked playlists
    } catch (error) {
      console.error('Error fetching liked playlists:', error);
    }
  };

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('/api/playlists');
        const data = await response.json();
        setPlaylists(data.reverse());
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
    fetchLikedPlaylists();
    setSearchInput('');
  }, [songId]);

  // Fetch the user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${username}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (username) fetchUser();
  }, [username]);

  // Fetch the song details
  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await fetch(`/api/songs/${songId}`);
        const data = await response.json();
        setSong(data);
      } catch (error) {
        console.error('Error fetching song:', error);
      }
    };

    fetchSong();
  }, [songId]);

  // Toggle like/unlike for playlists
  const handleLikeToggle = async (playlistId) => {
    const isLiked = likedPlaylists.includes(playlistId);
    const url = `/api/playlists/${playlistId}/${isLiked ? 'unlike' : 'like'}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user._id })
      });

      if (response.ok) {
        fetchLikedPlaylists(); // Refresh liked playlists
      } else {
        console.error('Error toggling like');
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  // Set up search for tags in songs
  const handleTagSearch = async (tag) => {
    setSearchInput(`@${tag}`);
  };

  if (!song) return <h2>Song not found</h2>;

  return (
    <div className="song-page">
      <div className="content-area">
        <div className="left-column">
          <NavBar />
          <MyPlaylistColumn playlists={playlists} likedPlaylists={likedPlaylists} onLikeToggle={handleLikeToggle}/>
        </div>
        <div className="right-column">
          <Header user={user} initialSearchQuery={searchInput} />
          <SongDetails song={song} user={user} onTagClick={handleTagSearch} />
        </div>
      </div>
    </div>
  );
};

export default SongPage;