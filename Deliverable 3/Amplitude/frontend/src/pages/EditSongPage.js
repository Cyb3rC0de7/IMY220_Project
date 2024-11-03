//u21669849, Qwinton Knocklein

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../styles/pages/EditSongPage.css';

const EditSongPage = () => {
    const { songId } = useParams();
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [genericTags, setGenericTags] = useState([]);
    const navigate = useNavigate();
    
    // Fetch the song details
    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await fetch(`/api/songs/${songId}`);
                const data = await response.json();
                setTitle(data.title);
                setArtist(data.artist);
                setGenre(data.genre);
                setDuration(data.duration);
                setThumbnail(data.thumbnail);
            } catch (error) {
                console.error('Error fetching song:', error);
            }
        };

        const fetchGenericTags = async () => {
            try {
                const response = await fetch('/api/tags');
                const data = await response.json();
                setGenericTags(data);
            } catch (error) {
                console.error('Error fetching tags:', error);
            }
        };
        
        fetchGenericTags();
        fetchSong();
    }, [songId]);
    
    // Update the song details
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        const response = await fetch(`/api/songs/${songId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            title,
            artist,
            genre,
            duration,
            date,
            thumbnail,
            }),
        });
    
        if (response.ok) {
            navigate(`/song/${songId}`); // Redirect to the song page after update
        } else {
            console.error('Error updating song');
        }
        } catch (error) {
        console.error('Error updating song:', error);
        }
    };

    return (
        <div className="edit-song-container">
            <h1>Edit Song</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Song Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} required />
                <select placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                    {genericTags.map((tag, index) => (
                        <option key={index} value={tag.genre}>{tag.genre}</option>
                    ))}
                </select>
                <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                <input type="text" placeholder="Thumbnail URL" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} required />
                
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditSongPage;