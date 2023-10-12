import axios from 'axios';

export const createTask = async (data) => {
  const response = await axios.post(`${process.env.REACT_APP_API}/task/create-task`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return response.data;
};

export const getAllTask = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API}/task`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return response.data;
};

export const getTask = async (taskId) => {
  const response = await axios.get(`${process.env.REACT_APP_API}/task/${taskId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return response.data;
};

export const updateTask = async (taskId, data) => {
  const response = await axios.put(`${process.env.REACT_APP_API}/task/${taskId}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return response.data;
}

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${process.env.REACT_APP_API}/task/${taskId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      taskId,
    },
    withCredentials: true,
  });
  return response.data;
}
