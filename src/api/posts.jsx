import axios from '../api';

export const getPosts = (data) => {
  return axios.post('/ssn/getSsnCountByFilter', data);
};

export const getPostsByID = (data) => {
    return axios.post('/ssn/getResultsByProcessId', data);
};
