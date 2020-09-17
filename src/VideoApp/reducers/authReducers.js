import { FETCH_AUTH, LOGOUT_AUTH } from "../actions/types";

const INITIAL_STATE = {
  googleAuthIsSignedIn: null,
  jwtToken: null,
  jwtUsername: null,
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        googleAuthIsSignedIn: action.payload || false,
        jwtToken: false,
        jwtUsername: false,
      };
    case LOGOUT_AUTH:
      return { ...state, googleAuthIsSignedIn: false };
    case "JWT_AUTH":
      return {
        ...state,
        googleAuthIsSignedIn: false,
        jwtToken: true,
        jwtUsername: action.payload || false,
      };
    case "JWT_AUTH_LOGOUT":
      return {
        ...state,
        jwtUsername: false,
        jwtToken: false,
      };
    default:
      return state;
  }
};
