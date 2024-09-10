//u21669849, Qwinton Knocklein
import React from 'react';
//import '../styles/LibraryPage.css';

const LibraryPage = () => {
  const playlists = [
    { id: 1, name: 'My Favorites', creator: 'Me', tags: ['favorites', 'all-time'] },
    { id: 2, name: 'Road Trip', creator: 'Me', tags: ['road', 'trip'] },
  ];

  return (
    <div className="library-container">
      <h1>My Library</h1>
      <div className="playlist-list">
        {playlists.map((playlist) => (
          <PlaylistPreview
            key={playlist.id}
            name={playlist.name}
            tags={playlist.tags}
            creator={playlist.creator}
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
