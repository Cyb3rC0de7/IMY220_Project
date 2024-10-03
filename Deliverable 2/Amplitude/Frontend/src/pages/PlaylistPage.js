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

import '../styles/pages/PlaylistPage.css';

const PlaylistPage = () => {
  const { id } = useParams();
  const [showCommentColumn, setShowCommentColumn] = useState(false);
  const toggleShowCommentColumn = () => setShowCommentColumn(!showCommentColumn);
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [comments, setComments] = useState([]);

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

    fetchPlaylists();
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

    setPlaylist(null);
    fetchPlaylist();
    setComments([]);
    fetchPlaylistComments();

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
            <ListSongs key={`songs-${id}`} playlistId={playlist._id} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaylistPage;
