import axios from '..';

export const loginUser = (data) => {
  return axios.post('/', data);
};

export const getUsers = () => {
  return axios.get('/admin/getAllUsers');
};

export const createUser = (data) => {
  return axios.post('/admin/createUser', data);
};

export const getUserByName = (data) => {
  return axios.post('/admin/getUserByName', data);
};

export const changeUser = (data) => {
  return axios.post('/admin/changeUser', data);
};

export const deleteUser = (data) => {
  return axios.post('/admin/deleteUser', data);
};
