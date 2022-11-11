import axios from '..';

export const getPosts = (data) => {
  return axios.post('/ssn/getSsnCountByFilter', data);
};

