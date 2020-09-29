import { SIGNUP_CREATE } from "../actions/types";

const INITIAL_STATE = {
  signupState: null,
  login_jwt: null,
  //   checkout_jwt: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_CREATE:
      return { ...state, signupState: action.payload || false };
    // case LOGIN_TOKEN:
    //   return { ...state, login_jwt: true };
    // case LOGOUT_TOKEN:
    //   return { ...state, login_jwt: false };
    // case CHECKOUT_JWT:
    //   return { ...state };
    default:
      return state;
  }
};
