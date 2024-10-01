//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AddCommentPage from '../pages/AddCommentPage';

import '../styles/components/ListCommentsColumn.css';

const ListCommentsColumn = ({ comments }) => {
  const [playlistComments, setPlaylistComments] = useState(comments); // Comment list state
  const [showAddCommentPage, setShowAddCommentPage] = useState(false); // Toggle comment form visibility

  const addComment = (newComment) => { // Add comment to playlist
    setPlaylistComments([...playlistComments, newComment]); // Add new comment to playlist
    toggleShowCommentPage(); // Hide comment form after adding comment
  };

  const toggleShowCommentPage = () => setShowAddCommentPage(!showAddCommentPage); // Toggle comment form visibility

  return (
    <div className="list-comments">
      <div className="commentsList-header">
        <h2 className="commentsList-title">Comments</h2>
          <button type="button" >+ Add Comment</button>
        {/*<NavLink to="/addNewComment" className="nav-link">
        </NavLink>*/}
      </div>
      
      {playlistComments.map((comment, index) => (
        <div key={comment.id} className={`comment-item ${index % 2 === 0 ? 'dark' : 'darker'}`}>
          <div className="comment-info">
              <h3>{comment.user}</h3>
              <p>{comment.text}</p>
              <p>{comment.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCommentsColumn;
