import axios from 'axios';

// Create axios instance with custom configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor for adding authorization token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage (only in browser environment)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      
      // If token exists, add it to the request headers
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors like 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      if (typeof window !== 'undefined') {
        // Clear token and redirect to login
        localStorage.removeItem('auth_token');
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;