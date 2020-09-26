import React, { useEffect, useState } from "react";
import BodyLeft from "../Body/BodyLeft";
import axios from "axios";
import { Link } from "react-router-dom";
import SlashCategoryAllLoading from "./ReuseableUI/SlashCategoryAllLoading";
const SlashCategoryAll = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchTopGames = async () => {
  //     const { data } = await axios.get("/api/v1/twitch/categories/all");
  //     let dataArray = data.categories;
  //     dataArray.map((game) => {
  //       let newUrl = game.box_art_url
  //         .replace("{width}", "285")
  //         .replace("{height}", "385");
  //       game.box_art_url = newUrl;
  //     });
  //     setCategories(data);
  //     setLoading(false);
  //   };
  //   fetchTopGames();
  // }, []);

  useEffect(() => {
    const fetchTopGames = async () => {
      const { data } = await axios.get("/api/v1/twitch/categories/all");
      let dataArray = data.topGames;
      // console.log(data);
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

  // console.log(categories.topGames);
  return (
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
                <ul className="app-font-size-9 app-flex app-flex-grow-1 app-justify-content-start app-full-height app-align-items-center">
                  <li className="app-full-height app-align-items-center app-flex app-font-weight">
                    <Link
                      className="app-block app-full-height app-full-width app-pd-r-1"
                      to="/"
                    >
                      Categories
                    </Link>
                  </li>
                  <li className="app-full-height app-align-items-center app-flex app-font-weight">
                    <Link
                      className="app-block app-full-height app-full-width app-pd-r-1"
                      to="/"
                    >
                      Live Channels
                    </Link>
                  </li>
                </ul>
                <div></div>
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
                                    <img src={e.box_art_url} />
                                  </Link>
                                  <div className="app-relative">
                                    <h3 className="app-font-size-7 app-cursor-pointer">
                                      {e.name}
                                    </h3>
                                    <p className="app-ellipsis">
                                      <Link>235viewers</Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="app-flex-order-2 app-relative">
                                tags
                              </div>
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
  );
};

export default SlashCategoryAll;
