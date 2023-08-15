const API_BASE_URL = 'https://rafiansyahdwis.up.railway.app/api'; // Your base API URL

export const API_ENDPOINTS = {
  videoThumbnails: `${API_BASE_URL}/video-thumbnails`,
  products: videoID => `${API_BASE_URL}/products/${videoID}`,
  comments: videoID => `${API_BASE_URL}/comments/${videoID}`,
  submitComment: `${API_BASE_URL}/submit-comment`,
};