import { SIGNUP_ERROR } from "../actions/types";
const initial_state = {
  errorMessage: "",
};
export default (state = initial_state, action) => {
  switch (action.type) {
    case SIGNUP_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
