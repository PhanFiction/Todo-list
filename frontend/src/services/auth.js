import axios from 'axios';

export const login = async (credentials) => {
  const response = await axios.post(`${process.env.REACT_APP_API}/login`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return response.data;
};

export const signUp = async (credentials) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API}/signup`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch(error) {
    console.log(error);
  }
};

export const logout = async () => {
  const response = await axios.post(`${process.env.REACT_APP_API}/logout`, {}, { withCredentials: true });
  return response.data;
};