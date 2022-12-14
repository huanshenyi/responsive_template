import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from 'config/index';
import { useNotificationStore } from 'stores';
import storage from 'utils/storage';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getToken();
  if (config.headers) {
    if (token) {
      config.headers['X-Token'] = `User ${token}`;
    }
    if (config.method && ['post'].includes(config.method)) {
      config.headers.Accept = 'application/json';
    }
  }
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });

    return Promise.reject(error);
  }
);
