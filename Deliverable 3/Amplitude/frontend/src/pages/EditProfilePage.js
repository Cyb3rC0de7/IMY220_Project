//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/pages/EditProfilePage.css';

const EditProfilePage = () => {
  const { username } = useParams();
  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/users/${username}`);
        const data = await response.json();
        setName(data.name);
        setPronouns(data.pronouns);
        setBio(data.bio);
        setProfileImage(data.profileImage);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProfile = {
      name,
      pronouns,
      bio,
      profileImage,
    };

    try {
      const response = await fetch(`/api/users/${username}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        navigate(`/profile/${username}`);
      } else {
        console.error('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Function to delete the user account
  const deleteAccount = async (e) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this playlist?');

    if (confirmDelete) {
      try {
        const response = await fetch(`/api/users/${username}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          sessionStorage.clear();
          navigate('/');
        } else {
          console.error('Error deleting profile');
        }
      } catch (error) {
        console.error('Error deleting profile:', error);
      }
    }
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Pronouns"
          value={pronouns}
          onChange={(e) => setPronouns(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <textarea
          placeholder="Profile Image URL"
          value={profileImage}
          onChange={(e) => setProfileImage(e.target.value)}
        />
        
        <div className="edit-profile-btn">
          <button type="button" onClick={() => navigate(`/profile/${username}`)}>Cancel</button>
          <button type="button" onClick={deleteAccount}>Delete Account</button>
          <button type="submit">Save Changes</button>
        </div>

      </form>
    </div>
  );
};

export default EditProfilePage;
