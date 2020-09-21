import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchVideos, fetchStreams, fetchAuth } from "./actions";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import BodyRight from "./Body/BodyRight";
import BodyLeft from "./Body/BodyLeft";
import Modal from "./Modal";
import youtube from "./apis/youtube";
import history from "./history";
import StreamsCreate from "./components/Streams/StreamsCreate";
import StreamsDelete from "./components/Streams/StreamsDelete";
import StreamsEdit from "./components/Streams/StreamsEdit";
import StreamsShow from "./components/Streams/StreamsShow";
import GoogleAuth from "./Header";
import Dashboard from "./Dashboard";
import Search from "./components/Search/Search";
import CategoryGamesId from "./Body/BodyPage/CategoryGamesId";
import Skeleton from "react-loading-skeleton";
import { showModal } from "./actions";
import Id from "./Body/BodyPage/Id";
const KEY = "AIzaSyAR4iYaiGT4oNWSkga37lDBzxqJLp0Rg70";
const clientId =
  "979708510452-oa44268dodlk7at65bponsb27c0utgn2.apps.googleusercontent.com";
const App = (props) => {
  //fetching videos from redux
  useEffect(() => {
    props.fetchStreams();
  }, []);
  useEffect(() => {
    props.fetchAuth();
    // props.fetchJWT();
  }, []);

  // const [streams, setStreams] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  //Youtube API
  // const onSubmitForm = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       part: "snippet",
  //       type: "video",
  //       maxResults: 20,
  //       key: KEY,
  //       q: term,f
  //     },
  //   });
  //   setVideos(response.data.items);
  // };
  // useEffect(() => {
  //   onSubmitForm("sky");
  // }, []);

  //Json API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3001/videos");
  //     setVideos(response.data);
  //   };
  //   fetchData();
  // }, []);

  // const onVideoSelect = (streams) => {
  //   console.log(streams);
  //   props.showModal(true);
  //   props.selectVideo(streams);
  // };

  // const onPortalDismiss = () => {
  //   props.closeModal(false);
  //   history.push("/");
  // };

  return (
    <div className="app-flex app-flex-column app-flex-nowrap app-bottom-0 app-left-0 app-right-0 app-top-0 app-absolute">
      <Router history={history}>
        <div className="app-flex app-flex-column app-flex-nowrap app-full-height">
          <Header />
          {props.modal ? <Modal /> : null}

          <Switch>
            <Route exact path="/">
              <div className="app-flex app-flex-nowrap app-relative">
                <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
                  <BodyLeft />
                </div>
                <BodyRight streams={props.streams} />
              </div>
            </Route>
            <Route exact path="/:id" component={Id} />
            <Route exact path="/:id/videos/all">
              <div className="app-flex app-flex-nowrap app-relative app-full-height">
                <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
                  <BodyLeft />
                </div>
                <div>/:id/videos/all</div>
              </div>
            </Route>

            <Route
              exact
              path="/category/games/:id"
              component={CategoryGamesId}
            />

            <Route exact path="/category/all/tags/:id">
              <div className="app-flex app-flex-nowrap app-relative app-full-height">
                <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
                  <BodyLeft />
                </div>
                <div>/category/all/tags/:id</div>
              </div>
            </Route>
            <Route exact path="/streams/new">
              <div className="app__body">
                <StreamsCreate />
              </div>
            </Route>

            <Route exact path="/search">
              <div className="app__body">
                <BodyLeft />
                <Search />
              </div>
            </Route>

            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/streams/edit/:id" component={StreamsEdit} />
            <Route exact path="/streams/delete/:id" component={StreamsDelete} />
            <Route exact path="/streams/:id" component={StreamsShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    modal: state.modal.showModal,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  fetchStreams,
  showModal,
  fetchAuth,
})(App);
