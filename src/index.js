import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./VideoApp/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./VideoApp/reducers";
import reduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const rootElement = document.getElementById("root");


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
