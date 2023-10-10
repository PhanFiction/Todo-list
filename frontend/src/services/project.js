import axios from 'axios';

export const createProject = async (data) => {
  const response = await axios.post(`${process.env.REACT_APP_API}/project/create-project`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return response.data;
};

export const getAllProjects = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API}/project`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return response.data;
};

export const getProject = async (projectId) => {
  const response = await axios.get(`${process.env.REACT_APP_API}/project/${projectId}`, { withCredentials: true });
  return response.data;
};