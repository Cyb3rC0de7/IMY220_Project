//u21669849, Qwinton Knocklein
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/ListCommentsColumn.css';

const ListCommentsColumn = ({ user, playlistId, isCreator }) => { 
  const [playlistComments, setPlaylistComments] = useState([]); // Comment list state
  const [addComment, setAddComment] = useState(false); // State to toggle between adding and removing comments
  const [isRemoveMode, setIsRemoveMode] = useState(false); // To toggle between Add and Remove modes

  // Fetch comments for the playlist based on playlistId
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/playlists/${playlistId}/comments`);
        const data = await response.json();
        setPlaylistComments(data.reverse()); // Update state with fetched comments
      } catch (error) {
        console.error('Error fetching playlist comments:', error);
      }
    };

    if (playlistId) {
      fetchComments(); // Fetch comments when playlistId changes
    }
  }, [addComment, playlistId]);

  const removeComment = async (comment) => {
    try {
      const response = await fetch(`/api/comments/${comment._id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Fetch the updated list of playlist comments after removing the comment
        const updatedResponse = await fetch(`/api/playlists/${playlistId}/comments`);
        const updatedComments = await updatedResponse.json();
        setPlaylistComments(updatedComments.reverse());
      } else {
        console.error('Error removing comment from playlist');
      }
    } catch (error) {
      console.error('Error removing comment from playlist:', error);
    }

    setIsRemoveMode(false); // Exit Remove mode after removing a comment
  };

  // Function to toggle between Add and Remove modes
  const toggleAddComment = () => setAddComment(!addComment);

  const toggleRemoveMode = () => setIsRemoveMode(!isRemoveMode);

  return (
    <div className="list-comments">
      <div className="commentsList-header">
        <h2 className="commentsList-title">Comments</h2>
          <div className="commentsList-btn">
              <NavLink to={`/playlist/${playlistId}/addComment`}>
                <button type="button" onClick={toggleAddComment}>
                  {addComment ? 'Cancel Add' : '+ Add Comment'}
                </button>
              </NavLink>
              {user?.isAdmin ? (
                <button type="button" onClick={toggleRemoveMode}>
                {isRemoveMode ? 'Cancel Remove' : 'Remove Comment'}
                </button>) : null
              }
          </div>
      </div>
      <div>
        {playlistComments.length === 0 ? <h4>No comments for this playlist</h4> : <h4>Total comments: {playlistComments.length}</h4>}
      </div>
      {playlistComments.map((comment, index) => (
        <div 
        key={comment._id} 
        className={`comment-item ${index % 2 === 0 ? 'dark' : 'darker'}`}
        onClick={() => {
          if (isRemoveMode) {
            removeComment(comment);
          }
        }}
        >
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
