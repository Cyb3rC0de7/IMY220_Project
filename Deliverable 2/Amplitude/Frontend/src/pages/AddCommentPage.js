//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/AddCommentPage.css';

const AddCommentPage = ({ addComment }) => {
    const [comment, setComment] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addComment({ text: comment, date: new Date().toLocaleString() });
        setComment('');
    };
    
    return (
        <div className="add-comment-container">
        <h1>Add Comment</h1>
        <form onSubmit={handleSubmit}>
            <textarea
            placeholder="Type your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
            <NavLink to="/playlist/1" className="nav-link">
                <button type="submit">Submit</button>
                <button type="button">Cancel</button>
            </NavLink>
        </form>
        </div>
    );
};

export default AddCommentPage;