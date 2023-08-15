import React, { useState } from 'react';

function CommentForm({ videoID, onSubmit }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="comment-form">      
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            await onSubmit(name, comment);
            setName('');
            setComment('');
          } catch (error) {
            console.error('Error submitting comment:', error);
          }
        }}
      >
        <input
          type="text"
          className="nameinput"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Comment"
          className='commentinput'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit" className='btn-form'>Submit Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
