import { FETCH_AUTH, LOGOUT_AUTH, SIGNUP_CREATE } from "../actions/types";

// const INITIAL_STATE = {
//   isSignedIn: null,
//   userId: null,
//   userImage: null,
//   userEmail: null,
// };

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return action.payload || false;
    case LOGOUT_AUTH:
      return false;
    case SIGNUP_CREATE:
      return action.payload;
    default:
      return state;
  }
};
