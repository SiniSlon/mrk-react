import axios, { AxiosRequestHeaders } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8083',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token');
  // if (token) {
    // console.log(token);
    // console.log('request cookie >> ', document.cookie);
    
    // config.headers = {
      // ...config.headers,
      // JSESSIONID: `29A51CA8E35AA63781BA0F1026080943`,
      // authorization: `Berear ${token}`,
    // };
  // }


  // console.log(headers)
  console.log('request config >> ', config)
  // console.log('Interceptors request >> ', axiosInstance.interceptors.request)
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  // if (response.data.accessToken) {
  //   console.log('RESPONSE TOKEN >>> ', response.data.accessToken);

  //   localStorage.setItem('token', response.data.accessToken);
  // }
  // console.log('response cookie >> ', document.cookie);

  console.log('Interceptors response >> ', response)
  return response;
});

export default axiosInstance;