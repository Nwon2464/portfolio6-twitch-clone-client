import { SIGNUP_CREATE, LOGIN } from "../actions/types";

const INITIAL_STATE = {
  signupState: "",
  loginState: "",
};
export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case SIGNUP_CREATE:
      return { ...state, signupState: action.payload };
    // case LOGIN:
    //   return { ...state, loginState: action.payload };
    default:
      return state;
  }
};
