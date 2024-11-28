import axios, { AxiosRequestConfig, AxiosError, AxiosInstance } from 'axios';

const isServer = typeof window === 'undefined';

// Create an Axios instance with default configuration
const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1', // Your API base URL
  withCredentials: true, // Ensure cookies are sent with requests
});

// Request interceptor: Attach the access token to headers
api.interceptors.request.use(
  async (config: any) => {
    let accessToken;
    if (isServer) {
      const { cookies } = await import('next/headers');
      accessToken = cookies().get('accessToken')?.value;
    }
    if (accessToken) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `${accessToken}`; // Make sure to include "Bearer"
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

export default api;
