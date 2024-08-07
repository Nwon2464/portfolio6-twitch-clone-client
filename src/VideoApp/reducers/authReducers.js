import { FETCH_AUTH, LOGOUT_AUTH } from "../actions/types";

const INITIAL_STATE = {
  googleAuthIsSignedIn: null,
  jwtToken: null,
  jwtUsername: null,
  // verifyToken:null,
  // verifyJwtUserName:null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        googleAuthIsSignedIn: action.payload || false,
        jwtToken: false,
        jwtUsername: false,
        // verifyToken:false,
        // verifyJwtUserName:false,
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
        // verifyToken:false,
        // verifyJwtUserName:false,
      };
    // case VERIFY_JWT:
    //   console.log(action.payload, "PAYLOAD");
    //   return {
    //     ...state,
    //     googleAuthIsSignedIn: false,
    //     jwtToken: false,
    //     jwtUsername: false,
    //     verifyToken: action.payload!=null || false ,
    //     verifyJwtUserName:action.payload || false,
    //   };
    default:
      return state;
  }
};
