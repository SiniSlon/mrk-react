import axios from '..';

export const getUpload = () => {
  return axios.get('/upload');
};