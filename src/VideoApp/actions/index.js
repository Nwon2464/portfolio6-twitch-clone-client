// import faker from "faker";
import _ from "lodash";
// import moment from "react-moment";
// import moment from "moment";
import axios from "axios";
import history from "../history";
import {
  SELECT_VIDEO,
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  SIGN_OUT,
  FETCH_VIDEOS,
  SHOW_MODAL,
  CLOSE_MODAL,
  LOGOUT_AUTH,
  FETCH_AUTH,
  SIGNUP_CREATE,
  SIGNUP_ERROR,
  SIGNUP_ERROR_CLOSE,
  LOADING_SPINNER,
} from "./types";
const BASE_URL = "http://localhost:5000";

export const signUpCreate = (formValues) => (dispatch, getState) => {
  dispatch({ type: LOADING_SPINNER, payload: true });

  axios
    .post(`${BASE_URL}/auth/signup`, {
      ...formValues,
    })
    .then((res) => {
      setTimeout(() => {
        dispatch({
          type: SIGNUP_CREATE,
          payload: res.data,
        });
        dispatch({ type: LOADING_SPINNER, payload: false });
        history.push("/dashboard");
      }, 1500);
    })
    .catch((error) => {
      setTimeout(() => {
        dispatch({ type: LOADING_SPINNER, payload: false });
        dispatch({ type: SIGNUP_ERROR, payload: error.response.data.message });
      }, 1500);
    });

  // history.push("/dashboard");
};

export const signUpErrorClose = () => (dispatch) => {
  dispatch({ type: SIGNUP_ERROR_CLOSE });
};

export const fetchAuth = () => async (dispatch) => {
  const { data } = await axios.get("/auth/current_user");
  // console.log(response);
  dispatch({ type: FETCH_AUTH, payload: data });
};

export const logOutAuth = () => async (dispatch) => {
  const response = await axios.get("/auth/logout");
  // console.log(data);
  dispatch({ type: LOGOUT_AUTH });
  history.push("/");
};

export const showModal = (trueOrFalse) => {
  return {
    type: SHOW_MODAL,
    payload: trueOrFalse,
  };
};

export const closeModal = (trueOrFalse) => {
  return {
    type: CLOSE_MODAL,
    payload: trueOrFalse,
  };
};

export const selectVideo = (streams) => {
  return {
    type: SELECT_VIDEO,
    payload: streams,
  };
};
// selectedVideo, setSelectedVideo
export const signIn = (userProfile) => {
  return {
    type: SIGN_IN,
    payload: userProfile,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// -------------------------------youtube
export const fetchVideos = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/videos`);
  dispatch({ type: FETCH_VIDEOS, payload: response.data });
};
// --------------------

export const createStream = (formValues) => async (dispatch, getState) => {
  // _.set(formValues, "description", formValues.Stream_Description);
  // _.set(formValues, "title", formValues.Stream_Title);
  // _.set(formValues, "channelTitle", formValues.Channel_Title);
  // _.set(formValues, "notes", formValues.Notes);
  // _.set(formValues, "publishTime", moment(new Date()).format("MM-DD-YYYY"));
  // _.set(formValues, "imgUrl", faker.random.image());

  const { userId } = getState().auth;
  const response = await axios.post(`${BASE_URL}/streams`, {
    ...formValues,
    userId,
  });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  // const response = await axios.get(`/streams`);
  // dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  // _.set(formValues, "description", formValues.Stream_Description);
  // _.set(formValues, "title", formValues.Stream_Title);
  // _.set(formValues, "channelTitle", formValues.Channel_Title);
  // _.set(formValues, "Notes", formValues.Notes);
  // _.set(formValues, "publishTime", moment(new Date()).format("MM-DD-YYYY"));

  const response = await axios.patch(`${BASE_URL}/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await axios.delete(`${BASE_URL}/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
