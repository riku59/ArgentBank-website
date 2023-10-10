import { TOKEN_LOGIN } from "../actions/auth.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case TOKEN_LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
