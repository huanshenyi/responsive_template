import Axios, { AxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: AxiosRequestConfig) {
  return config;
}

export const axios = Axios.create({
  baseURL: '',
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    return Promise.reject(error);
  }
);
