import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { API_BASE_URL } from '../config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const userId = localStorage.getItem('userId');
  if (userId && config.headers) {
    config.headers.Authorization = `Bearer ${userId}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('userId');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

