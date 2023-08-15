import React, { useState, useEffect } from 'react';

function CommentList({ comments }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`comment-list ${isMobile ? 'mobile' : 'desktop'}`}>      
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p>{comment.username}: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;