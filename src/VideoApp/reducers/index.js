import { combineReducers } from "redux";
import authReducers from "./authReducers";
import { reducer as formReducers } from "redux-form";
import streamReducers from "./streamReducers";
import videoReducers from "./videoReducers";
import selectReducers from "./selectReducers";
import modalReducers from "./modalReducers";
import errorReducers from "./errorReducers";
import carouselReducers from "./carouselReducers";
import loadingReducers from "./loadingReducers";

import signupLoginReducers from "./signupLoginReducers";
export default combineReducers({
  // carousel: carouselReducers,
  error: errorReducers,
  auth: authReducers,
  form: formReducers,
  streams: streamReducers,
  videos: videoReducers,
  selectedVideo: selectReducers,
  modal: modalReducers,
  loading: loadingReducers,
  join: signupLoginReducers,
});
