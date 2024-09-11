// frontend/src/pages/EditProfilePage.js
import React, { useState } from 'react';
import '../styles/EditProfilePage.css';

const EditProfilePage = () => {
  const [username, setUsername] = useState('johndoe');
  const [name, setName] = useState('John Doe');
  const [pronouns, setPronouns] = useState('he/him');
  const [bio, setBio] = useState('Music enthusiast, playlist curator, and lover of all things chill.');
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', { username, name, pronouns, bio, profileImage });
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="profile-image-section">
          <label htmlFor="profileImage">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-image" />
            ) : (
              <div className="placeholder">Upload Profile Image</div>
            )}
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
