//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import '../styles/pages/AddCommentPage.css';

const AddCommentPage = () => {
    const { playlistId } = useParams();
    const [text, setComment] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [user, setUser] = useState(sessionStorage.getItem('username'));
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const comment = {
            playlistId,
            user,
            text,
            date,
        };
    
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment),
            });

            if (response.ok) {
                navigate(`/playlist/${playlistId}`);
            } else {
                const data = await response.json();
                setError(data.message || 'Failed to add the comment');
            }
        } catch (error) {
            setError('An error occurred while adding the comment');
        }

    };
    
    
    return (
        <div className="add-comment-container">
        <h1>Add Comment</h1>
        <form onSubmit={handleSubmit}>
            <textarea
            placeholder="Type your comment here..."
            value={text}
            onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        <NavLink to={`/playlist/${playlistId}`}>Back to Playlist</NavLink>
        {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default AddCommentPage;