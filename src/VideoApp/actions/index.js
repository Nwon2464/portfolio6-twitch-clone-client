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
  LOGIN_TOKEN,
  LOGIN_ERROR,
  CHECKOUT_JWT,
} from "./types";
const BASE_URL = "http://localhost:5000";
const DEPLOYMENT_URL = "https://backend-express-video-app.vercel.app";
export const fetchActiveLiveGameContents = () => async (dispatch) => {
  const responseAll = await axios.get(
    // "/api/v1/twitch/streams/contents"

    `${DEPLOYMENT_URL}/api/v1/twitch/streams/contents`
  );
  let dataFallGuy = responseAll.data.frontPage.fallGuy;
  dataFallGuy.map((game) => {
    let newUrl = game.thumbnail_url
      .replace("{width}", "440")
      .replace("{height}", "248");
    game.thumbnail_url = newUrl;
  });
  dispatch({ type: "ACTION_FALLGUY", payload: dataFallGuy });

  let dataJustChat = responseAll.data.frontPage.justChat;
  dataJustChat.map((game) => {
    let newUrl = game.thumbnail_url
      .replace("{width}", "440")
      .replace("{height}", "248");
    game.thumbnail_url = newUrl;
  });
  dispatch({ type: "ACTION_JUSTCHAT", payload: dataJustChat });

  let dataFortNite = responseAll.data.frontPage.fortNite;
  dataFortNite.map((game) => {
    let newUrl = game.thumbnail_url
      .replace("{width}", "440")
      .replace("{height}", "248");
    game.thumbnail_url = newUrl;
  });
  dispatch({ type: "ACTION_FORTNITE", payload: dataFortNite });

  let dataMineCraft = responseAll.data.frontPage.mineCraft;
  dataMineCraft.map((game) => {
    let newUrl = game.thumbnail_url
      .replace("{width}", "440")
      .replace("{height}", "248");
    game.thumbnail_url = newUrl;
  });
  dispatch({ type: "ACTION_MINECRAFT", payload: dataMineCraft });
};

export const fetchActiveLiveTwitch = () => async (dispatch) => {
  const responseAll = await axios.get(
    `${DEPLOYMENT_URL}/api/v1/twitch/streams`
    // "/api/v1/twitch/streams"
  );

  let dataStreams = responseAll.data.frontPage.allStreams;
  dataStreams.map((game) => {
    let newUrl = game.thumbnail_url
      .replace("{width}", "440")
      .replace("{height}", "248");
    game.thumbnail_url = newUrl;
  });
  dispatch({ type: "ACTION_LIVE_STREAMS", payload: dataStreams });

  let dataTopGames = responseAll.data.frontPage.topGames;
  dataTopGames.map((game) => {
    let newUrl = game.box_art_url

      .replace("{width}", "188")
      .replace("{height}", "250");
    game.box_art_url = newUrl;
  });
  dispatch({ type: "ACTION_TOP_GAMES", payload: dataTopGames });
};

export const logIn = (formValues) => (dispatch, getState) => {
  dispatch({ type: LOADING_SPINNER, payload: true });
  axios
    .post(`${DEPLOYMENT_URL}/auth/login`, {
      ...formValues,
    })
    .then((res) => {
      localStorage.token = res.data.token;
      const username = res.data.user.username;
      setTimeout(() => {
        dispatch({ type: "JWT_AUTH", payload: username });
        dispatch({ type: LOADING_SPINNER, payload: false });
        history.push("/");
        // history.go(0);
      }, 1500);
    })
    .catch((error) => {
      setTimeout(() => {
        dispatch({ type: LOADING_SPINNER, payload: false });
        dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
      }, 2000);
    });
};
export const signUpCreate = (formValues) => (dispatch, getState) => {
  dispatch({ type: LOADING_SPINNER, payload: true });
  axios
    .post(`${DEPLOYMENT_URL}/auth/signup`, {
      ...formValues,
    })
    .then((res) => {
      localStorage.token = res.data.token;
      const username = res.data.user.username;
      setTimeout(() => {
        dispatch({ type: "JWT_AUTH", payload: username });
        dispatch({ type: LOADING_SPINNER, payload: false });
        history.push("/");
      }, 2000);
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
  if (localStorage.token) {
    const response = await axios.get(`${DEPLOYMENT_URL}`, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    });
    dispatch({ type: "JWT_AUTH", payload: response.data.user.username });
  } else {
    const { data } = await axios.get(`${DEPLOYMENT_URL}/auth/current_user`);
    dispatch({ type: FETCH_AUTH, payload: data });
  }
};
export const jwtlogOut = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "JWT_AUTH_LOGOUT" });
  history.push("/");

  // history.go(0);
};

export const logOutAuth = () => async (dispatch) => {
  const response = await axios.get(`${DEPLOYMENT_URL}/auth/logout`);

  dispatch({ type: LOGOUT_AUTH });
  history.push("/");
  // history.go(0);
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
