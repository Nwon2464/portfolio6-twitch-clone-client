import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  fetchVideos,
  fetchStreams,
  fetchAuth,
  fetchActiveLiveTwitch,
  fetchActiveLiveGameContents,
} from "./actions";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import BodyRight from "./components/Body/BodyRight";
import BodyLeft from "./components/Body/BodyLeft";
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
import Skeleton from "react-loading-skeleton";
import { showModal } from "./actions";
import SlashId from "./components/MainRoute/SlashId";
import Slash from "./components/MainRoute/Slash";
import SlashCategoryAll from "./components/MainRoute/SlashCategoryAll";
import SlashCategoryGamesId from "./components/MainRoute/SlashCategoryGamesId";
import SlashIdVideosAll from "./components/MainRoute/SlashIdVideosAll";
import NotFound from "./error/NotFound";
import Construction from "./error/Construction";
const App = (props) => {
  //fetching videos from redux
  useEffect(() => {
    props.fetchStreams();
  }, []);
  useEffect(() => {
    props.fetchAuth();
    // props.fetchJWT();
  }, []);

  // FETCH TWITCH LIVE CHANNEL
  useEffect(() => {
    props.fetchActiveLiveTwitch();
  }, []);
  useEffect(() => {
    props.fetchActiveLiveGameContents();
  }, []);
  console.log(props.twitch);
  return (
    <div className="app-flex app-flex-column app-flex-nowrap app-bottom-0 app-left-0 app-right-0 app-top-0 app-absolute">
      <Router history={history}>
        <div className="app-flex app-flex-column app-flex-nowrap app-full-height">
          <Header />
          {props.modal ? <Modal /> : null}

          <Switch>
            <Route exact path="/" component={Slash} />
            <Route exact path="/:id" component={SlashId} />
            <Route
              exact
              path="/category/games/:id"
              component={SlashCategoryGamesId}
            />
            <Route exact path="/:id/videos/all" component={SlashIdVideosAll} />
            <Route exact path="/category/all" component={SlashCategoryAll} />
            <Route exact path="/category/all/tags/:id">
              <div className="app-flex app-flex-nowrap app-relative app-full-height">
                <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
                  <BodyLeft />
                </div>
                <Construction />{" "}
              </div>
            </Route>

            {/* Error Handler */}
            <Route
              path="*"
              render={() => (
                <div className="app-flex app-flex-nowrap app-relative app-full-height app-overflow-hidden">
                  <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
                    <BodyLeft />
                  </div>
                  <Construction />
                </div>
              )}
            />

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
  console.log(state);
  return {
    streams: Object.values(state.streams),
    modal: state.modal.showModal,
    auth: state.auth,
    twitch: state.twitch,
  };
};

export default connect(mapStateToProps, {
  fetchStreams,
  showModal,
  fetchActiveLiveTwitch,
  fetchActiveLiveGameContents,
  fetchAuth,
})(App);
