import axios from '../api';

export const createNewLabel = (data) => {
  return axios.post('/label/createNewLabel', data);
};

export const getAllLabels = (data) => {
  return axios.post('/label/getAllLabels', data);
};

export const getLabelByNumber = (data) => {
  return axios.post('/label/getLabelByNumber', data);
};

export const updateLabel = (data) => {
  return axios.post('/label/updateLabel', data);
};

export const deleteLabelByNumber = (data) => {
  return axios.post('/label/deleteLabelByNumber', data);
};

// String comment;
// String name;
// Integer number; @NotNull
// String color;