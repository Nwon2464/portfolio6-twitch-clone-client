import React, { useEffect, useState } from "react";
import BodyLeftRow from "./BodyLeftRow";
import { icons } from "./IconData";
import "./BodyLeft.css";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeIcon from "@material-ui/icons/Home";
import { connect } from "react-redux";
const BodyLeft = (props) => {
  const [liveVideos, setLiveVideos] = useState([]);
  // useEffect(() => {
  //   const fecthLive = async () => {
  //     const { data } = await axios.get(
  //       "https://backend-express-video-app.vercel.app/api/v1/twitch/streams"
  //     );
  //     let dataArray = data;
  //     dataArray.map((game) => {
  //       let newUrl = game.thumbnail_url
  //         .replace("{width}", "440")
  //         .replace("{height}", "248");
  //       game.thumbnail_url = newUrl;
  //     });
  //     setLiveVideos(data);
  //     setLoading(false);
  //   };
  //   fecthLive();
  // }, []);

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

  const renderIcons = props.twitch.activeLiveTwitch.map((e, i) => {
    return (
      <div key={i} className="app-full-width app-recommend">
        <Link className="app-full-width side-nav-card-link app-pd-x-1 app-pd-y-05 app-align-items-center app-flex-nowrap app-flex">
          <div className="app-align-items-center app-flex-shrink-0 app-avatar--size-30">
            <figure className="app-avatar--size-30">
              <img
                style={{ width: 30, height: 30, borderRadius: 5000 }}
                src={e.profile_image_url}
                alt="profileImage"
              />
            </figure>
          </div>
          <div className="app-full-width app-flex app-justify-content-between app-ellipsis app-full-height app-align-items-center">
            <div className="app-mg-l-1 app-full-width app-ellipsis">
              <div className="app-flex app-align-items-center">
                <p
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.2",
                  }}
                  className="app-ellipsis app-flex-grow-1 app-font-size-6"
                >
                  {e.user_name}
                </p>
              </div>
              <div className="app-pd-r-05">
                <p
                  style={{ lineHeight: "1.2" }}
                  className="app-font-size-5 app-c-text-alt app-ellipsis"
                >
                  {e.game_name}
                </p>
              </div>
            </div>
            <div className="app-mg-l-05 app-flex-shrink-0">
              <div className="app-flex app-align-items-center">
                <div className="app-live-channel-status-indicator app-border-radius-rounded app-live-channel-status-indicator--small"></div>
                <div className="app-mg-l-05">
                  <span className="app-font-size-5 app-c-text-alt">
                    {checkViewers(e.viewer_count)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="app-flex app-flex-column">
      {props.twitch.activeLiveTwitch.length === 0 ? null : (
        <>
          <div className="app-mg-1 app-pd-t-05">
            <h5>Recommended Channels</h5>
          </div>
          <div className="app-relative app-align-items-center app-flex app-flex-column app-full-width">
            {renderIcons}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    twitch: state.twitch,
  };
};
export default connect(mapStateToProps)(BodyLeft);
