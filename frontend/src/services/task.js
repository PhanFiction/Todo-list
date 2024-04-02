import axios from 'axios';

export const createTask = async (data) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/task/create-task`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

export const getAllTask = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/task`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log('failed to fetch tasks ', error);
  }
};

export const getTask = async (taskId) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/task/${taskId}`, {
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

export const updateTask = async (taskId, data) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_API}/task/${taskId}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
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

export const getWeeklyTask = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/task/weekly-task`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log('failed to fetch weekly task');
  }
}

export const getDailyTask = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API}/task/daily-task`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log('failed to fetch day task');
  }
}