import type { AxiosInstance } from 'axios';
import axios from 'axios';

const setLogInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((request) => {
    console.log(
      `\x1b[32m[API] ${request.method?.toUpperCase()} ${request.url}\x1b[0m`,
    );
    return request;
  });
};

export const publicApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});
export const privateApi = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// const setAuthorizationInterceptors = (axiosInstance: AxiosInstance) => {
//   axiosInstance.interceptors.request.use(async (request) => {
//     const isAuthorized = useAuthStore.getState().isAuthenticated;
//     if (isAuthorized) {
//       const token = useAuthStore.getState().token;
//       request.headers.Authorization = `Bearer ${token}`;
//       return request;
//     }

//     return request;
//   });
// };

export default privateApi;
//setAuthorizationInterceptors(privateApi);
setLogInterceptor(privateApi);
setLogInterceptor(publicApi);
