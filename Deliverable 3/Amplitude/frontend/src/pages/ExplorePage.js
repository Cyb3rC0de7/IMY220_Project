//u21669849, Qwinton Knocklein
import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MyPlaylistColumn from '../components/MyPlaylistColumn';
import AllPlaylistColumn from '../components/AllPlaylistColumn';
import Footer from '../components/Footer';

import '../styles/pages/ExplorePage.css';

const ExplorePage = () => {
  const [likedPlaylists, setLikedPlaylists] = useState([]);
  const [user, setUser] = useState(null);

  // Get the username from session storage
  if (sessionStorage.getItem('username'))
    var username = sessionStorage.getItem('username');

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${username}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

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
    fetchUser();
    fetchLikedPlaylists();
  }, [username]);

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
  

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="explore">
      <div className="content-area">
        <div className='left-column'>
          <NavBar user={user} />
          <MyPlaylistColumn user={user} likedPlaylists={likedPlaylists} onLikeToggle={handleLikeToggle} />
        </div>
        <div className='right-column'>
          <Header user={user} />
          <AllPlaylistColumn likedPlaylists={likedPlaylists} onLikeToggle={handleLikeToggle} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorePage;
