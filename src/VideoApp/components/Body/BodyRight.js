import React, { useState } from "react";
import "./BodyRight.css";

import VideoCard from "./BodyRightUI/VideoCard/VideoCard";
import ShowClickRender from "./ShowClickRender";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "./BodyRightUI/Carousel/Carousel";
import GameCard from "./BodyRightUI/GameCard/GameCard";
import { checkViewers, checkTags } from "./checkViewers";
import Loading from "./BodyRightUI/VideoCard/Loading";
import LoadingGameCard from "./BodyRightUI/GameCard/LoadingGameCard";
// import LazyLoadGameCard from "./BodyRightUI/GameCard/LazyLoadGameCard";
const BodyRight = (props) => {
  const [visible, setVisible] = useState(4);

  const showClick = (e) => {
    e.preventDefault();
    setVisible(visible + 4);
  };
  const renderCreate = () => {
    // if (props.auth) {
    return (
      <div className="render__create">
        <Link to="/streams/new">Create New Stream</Link>
      </div>
    );
    // }
  };
  // console.log(props.twitch.activeCategoryGames);

  return (
    <div className="app-overflow-scroll app-body-right-background app-z-index-default app-flex app-flex-column app-flex-grow-1 app-full-height app-full-width">
      <div className="app-full-width app-relative">
        <Carousel />

        {props.twitch.activeLiveTwitch.length === 0 ? (
          <Loading />
        ) : (
          <ShowClickRender
            render={(visible, showClick) => (
              <VideoCard
                categories="Live Channel"
                videos={props.twitch.activeLiveTwitch}
                visible={visible}
                checkTags={checkTags}
                checkViewers={checkViewers}
                showClick={showClick}
              />
            )}
          />
        )}
        {props.twitch.activeCategoryGames.length === 0 ? (
          <LoadingGameCard />
        ) : (
          <GameCard
            topGames={props.twitch.activeCategoryGames}
            checkViewers={checkViewers}
            categories="Categories"
          />
        //   <LazyLoadGameCard
        //   topGames={props.twitch.activeCategoryGames}
        //   checkViewers={checkViewers}
        //   categories="Categories"
        // />
        )}
        {props.twitch.activeJustChat.length === 0 ? (
          <Loading />
        ) : (
          <ShowClickRender
            render={(visible, showClick) => (
              <VideoCard
                recommend="recommend"
                categories="Just Chatting"
                videos={props.twitch.activeJustChat}
                visible={visible}
                checkTags={checkTags}
                checkViewers={checkViewers}
                showClick={showClick}
              />
            )}
          />
        )}
        {props.twitch.activeFortNite.length === 0 ? (
          <Loading />
        ) : (
          <ShowClickRender
            render={(visible, showClick) => (
              <VideoCard
                recommend="recommend"
                categories="Fortnite"
                showClick={showClick}
                checkViewers={checkViewers}
                videos={props.twitch.activeFortNite}
                visible={visible}
                checkTags={checkTags}
              />
            )}
          />
        )}

        {props.twitch.activeMineCraft.length === 0 ? (
          <Loading />
        ) : (
          <ShowClickRender
            render={(visible, showClick) => (
              <VideoCard
                recommend="recommend"
                categories="Minecraft"
                showClick={showClick}
                checkViewers={checkViewers}
                videos={props.twitch.activeMineCraft}
                visible={visible}
                checkTags={checkTags}
              />
            )}
          />
        )}
        {props.twitch.activeFallGuy.length === 0 ? (
          <Loading />
        ) : (
          <ShowClickRender
            render={(visible, showClick) => (
              <VideoCard
                recommend="recommend"
                categories="Fall Guys"
                showClick={showClick}
                checkViewers={checkViewers}
                videos={props.twitch.activeFallGuy}
                visible={visible}
                checkTags={checkTags}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    twitch: state.twitch,
  };
};
export default connect(mapStateToProps)(BodyRight);
