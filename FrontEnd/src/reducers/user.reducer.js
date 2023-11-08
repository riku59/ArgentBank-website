import { TOKEN_LOGIN } from "../actions/auth.action";
import {
  EDIT_USER_NAME,
  FIRST_NAME,
  LAST_NAME,
  LOGOUT,
  USER_NAME,
} from "../actions/profile.action";

// const token = localStorage.getItem("token");
// // const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);
let initialState;

// if (token && user) {
//   initialState = {
//     token: token,
//     firstName: user.firstName,
//     lastName: user.lastName,
//     userName: user.userName,
//   };
// } else {
initialState = {
  token: null,
  firstName: null,
  lastName: null,
  userName: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case LOGOUT:
      return {
        ...state, // tout mettre a nul, surtout le token pour que logout deviens bien login
        firstName: null,
        lastName: null,
        userName: null,
        token: null,
      };
    case EDIT_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
