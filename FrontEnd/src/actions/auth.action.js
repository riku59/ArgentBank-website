import axios from "axios";

export const TOKEN_LOGIN = "TOKEN_LOGIN";

export const setToken = (token) => {
  return {
    type: TOKEN_LOGIN,
    payload: token,
  };
};

export const signIn = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      id
    );

    return response.data.body; // token
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
  }
};
