import React, { useState, useEffect } from "react";
import "./BodyRight.css";
import axios from "axios";
import _ from "lodash";
import VideoCard from "./BodyRightUI/VideoCard/VideoCard";
import ShowClickRender from "./ShowClickRender";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "./BodyRightUI/Carousel/Carousel";
import GameCard from "./BodyRightUI/GameCard/GameCard";
// import CarouselMiddle from "./Carousel/CarouselMiddle";
// import CarouselMiddleCategory from "./Carousel/CarouselMiddleFirst/CarouselMiddleCategory";
import Loading from "./BodyRightUI/VideoCard/Loading";
import LoadingGameCard from "./BodyRightUI/GameCard/LoadingGameCard";
const Body = (props) => {
  const [liveVideos, setLiveVideos] = useState([]);
  const [visible, setVisible] = useState(4);

  const [topGames, setTopGames] = useState([]);
  const [mineCraft, setMineCraft] = useState([]);
  const [justChat, setJustChat] = useState([]);
  const [fallGuys, setFallGuys] = useState([]);
  const [fortNite, setFortNite] = useState([]);

  // ("/twitch/minecraft"
  // "/twitch/fortnite"
  // "/twitch/chat"
  // /twitch/fallguys
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fecthLive = async () => {
      const { data } = await axios.get(
        "https://backend-express-video-app.vercel.app/api/v1/twitch/minecraft"
      );
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "440")
          .replace("{height}", "248");
        game.thumbnail_url = newUrl;
      });
      setMineCraft(data);
    };
    fecthLive();
  }, []);
  useEffect(() => {
    const fecthLive = async () => {
      const { data } = await axios.get(
        "https://backend-express-video-app.vercel.app/api/v1/twitch/fortnite"
      );
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "440")
          .replace("{height}", "248");
        game.thumbnail_url = newUrl;
      });
      setFortNite(data);
    };
    fecthLive();
  }, []);

  useEffect(() => {
    const fecthLive = async () => {
      const { data } = await axios.get(
        "https://backend-express-video-app.vercel.app/api/v1/twitch/chat"
      );
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "440")
          .replace("{height}", "248");
        game.thumbnail_url = newUrl;
      });
      setJustChat(data);
    };
    fecthLive();
  }, []);

  useEffect(() => {
    const fecthLive = async () => {
      const { data } = await axios.get(
        "https://backend-express-video-app.vercel.app/api/v1/twitch/fallguys"
      );
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "440")
          .replace("{height}", "248");
        game.thumbnail_url = newUrl;
      });
      setFallGuys(data);
    };
    fecthLive();
  }, []);

  useEffect(() => {
    const fetchTopGames = async () => {
      const { data } = await axios.get(
        "https://backend-express-video-app.vercel.app/api/v1/twitch/topgames"
      );
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.box_art_url
          .replace("{width}", "180")
          .replace("{height}", "240");
        game.box_art_url = newUrl;
      });
      setTopGames(data);
    };
    fetchTopGames();
  }, []);

  useEffect(() => {
    const fecthLive = async () => {
      const { data } = await axios.get(
        "https://backend-express-video-app.vercel.app/api/v1/twitch/streams"
      );
      let dataArray = data;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "440")
          .replace("{height}", "248");
        game.thumbnail_url = newUrl;
      });
      setLiveVideos(data);
      setLoading(false);
    };
    fecthLive();
  }, []);

  const showClick = (e) => {
    e.preventDefault();
    setVisible(visible + 4);
  };
  const checkTags = (streams, i) => {
    console.log(streams)
    if (streams.localization_names.length !== 1) {
      let a = _.mapKeys(streams.localization_names, "en-us");
      let b = Object.keys(a);
      // console.log(a);
      return (
        <>
          {b.map((e, i) => {
            return (
              <Link
                className="channel__tag__anchor"
                key={i}
                style={{ marginLeft: 2, maxWidth: 90 }}
                to={`/category/all/tags/${streams.tag_ids[i]}`}
              >
                {e}
              </Link>
            );
          })}
        </>
      );
    }
    return (
      <Link
        className="channel__tag__anchor"
        style={{ marginLeft: 2, maxWidth: 90 }}
        to={`/category/all/tags/${streams.tag_ids}`}
      >
        {streams.localization_names[0]["en-us"]}
      </Link>
    );
  };

  const checkViewers = (views) => {
    if (views <= 999) {
      return <>{`${views} viewers`}</>;
    } else if (views < 999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000).toFixed(1)
        }K viewers`}</>
      );
    } else if (views <= 9999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000000).toFixed(1)
        }M viewers`}</>
      );
    }
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

  return (
    <div className="body__right">
      {/* <h2>Stream Lists</h2> */}

      <Carousel />
      {loading ? (
        <Loading />
      ) : (
        <ShowClickRender
          render={(visible, showClick) => (
            <VideoCard
              categories="Live Channel"
              videos={liveVideos}
              visible={visible}
              checkTags={checkTags}
              checkViewers={checkViewers}
              showClick={showClick}
            />
          )}
        />
      )}
      {loading ? (
        <LoadingGameCard />
      ) : (
        <GameCard
          topGames={topGames}
          checkViewers={checkViewers}
          categories="Categories"
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <ShowClickRender
          render={(visible, showClick) => (
            <VideoCard
              recommend="recommend"
              categories="Just Chat"
              videos={justChat}
              visible={visible}
              checkTags={checkTags}
              checkViewers={checkViewers}
              showClick={showClick}
            />
          )}
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <ShowClickRender
          render={(visible, showClick) => (
            <VideoCard
              recommend="recommend"
              categories="Fortnite"
              showClick={showClick}
              checkViewers={checkViewers}
              videos={fortNite}
              visible={visible}
              checkTags={checkTags}
            />
          )}
        />
      )}

      {loading ? (
        <Loading />
      ) : (
        <ShowClickRender
          render={(visible, showClick) => (
            <VideoCard
              recommend="recommend"
              categories="Minecraft"
              showClick={showClick}
              checkViewers={checkViewers}
              videos={mineCraft}
              visible={visible}
              checkTags={checkTags}
            />
          )}
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <ShowClickRender
          render={(visible, showClick) => (
            <VideoCard
              recommend="recommend"
              categories="Fall Guys"
              showClick={showClick}
              checkViewers={checkViewers}
              videos={fallGuys}
              visible={visible}
              checkTags={checkTags}
            />
          )}
        />
      )}
      {/* {renderCreate()} */}
      {/* <VideoList onVideoSelect={props.onVideoSelect} streams={props.streams} /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Body);
