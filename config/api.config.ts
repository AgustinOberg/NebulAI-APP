import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { router } from 'expo-router';

import { ERRORS } from '@/constants/errors.constants';
import { useUserStore } from '@/data/state/user.store';

import { env } from './env';

const setLogInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((request) => {
    console.log(
      `\x1b[32m[API] ${request.method?.toUpperCase()} ${request.url}\x1b[0m`,
    );
    return request;
  });
};

export const publicApi = axios.create({
  baseURL: env.EXPO_PUBLIC_BACKEND_URL,
});
export const privateApi = axios.create({
  baseURL: env.EXPO_PUBLIC_BACKEND_URL,
});

const setAuthorizationInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (request) => {
    const isAuthorized = useUserStore.getState().isAuthenticated;
    if (isAuthorized) {
      const token = useUserStore.getState().token;
      request.headers.Authorization = `Bearer ${token}`;
      return request;
    }
    return request;
  });
};

const setUnauthorizedInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === ERRORS.UNAUTHORIZED) {
        useUserStore.getState().logout();
        router.replace('/(auth)');
      }
      return Promise.reject(error);
    },
  );
};

export default privateApi;
setAuthorizationInterceptors(privateApi);
setUnauthorizedInterceptor(privateApi);
setLogInterceptor(privateApi);
setLogInterceptor(publicApi);
