const API_BASE_URL = 'http://127.0.0.1:3001/api'; // Your base API URL

export const API_ENDPOINTS = {
  videoThumbnails: `${API_BASE_URL}/video-thumbnails`,
  products: videoID => `${API_BASE_URL}/products/${videoID}`,
  comments: videoID => `${API_BASE_URL}/comments/${videoID}`,
  submitComment: `${API_BASE_URL}/submit-comment`,
};