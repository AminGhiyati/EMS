import axios from "axios";

const REST_API_BASE_URL = "";

export const listEmployees = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createEmployee = (employee) => {
  return axios.post(REST_API_BASE_URL, employee);
};

export const getEmployee = (id) => {
  return axios.get(`${REST_API_BASE_URL}/${id}`);
};

export const updateEmployee = (id, employee) => {
  return axios.put(`${REST_API_BASE_URL}/${id}`, employee);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${REST_API_BASE_URL}/${id}`);
};
