import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import VideoDetail from './components/VideoDetails.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoID" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
