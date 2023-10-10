const axios = require('axios');

export const createTask = (data) => {
  const response = axios.post(`${process.env.REACT_APP_API}/task/create-task`, data, { withCredentials: true });
  return response.data;
};

export const getAllTask = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API}/task`, { withCredentials: true });
  return response.data;
};

export const getTask = async (taskId) => {
  const response = await axios.get(`${process.env.REACT_APP_API}/task/${taskId}`, { withCredentials: true });
  return response.data;
};

export const updateTask = async (taskId, data) => {
  const response = await axios.put(`${process.env.REACT_APP_API}/task/${taskId}`, data, { withCredentials: true });
  return response.data;
}

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${process.env.REACT_APP_API}/task/${taskId}`);
  return response.data;
}
