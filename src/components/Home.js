import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from './ApiConfig';
import '../css/Home.css';

function Home() {
  const [videoThumbnails, setVideoThumbnails] = useState([]);

  useEffect(() => {
    fetch(API_ENDPOINTS.videoThumbnails)
      .then(response => response.json())
      .then(data => setVideoThumbnails(data))
      .catch(error => console.error('Error fetching video thumbnails:', error));
  }, []);

  return (
    <div>
      <div className="site-header">
        <h1>TOKOPEDIA PLAY CLONE</h1>
        <h3>BY RAFIANSYAH DWI SADYAWINATA</h3>
      </div>
      <div className="image-list">
        {videoThumbnails.map(video => (
          <div key={video.videoID} className="image-item">
            <Link to={`/video/${video.videoID}`}>
              <img src={video.thumbnailUrl} alt={`Thumbnail for video ${video.videoID}`} className="image" />
            </Link>            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
