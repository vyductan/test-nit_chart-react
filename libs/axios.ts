import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create();
// https://github.com/axios/axios/issues/757
instance.interceptors.request.use((config) => {
  if (config.url && config.url[0] !== '/') {
    config.url += '/';
  }
  return config;
});

// const request = {
//   get: <T,>(url: string, config?: AxiosRequestConfig<T>) =>
//     instance.get<API.DefaultResponse<T>>(url, config),
//   post: <T = any, D = any>(
//     url: string,
//     data?: D,
//     config?: AxiosRequestConfig<T>
//   ) => instance.post<API.DefaultResponse<T>>(url, data, config),
// };

// utility
// const isNetworkError = (error: any) => {
//   return !!error.isAxiosError && !error.response;
// };
const request = instance;
export default request;
