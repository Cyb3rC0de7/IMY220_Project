//u21669849, Qwinton Knocklein
import React, { useState } from 'react';
import '../styles/components/AddComment.css';

const AddCommentComponent = () => {
  const [commentText, setCommentText] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    // Handle adding the comment
    console.log('New comment:', commentText);
    setCommentText(''); // Clear the input field after submission
  };

  return (
    <div className="add-comment">
      <h3>Add a Comment</h3>
      <form onSubmit={handleAddComment}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add your comment"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCommentComponent;
