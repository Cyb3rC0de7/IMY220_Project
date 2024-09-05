//u21669849, Qwinton Knocklein
import React, { useState } from 'react';

const AddSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong({ title, artist });
        setTitle('');
        setArtist('');
    };

    return (
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
