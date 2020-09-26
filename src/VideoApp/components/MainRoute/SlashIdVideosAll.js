import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reuseable from "./ReuseableUI/Reuseable";
import BodyLeft from "../Body/BodyLeft";
import axios from "axios";
import Reuseable2 from "./ReuseableUI/Reuseable2";
import SlashVideoAllLoading from "./ReuseableUI/SlashVideoAllLoading";
const SlashIdVideosAll = (props) => {
  console.log(props);
  const [streams, setStreams] = useState([]);
  const [totalViews, setTotalViews] = useState(0);
  useEffect(() => {
    const fecthLive = async () => {
      //to prevent from fetching using useEffect, otherwise, it shows an error, data is undefined to fetch
      if (!props.location.state) {
        return null;
      }
      const { data } = await axios.get(
        `/api/v1/twitch/streams/user/${props.location.state.data.user_id}`
      );
      console.log(data);

      let dataArray = data.streams;
      dataArray.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("%{width}", "320")
          .replace("%{height}", "180");
        game.thumbnail_url = newUrl;
      });
      setStreams(data.streams);
      //       let dataArray2 = data.streams;
      //       dataArray2.map((game) => {
      //         let newUrl = game.thumbnail_url
      //           .replace("{width}", "440")
      //           .replace("{height}", "248");
      //         game.thumbnail_url = newUrl;
      //       });

      //       setCategory(data.streams);
      //       setTopGamesImage(data.selectedGame);
      //       setTotalViews(data.totalViews);
    };
    fecthLive();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `/api/v1/twitch/streams/${props.location.state.data.game_id}`
      );
      setTotalViews(data.totalViews);
    };
    fetch();
  }, []);
  const checkViewers = (views) => {
    if (views <= 999) {
      return <>{`${views} Viewers`}</>;
    } else if (views < 999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000).toFixed(1)
        }K Viewers`}</>
      );
    } else if (views <= 9999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000000).toFixed(1)
        }M Viewers`}</>
      );
    }
  };
  console.log(streams);

  return (
    <div className="app-flex app-flex-nowrap app-relative app-full-height app-overflow-hidden">
      <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
        <BodyLeft />
      </div>
      <div className="app-relative app-flex app-flex-column app-full-height app-full-width app-overflow-scroll">
        {" "}
        <div className="app-full-height">
          <div className="app-flex app-flex-column app-full-height app-full-width">
            <div
              style={{
                minHeight: "28.5rem",
                maxHeight: "100%",
                width: "100%",
              }}
            >
              {" "}
              <div className="app-full-height app-full-width app-relative">
                <div
                  className="app-absolute"
                  style={{
                    zIndex: 2,
                    // background: "red",
                    width: "26rem",
                    minHeight: "20rem",
                    height: "80%",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      marginLeft: "2rem",
                      height: "85%",
                      marginTop: "5rem",
                    }}
                  >
                    <div
                      className="app-flex app-flex-column app-full-height app-justify-content-center"
                      style={{ marginTop: "4rem", padding: "2rem" }}
                    >
                      <div className="app-inline-block">
                        <div
                          style={{ padding: "0.2rem 0.5rem" }}
                          className="app-inline-block app-uppercase app-live-indicator app-font-weight app-border-radius"
                        >
                          {props.location.state.data.type} NOW
                        </div>
                      </div>
                      <div className="app-inline-block">
                        <h2>
                          {props.location.state.data.user_name} is streaming{" "}
                          {props.location.state.data.game_name}
                        </h2>
                      </div>
                      <div
                        className="app-inline-block"
                        style={{ marginTop: "0.5rem" }}
                      >
                        <Link
                          className="app-color-main app-font-size-5"
                          to={{
                            pathname: `/${props.match.params.id}`,
                            state: { data: props.location.state.data },
                          }}
                        >
                          Watch now with{" "}
                          {checkViewers(props.location.state.data.viewer_count)}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="app-absolute"
              style={{
                marginTop: 400,
                minHeight: 460,
                width: "100%",
                zIndex: 2,
              }}
            >
              {totalViews === 0 ? (
                <SlashVideoAllLoading />
              ) : (
                <>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      width: "85%",
                      // border: "5px inset #00b5ad",
                    }}
                    className="app-absolute"
                  >
                    <div
                      className="app-mg-x-2"
                      style={{
                        height: "30%",
                        paddingTop: "1.5rem",
                        position: "sticky",
                        zIndex: 2,
                      }}
                    >
                      <div className="app-flex">
                        <Reuseable {...props} totalViews={totalViews} />
                      </div>
                    </div>
                    <div style={{ width: "100%", background: "#fff" }}>
                      <Reuseable2
                        streams={streams}
                        {...props}
                        user={props.location.state.data}
                      />
                    </div>
                    <div></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>{" "}
        <div
          className="app-absolute app-top-0 app-left-0"
          style={{
            maxHeight: 470,
            width: "100%",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <div className="app-flex">
            <img
              style={{ height: 470, width: "100%", objectFit: "cover" }}
              src={props.location.state.data.thumbnail_url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlashIdVideosAll;
