import React, { useEffect, useState } from "react";
import BodyLeft from "../Body/BodyLeft";
import axios from "axios";
import _ from "lodash";
import NotFound from "../../error/NotFound";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SlashCategoryGamesIdLoading from "./ReuseableUI/SlashCategoryGamesIdLoading";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { checkViewers, checkFollowers } from "../Body/checkViewers";
const CategoryGamesId = (props) => {
  const [category, setCategory] = useState([]);
  const [totalViews, setTotalViews] = useState(0);
  const [topGamesImage, setTopGamesImage] = useState([]);
  const [sumFollowers, setSumFollowers] = useState(0);
  useEffect(() => {
    const fecthLive = async () => {
      //to prevent from fetching using useEffect, otherwise, it shows an error, data is undefined to fetch
      if (!props.location.state) {
        return null;
      }
      const { data } = await axios.get(
        `https://backend-express-video-app.vercel.app/api/v1/twitch/streams/${
          props.location.state.data.game_id || props.location.state.data.id
        }`
      );
     
      let dataArray = data.selectedGame;
      dataArray.map((game) => {
        let newUrl = game.box_art_url
          .replace("{width}", "180")
          .replace("{height}", "240");
        game.box_art_url = newUrl;
      });

      let dataArray2 = data.streams;
      dataArray2.map((game) => {
        let newUrl = game.thumbnail_url
          .replace("{width}", "440")
          .replace("{height}", "248");
        game.thumbnail_url = newUrl;
      });

      setCategory(data.streams);
      setTopGamesImage(data.selectedGame);
      setTotalViews(data.totalCurrentWatching);
      setSumFollowers(data.totalFollowers);
    };
    fecthLive();
  }, []);
  const checkTags = (streams, i) => {
    return (
      <Link
        className="channel__tag__anchor"
        style={{ marginLeft: 2, maxWidth: 90 }}
        to={`/category/all/tags/${streams.tag_ids}`}
      >
        {streams.tag}
      </Link>
    );
  };
  return (
    <div className="app-flex app-flex-nowrap app-relative app-full-height app-overflow-hidden">
      <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
        <BodyLeft />
      </div>
      {props.location.state ? (
        <div className="app-flex app-flex-column app-full-width app-overflow-scroll">
          {!topGamesImage[0] || !category ? (
            <SlashCategoryGamesIdLoading />
          ) : (
            <>
              <div className="app-flex app-relative app-banner-outer">
                {/* /category/games/{props.match.params.id} */}
                <div
                  style={{
                    backgroundImage: `url(${topGamesImage[0].box_art_url
                      .replace("180", "1080")
                      .replace("240", "340")})`,
                  }}
                  className="app-absolute app-banner"
                ></div>
                <div className="app-flex app-full-width app-pd-20">
                  <div className="app-full-width app-flex">
                    <div className="app-mg-r-2 app-flex">
                      <img src={topGamesImage[0].box_art_url} />
                    </div>
                    <div className="app-flex app-flex-column app-justify-content-center">
                      <div className="app-flex">
                        <h1>{topGamesImage[0].name}</h1>
                      </div>
                      <div className="app-flex app-mg-t-1">
                        <div className="app-inline-block">
                          <p className="app-font-size-7">
                            <strong>{checkViewers(totalViews)}</strong>
                          </p>
                        </div>
                        <div className="app-inline-block app-mg-x-1">
                          <p className="app-font-size-7">•</p>
                        </div>
                        <div className="app-inline-block">
                          <p className="app-font-size-7">
                            <strong>{checkFollowers(sumFollowers)}</strong>
                          </p>
                        </div>
                        <div className="app-inline-block app-mg-x-1">
                          <p className="app-font-size-7">•</p>
                        </div>
                        <div className="app-inline-block">
                          <div
                            style={{ marginTop: 0.5 }}
                            className="app-flex app-align-items-center app-full-height"
                          >
                            <Link
                              className="channel__tag__anchor"
                              style={{ marginLeft: 2, maxWidth: 90 }}
                            >
                              MOBA
                            </Link>{" "}
                            <Link
                              className="channel__tag__anchor"
                              style={{ marginLeft: 4, maxWidth: 90 }}
                            >
                              Action
                            </Link>{" "}
                          </div>{" "}
                        </div>
                      </div>
                      {/* <div
                        style={{ maxWidth: "60rem" }}
                        className="app-pd-t-05"
                      >
                        <h3 className="app-font-regular">
                          World of Warcraft is an MMORPG that takes place in
                          Blizzard Entertainment's Warcraft universe{" "}
                        </h3>
                      </div> */}
                      <div className="app-mg-t-1">
                        <div className="app-inline-flex">
                          <button className="app-cursor-pointer app-pd-y-06 app-pd-x-1 app-align-items-center app-justify-content-center app-flex app-core-primary app-border-bottom-left-radius-medium app-border-bottom-right-radius-medium app-border-top-left-radius-medium app-border-top-right-radius-medium">
                            <div className="app-align-items-center app-justify-content-center app-flex">
                              <FavoriteBorderOutlinedIcon
                                style={{ width: 17, height: 17 }}
                                className="app-mg-r-05"
                              />
                              <span className="app-font-size-5 app-font-600">
                                Follow
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-full-height app-full-width">
                <div className="app-pd-l-2 app-pd-r-2 app-mg-b-1">
                  <div className="app-flex app-full-width app-relative app-height-15">
                    <div className="app-font-size-9 app-flex app-flex-grow-1 app-justify-content-start app-full-height app-align-items-center">
                      {/* <div className="app-full-height app-align-items-center app-flex app-font-weight">
                        <Link
                          className="app-block app-full-height app-full-width app-pd-r-1"
                          to="/"
                        >
                          Live Channels
                        </Link>
                      </div>
                     */}
                      <div className="app-flex app-flex-column app-full-height">
                        <div className="app-align-self-center app-flex app-full-height app-justify-content-center app-align-items-center">
                          <Link to="/">
                            <h3 className="app-flex app-flex-column app-font-size-9 app-cursor-pointer">
                              Live Channels
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
                </div>
                <div>
                  <div className="app-flex app-justify-content-center app-align-items-center app-pd-l-2 app-pd-r-2">
                    <div className="card__display__flex__wrap">
                      {category.map((e, i) => {
                        return (
                          <div key={i} className="app__tower__300 app-pd-r-02">
                            <div className="app__card__height">
                              <div className="app__card__padding_bottom app__card__height">
                                <article className="card__display__flex__direction">
                                  <div className="app__width app__order__2 app__margin__top">
                                    <div className="app__flex__nowrap app__flex">
                                      <div className="app__min__width__0 app__order__2 app__flex__shrink__1 app__flex__grow__1 app__width">
                                        <div className="app__margin__bottom">
                                          <div className="channel__font_1">
                                            <h3 className="app__ellipsis app__font__weight">
                                              <Link
                                                to={{
                                                  pathname: `/${e.user_name}`,
                                                  state: {
                                                    data: e,
                                                    game_name:
                                                      topGamesImage[0].name,
                                                  },
                                                }}
                                                className="app__font__size app__cursor"
                                              >
                                                {e.title}
                                              </Link>
                                            </h3>
                                          </div>
                                        </div>
                                        <div className="channel__user">
                                          <div>
                                            <h4 className="app__ellipsis app__font__size__0_8 app__color__grey app__cursor">
                                              <Link
                                                to={{
                                                  pathname: `/${e.user_name}/videos/all`,
                                                  state: {
                                                    data: e,
                                                    game_name:
                                                      topGamesImage[0].name,
                                                  },
                                                }}
                                                className="app__color__grey app__cursor app__font__size__0_8"
                                              >
                                                {e.user_name}
                                              </Link>
                                            </h4>
                                          </div>
                                        </div>
                                        <div className="channel__tag">
                                          <div className="channel__tag__1">
                                            <div className="channel__tag__2">
                                              <div className="channel__tag__3">
                                                {checkTags(e)}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="channel__down">
                                        <MoreVertIcon />
                                      </div>
                                    </div>
                                  </div>

                                  <Link
                                    to={{
                                      pathname: `/${e.user_name}`,
                                      // state: { data: e },
                                      state: {
                                        data: e,
                                        game_name: topGamesImage[0].name,
                                      },
                                    }}
                                    className="app__order__1"
                                  >
                                    <div className="app__relative app__cursor">
                                      <div>
                                        <img
                                          className="channel__thumbnail"
                                          src={e.thumbnail_url}
                                        />
                                      </div>
                                      <div className="app__absolute app__top__0 app__left__0 app__card__height app__width">
                                        <div className="app__absolute app__top__0 app__left__0 app__margin">
                                          <p className="app__uppercase app__live__indicator app__font__weight app__border__radius app__padding">
                                            {e.type}
                                          </p>
                                        </div>
                                        <div className="app__absolute app__bottom__0 app__left__0 app__margin">
                                          <p className="app__view__indicator app__padding app__margin__bottom app__border__radius">
                                            {checkViewers(e.viewer_count)}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </article>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default CategoryGamesId;
{
  /* <div>
{!topGamesImage[0] || !category ? (
  <div>Loading</div>
) : (
  <>
    /category/games/{props.match.params.id}
    <img src={topGamesImage[0].box_art_url} />
  </>
)}
</div>
) */
}
