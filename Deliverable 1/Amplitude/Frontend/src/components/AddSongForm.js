//u21669849, Qwinton Knocklein
import React, { useState } from 'react';

const AddSongForm = ({ addSong }) => { // A form that allows the user to add a song to the playlist
    const [title, setTitle] = useState(''); // The title and artist of the song are stored in state
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing when the form is submitted
        addSong({ title, artist }); // When the form is submitted, the song is added to the playlist
        setTitle(''); // The input fields are cleared
        setArtist('');
    };

    return ( // The form is rendered with input fields for the title and artist of the song
        <form onSubmit = {handleSubmit}>
        <input
            type = "text"
            placeholder = "Song Title"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            required
        />
        <input
            type = "text"
            placeholder = "Artist"
            value = {artist}
            onChange = {(e) => setArtist(e.target.value)}
            required
        />
        <button type="submit">Add Song</button>
        </form>
    );
};

export default AddSongForm;
