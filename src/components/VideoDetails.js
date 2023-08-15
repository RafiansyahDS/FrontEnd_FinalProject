import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { API_ENDPOINTS } from './ApiConfig';
import '../css/VideoDetails.css';

function VideoDetail() {
  const { videoID } = useParams();
  const [comments, setComments] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINTS.comments(videoID))
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));

    fetch(API_ENDPOINTS.products(videoID))
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [videoID]);

  const submitComment = async (username, comment) => {
    try {
      const response = await fetch(API_ENDPOINTS.submitComment, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          comment,
          videoID,
        }),
      });

      if (response.ok) {        
        fetch(API_ENDPOINTS.comments(videoID))
          .then(response => response.json())
          .then(data => setComments(data))   
          .then(() => {
            const commentList = document.querySelector('.comment-list');
            if (commentList) {
              commentList.scrollTop = commentList.scrollHeight;
            }
          })     
          .catch(error => console.error('Error fetching comments:', error));
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const updateComments = () => {
    fetch(API_ENDPOINTS.comments(videoID))
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  };

  return (
    <div>
    <div className="heading">      
      <h1><Link to="/" className="back-button">{'←'}</Link>Video Detail</h1>
    </div>
    <div className="main-content">
      <div className="product-list">
        <h3>Products</h3>
        {products.map(product => (
          <div key={product.id} className="product-item" 
          onClick={() => window.open(product.link, '_blank')}>
            <h3>{product.title}</h3>
            <p>Harga: Rp.{product.price}</p>            
          </div>
        ))}
      </div>
      <div className="video-container">
        <iframe
          title="Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoID}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="comment-section">
      <h3>Comments</h3>
        <CommentList comments={comments} />
        <CommentForm videoID={videoID} onSubmit={submitComment} updateComments={updateComments} />
      </div>
    </div>
  </div>
  );
}

export default VideoDetail;
