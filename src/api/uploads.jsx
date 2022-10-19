import axios from '../api';

export const getUpload = ()=> {
  return axios.get('/upload');
};