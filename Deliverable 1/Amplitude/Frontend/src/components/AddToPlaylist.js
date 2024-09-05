//u21669849, Qwinton Knocklein
import React from 'react';

const AddToPlaylist = ({ playlists, song }) => { // A button that will show a list of playlists that the user can add the song to
    return (
        <div className = "add-to-playlist">
        <button>Add to Playlist</button>
        <ul>
            {playlists.map((playlist) => (
            <li key = {playlist.id}>
                {playlist.name}
            </li>
            ))}
        </ul>
    </div>
  );
};

export default AddToPlaylist;
