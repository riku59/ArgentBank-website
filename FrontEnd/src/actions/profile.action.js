import axios from "axios";
import { setToken } from "./auth.action";

export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";
export const USER_NAME = "USER_NAME";
export const EDIT_USER_NAME = "EDIT_USER_NAME";
export const LOGOUT = "LOGOUT";

export const setFirstName = (firstName) => {
  return {
    type: FIRST_NAME,
    payload: firstName,
  };
};
export const setLastName = (lastName) => {
  return {
    type: LAST_NAME,
    payload: lastName,
  };
};
export const setUserName = (userName) => {
  return {
    type: USER_NAME,
    payload: userName,
  };
};
export const setEditUserName = (userName) => {
  return {
    type: EDIT_USER_NAME,
    payload: userName,
  };
};

export const getUserProfile = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    return response.data.body; // Retourne les données de profil de l'utilisateur
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
  }
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const editProfile = (userName, token) => {
  return async (dispatch) => {
    console.log({ userName });
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      dispatch(setEditUserName(userName));

      return response.data; // Retourne les données de profil de l'utilisateur
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }
    }
  };
};

export const loadProfile = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setUserName(response.data.body.userName));
      dispatch(setLastName(response.data.body.lastName));
      dispatch(setFirstName(response.data.body.firstName));
      dispatch(setToken(token));
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }
    }
  };
};
