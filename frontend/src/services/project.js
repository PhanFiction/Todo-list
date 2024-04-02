import axios from 'axios';

export const createProject = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/project/create-project`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/project`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log('failed to fetch data ', error);
  }
};

export const getProject = async (projectId) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/project/${projectId}`, { withCredentials: true });
    return response.data; 
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API}/project/delete-project`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        projectId,
      },
      withCredentials: true,
    });
    return response.data; 
  } catch (error) {
    console.log(error);
  }
}