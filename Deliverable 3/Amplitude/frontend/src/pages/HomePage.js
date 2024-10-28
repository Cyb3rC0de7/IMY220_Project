//u21669849, Qwinton Knocklein
import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MyPlaylistColumn from '../components/MyPlaylistColumn';
import SongColumn from '../components/SongColumn';
import Footer from '../components/Footer';

import '../styles/pages/HomePage.css';

const HomePage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [user, setUser] = useState(null);

  // Get the username from session storage
  if (sessionStorage.getItem('username'))
    var username = sessionStorage.getItem('username');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(`/api/playlists`);
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

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
    fetchPlaylists();

  }, []);
  

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="homepage">
      <div className="content-area">
        <div className='left-column'>
          <NavBar user={user} />
          <MyPlaylistColumn playlists={playlists} />
        </div>
        <div className='right-column'>
          <Header user={user} />
          <SongColumn playlists={playlists} isHomePage={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
