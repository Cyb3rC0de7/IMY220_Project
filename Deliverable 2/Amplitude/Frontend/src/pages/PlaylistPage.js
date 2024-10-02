//u21669849, Qwinton Knocklein
import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PlaylistColumn from '../components/PlaylistColumn';
import PlaylistDetails from '../components/PlaylistDetailsColumn';
import ListSongs from '../components/ListSongsColumn';
import ListComments from '../components/ListCommentsColumn';
import Footer from '../components/Footer';

import profilePic from '../images/profile-pic.png'; // Placeholder for user profile images
import placeholder from '../images/placeholder.png'; // Placeholder for song thumbnails
import '../styles/pages/PlaylistPage.css';

const PlaylistPage = () => {
  const { id } = useParams();
  const [showCommentColumn, setShowCommentColumn] = useState(false);
  const toggleShowCommentColumn = () => setShowCommentColumn(!showCommentColumn);
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [allAvailableSongs, setAllAvailableSongs] = useState([]);
  const [comments, setComments] = useState([]);
  const [songs, setSongs] = useState([]);

  // Get the username from session storage
  if (sessionStorage.getItem('username'))
    var username = sessionStorage.getItem('username');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('/api/playlists');
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    const fetchAllAvailableSongs = async () => {
      try {
        const response = await fetch('/api/songs');
        const data = await response.json();
        setAllAvailableSongs(data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchPlaylists();
    fetchAllAvailableSongs();
  }, []);

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
        const response = await fetch(`/api/playlists/${id}`);
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      }
    };
    
    const fetchPlaylistComments = async () => {
      try {
        const response = await fetch(`/api/playlists/${id}/comments`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    const fetchPlaylistSongs = async () => {
      try {
        const response = await fetch(`/api/playlists/${id}/songs`);
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching playlist songs:', error);
      }
    };

    setPlaylist(null);
    fetchPlaylist();
    setComments([]);
    fetchPlaylistComments();
    setSongs([]);
    fetchPlaylistSongs();

    setShowCommentColumn(false);
  }, [id]);

  if (!playlist) {
    return <h2>Playlist not found</h2>;
  }

  return (
    <div className="playlist-page">
      <div className="content-area">
        <div className="left-column">
            <NavBar />
            <PlaylistColumn playlists={playlists}/>
        </div>
        <div className="right-column">
          <Header user={user} />
          <PlaylistDetails playlist={playlist} />

          <div className='song-comment-toggle'>
            <button onClick={toggleShowCommentColumn}>
              {showCommentColumn ? 'Hide Comments' : 'Show Comments'}
            </button>
          </div>
          {showCommentColumn ? (
            <ListComments key={`comments-${id}`} comments={comments} />
          ) : (
            <ListSongs key={`songs-${id}`} songs={songs} allSongs={allAvailableSongs} playlistId={playlist._id} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaylistPage;
