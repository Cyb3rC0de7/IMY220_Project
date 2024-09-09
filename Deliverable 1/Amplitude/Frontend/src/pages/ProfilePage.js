//u21669849, Qwinton Knocklein
import React from 'react';
import ProfilePreview from '../components/ProfilePreview';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <ProfilePreview
        name="John Doe"
        username="johnd"
        pronouns="he/him"
        bio="Music lover, playlist curator, and road trip enthusiast."
      />
      {/* You can add additional components for followers/following and user activity here */}
    </div>
  );
};

export default ProfilePage;
