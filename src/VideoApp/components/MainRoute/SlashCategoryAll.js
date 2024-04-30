import React, { useEffect, useState } from "react";
import BodyLeft from "../Body/BodyLeft";
import axios from "axios";
import { Link } from "react-router-dom";
import SlashCategoryAllLoading from "./ReuseableUI/SlashCategoryAllLoading";
import { connect } from "react-redux";
import { checkViewers } from "../Body/checkViewers";

const SlashCategoryAll = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchTopGames = async () => {
      const { data } = await axios.get(
        // "https://backend-express-video-app.vercel.app/api/v1/twitch/categories/all"
        "https://server-t.vercel.app/api/v1/twitch/categories/all"
      );
      let dataArray = data.topGames;
      
      dataArray.map((game) => {
        let newUrl = game.box_art_url
          .replace("{width}", "285")
          .replace("{height}", "385");
        game.box_art_url = newUrl;
      });
      setCategories(data);
    };
    fetchTopGames();
  }, []);
    console.log(categories);
  return (
    <>
      <div className="app-flex app-flex-nowrap app-relative app-full-height app-overflow-hidden">
        <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
          <BodyLeft />
        </div>
        <div className="app-flex app-flex-column app-full-width app-overflow-scroll">
          <div className="app-full-width app-relative">
            <div className="app-page-wrapper app-flex app-flex-column">
              <div className="app-mg-l-13 app-mg-t-1">
                <h1
                  style={{
                    marginLeft: 2,
                  }}
                  className="app-font-size-40"
                >
                  Browse
                </h1>
              </div>
              <div className="app-pd-t-1 app-pd-x-17">
                <div className="app-flex app-full-width app-relative app-height-15">
                  <div className="app-flex app-flex-column app-full-height">
                    <div className="app-align-self-center app-flex app-full-height app-justify-content-center app-align-items-center">
                      <Link to="/">
                        <h3 className="app-flex app-flex-column app-font-size-9 app-cursor-pointer">
                          Categories
                        </h3>
                      </Link>
                    </div>
                    <div
                      style={{ marginTop: 13 }}
                      className="navigation-link-indicator-container"
                    >
                      <div className="navigation-link-active-indicator"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-pd-t-1 app-pd-x-14">
                <div className="app-flex app-flex-wrap app-min-width">
                  {!categories.topGames ? (
                    <SlashCategoryAllLoading />
                  ) : (
                    categories.topGames.map((e, i) => {
                      return (
                        <div
                          key={i}
                          style={{ width: "15rem" }}
                          className="app-flex app-max-width-5 app-flex-gutter-03 app-flex-grow-1"
                        >
                          <div className="app-relative app-mg-b-1">
                            <div>
                              <div className="app-pd-b-1 app-flex app-flex-column">
                                <div className="app-flex-order-1 app-relative">
                                  <div className="app-flex app-flex-column app-flex-nowrap">
                                    <Link
                                      to={{
                                        pathname: `/category/games/${e.name
                                          .split(" ")
                                          .join("")}`,
                                        state: { data: e },
                                        // im not sure what this statement would cause in the future
                                      }}
                                    >
                                      <img
                                        src={
                                          e.box_art_url
                                          // .replace("188", "285")
                                          // .replace("250", "385")
                                        }
                                      />
                                    </Link>
                                    <div className="app-relative">
                                      <Link
                                        to={{
                                          pathname: `/category/games/${e.name
                                            .split(" ")
                                            .join("")}`,
                                          state: { data: e },
                                          // im not sure what this statement would cause in the future
                                        }}
                                      >
                                        <h3 className="app-font-size-7 app-cursor-pointer">
                                          {e.name}
                                        </h3>
                                      </Link>
                                      <p className="app-ellipsis">
                                        <Link
                                          to={{
                                            pathname: `/category/games/${e.name
                                              .split(" ")
                                              .join("")}`,
                                            state: {
                                              data: e,
                                            },
                                            // im not sure what this statement would cause in the future
                                          }}
                                        >
                                          {checkViewers(e.gameViewers)}{" "}
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="app-flex-order-2 app-relative">
                                tags
                              </div> */}
                              </div>
                            </div>{" "}
                          </div>{" "}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    twitch: state.twitch.activeCategoryGames,
  };
};
export default connect(mapStateToProps)(SlashCategoryAll);
