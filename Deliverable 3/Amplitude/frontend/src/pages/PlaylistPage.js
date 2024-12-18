//u21669849, Qwinton Knocklein
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MyPlaylistColumn from '../components/MyPlaylistColumn';
import PlaylistDetails from '../components/PlaylistDetailsColumn';
import ListSongs from '../components/ListSongsColumn';
import ListComments from '../components/ListCommentsColumn';
import Footer from '../components/Footer';

import '../styles/pages/PlaylistPage.css';

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const [showCommentColumn, setShowCommentColumn] = useState(false);
  const toggleShowCommentColumn = () => setShowCommentColumn(!showCommentColumn);
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [likedPlaylists, setLikedPlaylists] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // Get the username from session storage
  if (sessionStorage.getItem('username'))
    var username = sessionStorage.getItem('username');

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
  }, [playlistId]);

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

    fetchUser();
  }, [username]);

  useEffect(() => {
    
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`/api/playlists/${playlistId}`);
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };

    setPlaylist(null);
    fetchPlaylist();

    setShowCommentColumn(false);
  }, [playlistId]);

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

  const handleTagSearch = async (tag) => {
    setSearchInput('@'+tag);
    console.log(searchInput);
  };
  

  if (!playlist) {
    return <h2>Playlist not found</h2>;
  }

  return (
    <div className="playlist-page">
      <div className="content-area">
        <div className="left-column">
            <NavBar />
            <MyPlaylistColumn playlists={playlists} likedPlaylists={likedPlaylists} onLikeToggle={handleLikeToggle}/>
        </div>
        <div className="right-column">
          <Header user={user} initialSearchQuery={searchInput}/>
          <PlaylistDetails playlist={playlist} user={user} isLiked={likedPlaylists.includes(playlist._id)} onLikeToggle={handleLikeToggle} onTagClick={handleTagSearch} />

          <div className='song-comment-toggle'>
            <button onClick={toggleShowCommentColumn}>
              {showCommentColumn ? 'Hide Comments' : 'Show Comments'}
            </button>
          </div>
          {showCommentColumn ? (
            <ListComments key={`comments-${playlistId}`} user={user} playlistId={playlist._id} isCreator={user?.username === playlist.creator} />
          ) : (
            <ListSongs key={`songs-${playlistId}`} user={user} playlistId={playlist._id} isCreator={user?.username === playlist.creator}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
