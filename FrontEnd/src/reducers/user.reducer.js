import { TOKEN_LOGIN } from "../actions/auth.action";
import { DATA_USER, EDIT_USER_NAME, LOGOUT } from "../actions/profile.action";

let initialState;

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
    case DATA_USER:
      const { lastName, firstName, userName } = action.payload;
      return {
        ...state,
        lastName,
        firstName,
        userName,
      };

    case LOGOUT:
      return {
        ...initialState, // tout mettre a nul, surtout le token pour que logout deviens bien login
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
