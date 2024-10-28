//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import '../styles/components/Header.css';
import placeholder from '../images/placeholder.png';

const Header = () => {
  const [user, setUser] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input
  const [searchResults, setSearchResults] = useState({ playlists: [], songs: [], friends: [] }); // State to store search results
  const navigate = useNavigate();

  // Get the username from session storage
  const username = sessionStorage.getItem('username');

  // Fetch user data
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

    if (username) {
      fetchUser();
    }
  }, [username]);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('username');
    navigate('/');
  };

  // Handle search query input
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === '') {
      setSearchResults({ playlists: [], songs: [], friends: [] });
    }
  };

  // Handle search action when user types
  useEffect(() => {
    if (searchQuery) {
      const performSearch = async () => {
        try {
          const response = await fetch(`/api/search?q=${searchQuery}`);
          const data = await response.json();
          setSearchResults(data); // Update search results
        } catch (error) {
          console.error('Error performing search:', error);
        }
      };
      performSearch();
    }
  }, [searchQuery]);

  return (
    <header className="header-container">
      <div className="header-content">
        <input 
          type="text" 
          placeholder="Search for playlists, songs, friends..." 
          className="search-bar" 
          value={searchQuery} 
          onChange={handleSearchInput} 
        />
        {searchQuery && (
          <div className="search-results-dropdown">
            <h4>Playlists</h4>
            {searchResults.playlists.length === 0 ? (
              <p>No playlists found</p>
            ) : (
              searchResults.playlists.map((playlist) => (
                <NavLink key={playlist._id} to={`/playlist/${playlist._id}`} className="search-result-item">
                  {playlist.name}
                </NavLink>
              ))
            )}
            <h4>Songs</h4>
            {searchResults.songs.length === 0 ? (
              <p>No songs found</p>
            ) : (
              searchResults.songs.map((song) => (
                <NavLink key={song._id} to={`/song/${song._id}`} className="search-result-item">
                  {song.title}
                </NavLink>
              ))
            )}
            <h4>Friends</h4>
            {searchResults.friends.length === 0 ? (
              <p>No friends found</p>
            ) : (
              searchResults.friends.map((friend) => (
                <NavLink key={friend._id} to={`/profile/${friend.username}`} className="search-result-item">
                  {friend.name} ({friend.username})
                </NavLink>
              ))
            )}
          </div>
        )}

        <div className="header-right">
          <img src={placeholder} alt="Notifications" className="icon" />
          <div className="profile-container">
            <img 
              src={user.profileImage} 
              alt="User Profile" 
              className="user-profile" 
              onClick={toggleDropdown} 
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink to={`/profile/${user.username}`} className="dropdown-item">
                  View Profile
                </NavLink>
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
